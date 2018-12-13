import React from "react";
import { Link } from 'react-router-dom'
class header_top extends React.Component {
  render() {
    return (
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-4 header-top-left">
              <Link to="#">
                <span className="lnr lnr-phone" />
                <span className="text">
                  <span className="text">+84 77 858 2046</span>
                </span>
              </Link>
              <Link to="#">
                <span className="lnr lnr-envelope" />
                <span className="text">
                  <span className="text">AN HIU XINH</span>
                </span>
              </Link>
            </div>
            <div className="col-lg-6 col-sm-6 col-8 header-top-right">
            <Link to="#" className="text-uppercase">
                Username
              </Link>
              <Link to="#" className="text-uppercase">
                Login
              </Link>
              <Link to="#" className="text-uppercase">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default header_top;
