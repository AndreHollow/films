import { connect } from 'react-redux'
import FilmsList from '../components/content/FilmsList'
import {toggleFilm} from '../actions'

const mapStateToProps = state => ({
  films: state.films,
  searchData: state.navigation.searchData,
  isTitle: state.navigation.isTitle,
  isSorted: state.navigation.isSorted
})

const mapDispatchToProps = dispatch => ({
  toggleFilm: id => dispatch(toggleFilm(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmsList)