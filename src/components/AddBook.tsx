import React, { ChangeEvent, FormEvent } from "react";
import "../styles.css";
import BookInterface from "./BookInterface";
import {Genre} from "./Genre";
import { Link } from 'react-router-dom';

function AddBook(props: any) {
	let storedBase64:any, isbn:any, title:any, author:any, genre:any=1, pages:any;

	const handleSubmit = (e: FormEvent) => {
		let book:BookInterface = {
			ISBN: isbn,
			image: storedBase64,
			title,
			author,
			genre,
			pages
		}
		props.addBook(book);
		alert("Book added successfully");
		e.preventDefault();
	}
	
	const convertToBase64 = (file: any) => {
		return new Promise((resolve, reject) => {
		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);
		fileReader.onload = () => {
			resolve(fileReader.result);
		};
		fileReader.onerror = (error) => {
			reject(error);
		};
		});
	};
	const handleFileUpload = async (e:any) => {
		const file = e.target.files[0];
		const base64 = await convertToBase64(file);
		storedBase64 = base64;
	};
	
	let genres:any=[];
	for (let i = 1; Genre[i] != undefined; i++) {
		genres.push({name:Genre[i], key:i});
	} 
	
	return (
		<form onSubmit={handleSubmit} id="addBookForm">
			<h2>New book form</h2>
			<label>ISBN:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<input type="text" onChange={(e) => {isbn = e.target.value}}/>
			</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<br/>			<label>title:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<input type="text" onChange={(e) => {title = e.target.value}}/>
			</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<br/>
			<label>author:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<input type="text" onChange={(e) => {author = e.target.value}}/>&nbsp;&nbsp;&nbsp;
			</label>
			<br/>
			<label>genre:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<select name="genre" id="genre" onChange={(e) => {genre = e.target.value}}>
					{genres.map((genre : any) => (
						<option key={genre.key} value={genre.key}>{genre.name}</option>
					))}
				</select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			</label>
			<br/>
			<label>pages:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<input type="number"onChange={(e) => {pages = e.target.value}}/>
				&nbsp;&nbsp;&nbsp;
			</label>
			<br/>
			<label>image:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<input 
					type="file" 
					id="pictureInput" 
					name="picture" 
					onChange={(e) => handleFileUpload(e)}/>
			</label>
			<br/>
			<br/>
			<input type="submit" value="Add book" />
		</form>
	);
}

export default AddBook;
