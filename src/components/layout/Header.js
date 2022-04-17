import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Link } from 'react-scroll'
import { Container, Navbar, Nav } from 'react-bootstrap'
import logo from '../../images/logo.png'

const NavBarCustom = styled(Navbar)`
    padding: 0;
`

const ContainerNav = styled(Container)`
    backdrop-filter: blur(20px);
    padding: 0 10rem;

    @media(max-width: 1024px) {
        padding: .4rem 2rem !important;
    }
`

const Logo = styled.img`
    cursor: pointer;
    transition: transform 1.5s ease-in-out;

    &:hover {
        transform: rotate(360deg);
    }
`

const NavbarToggler = styled(Navbar.Toggle)`
    border: none;
    padding: 0;
    background: transparent !important;
    display: flex;
    flex-direction: column;

    &:focus {
        box-shadow: none;
    }

    &:hover {
        background: transparent !important;
    }
    
    .icon-bar {
        width: 40px;
        height: 5px;
        border-radius: 10px;
        transition: all 0.4s;
        background-color: var(--orange);
    }

    .top-bar {
        transform: rotate(45deg);
        transform-origin: 15% 10%;
    }

    .mid-bar {
        margin: 5px 0;
        opacity: 0;
    }

    .bot-bar {
        transform: rotate(-45deg);
        transform-origin: 10% 90%;
    }

    &.collapsed {
        .icon-bar {
            background-color: var(--grey);
        }

        .top-bar {
            transform: rotate(0);
        }

        .mid-bar {
            opacity: 1;
        }

        .bot-bar {
            transform: rotate(0);
        }
    }
`

const NavStyled = styled(Nav)`
    display: flex;
    
    a {
        margin-left: 5rem;
        padding: .3rem 0;
        color: var(--black);
        cursor: pointer;
        position: relative;
        height: max-content;
        width: max-content;
        text-decoration: none;

        &:after {
            content: '';
            position: absolute;
            width: 100%;
            transform: scaleX(0);
            height: 4px;
            bottom: 0;
            left: 0;
            background-color: var(--blue);
            transform-origin: bottom right;
            transition: transform 0.25s ease-out;
        }

        &:hover:after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }

        @media(max-width: 1024px) {
            margin-left: 0;
        }
    }

    @media(max-width: 1024px) {
        justify-content: center;
        align-items: center;
    }
`

const Header = () => {

    const [size, setSize] = useState(0)

    useEffect(() => {
        const updateSize = () => {
            if(window.innerWidth <= 1280) setSize(70)
            else setSize(80)
        }

        window.addEventListener('resize', updateSize)
        updateSize()

        return () => window.removeEventListener('resize', updateSize)
    })

    return (
        <NavBarCustom fixed='top' expand='lg'>
            <ContainerNav fluid>
                <Navbar.Brand>
                    <Link
                        to='home'
                        spy={true}
                        offset={-100}
                        smooth={true}
                    >
                        <Logo src = {logo} width={size} height={size} alt = 'logo' />
                    </Link>
                </Navbar.Brand>

                <NavbarToggler aria-controls='navbarNav'>
                    <span className='icon-bar top-bar'></span>
                    <span className='icon-bar mid-bar'></span>
                    <span className='icon-bar bot-bar'></span>
                </NavbarToggler>

                <Navbar.Collapse className='justify-content-end' id='navbarNav'>
                    <NavStyled>
                        <Link
                            to='whoami'
                            spy={true} 
                            offset={-110}
                            smooth={true}
                        >
                            <h2>WHO AM I</h2>
                        </Link>

                        <Link 
                            to='mywork' 
                            spy={true}
                            offset={-100}
                            smooth={true}
                        >
                            <h2>MY WORK</h2>   
                        </Link>
                        <Link 
                            to='contact' 
                            spy={true}
                            offset={-100}
                            smooth={true}
                        >
                            <h2>CONTACT</h2>   
                        </Link>
                    </NavStyled>
                </Navbar.Collapse>
            </ContainerNav>
        </NavBarCustom>
    )
}
 
export default Header