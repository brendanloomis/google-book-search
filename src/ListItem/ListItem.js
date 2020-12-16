import React from 'react';
import './ListItem.css';

class ListItem extends React.Component {
    handleAuthors(authors) {
        let authorString = '';
        for (let i = 0; i < authors.length; i++) {
            if (i < (authors.length - 1)) {
                authorString += authors[i] + ', ';
            } else {
                authorString += authors[i];
            }
        }
         return authorString;
    };

    render() {
        return (
            <li className='ListItem'>
                <h2>{this.props.book.title}</h2>
                <div className='ListItem_content'>
                    <div className='ListItem_img'>
                        <img src={this.props.book.imageLinks.thumbnail} />
                    </div>
                    <div className='ListItem_info'>
                        <p>Author: {this.handleAuthors(this.props.book.authors)}</p>
                        <p>{this.props.book.description}</p>
                    </div>
                </div>
            </li>
        );
    };
}

export default ListItem;