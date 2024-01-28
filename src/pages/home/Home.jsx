import React from 'react';
import Contact from '../../components/others/home-components/Contact';
import Hero from '../../components/others/home-components/Hero';
import Projects from '../../components/others/home-components/Projects';
import Services from '../../components/others/home-components/Services';

const Home = () => {
    return (
        <div className=''>
            <Hero/>
            <Services />
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;