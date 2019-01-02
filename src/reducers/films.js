const DEFAULT_FILMS = [
  {
    id: 0,
    title: 'Star Wars: Redux invasion',
    year: '2003',
    format: 'DVD',
    stars: ['Yoda theMaster', 'Luke Sky', 'Wookie', 'Cowboy Boss'],
    toggled: false
  },
  {
    id: 1,
    title: 'Abuss The Begining',
    year: '1245',
    format: 'VHS',
    stars: ['Baal theDemonLord', 'Abbadon', 'Lucifer the King'],
    toggled: false
  }
];

const films = (state = DEFAULT_FILMS, action) => {
  switch (action.type) {
    case 'ADD_FILM':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          year: action.year,
          format: action.format,
          stars: [...action.stars],
          toggled: false
        }
      ]
    case 'TOGGLE_FILM':
      return state.map(film => film.id === action.id ? {...film, toggled: !film.toggled} : film)
    case 'DELETE_FILM':
      return state.filter(film => film.id !== action.id);
    default:
      return state
  }
}

export default films