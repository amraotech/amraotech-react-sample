import {
  CircleDashed,
  Command,
  Edit,
  MessageSquare,
  PenTool,
  Search,
  SearchCode,
  Speaker,
  UserCheckIcon,
} from 'lucide-react';
import React from 'react';

const popularCategories = [
  { icon: <PenTool size={28} />, title: 'Social Media Marketing' },
  { icon: <Edit size={28} />, title: 'Content Marketing' },
  { icon: <UserCheckIcon size={28} />, title: 'Affiliate Marketing' },
  { icon: <CircleDashed size={28} />, title: 'Email Marketing' },
  { icon: <SearchCode size={28} />, title: 'Search Engine Marketing (SEM)' },
  { icon: <Command size={28} />, title: 'Search Engine Optimization (SEO)' },
  { icon: <Speaker size={28} />, title: 'Influencer Marketing' },
  { icon: <MessageSquare size={28} />, title: 'Chatbots and AI in Marketing' },
];

const JoinAsMarketer = () => {
  return (
    <div className="">
      <section className="relative flex justify-center items-center text-center flex-col bg-primary py-20 md:py-40">
        <div className="container">
          <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold space-y-2 md:space-y-4">
            Find The Most <br />
            Exicting Digital Marketing <br />
            Jobs <br />
          </h1>
        </div>

        <div className="absolute -bottom-5 flex items-center gap-2 bg-light rounded-full w-[90%] md:w-[50%] xl:w-[30%] justify-between shadow-md px-5">
          <input
            type="text"
            placeholder="Search for your desire tasks.."
            className="py-2 md:py-3 rounded-full outline-none w-full bg-transparent"
          />
          <Search />
        </div>
      </section>

      <section className="container mt-20 md:mt-40 px-5">
        <h1 className="text-2xl font-semibold">Popular Categories</h1>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5">
          {popularCategories?.map((item, index) => (
            <div
              key={index}
              className="py-10 px-5 rounded-md shadow-lg border border-dark/5 text-center flex justify-center flex-col items-center space-y-4"
            >
              {item.icon}
              <h2 className="font-semibold text-lg">{item.title}</h2>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 md:mt-40 bg-primary py-20">
        <div className="container md:w-[70%] mx-auto">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              Way to being a part of Amrao
            </h1>
            <p className="text-xl italic text-green">Here's How</p>
          </div>

          <div className="flex flex-col gap-10 mt-10 w-[80%] mx-auto">
            <div className="flex gap-5 text-2xl font-semibold opacity-50">
              <h3 className="text-green italic">01</h3>
              <h3>Sign in or Register</h3>
            </div>
            <div className="flex gap-5 text-2xl font-semibold opacity-50">
              <h3 className="text-green italic">02</h3>
              <h3>Find Work</h3>
            </div>
            <div className="flex gap-5 text-2xl font-semibold">
              <h3 className="text-green italic">03</h3>
              <div className="md:w-2/4 space-y-2">
                <h3>Take a Task</h3>
                <p className="text-lg font-normal opacity-80">
                  One-off announcements or automatically triggered flows.
                  Seekers receive their permission by following our terms &
                  policy.
                </p>
              </div>
            </div>
            <div className="flex gap-5 text-2xl font-semibold opacity-50">
              <h3 className="text-green italic">04</h3>
              <h3>Deliver</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20"></section>
    </div>
  );
};

export default JoinAsMarketer;
