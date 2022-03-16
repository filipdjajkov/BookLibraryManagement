import React from "react";
import "../styles.css";
import BookInterface from "./BookInterface";
import {Genre} from "./Genre";

function BookPreview(props: any) {
  return (
    <div className="bookPreview">
      <img src={props.book.image}/>
      <br /><br />
      <h3>{props.book.title}</h3>
      <br/>
      <p>{props.book.author}</p>
      <br />
    </div>
  );
}

export default BookPreview;
