import React from 'react';

const About = () => {
  return (
    <div className="about-area pt-130 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-30">
            <div className="about-text">
              <span>Chúng tôi là ai</span>
              <h1>
                Hơn 10+ năm kinh nghiệm làm việc trong ngành<span> Công nghệ thông tin và khởi nghiệp</span>
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
                <b>Việt Talent</b> là một công ty khởi nghiệp nhằm cách mạng hóa quá trình tuyển dụng và tìm việc làm ngay trong khuôn viên trường cho
                sinh viên đại học. Mục tiêu của chúng tôi là trở thành công cụ hàng đầu để giúp sinh viên đại học có thể tiếp cận với các nhà tuyển
                dụng và <b>tìm kiếm việc làm một cách hiệu quả</b>. Chúng tôi hiện đang xây dựng đội ngũ Nhân tài Việt để hoàn thành sứ mệnh của mình.
                Hãy cùng tham gia với chúng tôi!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <p className="text-center">Bạn đang tìm kiếm một môi trường làm việc năng động và chuyên nghiệp?</p>
            <div className="section-title text-center ml-50 mr-50 mb-80">
              <h3>Hãy tham gia ngay vào đội ngũ Việt Talent</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
