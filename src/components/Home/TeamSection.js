import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Team = () => {
  return (
    <div className="team-area pt-120 pb-100 pos-rel">
      <div className="shape d-none d-xl-block">
        <div className="shape-item team-01 bounce-animate">
          <img src="assets/img/shape/shape-1.png" alt="" />
        </div>
      </div>
      <div className="container">
        <div className="row mb-50">
          <div className="col-xl-4 col-lg-6">
            <div className="section-title  mb-30">
              <span className="b-sm-left-1"></span>
              <span className="b-sm-left-2"></span>
              <span className="sub-t-left">our Team</span>
              <h1>Meet Experience Team Member</h1>
            </div>
          </div>
          <div className="col-xl-5 offset-xl-3 col-lg-6">
            <div className="team-section mb-30">
              <a className="btn" href="https://viettalent.typeform.com/to/lL6WBXxF" target="_blank">
                <span className="btn-text">
                  join with us{' '}
                  <i>
                    <FontAwesomeIcon icon={['fas', 'long-arrow-right']} />
                  </i>
                </span>{' '}
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
            <div className="team-wrapper">
              <div className="team-img">
                <img src="assets/img/team/team-01.jpg" alt="" />
              </div>
              <div className="team-text">
                <h4>Duc Bui</h4>
                <span>Head of Business</span>
                <div className="team-icon">
                  <a href="#">
                    <i>
                      <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </i>
                  </a>
                  <a href="#">
                    <i>
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
            <div className="team-wrapper">
              <div className="team-img">
                <img src="assets/img/team/team-02.jpg" alt="" />
              </div>
              <div className="team-text">
                <h4>Long Nguyen</h4>
                <span>Head of Technical</span>
                <div className="team-icon">
                  <a href="#">
                    <i>
                      <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </i>
                  </a>
                  <a href="#">
                    <i>
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
            <div className="team-wrapper">
              <div className="team-img">
                <img src="assets/img/team/team-03.jpg" alt="" />
              </div>
              <div className="team-text">
                <h4>Hieu Tran</h4>
                <span>Tech Leader</span>
                <div className="team-icon">
                  <a href="#">
                    <i>
                      <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </i>
                  </a>
                  <a href="#">
                    <i>
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
            <div className="team-wrapper">
              <div className="team-img">
                <img src="assets/img/team/team-04.jpg" alt="" />
              </div>
              <div className="team-text">
                <h4>Nga Hoang</h4>
                <span>Human Resources</span>
                <div className="team-icon">
                  <a href="#">
                    <i>
                      <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </i>
                  </a>
                  <a href="#">
                    <i>
                      <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
