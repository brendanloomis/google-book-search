import React from 'react';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import List from './List/List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      printTypeOption: 'all',
      bookTypeOption: null,
      books: []
    };
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const baseUrl = 'https://www.googleapis.com/books/v1/volumes';
    const apiKey = 'AIzaSyD6BPDjSXerk8bFjYHEesLh73GV67YftBs';
    let params = {}
    
    if(this.state.bookTypeOption === null) {
      params = {
        q: this.state.searchTerm.split(' ').join('+'),
        printType: this.state.printTypeOption,
        key: apiKey
      }
    } else {
      params = {
        q: this.state.searchTerm.split(' ').join('+'),
        filter: this.state.bookTypeOption,
        printType: this.state.printTypeOption,
        key: apiKey
      };
    }

    const queryItems = Object.keys(params)
      .map(key => `${key}=${params[key]}`)
      .join('&');

    console.log(queryItems);

    const url = baseUrl + '?' + queryItems;

    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        const dataArr = data.items;
        const books = [];
        for (let i = 0; i < dataArr.length; i++) {
          books.push(dataArr[i].volumeInfo);
        }
        this.setState({
          books: books
        });
        console.log(this.state.books);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  setSearchQuery(query) {
    console.log('Search term is: ', query);
    this.setState({
      searchTerm: query
    });
  }

  setPrintType(type) {
    console.log(type);
    this.setState({
      printTypeOption: type
    });
  }

  setBookType(type) {
    console.log(type);
    this.setState({
      bookTypeOption: type
    });
  }

  render() {
    return (
      <main className='App'>
        <Header />
        <SearchBar 
          searchTerm={this.state.searchTerm}
          handleSearch={query => this.setSearchQuery(query)}
          handlePrintType={type => this.setPrintType(type)}
          handleBookType={type => this.setBookType(type)}
          handleSearchSubmit={e => this.handleSubmit(e)}
        />
        <List books={this.state.books}/>
      </main>
    );
  };
}

export default App;