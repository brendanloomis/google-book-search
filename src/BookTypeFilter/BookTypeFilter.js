import React from 'react';
import './BookTypeFilter.css';

class BookTypeFilter extends React.Component {
    render() {
        return (
            <div className='BookTypeFilter'>
                <label htmlFor='book_type'>Book Type:</label>
                <select 
                    id='book_type'
                    name='book_type'
                    onChange={e => this.props.handleBookType(e.target.value)}
                >
                    <option value={null}>No Filter</option>
                    <option value='free-ebooks'>Free eBooks</option>
                    <option value='paid-ebooks'>Paid eBooks</option>
                    <option value='ebooks'>eBooks</option>
                </select>
            </div>
        )
    }
}

export default BookTypeFilter;