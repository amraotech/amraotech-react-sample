import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '../../shared/Button';

const projectsData = [
  {
    id: 1,
    title: '3D Website Showcase',
    description:
      'Showcasing 3D technologies in a user-centric website with a mobile-first design. Take your business online with a premium website, designed for optimal functionality on all devices.',
    image:
      'https://media.discordapp.net/attachments/1176979635058266172/1176980253021835386/IMG_1131.jpg?ex=657a11c7&is=65679cc7&hm=b2e1467c8df9cb33db72a437864e636688946d858e4cfb3eec609ceda58453e2&=&format=webp&width=876&height=657',
  },
  {
    id: 2,
    title: 'Digital Marketing Campaign',
    description:
      'Executing a powerful digital marketing campaign to enhance your online presence. Our expertise lies in creating user-centric websites with a mobile-first design, offering optimal functionality on all devices.',
    image:
      'https://cdn.discordapp.com/attachments/1176979635058266172/1176980262094118953/IMG_1106.jpg?ex=657a11c9&is=65679cc9&hm=dea62ba70c0df5d1e0ed1eed2478187b5265a663989164cb64d34cd95acb332d&',
  },
  {
    id: 3,
    title: 'Web Services Platform',
    description:
      'Exploring comprehensive web services with a focus on user-centric design. From mobile-first design to optimal functionality on all devices, we specialize in creating premium websites to take your business online.',
    image:
      'https://cdn.discordapp.com/attachments/1176979635058266172/1176980262987501578/IMG_1016.jpg?ex=657a11c9&is=65679cc9&hm=4a9531cdcc75927b5a7c53f368741aebac2ca08830de26674592e7a9743e2afa&',
  },
  {
    id: 4,
    title: 'E-commerce Solution',
    description:
      'Building a robust e-commerce solution with advanced features for a seamless online shopping experience. From product listings to secure checkout, we ensure an optimized process for your customers.',
    image:
      'https://media.discordapp.net/attachments/1176979635058266172/1177258842321592350/IMG_1582.jpg?ex=657b153c&is=6568a03c&hm=8799fa0361e2312c834e7d3bd0ae1d8e91f5ace6c08d6c88bd2d093029ee3bbe&=&format=webp&width=876&height=657',
  },
  {
    id: 5,
    title: 'Social Media Integration',
    description:
      'Integrating social media platforms to boost your online presence. Our solutions enable seamless sharing, engagement, and visibility across various social channels for maximum reach.',
    image:
      'https://cdn.discordapp.com/attachments/1176979635058266172/1177258838420901948/IMG_1554.jpg?ex=657b153b&is=6568a03b&hm=0fd8d22006e2045d9ec7d0aea9bfa424eaae0401ccc674c6149d3a1790baca8e&',
  },
  {
    id: 6,
    title: 'Mobile App Development',
    description:
      'Crafting innovative mobile apps tailored to your business needs. From concept to execution, we deliver user-friendly and feature-rich applications that elevate your brand in the digital landscape.',
    image:
      'https://cdn.discordapp.com/attachments/1176979635058266172/1177258842925580428/IMG_1583.jpg?ex=657b153c&is=6568a03c&hm=732942853a901c09c6b08c1265ef5fcac2e48e027d8a8cf7c9a5b32fc2863794&',
  },
];

const Projects = () => {
  return (
    <section className="py-10 mt-10 md:mt-20">
      <div className="container mx-auto">
        <div className="text-center">
          <Button>Latest Projects</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          {projectsData.map((project) => (
            <div key={project?.id} className="bg-white rounded-md shadow-md">
              <LazyLoadImage
                src={project?.image}
                alt={project?.title}
                className="rounded-md w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-4">{project?.title}</h3>
                <p className="text-dark/80 text-sm md:text-base">
                  {project?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
