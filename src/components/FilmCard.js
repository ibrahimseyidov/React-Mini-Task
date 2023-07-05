import React from "react";


class FilmCard extends React.Component {

    render() {

        return (
            <>
                {this.props.movies.map((movie) => (
                    <div className="col">
                        <div className="card h-100" key={movie.key}>
                            <img src={movie.imageUrl} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{movie.cardTitle}</h5>
                                <p className="card-text">{movie.cardText}</p>
                                <button onClick={() => this.props.deleteFunc(movie)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </>

        )
    }

}

export default FilmCard