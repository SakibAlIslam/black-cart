import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: poiner;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
`;
const Slide = styled.div`
  width: 100vw;
  heigth: 80vh;
  display: flex;
  align-items: center;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  width: 70%;
  padding-left: 200px;
  padding-top: 20px
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 50px;
`;
const Description = styled.p`
    margin: 20px 0px ;
    font-size: 15px
    font-weight: 500;
    letter-spacing: 2px;
`;
// const Button = styled.button`
//   padding: 10px;
//   font-size: 15px;
//   background-color: transparent;
//   border: 1px solid lightgray;
//   border-radius:4px
// `;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeft />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src="https://i.ibb.co/DG69bQ4/2.png"></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>Summer Sale</Title>
            <Description>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
            </Description>
            <Button sx={{
                 '&.MuiButton-root': {
                    backgroundColor: '#ffc303',
                    color: 'black',
                    borderRadius: '4px',
                    padding: '7px 15px',
                  },
            }} >SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
