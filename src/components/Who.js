import React from 'react'
import styled from '@emotion/styled'

const ContainerWho = styled.div`
    display: flex;
    flex-direction: row;
    height: 90vh;
    margin-top: 50px;
    align-items: center;

    @media(max-width: 1024px) {
        flex-direction: column;
        height: auto;
    }
`

const Hero = styled.div`
    margin: 0 0 0 4rem;
    width: 50%;

    h2 {
        color: var(--orange);
    }

    h1 {
        font-size: 80px;

        &:nth-of-type(1) {
            font-size: 130px;
        }
    }

    @media(max-width: 1024px) {
        margin: 0;
        width: 100%;

        h1 {
            font-size: 60px;

            &:nth-of-type(1) {
                font-size: 80px;
            }
        }
    }
`

const Description = styled.div`
    margin: 0 4rem;

    p {
        font-size: 1.5rem;
        line-height: 3rem;
        text-align: justify;
    }

    @media(max-width: 1024px) {
        margin: 1.5rem;

        p {
            font-size: 1.2rem;
            line-height: 2.5rem;
        }
    }
`

const SkillsSection = styled.div`
    line-height: 2rem;
    
`

const Skill = styled.div`
    display: inline-block;
    padding: 5px 15px;
    margin: 5px;
    border-radius: 5px;
    background-color: var(--orange);
    color: white;
    transition: transform .3s;
    font-size: 1.2rem;

    &:hover {
        transform: scale(1.5);
        background-color: var(--blue);
    }

    @media(max-width: 1024px) {
        font-size: 1.5rem;
    }
`

const Who = () => {
    return (
        <ContainerWho id='whoami'>
            <Hero>
                <h2>Yes, I am a</h2>
                <h1>FULLSTACK</h1>
                <h1>WEB DEVELOPER</h1>
            </Hero>

            <Description>
                <p>Passionate about new tech & computing. I started my adventure in the Tech world studying a FullStack Web Development Bootcamp. I search to apply my knowledge & passion to every project & phase of my life, with natural curiosity & sense of teamwork.</p>

                <SkillsSection>
                    <Skill>JavaScript</Skill>
                    <Skill>HTML5</Skill>
                    <Skill>CSS3</Skill>
                    <Skill>Bootstrap</Skill>
                    <Skill>MySQL</Skill>
                    <Skill>Canvas</Skill>
                    <Skill>DOM</Skill>
                    <Skill>Git</Skill>
                    <Skill>GitHub</Skill>
                    <Skill>MongoDB</Skill>
                    <Skill>React.js</Skill>
                    <Skill>Redux</Skill>
                    <Skill>Next.js</Skill>
                    <Skill>Firebase</Skill>
                    <Skill>GraphQL</Skill>
                    <Skill>Gatsby</Skill>
                    <Skill>Express.js</Skill>
                    <Skill>Node.js</Skill>
                    <Skill>Analytics</Skill>
                    <Skill>Tag Managers</Skill>
                    <Skill>MATLAB</Skill>
                    <Skill>CMS</Skill>
                    <Skill>Google Cloud</Skill>
                    <Skill>BigQuery</Skill>
                </SkillsSection>

            </Description>
        </ContainerWho>
    )
}
 
export default Who