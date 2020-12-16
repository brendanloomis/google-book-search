import React from 'react';
import './SearchBox.css';

class SearchBox extends React.Component {
    render() {
        return (
            <div className='SearchBox'>
                <form className='search_form'>
                    <label htmlFor='bookSearch'>Search:</label>
                    <input 
                        type='text'
                        name='bookSearch'
                        value={this.props.searchTerm}
                        onChange={e => this.props.handleSearch(e.target.value)}
                    />
                    <button type='submit' onClick={e => this.props.handleSearchSubmit(e)}>Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBox;