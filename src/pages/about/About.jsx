import React from 'react';

const About = () => {
  return (
    <div className="container my-20 space-y-10 text-center text-lg">
      {/* Company History */}
      <section>
        <h2 className="font-bold text-2xl">Company History</h2>
        <p>
          Founded in 2020, Amraotech has rapidly evolved into a leading force in
          the tech industry. Our journey commenced with a small group of
          dedicated individuals committed to pioneering cutting-edge solutions
          for businesses worldwide. Through the years, we've expanded our
          horizons and gained the trust of clients globally.
        </p>
      </section>

      {/* Our Team */}
      <section>
        <h2 className="font-bold text-2xl">Our Team</h2>
        <p>
          Meet the brilliant minds behind Amraotech. Our diverse team comprises
          talented individuals with expertise in various fields, including
          software development, design, and marketing. We believe in the power
          of collaboration and continuous learning, driving our commitment to
          delivering exceptional results for our clients.
        </p>
      </section>

      {/* Mission & Vision */}
      <section>
        <h2 className="font-bold text-2xl">Mission & Vision</h2>
        <p>
          Our mission at Amraotech is to empower businesses through innovative
          technology solutions, fostering growth and success. We envision a
          future where technology enhances every aspect of life, and we strive
          to be at the forefront of this transformation. At Amraotech, we are
          dedicated to providing reliable, scalable, and forward-thinking
          solutions that propel our clients to new heights.
        </p>
      </section>
    </div>
  );
};

export default About;
