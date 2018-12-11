import React from "react";
import ReactDOM from 'react-dom'
import Header_top from "../components/Homepage/Header/header_top";
import Header_main from "../components/Homepage/Header/header_main";

import registerServiceWorker from '../registerServiceWorker';
const Header = () => {
  return (
    <header className="header_area">
      <Header_top />
      <Header_main />
    </header>
  );
}
export default header;

ReactDOM.render(<Header />, document.getElementById('header'));
registerServiceWorker();
