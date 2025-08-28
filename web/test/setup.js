if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = function matchMedia() {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }
  }
}

if (typeof global !== 'undefined' && !global.matchMedia) {
  global.matchMedia = window.matchMedia
}

// Provide a generic SharedDataContext mock so components depending on
// `jsonData` can render during tests without throwing. The mock returns a
// recursive proxy that safely handles arbitrary property access and common
// array methods.

jest.mock('src/SharedDataProvider/SharedDataContext', () => {
  let mockProxy = {}
  mockProxy = new Proxy(mockProxy, {
    get(target, prop) {
      if (
        prop === 'map' ||
        prop === 'filter' ||
        prop === 'forEach' ||
        prop === 'slice' ||
        prop === 'flat' ||
        prop === 'flatMap'
      ) {
        return () => []
      }
      if (prop === 'find') {
        return () => mockProxy
      }
      if (prop === Symbol.toPrimitive) {
        return () => ''
      }
      return mockProxy
    },
  })

  return {
    __esModule: true,
    SharedDataProvider: ({ children }) => children,
    useSharedData: () => ({ jsonData: mockProxy, sharedData: {}, setSharedData: () => {} }),
  }
})

