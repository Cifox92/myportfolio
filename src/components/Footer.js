import React from 'react'
import styled from '@emotion/styled'

const FooterStyled = styled.div`
    background-color: var(--orange);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    @media(max-width: 767px) {
        flex-direction: column;
    }
`

const TextFooter = styled.p`
    color: var(--white);
    font-size: 1.2rem;
    text-align: center;
    margin: 0;
`

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <FooterStyled>
            <TextFooter>Made with ❤ by an Ironhacker.</TextFooter>
            <TextFooter>© {year} David Roel Gómez. All rights reserved.</TextFooter>
        </FooterStyled>
    )
}
 
export default Footer