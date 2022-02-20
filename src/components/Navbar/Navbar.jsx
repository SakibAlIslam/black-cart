import React from 'react'
import styled from 'styled-components'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import logo from './logo/blackcartLogo.png'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`;
const Left = styled.div`
    flex:1;
    display:flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor:pointer;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display:flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px
`
const Input = styled.input`
    border: none;
`
const Center = styled.div`
    flex:1;
    display:flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img.attrs({
    src: `${logo}`
})`
  width: 40%;

  `;

const Right = styled.div`
    flex:1;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
`;
const MenuLink = styled.div`
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    cursor:pointer
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left><Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <SearchOutlinedIcon style={{color:'gray', fontSize:'16px'}}/>
                    </SearchContainer>
                </Left>
                <Center><Logo /></Center>
                <Right>
                    <MenuLink>Register</MenuLink>
                    <MenuLink>Log In</MenuLink>
                    <MenuLink>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </MenuLink>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar