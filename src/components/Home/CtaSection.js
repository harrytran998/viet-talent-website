import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cta = () => {
  return (
    <div className="cta-area pt-125 pb-95" style={{ 'background-image': 'url(assets/img/bg/bg-2.jpg)' }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="cta-text mb-30">
              <span>Chúng tôi đang cần tuyển lập trình viên cho dự án Việt Talent</span>
              <h1>Hãy tham gia đội ngũ Việt Talent ngay hôm nay!</h1>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="cta-button text-lg-right mb-30">
              <a className="btn btn-white btn-none" href="https://viettalent.typeform.com/to/lL6WBXxF" target="_blank">
                <span className="btn-text">
                  Ứng tuyển{' '}
                  <i>
                    <FontAwesomeIcon icon={['fas', 'long-arrow-right']} />
                  </i>
                </span>{' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
