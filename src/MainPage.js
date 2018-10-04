import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class MainPage extends Component{
	render(){
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<Shelf
						name='Currently Reading'
						books={this.props.books.filter((book) => book.shelf === 'currentlyReading')}
            			onUpdateBook={(book, shelf) => this.props.onUpdateBook(book, shelf)}
					/>
					<Shelf
						name='Want to Read'
						books={this.props.books.filter((book) => book.shelf === 'wantToRead')}
            			onUpdateBook={(book, shelf) => this.props.onUpdateBook(book, shelf)}
					/>
					<Shelf
						name='Read'
						books={this.props.books.filter((book) => book.shelf === 'read')}
            			onUpdateBook={(book, shelf) => this.props.onUpdateBook(book, shelf)}
					/>
				</div>
				<div className="open-search">
					<Link to='/search'>Add a book</Link>
				</div>
			</div>
		)
	}
}

export default MainPage