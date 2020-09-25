import React from 'react';

const FooterJD = () => {
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
            <div className="col-xl-9 col-lg-9 col-md-8" style={{ display: 'flex', alignSelf: 'center' }}>
              <div className="footer-wrapper">
                <h4 className="footer-title">
                  Nếu bạn có bất cứ câu hỏi gì, xin vui lòng gửi về địa chỉ email:{' '}
                  <a href="mailto:hr@viettalent.vn">
                    <span style={{ color: '#096bd8' }}>hr@viettalent.vn</span>
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterJD;
