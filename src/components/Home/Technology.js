import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Technology = () => {
  return (
    <div id="technology" className="services-area pt-120 pb-30" style={{ 'background-image': 'url(assets/img/bg/bg-1.jpg)' }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title text-center ml-50 mr-50 mb-80">
              <span className="border-left-1"></span>
              <span>Công nghệ chúng tôi sử dụng</span>
              <span className="border-right-1"></span>
              {/* <h1>We always learn more and apply new technologies to our products</h1> */}
              <h1>Chúng tôi luôn học hỏi và ứng dụng những công nghệ mới nhất vào sản phẩm của mình</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="services-wrapper text-center">
              <div className="services-img">
                <img src="assets/img/service/typescript.png" alt="" />
              </div>
              <div className="services-text">
                <h3>Ngôn ngữ</h3>
                <p>
                  Chúng tôi dùng <b>Typescript</b> có khả năng mở rộng và dễ dàng trong quá trình nhóm phát triển
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="services-wrapper text-center">
              <div className="services-img">
                <img src="assets/img/service/nestjs.png" alt="" />
              </div>
              <div className="services-text">
                <h3>Backend</h3>
                <p>
                  NestJs - 1 framework cực mạnh mẽ của NodeJs, cực kỳ linh hoạt với <b>modular architecture</b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="services-wrapper text-center">
              <div className="services-img">
                <img src="assets/img/service/nuxtjs.png" alt="" />
              </div>
              <div className="services-text">
                <h3>Frontend</h3>
                <p>NuxtJs - 1 framework của VueJs đang rất phát triển để hỗ trợ SSR cực tốt và đem lại hiệu năng tuyệt vời cho người dùng cuối</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="services-wrapper text-center">
              <div className="services-img">
                <img src="assets/img/service/graphql.png" alt="" />
              </div>
              <div className="services-text">
                <h3>API Query Language</h3>
                <p>GraphQl - 1 ngôn ngữ đặc biệt giúp các nhà phát triển BE và FE dễ dàng tiếp cận với nhau</p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="services-wrapper text-center">
              <div className="services-img">
                <img src="assets/img/service/github-action.png" width="96px" height="96px" alt="" />
              </div>
              <div className="services-text">
                <h3>CI/CD</h3>
                <p>
                  Với CI, <b>Github Action</b> cực trực quan và dễ dùng, còn CD là <b>ArgoCD</b>, có khả năng tự động hoá, theo dõi, và dễ dàng sử
                  dụng
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="services-wrapper text-center">
              <div className="services-img">
                <img src="assets/img/service/aws.png" alt="" />
              </div>
              <div className="services-text">
                <h3>Infrastructure</h3>
                <p>
                  Không thể không dùng bộ 3 <b>Docker, Kurbernest, AWS</b>, chúng quá tốt để phát triển sản phẩm này
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title text-center ml-50 mr-50">
              <span className="border-right-1"></span>
              {/* <h1>We always learn more and apply new technologies to our products</h1> */}
              <h3>Hãy tham gia với chúng tôi để được cập nhật những công nghệ mới nhất và tiếp cận với quy trình làm việc cấp quốc tế!</h3>
            </div>
          </div>
        </div>
        <div className="services-text cta-button text-center" style={{ marginTop: '0' }}>
          <a className="cta-custom" href="/job" target="_blank" style={{ backgroundColor: 'white', padding: '30px 75px', fontSize: '30px' }}>
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
  );
};

export default Technology;
