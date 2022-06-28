import React from 'react'
import styled from '@emotion/styled'
import geomappingImg from '../images/geomapping.png'
import appVeterinaria from '../images/listadoPacientes.png'

//Import carousel
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

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
    width: 40%;

    h2 {
        color: var(--orange);
    }
    
    h1 {
        font-size: 240px;
    }

    @media(max-width: 1024px) {
        margin: 0;
        width: 100%;

        h1 {
            font-size: 90px;
        }
    }
`

const ItemTitle = styled.div`
    margin-top: auto;
    width: auto;
    backdrop-filter: blur(10px) grayscale(1);
    padding: 0 2rem 2rem;

    h2 {
        color: var(--orange);
        letter-spacing: .2rem;
    }

    h1 {
        font-size: 60px;
    }
`

const ItemOne = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    background-image: url(${geomappingImg});
    background-size: cover;
`

const ItemTwo = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    background-image: url(${appVeterinaria});
    background-size: cover;
`

const CarouselContainer = styled.div`
    margin: 0 4rem;
    width: 50%;

    @media(max-width: 1024px) {
        margin: 0;
        width: 100%;
    }
`

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 }
}

const items = [
    <ItemOne>
        <ItemTitle>
            <h1>GeoMapping</h1>
            <h2>A Social Network for Geologists</h2>
        </ItemTitle>
    </ItemOne>
    ,
    <ItemTwo>
        <ItemTitle>
            <h1>Veterinary App</h1>
            <h2>A simple app to follow a vet patients</h2>
        </ItemTitle>
    </ItemTwo>
]

const Mywork = () => {
    return (
        <ContainerWork id='mywork'>
            <Hero>
                <h2>Wanna see</h2>
                <h1>MY WORK?</h1>
            </Hero>

            <CarouselContainer>
                <AliceCarousel
                    mouseTracking
                    disableButtonsControls
                    autoHeight
                    autoWidth
                    items={items}
                    responsive={responsive}
                />
            </CarouselContainer>
        </ContainerWork>
    )
}
 
export default Mywork