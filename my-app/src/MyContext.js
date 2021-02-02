import React, {useState, useContext} from 'react';

const MyContext = React.createContext();

export const useMyContext = () => useContext(MyContext);

export const ContextProvider = ({ children }) => {

    const [count,setCount] = useState(1);
    const [smallCount, setSmallCount] = useState(1);

    const minus = () => {
        if(count > 0) setCount(count - 1)
    };
    const plus = () => setCount(count + 1);
    const countClick = () => {
        setSmallCount(prev => prev + count)
        setCount(1)
    };

    return (
        <MyContext.Provider value={{
            count,
            smallCount,
            minus,
            plus,
            countClick
        }}>
            { children }
        </MyContext.Provider>
    )
}