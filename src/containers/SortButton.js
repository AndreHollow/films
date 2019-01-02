import React from 'react'
import { connect } from 'react-redux'
import { toggleSorting } from '../actions'
import PropTypes from 'prop-types'
import './SortButton.css'

const SortBox = ({isSorted, dispatch}) => {
  
  return (
    <div className = 'sort-container'>
      <label className = 'checkbox-text' htmlFor="sort-box">Sort films by alphabet: </label>
      <input 
        type="checkbox" 
        className = 'checkbox'
        onChange = {e => {
          dispatch(toggleSorting());
        }}
        checked = {isSorted} 
      />  
    </div>
  )
}

const mapStateToProps = state => ({
  isSorted: state.navigation.isSorted
})

SortBox.propTypes = {
  isSorted: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(SortBox)