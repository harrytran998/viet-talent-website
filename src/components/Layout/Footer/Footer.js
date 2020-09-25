import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div id="contact" className="footer-area grey-bg pt-20">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4">
              <div className="footer-wrapper" style={{ marginBottom: '0' }}>
                <div className="">
                  <a href="/">
                    <img src="assets/img/logo/logo.png" alt="" height="150px" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-8">
              <div className="footer-wrapper">
                <h4 className="footer-title">Thông tin liên hệ:</h4>
                <div className="footer-info"></div>
                <div className="contact-link d-flex">
                  <div className="contact-box">
                    <div className="contact-address-icon">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="contact-address-text">
                      <h4>(+84)90 101 8888</h4>
                    </div>
                  </div>
                  <div className="contact-box">
                    <div className="contact-address-icon">
                      <i className="far fa-envelope-open"></i>
                    </div>
                    <div className="contact-address-text">
                      <h4>hr@viettalent.vn</h4>
                    </div>
                  </div>
                  <div className="contact-box">
                    <div className="contact-address-icon">
                      <i className="far fa-map-marker-alt"></i>
                    </div>
                    <div className="contact-address-text">
                      <h4>29 Trần Bình Trọng, Hai Bà Trưng, Hà Nội.</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
