const {catchedAsync}=require('../utils')
module.exports={
    getFilms:catchedAsync(require('./getFilms')),
    getFilmById:catchedAsync(require('./getFilmById')),
    createFilms:catchedAsync(require('./createFilms')),
}