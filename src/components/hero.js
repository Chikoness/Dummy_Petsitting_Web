import React from 'react'
import styled from 'styled-components'
import { Button } from './button'
import heroImage from '../assets/images/hero-image.jpg'

const Hero = () => {
    return (
        <HeroContainer id="about">
            <HeroBG>
                <ImageBG src={heroImage} />
            </HeroBG>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Love&amp;Happiness</HeroH1>
                    <HeroP>We will love your pets as much as you do!</HeroP>
                    <Button primary="true" big="true" round="true" to="#services">Book us now!</Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    color: #fff;
    align-items: center;
    height: 80vh;
    padding: 0 1rem;
    position: relative;
    margin-top: -80px;

    :before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: 2;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    }
`;

const HeroBG = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const ImageBG = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`;

const HeroContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`;

const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding : 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;

`;

const HeroH1 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
    font-weight: bold;
    padding: 0 1rem;
`;

const HeroP = styled.p`
    font-size: clamp(1rem, 2vw, 2rem);
    margin-bottom: 2rem;
`;