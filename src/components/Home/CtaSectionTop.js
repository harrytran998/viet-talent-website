import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CtaTop = () => {
  return (
    <div className="cta-area pt-20 pb-20" style={{ 'background-image': 'url(assets/img/bg/bg-2.jpg)' }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-7">
            <div className="cta-text mb-10">
              <span>Bạn đang tìm kiếm một môi trường làm việc năng động và chuyên nghiệp?</span>
              <h1>Hãy tham gia ngay vào đội ngũ Việt Talent</h1>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5">
            <div className="services-text cta-button text-lg-right mb-10">
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

export default CtaTop;
