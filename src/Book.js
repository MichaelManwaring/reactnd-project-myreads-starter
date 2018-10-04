import React, { Component } from 'react'

class Book extends Component{
	updateSelf(shelf){
		this.props.onUpdateBook(this.props.book, shelf)
		this.props.book.shelf=shelf
	}


	render(){
		const { book } = this.props
		return (
			<li>
				<div className="book">
				<div className="book-top">
					<div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail : ''}")` }}></div>
						<div className="book-shelf-changer">
							<select
								value={book.shelf || 'none'}
								onChange={(e)=>this.updateSelf(e.target.value)}
							>
								<option value="move" disabled>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">{book.title}</div>
					<div className="book-authors">{book.authors ? book.authors.join(', ') : 'No authors'}</div>
				</div>
			</li>
		)
	}
}

export default Book