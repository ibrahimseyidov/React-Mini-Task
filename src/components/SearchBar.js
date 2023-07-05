import React from "react"

function SearchBar(props) {
    return (
        <div className="input-group mb-3">
            <input onChange={props.searchProps} type="text" className="form-control" placeholder="What are you searching?" />
        </div>
    )
}

export default SearchBar