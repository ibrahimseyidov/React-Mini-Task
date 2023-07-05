import React from "react";

class FilmCardContainer extends React.Component {


    render() {
        console.log(this.props.children);
        return (

            <div div className="row row-cols-1 row-cols-md-3 g-4">{this.props.children}</div>
        )
    }

}

export default FilmCardContainer 