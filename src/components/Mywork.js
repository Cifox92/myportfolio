import React from 'react'
import styled from '@emotion/styled'

const ContainerWork = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-top: 50px;
    height: 90vh;
    align-items: center;

    @media(max-width: 1024px) {
        flex-direction: column;
        height: auto;
    }
`

const Hero = styled.div`
    margin: 0 0 0 4rem;
    width: 100%;

    h2 {
        color: var(--orange);
    }
    
    h1 {
        font-size: 240px;
    }

    @media(max-width: 1024px) {
        margin: 0;

        h1 {
            font-size: 90px;
        }
    }
`

const Description = styled.div`
    margin: 0 4rem;

    p {
        font-size: 2rem;
        line-height: 4rem;
        text-align: justify;
    }

    @media(max-width: 1024px) {
        margin: 1.5rem;
    }
`

const Mywork = () => {
    return (
        <ContainerWork id='mywork'>
            <Hero>
                <h2>Wanna see</h2>
                <h1>MY WORK?</h1>
            </Hero>

            <Description>
                <p>Passionate about new tech & computing. I started my adventure in the Tech world studying the FullStack Web Development Bootcamp in Ironhack, which allowed me to continue this travel with the BMIND company, working as an implementations specialist of Analytics Engineering & Digital Marketing, being part of different proyects with clients like Mahou San Miguel, OrangeBank, Cosentino, Santander Bank & Barceló Hotel Group. I search to apply my knowledge & passion to every project & phase of my life, with natural curiosity & sense of teamwork.</p>
            </Description>
        </ContainerWork>
    )
}
 
export default Mywork