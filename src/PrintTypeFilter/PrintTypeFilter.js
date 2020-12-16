import React from 'react';
import './PrintTypeFilter.css';

class PrintTypeFilter extends React.Component {
    render() {
        return (
            <div className='PrintTypeFilter'>
                <label htmlFor='print_type'>Print Type:</label>
                <select
                    id='print_type'
                    name='print_type'
                    onChange={e => this.props.handlePrintType(e.target.value)}
                >
                    <option value='all'>All</option>
                    <option value='books'>Books</option>
                    <option value='magazines'>Magazines</option>
                </select>
            </div>
        );
    };
}

export default PrintTypeFilter;