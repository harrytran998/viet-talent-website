import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Team = () => {
  return (
    <div id="team" className="team-area pt-120 pb-100 pos-rel">
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
              {/* <h1>Meet Experience Team Member</h1> */}
              <h1>Các thành viên chủ chốt</h1>
            </div>
          </div>
          <div className="col-xl-5 offset-xl-3 col-lg-6">
            <div className="team-section mb-30">
              <a className="btn" href="https://viettalent.typeform.com/to/lL6WBXxF" target="_blank">
                <span className="btn-text">
                  Hãy join cùng chúng tôi{' '}
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
                <img src="assets/img/team/ducbui.png" alt="" />
              </div>
              <div className="team-text">
                <h4>Đức Bùi</h4>
                <span>Head of Business</span>
                <div>
                  <p>Làm việc tại phòng đổi mới sáng tạo thuộc Bộ Kế Hoạch và Đầu Tư</p>
                  <p>Thạc sĩ ngành Quản trị tại Đại học Harvard (Massachusetts, USA)</p>
                  <p>Thạc sĩ ngành Tài chính tại Pace University (New York, US)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
            <div className="team-wrapper">
              <div className="team-img">
                <img src="assets/img/team/longnguyen.jpeg" alt="" />
              </div>
              <div className="team-text">
                <h4>Long Nguyễn</h4>
                <span>Head of Technical</span>
                <div>
                  <p>Software Architect ở Logrhythm - SIEM solutions và Security Operations Center Services (Colorado, USA) </p>
                  <p>Thạc sĩ ngành Công nghệ thông tin tại Denver University (Colorado, USA)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
            <div className="team-wrapper">
              <div className="team-img">
                <img src="assets/img/team/hieutran.jpeg" alt="" />
              </div>
              <div className="team-text">
                <h4>Hiếu Trần</h4>
                <span>Tech Leader</span>
                <div>
                  <p>Head of Engineering tại Capi Creative</p>
                  <p>Senior Software Engineering tại Teko Việt Nam</p>
                  <p>Software Architect tại Kiu Global Việt Nam</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 mb-30">
            <div className="team-wrapper">
              <div className="team-img">
                <img src="assets/img/team/ngahoang.jpeg" alt="" />
              </div>
              <div className="team-text">
                <h4>Nga Hoàng</h4>
                <span>Human Resources</span>
                <div>
                  <p>Thạc sĩ tại Colorado Boulder University (Colorado, US)</p>
                  <p>Co-Founder của 1 công ty start-up về mảng EduTech</p>
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
