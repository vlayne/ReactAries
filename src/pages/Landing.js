import React, { Component, Fragment } from 'react'
import { Splitter } from '../components'

export default class Landing extends Component {

    state = {
        movies: []
    }


    async componentDidMount(){
        let response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=b92715922f04621de38d69cf55169453');
        let data = await response.json();
        console.log('movies', data)

        // Préparation movies
        const movies = data.results.map((movie, index) => {
            if(index % 2 == 0){
                return {
                    imageLeft: "http://image.tmdb.org/t/p/original/" + movie.poster_path,
                    rightContent: movie.title,
                    leftDetails: movie.release_date
                }
            }else{
                return {
                    imageRight: "http://image.tmdb.org/t/p/original/" + movie.poster_path,
                    leftContent: movie.title,
                    rightDetails: movie.release_date
                }
            }
        })
        this.setState({movies})
    }

    render(){
        const {movies} = this.state

        return(
            <Fragment>
                {movies.map((part, index) => {
                    return <Splitter {...part}/>
                })}
                
            </Fragment>
        )
    }
}
