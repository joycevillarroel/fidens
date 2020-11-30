import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Banner from '../../components/banner/index';
import About from '../../components/about';
import Segments from '../../components/segments';
import Bilingual from '../../components/bilingual';

const Home = () => (
<div>
    <Navbar/>
    <Banner/>
    <About/>
    <Segments/>
    <Bilingual/>
    <Footer/>
</div>
);

export default Home;