import React from 'react'
import { connect } from 'react-redux'
import { addFilm } from '../actions'
import {store} from '../index'
import './AddButton.css'

class AddFilm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      isBurgerOpen: false
    }
  }
  titleInput = React.createRef();
  yearInput = React.createRef();
  formatInput = React.createRef();
  starsInput = React.createRef();
  
  handleTitleChange = () => {
    if(!this.titleInput.current.value.trim())
      this.setState({
        isEnabled: false
      })
    else
      this.setState({
        isEnabled: true
      })
  }

  handleSubmit = e => {
    e.preventDefault();

    if (!this.titleInput.current.value.trim() &&
        !this.yearInput.current.value.trim() &&
        !this.formatInput.current.value.trim() &&
        !this.starsInput.current.value.trim())
      return
    if(!this.yearInput.current.value.trim())
      this.yearInput.current.value = 'No information provided'
    if(!this.formatInput.current.value.trim())
      this.formatInput.current.value = 'No information provided'
    if(!this.starsInput.current.value.trim())
      this.starsInput.current.value = 'No information provided'
    
    store.dispatch(
      addFilm(
        this.titleInput.current.value, 
        this.yearInput.current.value, 
        this.formatInput.current.value, 
        this.starsInput.current.value.split(', ')
      )
    )

    this.titleInput.current.value = ''
    this.yearInput.current.value = ''
    this.formatInput.current.value = ''
    this.starsInput.current.value = ''
    this.setState({
      isEnabled: false
    })
  }
  
  handleBurgerClick = () =>{
    this.setState({
      isBurgerOpen: !this.state.isBurgerOpen
    })

  }

  render() {
    return(
      <div className = 'addbutton-container'>
        <input 
          className="burger-check" 
          id="burger-check" 
          type="checkbox" 
          onClick = {this.handleBurgerClick}
          />
        <label htmlFor="burger-check" id = 'burger' className="burger"></label>
        <form
          id= "show-form" 
          className= "show-form"
          onSubmit={this.handleSubmit}
          >
          <div className = 'field'>
            <span className = 'field-name'>Title: </span>
            <input
              type = 'text'
              className = 'add-field' 
              ref={this.titleInput} 
              onChange = {() => this.handleTitleChange()} 
            />
          </div>
          <div className = 'field'>
            <span className = 'field-name'>Year: </span>
            <input className = 'add-field' type = 'text' ref={this.yearInput} />
          </div>
          <div className = 'field'>
            <span className = 'field-name'>Format: </span>
            <input className = 'add-field' type = 'text' ref={this.formatInput} />
          </div>
          <div className = 'field'>
            <span className = 'field-name'>Stars: </span>
            <input className = 'add-field' type = 'text' ref={this.starsInput} />
          </div>
          
          <div className = 'addbutton-wrapper'>
            <button 
              className = 'addbutton'
              type="submit" 
              disabled = {!this.state.isEnabled}
              >
              Add Film
            </button>
          </div>
        </form>
      </div>
    )
  }
}


export default connect()(AddFilm)

