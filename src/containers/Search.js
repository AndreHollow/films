import React from 'react'
import {connect} from 'react-redux'
import { searchConfirm } from '../actions'
import {store} from '../index'
import './Search.css'

class Search extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      titleChosen: true,
      actorsChosen: false,
      searchData: '',
      errorMessage: ''
    }
  }

  searchInput = React.createRef();

  handleSwitch = () => {
    this.setState({
      titleChosen: !this.state.titleChosen,
      actorsChosen: !this.state.actorsChosen
    })
  }

  handleSearchChange = () => {
    this.setState({
      searchData: this.searchInput.current.value,
      errorMessage: this.state.searchData.length > 40 ? 'Invalid input' : ''
    })

  }

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.errorMessage)
      return
    else{
      if(!this.state.titleChosen){
        store.dispatch(searchConfirm(this.state.searchData.toLowerCase(), this.state.titleChosen))
      }
      if(!this.state.actorsChosen){
        store.dispatch(searchConfirm(this.state.searchData.toLowerCase(), this.state.titleChosen))
      }
    }
  }

  render(){
    return(
        <form className = 'search-form-container' onSubmit = {this.handleSubmit}>
          <div 
            className = 'toogle-option'
            style = {{
              color: this.state.titleChosen ? 'limegreen' : 'inherit'
            }}
          >
            Title
          </div>

          <div className="toggleWrapper">
            <input 
              type="checkbox" 
              onClick={this.handleSwitch} 
              className="dn" 
              id="dn"
              />
            <label htmlFor="dn" className="toggle">
              <span className="toggle__handler"></span>
            </label>
            <div className="bear-body">
              <span className="eye left"></span>
              <span className="eye right"></span>
            </div>
          </div>
          
          <div 
            className = 'toogle-option'
            style = {{
              color: this.state.actorsChosen ? 'limegreen' : 'inherit'
            }}
          >
            Actor
          </div>
          <div className = 'searchfield-container'>
            <input 
              type='text' 
              className = 'search-field'
              ref={this.searchInput} 
              onChange = {this.handleSearchChange}
              />
            <div className = 'error-message'>{this.state.errorMessage}</div>
          </div>
          
        </form>
      
    )
  }
}

export default connect()(Search)