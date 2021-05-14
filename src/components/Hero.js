import React from 'react';
import styled from 'styled-components';
import img from '../assets/background.jpg';

const Section = styled.section`
    height: 100vh;
    width: 100%;
    background: url(${img});
    background-position: center;
    position: relative;
`;
const HeroContainer = styled.div`
    height: auto;
    width: 400px;
    position: absolute;
    left: 20%;
    top: 60%;
    transform: translate(-20%, -60%);
    background-color: rgb(236,230,218, 0.75);
    padding: 40px;
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 2px #404040;

`;
const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 30px; 
`;
const Description = styled.p`
    font-size: 1.2rem;
    line-height: 25px;
`;
const ButtonRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;
const Button = styled.button`
    font-size: 1.2rem;
    letter-spacing: 1px;
    margin-top: 30px;
    padding: 12.5px 25px;
    background: rgb(78,97,91, 0.75);
    border: none;
    color: rgb(236,230,218, 0.75);
    cursor: pointer;
    width: 150px;
    transition: 300ms ease-in;
    &:hover {
        color: rgb(236,230,218, 0.75);
        background: rgb(78,97,91, 0.9);
    }
`;


const Hero = () => {
    return (
        <Section>
            <HeroContainer>
                <Title>
                    Mysterious Nature
                </Title>
                    <Description>
                        Explore nature at its finest!<br />
                        Spend a weekend with your family and relax.
                    </Description>

                    <ButtonRow>
                        <Button>
                            Explore
                        </Button>   
                    </ButtonRow>            
            </HeroContainer>
        </Section>
    )
}

export default Hero
