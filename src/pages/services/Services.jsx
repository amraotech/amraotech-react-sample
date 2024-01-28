import { Box, Lightbulb, Quote, Tag, UserCheckIcon } from 'lucide-react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import { Autoplay } from 'swiper/modules';

// Breakpoints for Swiper
const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
};

const FeedbackData = [
  {
    quote:
      'I experienced outstanding service with Sable. The transition from a traditional bank was smooth, and the Sable team expertly addressed all my queries. Their commitment to customer satisfaction is truly commendable. Kudos to the team!',
    author: 'Robert Johnson',
  },
  {
    quote:
      'Choosing Sable was a game-changer. Their customer service is unparalleled. The team went above and beyond to assist me in transitioning from a traditional bank. I am impressed by their dedication and efficiency. Highly recommend!',
    author: 'K. Oiwake',
  },
  {
    quote:
      'Sables customer service is exceptional. During my switch from a traditional bank, they provided valuable assistance, addressing all my concerns promptly. The experience was seamless, reflecting their commitment to excellence.',
    author: 'Emily Davis',
  },
  {
    quote:
      'I switched to Sable, and it was the best decision. Their customer service is fantastic. They patiently answered all my questions, making the transition hassle-free. Sable truly stands out in delivering top-notch digital services.',
    author: 'Samantha Turner',
  },
  {
    quote:
      'Sable exceeded my expectations. Their customer service is unparalleled. The team is proactive and dedicated to ensuring a seamless transition. A top choice for digital services. - Daniel Anderson',
    author: 'Daniel Anderson',
  },
  {
    quote:
      "Sable's customer service is remarkable. They guided me through the transition with expertise, addressing every concern promptly. Choosing Sable was a smart decision. - Olivia Martin",
    author: 'Olivia Martin',
  },
  {
    quote:
      'Kudos to Sable for their exceptional service. The team is customer-focused, ensuring a smooth transition. Their commitment to excellence sets them apart. - Michael Turner',
    author: 'Michael Turner',
  },
];

const Services = () => {
  return (
    <div className="container">
      <section className="container flex flex-col md:flex-row items-center md:text-start bg-primary mt-10 text-center p-5 md:p-10 gap-5 rounded-md">
        <div className="space-y-4 md:space-y-5">
          <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold">
            Manage Your Online Presence With Us
          </h1>
          <p className="text-base md:text-lg">
            Take charge of your business continuity with innovate web solutions
          </p>

          <div className="flex flex-col md:flex-row gap-5">
            <button className="py-2 px-2 rounded-full bg-dark text-light font-semibold">
              Schedule A Consultation
            </button>
            <button className="border py-1 px-2 rounded-full font-semibold">
              Services
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://media.discordapp.net/attachments/1176979635058266172/1176980263801208954/IMG_0870.jpg?ex=657a11ca&is=65679cca&hm=8f5977b9900f24de92c62f6fd5ac57c60e98ba1c35da765f8cfcddaed070dc13&=&format=webp&width=876&height=657"
            alt="https://cdn.dribbble.com/userupload/10466312/file/original-2149bcf116417067ca2bf57dfaf4d95d.jpg?resize=1024x675"
            className="w-full h-full rounded-md"
          />
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-5 px-5 mt-40">
        <div className="space-y-4 text-center shadow-md p-4 rounded-lg">
          <Tag size={32} className="inline" />
          <h2 className="text-xl font-semibold uppercase">Cost-Effective</h2>
          <p>
            We offer affordable web solutions that help you reduce costs and
            improve your bottom line
          </p>
        </div>
        <div className="space-y-4 text-center shadow-md p-4 rounded-lg">
          <Lightbulb size={32} className="inline" />
          <h2 className="text-xl font-semibold uppercase">Cost-Effective</h2>
          <p>
            We stay up-to-date with the latest technology trends and offer
            innovative solutions that help you stay ahead of the competition
          </p>
        </div>
        <div className="space-y-4 text-center shadow-md p-4 rounded-lg">
          <UserCheckIcon size={32} className="inline" />
          <h2 className="text-xl font-semibold uppercase">Cost-Effective</h2>
          <p>
            we specialize in serving specific industries, such as healthcare,
            finance, or manufacturing, and offer tailored solutions that meet
            your unique needs.
          </p>
        </div>
        <div className="space-y-4 text-center shadow-md p-4 rounded-lg">
          <Box size={32} className="inline" />
          <h2 className="text-xl font-semibold uppercase">Cost-Effective</h2>
          <p>
            Our solutions are scalable and can grow with your business, ensuring
            that you get the most value out of your investment
          </p>
        </div>
      </section>

      <section className="mt-48 px-5 text-center space-y-10 mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold uppercase md:w-[60%] xl:w-[50%] mx-auto">
          Solving web challenges in every industry, every day
        </h1>

        <div className="flex flex-wrap justify-center gap-2 md:gap-5 md:w-[80%] xl:w-[70%] mx-auto">
          <span className="border p-2 rounded-full flex items-center gap-2">
            <div className="w-6 h-6 bg-dark rounded-full"></div>
            Industry & Manufacturing
          </span>
          <span className="border p-2 rounded-full flex items-center gap-2">
            <div className="w-6 h-6 bg-warn rounded-full"></div>
            Transportation & Logistics
          </span>
          <span className="border p-2 rounded-full flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-full"></div>Banks &
            Insurance
          </span>
          <span className="border p-2 rounded-full flex items-center gap-2">
            <div className="w-6 h-6 bg-dark rounded-full"></div>
            HealthCAre
          </span>
          <span className="border p-2 rounded-full flex items-center gap-2">
            <div className="w-6 h-6 bg-warn rounded-full"></div>
            Non-profit
          </span>
          <span className="border p-2 rounded-full flex items-center gap-2">
            <div className="w-6 h-6 bg-dark rounded-full"></div>
            Consulting Providers
          </span>
        </div>
      </section>

      {/* Feedback Swiper Slider */}
      <section className="mt-40 w-full px-5">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={breakpoints}
          modules={[Autoplay]}
          pagination={{ clickable: true }}
        >
          {FeedbackData?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-dark text-light p-4 rounded-md space-y-2">
                <Quote />
                <p>{item?.quote}</p>
                <div className="flex items-center gap-2">
                  <div className="bg-light w-20 h-1"></div>
                  <div>{item?.author}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="py-5"></section>
    </div>
  );
};

export default Services;
