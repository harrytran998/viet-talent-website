import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cta = () => {
  return (
    <div className="cta-area pt-20" style={{ 'background-image': 'url(assets/img/bg/bg-2.jpg)' }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-10">
            <div className="cta-text mb-30">
              <span>Chúng tôi đang cần tuyển lập trình viên cho dự án Việt Talent</span>
              <h1>Hãy tham gia đội ngũ Việt Talent ngay hôm nay!</h1>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2" style={{ display: 'flex', alignSelf: 'flex-start' }}>
            <div className="services-text text-lg-right mb-10">
              <a className="cta-custom" href="/job" target="_blank" style={{ backgroundColor: 'white' }}>
                <span className="services-button">
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
