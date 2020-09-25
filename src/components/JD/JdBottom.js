import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const JdTop = () => {
  return (
    <div id="jd-bottom" className="it-management-area pt-50 pb-30" style={{ 'background-image': 'url(assets/img/bg/bg-16.jpg)' }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-10 col-lg-10 mb-30">
            <div className="it-management-wrapper mb-30">
              <h1 style={{ color: 'rgb(230 245 17)' }}>Công nghệ mà chúng tôi đang sử dụng</h1>
              <ul className="list-custom">
                <li className="text-white">VueJS, NuxtJS, Styled-System, Emotion, Typescript</li>
                <li className="text-white">Apollo GraphQL Client</li>
                <li className="text-white">Có hiểu biết cơ bản về lý thuyết UI/UX</li>
                <li className="text-white">Multi-tenancy web apps</li>
              </ul>
            </div>
            <div className="it-management-wrapper">
              <h1 style={{ color: 'rgb(230 245 17)' }}>Quyền lợi</h1>
              <ul className="list-custom">
                <li className="text-white">Lương & Thưởng: 10-30 triệu/tháng</li>
                <li className="text-white">
                  Cơ hội Học tập & Phát triển: bạn sẽ được phát triển kỹ năng và sự nghiệp của mình với các đồng nghiệp có nhiều kinh nghiệm làm việc
                  cả trong và ngoài nước
                </li>
                <li className="text-white">
                  Văn hóa tôn trọng và bình đẳng: Trong đội ngũ Việt Talent, mọi ý kiến cá nhân đều được tôn trọng và có vai trò bình đẳng trong việc
                  phát triển sản phẩm
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2">
            <div className="services-text cta-button text-lg-right mb-10">
              <a
                className="cta-custom"
                href="/job"
                target="_blank"
                style={{ backgroundColor: 'white', padding: '30px 75px', fontSize: '30px', marginLeft: '-3rem', marginRight: '-10rem' }}
              >
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

export default JdTop;