import React from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';

class List extends React.Component {
    render() {
        const list = this.props.books
            .map((book, key) => <ListItem book={this.props.books[key]} key={key} />);
        return (
            <div className='List'>
                <ul>
                    {list}
                </ul>
            </div>
        );
    };
}

export default List;