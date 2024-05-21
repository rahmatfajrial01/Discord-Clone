"use client"
import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>({})

export function AppWrapper({ children }: {
    children: React.ReactNode
}) {
    let [state, setState] = useState('sfda')

    // localStorage.setItem("user", JSON.stringify(state))

    // const getToken = () => {
    //     let getTokenFromLocalStorage = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user") || '') : null
    //     return getTokenFromLocalStorage
    // }

    // setState(getToken())


    return (
        <AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}