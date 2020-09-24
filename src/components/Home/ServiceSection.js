import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Service = () => {
  return (
    <div className="services-area pt-120 pb-100" style={{ 'background-image': 'url(assets/img/bg/bg-1.jpg)' }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="section-title text-center ml-50 mr-50 mb-80">
              <span className="border-left-1"></span>
              <span>Our technologies</span>
              <span className="border-right-1"></span>
              <h1>We always learn more and apply new technologies to our products</h1>
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
                <h3>Language</h3>
                <p>
                  We use <b>Typescript</b> to be capable to scale and early spotted bugs
                </p>
                <a href="https://medium.com/@jtomaszewski/why-typescript-is-the-best-way-to-write-front-end-in-2019-feb855f9b164">
                  {' '}
                  <span className="services-button">
                    read more{' '}
                    <i>
                      <FontAwesomeIcon icon={['fas', 'long-arrow-right']} />
                    </i>
                  </span>{' '}
                </a>
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
                <p>We use NestJs - A power NodeJs framework</p>
                <a href="https://nestjs.com/">
                  {' '}
                  <span className="services-button">
                    read more{' '}
                    <i>
                      <FontAwesomeIcon icon={['fas', 'long-arrow-right']} />
                    </i>
                  </span>{' '}
                </a>
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
                <p>We use NuxtJs - The intuitive Vue framework</p>
                <a href="https://nuxtjs.org/">
                  {' '}
                  <span className="services-button">
                    read more{' '}
                    <i>
                      <FontAwesomeIcon icon={['fas', 'long-arrow-right']} />
                    </i>
                  </span>{' '}
                </a>
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
                <p>We use GraphQl </p>
                <a href="https://graphql.org/">
                  {' '}
                  <span className="services-button">
                    read more{' '}
                    <i>
                      <FontAwesomeIcon icon={['fas', 'long-arrow-right']} />
                    </i>
                  </span>{' '}
                </a>
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
                <p>We use Github Action and ArgoCD</p>
                <a href="https://github.com/features/actions">
                  {' '}
                  <span className="services-button">
                    read more{' '}
                    <i>
                      <FontAwesomeIcon icon={['fas', 'long-arrow-right']} />
                    </i>
                  </span>{' '}
                </a>
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
                <p>We use Docker, Kurbernest, AWS</p>
                <a href="https://aws.amazon.com/vi/">
                  {' '}
                  <span className="services-button">
                    read more{' '}
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
    </div>
  );
};

export default Service;
