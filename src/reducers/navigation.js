const navigation = (state={isSorted: false, searchData: '', isTitle: true}, action) => {
  switch (action.type){
    case 'TOGGLE_SORTING':
      return {...state, isSorted: !state.isSorted}
    case 'SEARCH_COMFIRM':
      return {...state, searchData: action.searchData, isTitle: action.isTitle}
    default:
      return state;
  }
}



export default navigation