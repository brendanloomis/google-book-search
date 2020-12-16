import React from 'react';
import './FilterOptions.css';
import PrintTypeFilter from '../PrintTypeFilter/PrintTypeFilter';
import BookTypeFilter from '../BookTypeFilter/BookTypeFilter';

class FilterOptions extends React.Component {
    render() {
        return (
            <div className='FilterOptions'>
                <PrintTypeFilter handlePrintType={this.props.handlePrintType}/>
                <BookTypeFilter handleBookType={this.props.handleBookType}/>
            </div>
        )
    }
}

export default FilterOptions;
