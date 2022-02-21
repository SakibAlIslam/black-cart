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

`
const Input = styled.input`

`
const Button = styled.button`

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