import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
    cursor:pointer;
`

const Container = styled.div`
    flex:1;
    margin:5px;
    height: 350px;
    min-width:280px;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfd;
    position:relative;

    &:hover ${Info}{
        opacity:1;
    }
`
const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color: white;
    position:absolute;
`
const Image = styled.img`
    height: 75%;
    z-index: 2
`

const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius: 50%;
    background-color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    margin:10px;
    transition: all 0.3s ease;

    &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1)
    }
`

const ProductItem = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item?.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon color="action" />
                </Icon>
                <Icon>
                    <SearchIcon color="action" />
                </Icon>
                <Icon>
                    <FavoriteBorderIcon color="action" />
                </Icon>
            </Info>
        </Container>
    )
}

export default ProductItem