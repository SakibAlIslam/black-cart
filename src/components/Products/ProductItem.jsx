import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Container = styled.div`
flex:1;
margin:5px;
height: 75vh;
position:relative;
`
const Circle = styled.div`

`
const Image = styled.img`

`
const Info = styled.div`

`
const Icon = styled.div`

`

const ProductItem = ({item}) => {
  return (
    <Container>
        <Circle/>
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