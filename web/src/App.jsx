import React, { useEffect, useState } from 'react';
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import { SharedDataProvider } from 'src/SharedDataProvider/SharedDataContext';


// import './scaffold.css'
// import './index.css'
import './main.scss';
// import 'dotenv/config';

const App = () => {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) that takes 3 seconds
    const fetchData = async () => {

      try {
        // Fetch data from the public/db.json file
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setJsonData(data);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Dependency array is empty, so it runs only once on mount
  // Render nothing until jsonData is available
  if (jsonData === null) {
    return null;
  }
  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%AppTitle | %PageTitle ">
        <RedwoodApolloProvider>
          <SharedDataProvider jsonData={jsonData}>
            <Routes />
          </SharedDataProvider>
        </RedwoodApolloProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  );
};

export default App;
