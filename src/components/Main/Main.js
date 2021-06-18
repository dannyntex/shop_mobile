import React from 'react'
import Header from '../Header'

const Main = ({ children }) => {
    return (
        <main>
            <Header />
            <div>{children}</div>
        </main>
    )
}
export default Main
