import React from "react";
import main_header_search from "./main_header_search";
import main_header_nav from "./main_header_nav";

class main_header_menu extends React.Component {
  render() {
    return (
      <div className="main_menu">
        <main_header_search />
        <main_header_nav />
      </div>
    );
  }
}

export default main_header_menu;
