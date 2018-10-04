import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Shelf extends Component{

	render(){
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.name}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{this.props.books.map((book)=>(
							<Book book={book}/>
						))}
					</ol>
				</div>
			</div>
		)
	}
}

export default Shelf