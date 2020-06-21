import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component{

    state = { lat: null, errorMessage: '' };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position =>this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
            );
    }
    componentDidUpdate(){
        console.log("Component just updated - it re-rendered");
    }

    renderContent(){
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }
        
        return <Spinner message="Please Allow Geolocation" />;
    }

    // React expects to define render method
    render(){
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);