import React from "react";
import main_header_top from "./main_header_top";
import main_header_menu from "./main_header_menu";

class main_header extends React.Component {
  render() {
    return (
      <header className="header_area">
        <main_header_top />
        <main_header_menu />
      </header>
    );
  }
}

export default main_header;
