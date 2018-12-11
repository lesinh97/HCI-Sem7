import React from "react";

class header_top extends React.Component {
  render() {
    return (
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-4 header-top-left">
              <a href="#">
                <span className="lnr lnr-phone" />
                <span className="text">
                  <span className="text">+84 77 858 2046</span>
                </span>
              </a>
              <a href="#">
                <span className="lnr lnr-envelope" />
                <span className="text">
                  <span className="text">AN HIU XINH</span>
                </span>
              </a>
            </div>
            <div className="col-lg-6 col-sm-6 col-8 header-top-right">
              <a href="#" className="text-uppercase">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default header_top;
