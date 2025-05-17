import MyContext from "./Context"
import React, { useState } from 'react'
function Provider({ children }) {
    const [counter, setCounter] = useState(10)

    return (
        <>

            <MyContext.Provider value={{ counter, setCounter }}>
                {children}
            </MyContext.Provider>

        </>
    )
}

export default 

Provider