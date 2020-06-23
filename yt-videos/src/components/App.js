import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

const key = 'AIzaSyCQ0FdfNgZ97hoR1r1MrDT4P2t_wuO4n5A';

class App extends React.Component {


    onTermSubmit = async term => {
        const response = await youtube
        .get('/search',{
            params: {
                q: term,
                part: 'snippet',
                type: 'video',
                maxResults: 5,
                key: `${key}`
            }
        });

        console.log(response);
    };


    render(){
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit} />
        </div>
        );
    }
}

export default App;