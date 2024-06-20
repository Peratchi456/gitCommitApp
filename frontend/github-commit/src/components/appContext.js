// AppContext.js
import React, { createContext, useState } from 'react';

// Create a new context
const AppContext = createContext();

// Create a context provider component
const AppProvider = ({ children }) => {
      const [commitDetails, setCommitDetails] = useState(null);

    return (
        <AppContext.Provider value={{commitDetails,setCommitDetails}}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
