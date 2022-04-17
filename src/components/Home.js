import React from 'react'
import styled from '@emotion/styled'
import fotoDavid from '../images/foto-david.png'

const ContainerHome = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-top: 98px;
    height: 92vh;
    align-items: center;
    background-image: url(${fotoDavid});
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: right;
    background-opacity: .9;

    @media(max-width: 767px) {
        align-items: start;
    }

    @media(max-width: 1024px) {
        background-size: cover;
        background-position: left;
    }
`

const Hero = styled.div`
    margin: 0 5rem;

    h2 {
        color: var(--orange);
    }
    
    h1 {
        font-size: 150px;

        &:nth-of-type(1) {
            font-size: 200px;
        }
    }

    @media(max-width: 1024px) {
        margin: 1rem 0;

        h1 {
            font-size: 100px;

            &:nth-of-type(1) {
                font-size: 130px;
            }
        }
    }
`

const Home = () => {
    return (
        <ContainerHome id='home'>
            <Hero>
                <h2>Hello, I am</h2>
                <h1>DAVID</h1>
                <h1>ROEL GÓMEZ</h1>
            </Hero>
        </ContainerHome>
    )
}
 
export default Home