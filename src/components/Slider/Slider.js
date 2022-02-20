import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { sliderItems } from "../../fakeData/data";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
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
  z-index: 1000;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.slideIndex * -100}vw);
  transition: all 1s ease;
`;
const Slide = styled.div`
  width: 100vw;
  heigth: 80vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 100%;
  padding-left: 150px;
  padding-top: 20px;
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
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
      
      if(direction === 'left') {
          setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
      } else{
          setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
      }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems?.map((item) => (
          <Slide bg={item?.bg}>
            <ImgContainer>
              <Image src={item?.img}></Image>
            </ImgContainer>
            <InfoContainer>
              <Title>{item?.title}</Title>
              <Description>
                {item?.desc}
              </Description>
              <Button
                sx={{
                  "&.MuiButton-root": {
                    backgroundColor: "#ffc303",
                    color: "black",
                    borderRadius: "4px",
                    padding: "7px 15px",
                  },
                }}
              >
                SHOP NOW
              </Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
