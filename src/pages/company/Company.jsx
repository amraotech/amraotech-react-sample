import React from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';

// Import images for new cards
import whyChooseUsCard1 from '/whyChooseUsCard1.svg';
import whyChooseUsCard2 from '/whyChooseUsCard2.svg';
import whyChooseUsCard3 from '/whyChooseUsCard3.svg';

// Breakpoints for Swiper
const breakpoints = {
  320: { slidesPerView: 1, spaceBetween: 10 },
  640: { slidesPerView: 2, spaceBetween: 20 },
  768: { slidesPerView: 3, spaceBetween: 30 },
};

// External array for new content
const whyChooseUsData = [
  {
    image: whyChooseUsCard1,
    title: 'Expertise',
    description:
      'Our team of experienced experts has the knowledge and expertise to deliver innovative IT solutions by working closely.',
  },
  {
    image: whyChooseUsCard2,
    title: 'Technology',
    description:
      'We stay up to date with the latest trends and technologies in the IT industry, so you can get the most advanced solutions available.',
  },
  {
    image: whyChooseUsCard3,
    title: 'Solutions',
    description:
      'We take a personalized approach to every project, working closely with you to understand your business and create solutions.',
  },
];

const Company = () => {
  return (
    <section className="">
      <div className="bg-primary">
        <div className="bg-[#E0EBEB] pb-20">
          <div className="container">
            <div className="text-center md:text-start companyPageHeroMain pt-5 md:pt-10 relative px-5">
              <h3 className="text-3xl md:text-4xl font-bold text-teal">
                About.
              </h3>

              <div className="flex flex-col md:flex-row md:text-start mb-4 gap-7 justify-between">
                <h1 className="text-3xl md:text-6xl font-bold my-2">
                  We believe that <br />
                  <a href="#">
                    <span>amrao</span>
                  </a>{' '}
                  can transform the world.
                </h1>

                <div className="hidden md:flex">
                  <img
                    src="/companyPageHeroBox.svg"
                    alt="company Page Hero image a square box"
                  />
                </div>
              </div>

              <p className="md:text-xl">
                That is why we are committed to delivering innovative IT
                solutions to businesses of all sizes. Our team of experienced
                professionals is dedicated to helping you achieve your goals and
                thrive in a rapidly evolving digital landscape. Our goal is to
                help businesses of all sizes succeed by providing customized
                solutions that meet their unique needs.
              </p>
            </div>
            <div className="absolute pt-5 md:-mt-2">
              <img src="companyPageStar.svg" alt="company Page Star graphic" />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="">
        <div className="flex justify-center items-center flex-col h-screen relative">
          <h1 className="text-3xl md:text-4xl font-bold mb-20 text-[#357E8D]">
            Why Choose Us?
          </h1>

          <div className="blackBackground flex justify-center items-center gap-7 bg-dark w-screen relative pb-5">
            {/* Swiper for Why Choose Us cards */}
            <section className="mt-40 w-full px-5 relative">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                breakpoints={breakpoints}
                pagination={{ clickable: true }}
              >
                {/* Your existing Swiper slides */}
              </Swiper>

              {/* New content for Why Choose Us cards */}
              <div className="flex justify-center items-center gap-7 -top-8">
                {whyChooseUsData.map((item, index) => (
                  <div
                    key={index}
                    className="whyChooseUs-Card w-80 h-96 bg-[#282828] text-light rounded-xl"
                  >
                    <div className="p-8">
                      <div className="w-20 h-20 mb-8">
                        <img
                          src={item.image}
                          alt={`Why Choose Us Card ${index + 1}`}
                        />
                      </div>
                      <h3 className="text-[#357E8D] text-2xl font-bold py-4">
                        {item.title}
                      </h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        {/* We are in a good company */}
        <div className="flex text-center px-5 justify-center items-center flex-col my-16">
          <h1 className="text-3xl md:text-6xl font-bold mb-8">
            We are in a good company
          </h1>
          <p className="text-xl text-center py-4">
            Our partnerships have delivered great value to our projects and we
            are happy to share some of their feedback below.
          </p>
          <div className="flex justify-center items-center gap-20 py-4">
            <div>
              <img src="leftArrow.svg" alt="Left Arrow" />
            </div>
            <div>
              <img src="rightArrow.svg" alt="Right Arrow" />
            </div>
          </div>
          <p className="md:w-2/4 md:text-xl text-center my-4 leading-10">
            Since 2023, Amrao team has been an astounding market maker. They
            have proven themselves to be one of the most consistent, committed,
            and driven market makers on our exchange. Gravity Team has
            contributed high-quality volume and has proven to be a very reliable
            and trustworthy partner. We strongly advocate Gravity Team as they
            have been an indispensable part of our market-making team.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Company;
