import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Admin from './components/admin/Index'
class App extends Component {
    render() {
        return (
            <Router>
                <div className="hold-transition skin-blue sidebar-mini">
                <Admin/>

                </div>
            </Router>
        );
    }
}

export default App;
