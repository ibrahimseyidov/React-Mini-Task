import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "./components/Container"
import SearchBar from "./components/SearchBar"
import FilmCardContainer from "./components/FilmCardContainer";
import FilmCard from "./components/FilmCard"

class App extends React.Component {

    state = {
        movies: [
            {
                id: 1,
                imageUrl: "https://picsum.photos/id/1/200/300",
                cardTitle: "Macbook",
                cardText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            },
            {
                id: 2,
                imageUrl: "https://picsum.photos/id/2/200/300",
                cardTitle: "Asus",
                cardText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            },
            {
                id: 3,
                imageUrl: "https://picsum.photos/id/3/200/300",
                cardTitle: "Lenova",
                cardText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            },
            {
                id: 4,
                imageUrl: "https://picsum.photos/id/4/200/300",
                cardTitle: "Acer",
                cardText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            },
            {
                id: 5,
                imageUrl: "https://picsum.photos/id/5/200/300",
                cardTitle: "HP",
                cardText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            },
            {
                id: 6,
                imageUrl: "https://picsum.photos/id/6/200/300",
                cardTitle: "Toshiba",
                cardText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
            }
        ],

        searchMovies: ""

    }

    deleteFunc = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        )

        this.setState({
            movies: newMovieList
        })
    }

    searchMovie = (event) => {
        this.setState({ searchMovies: event.target.value })
    }

    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.cardTitle.toLowerCase().indexOf(this.state.searchMovies.toLowerCase()) !== -1
            }
        )

        return (
            <>

                <Container>

                    <SearchBar searchProps={this.searchMovie} />

                </Container>

                <Container>
                    <FilmCardContainer>

                        <FilmCard key={this.state.movies.id}
                            movies={filteredMovies}
                            imageUrl={this.state.movies.imageUrl}
                            cardTitle={this.state.movies.cardTitle}
                            cardText={this.state.movies.cardText}
                            deleteFunc={this.deleteFunc}
                        />


                    </FilmCardContainer>
                </Container>

            </>

        )
    }

}

export default App