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
                <h3>TypeScript</h3>
                <p>
                  TypeScript được sử dụng trong hầu hết các thành phần của hệ thống giúp cho code trở nên dễ đọc, giảm thiểu tối đa lỗi, và có khả
                  năng mở rộng tốt cho các dự án lớn.
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
                <h3>NestJS</h3>
                <p>
                  NestJS là một NodeJS framework được sự dụng để phát triển các ứng dụng server-side với khả năng mở rộng tốt, đáp ứng linh hoạt với
                  nhiều yêu cầu khác nhau của dự án
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
                <h3>NuxtJS</h3>
                <p>
                  NuxtJS là một framework dựa trên Vue.js để xây dựng các ứng dụng web hiện đại với đòi hòi về hiệu năng cao, khả năng mở rộng tốt, và
                  đồng thời cũng mang lại trải nghiệm tốt cho developer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="services-wrapper text-center">
              <div className="services-img">
                <img src="assets/img/service/graphql.png" alt="" />
              </div>
              <div className="services-text">
                <h3>GraphQL</h3>
                <p>
                  GraphQL là API query language hiện đại. Khi kết hợp với TypeScript Stack, GraphQL trở nên rất tiện dụng cho developer và giúp đẩy
                  nhanh tốc độ phát triển cũng như tăng hiệu năng cho tât cả các ứng dụng.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div className="services-wrapper text-center">
              <div className="services-img">
                <img src="assets/img/service/github-action.png" width="96px" height="96px" alt="" />
              </div>
              <div className="services-text">
                <h3>Automation & CI/CD</h3>
                <p>
                  Hệ thống Continuous Integration và Continuous Delivery được phát triển bằng những công nghệ hiện đại nhất được đảm bảo tuân theo các
                  best practices. Các tools được sử dụng như: Github Actions, ArgoCD, vv.
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
                <h3>Cloud-native & IaC</h3>
                <p>
                  Sản phẩm được phát triển với tư duy cloud-native để vận dụng hết các lợi thế của cloud computing. Toàn bộ cơ sở hạ tầng đều được
                  Infrastructure as Code. Các công nghệ sử dụng như: Terraform, Kubernetes, Docker, vv.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row" style={{ marginTop: '-1rem' }}>
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
