// lib/auth.js

import { getToken, validateToken, refreshToken } from 'src/services/auth';

export const authenticate = async () => {
  try {
    // Get the current token
    const currentToken = await getToken();

    const isTokenValid = await validateToken(currentToken);

    if (!isTokenValid) {
      // If the token is not valid, attempt to refresh it
      try {
        const refreshed = await refreshToken(currentToken);

        if (!refreshed) {
          console.error('Error refreshing token or no token available.');
          return false;
        }
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError.message);
        return false;
      }

      // After refreshing the token, you may want to revalidate it
      const isRefreshedTokenValid = await validateToken(currentToken);

      if (!isRefreshedTokenValid) {
        console.error('Refreshed token is not valid');
        return false;
      }
    }

    return true;
  } catch (error) {
    console.error('Authentication error:', error.message);
    return false;
  }
};
