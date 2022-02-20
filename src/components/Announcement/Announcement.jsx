import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color:#ffc303;
    color:white;
    font-size:12px;
    font-weight:500;
    letter-spacing: 2px;
    justify-content:center;
    display:flex;
    align-items:center;
`

const Announcement = () => {
  return (
    <Container>
        New Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Announcement