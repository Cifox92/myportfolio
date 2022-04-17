import React from 'react'
import Header from './Header'
import { Global, css } from '@emotion/react'

const Layout = props => {
    return (
        <>
            <Global 
                styles = {css`
                    :root {
                        --orange: #ff7505;
                        --black: #000;
                        --grey: #7c8587;
                        --blue: #00CAFF;
                    }
                    body {
                        font-size: 3rem;
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 400;
                    }
                    h1 {
                        font-family: 'Oswald', sans-serif;
                        color: var(--black);
                        margin: 0;
                        padding: 0;
                    }
                    h2 {
                        font-family: 'Ubuntu', sans-serif;
                        font-weight: 700;
                        letter-spacing: .5rem;
                        color: var(--orange);
                        margin: 0;
                        padding: 0;
                    }
                    h3 {
                        font-family: 'Montserrat', sans-serif;
                        font-weight: bold;
                    }
                    main {
                        display: flex;
                        flex-direction: column;
                    }
                `}
            />
            <Header />

            <main>
                {props.children}
            </main>
        </>
    )
}
 
export default Layout