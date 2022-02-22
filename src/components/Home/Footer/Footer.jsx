import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Pinterest, Room, Twitter, WhatsApp } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import logo from '../../Navbar/logo/blackcartLogo.png'

const Container = styled.div`
    display:flex;
`;
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding: 30px
`;

const Logo = styled.img`
    width:50%;
`;
const Desc = styled.p`
    font-size:18px;
    padding: 15px 0px
`;
const SocialContainer = styled.div`
    display:flex;
    justify-content: space-around
`;
const SocialIcon = styled.div`
    cursor:pointer;
`;
const Center = styled.div`
    flex:1;
    padding: 30px;
`;
const Title = styled.h3`
    margin-bottom: 20px;
`;
const List = styled.ul`
    margin:0;
    padding:0;
    list-style: none;
    display:flex;
    flex-wrap: wrap;
    font-size: 15px;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom:10px;
`;


const Right = styled.div`
    flex:1;
    padding: 30px;
`;
const ContactItem = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 0px 10px 0px;
`;
const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo src={logo} />
                <Desc>
                    Black Cart is the buying and selling of goods and services over the Internet. It is conducted over computers, tablets, smartphones, and other smart devices.
                </Desc>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook sx={{ fontSize: '35px', color: '#3b5998' }} />
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram sx={{ fontSize: '35px', color: '#bc2a8d' }} />
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter sx={{ fontSize: '35px', color: '#00acee' }} />
                    </SocialIcon>
                    <SocialIcon>
                        <Pinterest sx={{ fontSize: '35px', color: '#E60023' }} />
                    </SocialIcon>
                    <SocialIcon>
                        <LinkedIn sx={{ fontSize: '35px', color: '#0077b5' }} />
                    </SocialIcon>
                    <SocialIcon>
                        <WhatsApp sx={{ fontSize: '35px', color: '#4FCE5D' }} />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room sx={{ marginRight: '10px' }} />
                    32, Justice SM Morshed Sharany Agargoan
                </ContactItem>
                <ContactItem>
                    <Phone sx={{ marginRight: '10px' }} />
                    +880 1931098743
                </ContactItem>
                <ContactItem>
                    <MailOutline sx={{ marginRight: '10px' }} />
                    blackCart@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Tvg28r9/48-480088-payment-method-credit-card-master-card-hd-png.png" />
            </Right>
        </Container>
    )
}

export default Footer