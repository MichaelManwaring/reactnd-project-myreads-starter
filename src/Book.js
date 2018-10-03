import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'


class Book extends Component{

	render(){
		return (
			<li>
				<div className="book">
				<div className="book-top">
					// add image reference
					<div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("")' }}></div>
						<div className="book-shelf-changer">
							<select>
								<option value="move" disabled>Move to...</option>
								<option value="currentlyReading">Currently Reading</option>
								<option value="wantToRead">Want to Read</option>
								<option value="read">Read</option>
								<option value="none">None</option>
							</select>
						</div>
					</div>
					// add title reference
					<div className="book-title"></div>
					// add author reference
					<div className="book-authors"></div>
				</div>
			</li>
		)
	}
}

export default Book