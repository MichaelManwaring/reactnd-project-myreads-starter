import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import MainPage from './MainPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then(res=> this.setState({ books: res }))
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={()=>(
          <MainPage books={this.state.books}/>
        )}/>
        <Route exact path='/search' render={()=>(
          <SearchPage books={this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
