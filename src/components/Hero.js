import React from 'react';
import styled from 'styled-components';
import img from '../assets/background.jpg';

const Section = styled.section`
    height: 100vh;
    width: 100%;
    background: url(${img});
    background-position: center;
`;
const Title = styled.h1``;
const Description = styled.p``;
const Button = styled.button``;


const Hero = () => {
    return (
        <Section>
            <Title>
                Mysterious Nature
                <Description>
                    Explore nature at its finest!<br />
                    Most importantly, enjoy the peace and quiet.
                    Soon, you will be the same! HA HA HAAA! MUHA HAHAAAA!
                    <Button>
                        Explore
                    </Button>
                </Description>
            </Title>
        </Section>
    )
}

export default Hero
