import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'


class Shelf extends Component{

	render(){
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">Currently Reading</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
					// add code for books by type


					</ol>
				</div>
			</div>
		)
	}
}

export default Shelf