import React from 'react'; 
import ReactDOM from 'react-dom'
import './style/index.css'
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
const errror = require('./images/error.png')
class App extends React.Component {
    render(){ // Every react component has a render method.
      return( // Every render method returns jsx. Jsx looks like HTML, but it's actually javascript and functions a lot like xml, with self closing tags requiring the `/` within the tag in order to work propperly
        <div className="out">
          Hello World!
        
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'))