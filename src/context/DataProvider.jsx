import { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [account, setAccount] = useState(null);

    return (
        <DataContext.Provider value={{ account, setAccount }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;
