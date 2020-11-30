import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Banner from '../../components/banner/index';
import About from '../../components/about';
import Segments from '../../components/segments';
import Bilingual from '../../components/bilingual';
import Contact from '../../components/contact';
import Depositions from '../../components/depositions';

const Home = () => (
<div>
    <Navbar/>
    <Banner/>
    <About/>
    <Segments/>
    <Bilingual/>
    <Depositions/>
    <Contact/>
    <Footer/>
</div>
);

export default Home;