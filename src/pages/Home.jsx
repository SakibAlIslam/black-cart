import React from 'react'
import Announcement from '../components/Announcement/Announcement'
import Categories from '../components/Categories/Categories';
import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Home/Slider/Slider';
import Products from '../components/Home/Products/Products';
import NewsLetter from '../components/Home/NewsLetter/NewsLetter';
import Footer from '../components/Footer/Footer';

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