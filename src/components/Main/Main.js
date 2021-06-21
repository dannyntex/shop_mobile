import React from 'react'
import Header from '../Header'
import './Main.css'

const Main = ({ children }) => {
    return (
        <main className="containerMain">
            <Header />
            {children}
        </main>
    )
}
export default Main
