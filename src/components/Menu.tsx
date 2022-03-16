import React from "react";
import "../styles.css";
import { Link } from 'react-router-dom';

function Menu(props: any) {
  return (
	<div id="menu">
		<Link key={-1} to={`/search`}><h1>LIBRARY</h1></Link>
		<h1>|</h1>
		<Link key={-1} to={`/search`}><h1>Search</h1></Link>
		<Link key={-1} to={`/addBook`}><h1>Add book</h1></Link>
		<Link key={-1} to={`/aboutUs`}><h1>About us</h1></Link>
	</div>
  );
}

export default Menu;
