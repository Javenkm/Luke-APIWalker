import React from 'react'

const Search = props => {
    const { searchTerms, changeHandler, submitHandler } = props;

    return (
        <form className ="row pt-5" onSubmit ={ submitHandler }>
            <div className="col-sm-6">
                <div className="row">
                    <label htmlFor="category" className="col-sm-4">Search for:</label>
                    <select name="category" className="col-sm-8 form-control" onChange={ changeHandler } value={ searchTerms.category }>
                        <option value="people">People</option>
                        <option value="films">Films</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="species">Species</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="row">
                    <div className="col-sm-5">
                        <label htmlFor="id" className="col-sm-4">ID: </label>
                        <input type="number" name="id" className="col-sm-8 form-control" onChange={ changeHandler } value={ searchTerms.id } />
                    </div>
                    <div className="col-sm-7">
                        <input type="submit" value="Search" className="col-sm-12 btn btn-primary" />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Search
