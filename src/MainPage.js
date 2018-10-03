import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MainPage extends Component{

	render(){
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
				// add 3 bookshelves
				</div>
				<div className="open-search">
					// make into Link
					<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
				</div>
			</div>
		)
	}
}

export default MainPage