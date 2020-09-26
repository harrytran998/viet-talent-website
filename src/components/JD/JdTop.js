import React from 'react';

const JdTop = () => {
  return (
    <div id="jd-top" className="management-area pt-80">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title text-center ml-50 mr-50 mb-80">
              <span className="border-left-1"></span>
              <span>Chào mừng bạn đến với đội ngũ Việt Talent</span>
              <span className="border-right-1"></span>
              {/* <h1>We always learn more and apply new technologies to our products</h1> */}
              <h1>
                Hiện tại Việt Talent đang cần tuyển <span>05</span> kỹ sư phát triển Front-End cho sản phẩm.
              </h1>
            </div>
            <span className="border-left-1"></span>
          </div>
          <div className="col-xl-12 col-lg-12">
            <div className="management-wrapper mb-30">
              <h1>Chúng tôi đang tìm kiếm những ứng viên</h1>
              <ul className="list-custom">
                <li>Có kinh nghiệm trong việc xây dựng các ứng dụng web hướng tới người tiêu dùng</li>
                <li>
                  Thích thực hiện các dự án từ khi nó bắt đầu đến khi hoàn thành để nắm được toàn bộ quy trình phát triển một sản phẩm công nghệ
                </li>
                <li>Hướng tới xây dựng các sản phẩm web chất lượng cao</li>
                <li>Quan tâm đến “Full Stack” nhưng có đam mê và kiến thức về một hoặc nhiều lĩnh vực web stack</li>
                <li>Đánh giá cao việc thiết kế và chú trọng vào trải nghiệm người dùng</li>
                <li>
                  Yêu thích công việc lập trình của mình, luôn cố gắng tạo clean code để sẵn sàn cho việc mở rộng quy mô và làm việc nhóm hiệu quả
                </li>
              </ul>
            </div>
            <div className="management-wrapper mb-30">
              <h1>Công việc cụ thể</h1>
              <ul className="list-custom">
                <li>Đóng góp ý tưởng để cải tiến sản phẩm, đặc biệt là trong UI/UX</li>
                <li>Phân tích và khảo sát giải pháp cải thiện hiệu suất sản phẩm, tốc độ trang, điểm Lighthouse</li>
                <li>Tạo thiết kế mockup để thể hiện ý tưởng</li>
              </ul>
            </div>
            <div className="management-wrapper mb-30">
              <h1>Những kỹ năng cần thiết</h1>
              <ul className="list-custom">
                <li>Javascript, HTML, CSS ở mức độ khá</li>
                <li>Có kiến thức cơ bản về ReactJS hoặc VueJS</li>
                <li>Có hiểu biết cơ bản về lý thuyết UI/UX</li>
                <li>Sẵn sàng học hỏi và áp dụng các quy trình phát triển phần mềm.</li>
                <li>Là điểm cộng nếu bạn có kinh nghiệm sử dụng Figma, Sketch, Balsamiq Mockups, PS, AI…</li>
              </ul>
            </div>
            <div className="management-wrapper mb-30">
              <h1>Công nghệ mà chúng tôi đang sử dụng</h1>
              <ul className="list-custom">
                <li>VueJS, NuxtJS, Styled-System, Emotion, Typescript</li>
                <li>Apollo GraphQL Client</li>
                <li>Có hiểu biết cơ bản về lý thuyết UI/UX</li>
                <li>Multi-tenancy web apps</li>
              </ul>
            </div>
            <div className="it-management-text mb-60">
              <h4>Lưu ý</h4>
              <span>
                <b>Bạn không nhất thiết phải biết hết</b> các công nghệ này trước khi ứng tuyển vào vị trí Front-End Developer. Tuy nhiên, bạn sẽ được
                đào tạo và sử dụng những công nghệ mới nhất này trong quá trình làm việc với chúng tôi!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JdTop;
