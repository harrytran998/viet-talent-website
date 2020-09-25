import React from 'react';

const About = () => {
  return (
    <div className="about-area pt-130 pb-10">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-30">
            <div className="about-text">
              <span>Chúng tôi là ai?</span>
              <h1>
                Hơn <span>10+</span> năm kinh nghiệm trong ngành<span> công nghệ thông tin và khởi nghiệp.</span>
              </h1>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 mb-30">
            <div className="about-img">
              <img src="assets/img/about/about-mid.png" alt="" />
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 mb-30">
            <div className="about-content">
              <p>
                <b>Việt Talent</b> là một startup trẻ với sứ mệnh cách mạng hóa hoạt động hướng nghiệp và tìm kiếm việc làm cho sinh viên và newbie
                mới tốt nghiệp. Tầm nhìn của Viet Talent là trở thành công cụ số 1 để{' '}
                <b>
                  giúp sinh viên định hướng tốt nghề nghiệp ngay khi còn đang ngồi trên ghế nhà trường, giúp tiếp cận với các nhà tuyển dụng, và tìm
                  kiếm việc làm một cách hiệu quả
                </b>
                . Chúng tôi hiện đang xây dựng đội ngũ Viet Talent để hoàn thành sứ mệnh của mình. Let's join Viet Talent to have fun and to make an
                impact!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
