import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Home/Slider/Slider';
import Products from '../components/Home/Products/Products';
import NewsLetter from '../components/Home/NewsLetter/NewsLetter';
import Announcement from './../components/Home/Announcement/Announcement';
import Categories from './../components/Home/Categories/Categories';
import Footer from './../components/Home/Footer/Footer';

const Home = () => {
    return <>
        <Navbar />
        <Announcement />
        <Slider />
        <Categories />
        <Products />
        <NewsLetter />
        <Footer />
    </>
}

export default Home