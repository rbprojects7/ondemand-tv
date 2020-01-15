export const api = {
  baseUrl: 'https://api.tvmaze.com',
}

export const errorFiller = {
  name: 'Not Found',
  summary: '<p>We could not found a summary for this. <br /><b>Is it a new one?</b><br />Do not forget to notify TV Maze!</p>',
  image: {
    medium: 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png',
    original: 'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png',
  }
}

export const fetchingShowData = {
  name: 'Loading...',
  summary: undefined,
  image: {},
}
