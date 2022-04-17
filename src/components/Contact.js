import React from 'react'
import styled from '@emotion/styled'
import linkedInImage from '../images/linkedin.png'

const ContainerContact = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 100px;
    height: 90vh;
    align-items: center;

    @media(max-width: 1024px) {
        flex-direction: column;
    }
`

const Hero = styled.div`
    margin: 0 0 0 4rem;
    width: 50%;

    h2 {
        color: var(--orange);
    }
    
    h1 {
        font-size: 120px;

        &:nth-of-type(1) {
            font-size: 190px;
        }
    }

    @media(max-width: 1024px) {
        margin: 0;
        width: 100%;

        h1 {
            font-size: 90px;

            &:nth-of-type(1) {
                font-size: 95px;
            }
        }
    }
`

const ContactSect = styled.div`
    margin: 4rem;

    p {
        line-height: 4rem;
    }
`

const ImageContact = styled.img`
    width: 200px;
    transition: all .3s ease-in-out;
    border-radius: 20%;

    &:hover {
        box-shadow: 5px 5px 15px 5px #ff7505;
    }
`

const Contact = () => {
    return (
        <ContainerContact id='contact'>
            <Hero>
                <h2>You still here? Great!</h2>
                <h1>LET&apos;S TALK</h1>
            </Hero>

            <ContactSect>
                <a 
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.linkedin.com/in/davidroelgomez/'
                >
                    <ImageContact
                        src={linkedInImage}
                        alt='LinkedIn'
                    />
                </a>
            </ContactSect>
        </ContainerContact>
    )
}
 
export default Contact