import { CandlestickChart, Globe, Layout } from 'lucide-react';
import React from 'react';
import Button from '../../shared/Button';

const services = [
  {
    icon: <Globe size={50} />,
    name: '3D Technologies',
    description:
      'Creating user-centric websites with mobile-first design is our specialty. Take your business online with a premium website, designed for optimal functionality on all devices.',
  },
  {
    icon: <CandlestickChart size={50} />,
    name: 'Digital Marketing',
    description:
      'Digital marketing is a powerful strategy to enhance your online presence. Our expertise lies in creating user-centric websites with a mobile-first design, offering optimal functionality on all devices.',
  },
  {
    icon: <Layout size={50} />,
    name: 'Web Services',
    description:
      'Explore our comprehensive web services that prioritize user-centric design. From mobile-first design to optimal functionality on all devices, we specialize in creating premium websites to take your business online.',
  },
];

const Services = () => {
  return (
    <section className="py-10 mt-10 md:mt-20">
      <div className="text-center">
        <Button>Our Services</Button>
      </div>

      <div className="flex flex-col md:flex-row pl-5 pr-4 md:px-0 gap-4 mt-5 justify-center h-[850px] md:h-80 w-full">
        {services?.map((service, index) => (
          <div
            key={index}
            className="max-w-[380px] p-4 bg-white shadow-xl rounded-md text-center space-y-2 relative bg-light w-full h-full"
          >
            <div className="absolute bottom-0 left-0 w-[99%] h-[99%] rounded bg-primary p-4 space-y-2 md:space-y-4">
              <div className="flex justify-center">{service?.icon}</div>

              <h2 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-4">
                {service?.name}
              </h2>

              <p className="text-dark/80 text-base">{service?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
