import React from 'react';
import Popup from 'react-popup';
import {Form, Text} from 'react-form';
import Database from './../firebase/Database';

class AddGathering extends React.Component {
  
  render() {
    return (
        <div id="add-gathering-button">
            <a href="#" className="btn btn-lg">Add gathering</a>
        </div>
    );

  	constructor(props) {
  		super(props);
  	}

  	showPopup() {
		Popup.create({
			content: 
				<Form
				    onSubmit={(values) => {
				      Database.addGathering(values);
				    }}
				    validate={({ title }) => {
				      return {
				        title: !title ? 'A title is required' : undefined
				      }
				    }}>
				    {({submitForm}) => {
				      return (
				        <form onSubmit={submitForm}>
				        	<div>
				              <h6>Gathering Name</h6>
				              <Text 
				                field='title' 
				                placeholder='CSC 330 Study'
				              />
				            </div>
				        	<div>
				              <h6>Organizer Name</h6>
				              <Text 
				                field='organizer' 
				                placeholder='Michael'   
				               />
				            </div>
				            <div>
				              <h6>Time</h6>
				              <Text 
				                field='time' 
				                placeholder='3:00PM-4:00PM' 
				              />
				            </div>
				            <div>
				              <h6>Date</h6>
				              <Text 
				                field='date' 
				                placeholder='March 8, 2017'
				              />
				            </div>
				            <div>
				              <h6>Location</h6>
				              <Text 
				                field='location' 
				                placeholder='Bay Center' 
				              />
				            </div>
				            <div>
				              <h6>Description</h6>
				              <Text
				                field='description' 
				                placeholder='Studying for 330 exam!'
				              />
				            </div>
				          <button type='submit'>Submit</button>
				        </form>
				      )
				    }}
				 </Form>,
    		className: 'prompt'
		});
  	}

  	render() {
    	return (
        	<div id="add-gathering-button" onClick={() => this.showPopup()}>
            	<a href="#" class="btn btn-lg">Add gathering</a>
        	</div>
    	);
  	}
}

export default AddGathering;