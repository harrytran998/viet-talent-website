import React from 'react';

const About = () => {
  return (
    <div className="about-area pt-130 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-30">
            <div className="about-text">
              <span>who we are</span>
              <h1>
                More than 23+ years we provide <span>IT solutions </span>
              </h1>
              <p>
                Sedut perspiciatis unde omnis iste natus error sitlupt tem accusantium doloremque laudantium totam remap eriaeaque ipsa quae ab illo
                inventore veritatis{' '}
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 mb-30">
            <div className="about-img">
              <img src="assets/img/about/about.jpg" alt="" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 mb-30">
            <div className="about-content">
              <p>
                Viet Talent is a early-stage startup aiming to revolutionize the on-campus recruiting and job seeking experience for college students
                and young professionals. Our mission is to become #1 way for early talent to find jobs. We are currently building Viet Talent’s team
                to help us accomplish our mission, let’s join us and have fun!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
