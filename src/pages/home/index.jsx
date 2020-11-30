import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Banner from '../../components/banner/index';
import About from '../../components/about';

const Home = () => (
<div>
    <Navbar/>
    <Banner/>
    <About/>
    <Footer/>
</div>
)

export default Home;