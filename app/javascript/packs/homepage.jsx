import React from "react";
import ReactDOM from "react-dom";
import main_header from "components/Main_Header/main_header.jsx";

function Header() {
  return (
    <main_header />
  );
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Header/>, document.getElementById('header'))
});