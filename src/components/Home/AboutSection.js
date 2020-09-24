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
                Hơn 10+ năm kinh nghiệm làm việc trong ngành<span> Công nghệ thông tin</span>
              </h1>
              <p>
                Với những kinh nghiệm mà chúng tôi đã có về ngành công nghệ thông tin và khởi nghiệp không chỉ trong nước mà còn trong thị trường{' '}
                <b>USA</b>, chúng tôi tin chắc rằng mình có thể phát triển sản phẩm này thành một trong các{' '}
                <b>sản phẩm dẫn đầu trong ngành tuyển dụng tại Việt Nam</b>.{' '}
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 mb-30">
            <div className="about-img">
              <img src="assets/img/about/teamwork.png" alt="" />
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
      </div>
    </div>
  );
};

export default About;
