import React from "react";

function Search(){
    return (
        <>
        <form className="form-inline">
            <div class="form-group mb-2">
                <label for="staticEmail2" class="sr-only">Email</label>
                <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Search"/>
                     </div>
            <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only">Search</label>
                <input type="password" class="form-control" id="inputPassword2" placeholder="Search"/>
            </div>
            <button type="submit" class="btn btn-primary mb-2">Search</button>
        </form>
        </>
    )
}

export default Search