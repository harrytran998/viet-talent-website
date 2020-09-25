import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Culture = () => {
  return (
    <div id="culture" className="working-process-area pos-rel pt-120 pb-100" style={{ backgroundImage: `url(${'assets/img/bg/bg-6.jpg'})` }}>
      <div className="shape d-none d-xl-block">
        <div className="shape-item wor-01 rotateme">
          <img src="assets/img/shape/shape-2.png" alt="" />
        </div>
        <div className="shape-item wor-02 rotateme">
          <img src="assets/img/shape/shape-3.png" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title section-title-white text-center ml-50 mr-50 mb-75">
              <span className="border-left-1"></span>
              <span>Việt Talent</span>
              <span className="border-right-1"></span>
              <h1 style={{ textTransform: 'uppercase' }}>Văn hóa doanh nghiệp</h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-between">
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="working-process-wrapper text-center mb-30">
              <div className="working-process-icon">
                <i>
                  <FontAwesomeIcon icon={['fal', 'head-side-brain']} />
                </i>
                <div className="angle-icon">
                  <img src="assets/img/shape/line.png" alt="" />
                </div>
              </div>
              <div className="working-process-text">
                <h3>Minh bạch</h3>
                <p>Mô hình tổ chức ngang bằng. Mọi ý kiến đóng góp của các thành viên đều được tôn trọng và khuyến khích</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="working-process-wrapper text-center mb-30">
              <div className="working-process-icon">
                <i>
                  <FontAwesomeIcon icon={['fal', 'atom-alt']} />
                </i>
                <div className="angle-icon">
                  <img src="assets/img/shape/line.png" alt="" />
                </div>
              </div>
              <div className="working-process-text">
                <h3>Sáng tạo</h3>
                {/* <p>Viet Talent environment enables everyone to maximize potentials and talents, whatever it is.</p> */}
                <p>Viet Talent mong muốn xây dựng 1 môi trường làm việc mà mọi người có thể phát huy tối đa tài năng và sự sáng tạo</p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="working-process-wrapper mb-30 text-center">
              <div className="working-process-icon">
                <i>
                  <FontAwesomeIcon icon={['fal', 'gem']} />
                </i>
              </div>
              <div className="working-process-text">
                <h3>Linh hoạt</h3>
                {/* <p>Build your own schedule. Choose your own workspace. Be the best of yourself!</p> */}
                <p>Mọi người có thể đề xuất một không gian và thời gian làm việc phù hợp để đạt được hiệu quả công việc cao nhất</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Culture;
