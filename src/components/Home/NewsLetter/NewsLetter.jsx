import { Send } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    font-size: 50px;
    margin:0px 0px 20px 0px;
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin:0px 0px 20px 0px;
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color:white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding: 0px 0px 0px 20px;
    outline:none
`
const Button = styled.button`
    flex: 1;
    border:none;
    background-color:#ffc303;
    color: white;
    cursor:pointer
`

const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favourite products.</Description>
        <InputContainer>
            <Input placeholder="Your Email"/>
            <Button>
                <Send />
            </Button>
        </InputContainer>

    </Container>
  )
}

export default NewsLetter