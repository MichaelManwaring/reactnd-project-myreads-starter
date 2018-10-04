import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import MainPage from './MainPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    books : []
  }

  componentDidMount(){
      BooksAPI.getAll().then(res=> this.setState({ books: res }))
  }

  updateBook(book, shelf){
    BooksAPI.update(book, shelf).then(
      BooksAPI.getAll().then(res=> this.setState({ books: res }))
    )
  }

  render() {

    return (
      <div className="app">
        <Route exact path='/' render={()=>(
          <MainPage
            books={this.state.books}
            onUpdateBook={(book, shelf) => this.updateBook(book, shelf)}
          />
        )}/>
        <Route exact path='/search' render={()=>(
          <SearchPage
            books={this.state.books}
            onUpdateBook={(book, shelf) => this.updateBook(book, shelf)}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
