import React from "react";
import "../styles.css";
import BookInterface from "./BookInterface";
import {Genre} from "./Genre";
import { useParams, Link } from 'react-router-dom';

function BookDetails(props: any) {
    const { id }: any = useParams();
	let res:any;
	
	const handleBookRemove = (e:any) => {
		alert("Book removed successfully");
		props.removeBook(id);
	}
	
    for (var i=0; i < props.books.length; i++) {
		if(props.books[i]["ISBN"] == id){
			let book=props.books[i];
			res = <div id="details">
				<img src={book.image}/>
				<br />
				<h3>Title: {book.title}</h3>
				<p>Author: {book.author}</p>
				<p>Pages: {book.pages}</p>
				<p>ISBN: {book.ISBN}</p>
				<Link to="/expenses">
					<button onClick={handleBookRemove}>X</button>
				</Link>
			</div>;
		}
    }
  return (
	  res
  );
}

export default BookDetails;
