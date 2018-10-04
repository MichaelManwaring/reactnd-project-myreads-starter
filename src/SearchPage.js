import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'



class SearchPage extends Component{
	state = {
		query: '',
		results: []
	}

	updateQuery(query){
		this.setState({query: query}, this.searchQuery)
	}

	searchQuery(){
		console.log(this.state.query)
		if (this.state.query.length>0){
			BooksAPI.search(this.state.query.trim()).then(res => {
				if (Array.isArray(res)){
					this.props.books.forEach((shelvedBook)=>{
						res.forEach((searchedBook)=>{
							if (searchedBook.id === shelvedBook.id) {
								searchedBook.shelf = shelvedBook.shelf;
							}
						})
					})
					this.setState({ results: res })
				}
			}).catch()
		} else {
			this.setState({ results: []})
		}
	}

	render(){
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to='/'>Close</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value={this.state.query}
							onChange={(e)=>this.updateQuery(e.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{this.state.results.map((book) => (
							<Book
								book={book}
								key={book.id}
								onUpdateBook={(book, shelf) => this.props.onUpdateBook(book, shelf)}
							/>
						))}
					</ol>
				</div>
			</div>
		)
	}
}

export default SearchPage