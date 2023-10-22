import React from 'react'
import RouteRS from '../router/route'
import Footer from './footer'
import Header from './header'

function Layout() {
    return (
        <div>

            <div>
                <Header />
            </div>
            <div>
                <RouteRS />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Layout