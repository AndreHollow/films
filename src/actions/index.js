let nextTodoId = 2

export const addFilm = (title, year, format, stars) => ({
  type: 'ADD_FILM',
  id: nextTodoId++,
  title,
  year,
  format,
  stars
})

export const toggleFilm = id => ({
  type: 'TOGGLE_FILM',
  id
})

export const toggleSorting = isSorted => ({
  type: 'TOGGLE_SORTING',
  isSorted
})

export const deleteFilm = id => ({
  type: 'DELETE_FILM',
  id
})

export const searchConfirm = (searchData, isTitle) => ({
  type: 'SEARCH_COMFIRM',
  searchData,
  isTitle
})