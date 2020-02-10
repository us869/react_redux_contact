import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
import { Provider } from 'react-redux';
import { composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <h1 className="alert alert-info">React-Redux Demo App</h1>
                    <div className="row">
                        <div className="col">
                            <ContactForm />
                        </div>
                        <div className="col">
                            <ContactList />
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
