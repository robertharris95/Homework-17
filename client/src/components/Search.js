import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Search() {
    const [search, setSearch] = useState({input: ""})
    const [currentSearch, setCurrentSearch] = useState([])

    function handleInputChange(event) {
        const { name, value } = event.target;
        setSearch({[name]: value})
    }
    useEffect(() => {
        // initialLoad()
    }, [])

    // function initialLoad() {
    //     API.bookSearch("Lord of the Rings")
    //       .then(res =>
    //          setCurrentSearch(res.data.items) 
    //       )
    //       .catch(err => console.log(err))
    // }

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(search);
        API.bookSearch(search.input)
          .then(res => setCurrentSearch(res.data.items))
          .catch(err => console.log(err))
    }

    function saveBook(event) {

    }
    return (
        <>
        <div className="container card text-center">
            <div className="card-body">
                <form className="form-inline">
                    <div className="form-group mb-2">
                        <label  className="sr-only">Search</label>
                        <p>Search</p>
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label  className="sr-only">Search</label>
                        <input type="text" name="input" onChange={handleInputChange} className="form-control form-control-lg" id="inputPassword2" placeholder="Search"/>
                    </div>
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary mb-2">Search</button>
                </form>
            </div>
        </div>
        <div>
        {currentSearch.length ? (
        <div>
        {currentSearch.map(element => {
            return (
                <div className="card container mt-5">
            <div className="card-body col-lg-12">
                <h5 className="card-title">{element.volumeInfo.title}</h5>
                {/* Author Image Save Link */}
                <h6 className="card-subtitle mb-2 text-muted">{element.volumeInfo.authors}</h6>
                <div className="row">
                <div className="col-lg-2">
                    <img src={"https://via.placeholder.com/150"}/>
                </div>
                <div className="col-lg-8">
                    <p className="card-text">{element.volumeInfo.description}</p>
                </div>
                <div className="col-lg-2">
                    <button className="btn btn-danger">Add to Favorites</button>
                </div>
                </div>
                <a href={element.selfLink} className="card-link">Link to book</a>
            </div>
            </div>
            )  
        })}
        </div>
        ) : (
            <h3 className="text-center"> Search for some books!</h3>
        )}
    </div>
    </>
    )
}

export default Search