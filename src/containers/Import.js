import React, { Component } from 'react'
import { connect } from 'react-redux'
import { parseFileToArray, addToGlobalState} from '../utils'
import './Import.css'

class Import extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFileChosen: false
    }
  }

  readFile = (object) => {
    let file = object.files[0];
    let reader = new FileReader();
    let parsedArray;

    reader.onload = function() {
      parsedArray = parseFileToArray(reader.result);
      addToGlobalState(parsedArray); 
      
    }
    reader.readAsText(file)
  }

  handleInputChange = () => {
    this.setState({
      isFileChosen: document.getElementById('file').value !== '' ? true : false
    })
  }

  render() {
    return (
      <div className = 'import-container'>
        <label 
          htmlFor="file" 
          style = {{
            borderColor: this.state.isFileChosen ? 'limegreen' : '#d5c6e0'
          }} 
          className = 'import-choosefile'
        >
          <input 
            type="file" 
            id="file" 
            accept=".txt" 
            
            onChange = {this.handleInputChange} 
            />
            Import file
        </label>
        
        <button 
          disabled = {!this.state.isFileChosen} 
          className = 'import-submit'
          onClick={() => this.readFile(document.getElementById('file'))}
        >
          Read!
        </button>
      </div>
    )
  }
}

export default connect()(Import)