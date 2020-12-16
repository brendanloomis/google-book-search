import React from 'react';
import './SearchBar.css';
import SearchBox from '../SearchBox/SearchBox';
import FilterOptions from '../FilterOptions/FilterOptions';

class SearchBar extends React.Component {
    render() {
        return (
            <div className='SearchBar'>
                <SearchBox 
                    searchTerm={this.props.searchTerm} 
                    handleSearchSubmit={this.props.handleSearchSubmit}
                    handleSearch={this.props.handleSearch}/>
                <FilterOptions 
                    handlePrintType={this.props.handlePrintType} 
                    handleBookType={this.props.handleBookType}/>
            </div>
        );
    };
}

export default SearchBar;