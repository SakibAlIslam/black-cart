import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';

const Container = styled.div`
    flex:1;
    margin:8px;
    height: 75vh;
    position:relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color:white;
    margin: 0px 0px 20px 0px;
`
const Btn = styled.div`
    
`

const CategoriesItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{item?.title}</Title>
                <Btn>
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
                </Btn>
            </Info>
        </Container>
    )
}

export default CategoriesItem