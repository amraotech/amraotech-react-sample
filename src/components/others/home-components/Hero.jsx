import { ArrowRight } from 'lucide-react';
import React from 'react';
import '../../../index.css';
import Button from '../../shared/Button';

const Hero = () => {
  return (
    <div id="hero" className="bg-light py-40 px-5 md:py-60">
      <section className="container text-center space-y-5">
        <h2 className="text-3xl text-center md:text-7xl xl:text-8xl text-light uppercase font-bold md:max-w-[900px] mx-auto">
          We do what <br /> we believe
        </h2>
        <Button>
          <ArrowRight className="inline p-1 rounded-full bg-dark text-light" />{' '}
          Get A Job Today
        </Button>
      </section>
    </div>
  );
};

export default Hero;
