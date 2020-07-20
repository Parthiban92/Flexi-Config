import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Form extends Component {

  constructor(props){
        super(props);
        this.state = {
          person_name: '',
          state: ''
        }
  }

  handleData = (event) => {
    if(event.target.name === 'person_name'){
      this.setState({person_name: event.target.value})
    }
    if(event.target.name === 'states'){
       this.setState({state: event.target.value})
    }
  }

  handleSubmit = (e) => {
      e.preventDefault();
      let isValid = true;
      if(Object.keys(this.state).length === 0) {
        alert ("All fields are required!")
        return;
      }
      Object.keys(this.state).forEach(n => {
          if(!this.state[n] || this.state[n].trim()  === '') {
            alert(n + ' cannot be empty');
            isValid = false
          }
      });
      if(isValid){
        alert("Submitted: "+ JSON.stringify(this.state));
      }
  }

  render() {
    return (
       <div className="wrapper">
        <form className="form-signin"> 
             <h2 className="form-signin-heading" style={{textAlignVertical: "center",textAlign: "center"}}>Form</h2>
             <div className="form-group"> 
                {
                  this.props.flexiConfig.items.map(form_field => {
                    return <div>
                      {form_field.type === "TextField" && 
                        <div className ="form-group">
                            <label className="control-label">{form_field.label}:</label>
                            <input name={form_field.name} onChange={this.handleData} className="form-control" placeholder={form_field.label} /> 
                        </div>}
                     {form_field.type === "DropDown" && 
                        <div className ="form-group">
                          <label className="control-label" >{form_field.label}:</label>
                          <select name={form_field.name} className="small mb-1 form-control" onChange={this.handleData} placeholder={form_field.label}>
                            <option> -- Please Select --</option>
                            {form_field.values.map((team) => <option key={team} >{team}</option>)}
                                 </select>
                        </div>}
                    </div>
                  })   
                }     
              </div>
              <div className="form-group"> 
                <button onClick={this.handleSubmit} className="btn btn-lg btn-primary btn-block">Register</button>   
              </div>  
              
        </form>
      </div>)
  }
}

Form.propTypes = {
  flexiConfig: PropTypes.object
}

export default Form;