const withImages = require('next-images')

module.exports = withImages({
  esModule: true
})

module.exports= {
  env: {
    API_URL: 'https://api.themoviedb.org/3',
    API_KEY: 'e1c782cb945a0ca3e46ed4cad317ad2b',
    API_ACCESS_TOKEN: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMWM3ODJjYjk0NWEwY2EzZTQ2ZWQ0Y2FkMzE3YWQyYiIsInN1YiI6IjVmNGFhMGYyZWVjNGYzMDAzNWNmNmIzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bLJtzGPPG7QNtPhwvUnZm3ZvzVtWvYupkV6b_Pw0QLM'
  },
}
