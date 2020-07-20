import React, { Component } from 'react';
import Form from './Form';
import './App.css';
const flexiConfig = {

items: [{

  "name": "person_name",

  "label": "Person's Name",

  "type": "TextField",

  "values":"",

  }, {

  "name": "states",

  "label": "Person's state",

  "type": "DropDown",

  "values": [

                 "Maharashtra",

                 "Kerala",

                 "Tamil Nadu"

  ]}
]

};
class App extends Component {
  constructor() {
    super();
    this.state = {
      flexiConfig: ''
    };
  }
 

  render() {
    return (
      <div>
     
        <Form flexiConfig={flexiConfig}/>
      </div>
    );
  }
}


export default App;