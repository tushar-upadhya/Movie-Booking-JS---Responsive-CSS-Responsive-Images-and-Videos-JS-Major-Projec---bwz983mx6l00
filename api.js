export const database = [
    { name: 'TOPGUN MAVERICK', imgUrl: 'https://images.news18.com/ibnlive/uploads/2022/05/top-gun_-maverick.jpg' },
    { name: 'PRITHVIRAJ', imgUrl: 'https://m.media-amazon.com/images/M/MV5BOGI1N2QwNjYtMjQzOS00NjZiLTg1YzEtMDVjZGY0YjkwODNjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg' },
    { name: 'ROCKETRY THE NUMBI EFFECT', imgUrl: 'https://m.media-amazon.com/images/M/MV5BMjNjNWUxMjUtMTBkMC00NTNlLTg0NTctZmJmMDYzMTMwMWQwXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg' },
    { name: 'MAJOR', imgUrl: 'https://english.gnsnews.co.in/wp-content/uploads/2021/01/Major.jpg' },
    { name: 'TENET', imgUrl: 'https://townsquare.media/site/838/files/2020/09/tenet-score-Ludwig-Go%25CC%2588ransson.jpeg?w=1200&h=0&zc=1&s=0&a=t&q=89' },
]
export const availibility = {
    '21 Jump Street': [1, 2, 5, 8, 9,19,22,20,11],
    '22 Jump Street': [1, 2, 3, 5, 6,10,11,12,13,14,15,16,17, 24],
    'Cars': [1, 2, 3, 4, 5, 6,15,16,17,18,19,20,21,22,23,24],
    'Cars 2': [4, 6, 8,10,11,12,13,14,15,16],
    'Cars 3': [3, 5, 7, 9,20,21,12,13,19,24]
}
const fetchMovieList = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(database)
        }, 500)
    })
}

const fetchMovieAvailability = async (movieName) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for (const m in availibility) {
                if (m === movieName) resolve(availibility[m])
            }
            resolve([])
        }, 500)
    })
}

export { fetchMovieList, fetchMovieAvailability }
