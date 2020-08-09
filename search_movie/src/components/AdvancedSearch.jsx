import React, { useState } from 'react';
import { FaSortUp, FaSortDown } from 'react-icons/fa';


const AdvancedSearch = ({ movies, filteredMovies, setFilteredMovies }) => {

    const initialForm = {
        genre: "",
        year: "",
        actors: "",
        description: ""
    };

    const [{ genre, year, actors, description }, setForm] = useState(initialForm)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({ ...prevState, [name]: value }));
        console.log(initialForm);
    }

    const handleReset = () => {
        setForm({ ...initialForm })
        setFilteredMovies([...movies])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let genreFilterdMovies = genre ? [...movies].filter(el => el.Genre.toLowerCase().includes(genre.toLowerCase())) : [...movies]
        let yearFilterdMovies = year ? [...genreFilterdMovies].filter(el => el.Year.includes(year)) : [...genreFilterdMovies]
        let actorFilterdMovies = actors ? [...yearFilterdMovies].filter(el => el.Actors.toLowerCase().includes(actors.toLowerCase())) : [...yearFilterdMovies]
        let descriptionFilterdMovies = description ? [...actorFilterdMovies].filter(el => el.Plot.toLowerCase().includes(description.toLowerCase())) : [...actorFilterdMovies]
        setFilteredMovies(descriptionFilterdMovies)
    }

    const handleSortUp = (type) => {
        let sortedMovies
        switch (type) {
            case 'year':
                sortedMovies = [...filteredMovies].sort((a, b) => a.Year - b.Year);
                break;
            case 'genre':
                sortedMovies = [...filteredMovies].sort((a, b) => a.Genre.localeCompare(b.Genre));
                break;
            case 'actors':
                sortedMovies = [...filteredMovies].sort((a, b) => a.Actors.localeCompare(b.Actors));
                break;
            case 'description':
                sortedMovies = [...filteredMovies].sort((a, b) => a.Plot.localeCompare(b.Plot));
                break;
            default:
                break;
        }
        setFilteredMovies(sortedMovies)
    }

    const handleSortDown = (type) => {
        let sortedMovies
        switch (type) {
            case 'year':
                sortedMovies = [...filteredMovies].sort((a, b) => b.Year - a.Year);
                break;
            case 'genre':
                sortedMovies = [...filteredMovies].sort((a, b) => b.Genre.localeCompare(a.Genre));
                break;
            case 'actors':
                sortedMovies = [...filteredMovies].sort((a, b) => b.Actors.localeCompare(a.Actors));
                break;
            case 'description':
                sortedMovies = [...filteredMovies].sort((a, b) => b.Plot.localeCompare(a.Plot));
                break;
            default:
                break;
        }
        setFilteredMovies(sortedMovies);
    }

    return (
        <div className='advancedSearch'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="advancedSearchFiled">
                    <div>
                        <div className='advancedSerachWrapper'>
                            <div>
                                <h3>Search by Genre</h3>
                            </div>
                            <div className="sortIconsWrapp">
                                <FaSortUp className='sortIcon' title='sort up' onClick={() => handleSortUp('genre')} />
                                <FaSortDown className='sortIcon' title='sort down' onClick={() => handleSortDown('genre')} />
                            </div>
                        </div>
                        <input value={genre} name='genre' placeholder="enter valid genre name" onChange={handleChange} />
                    </div>
                </div>
                <div className="advancedSearchFiled">
                    <div>
                        <div className='advancedSerachWrapper'>
                            <h3>Search by Year</h3>
                            <div className="sortIconsWrapp">
                                <FaSortUp className='sortIcon' title='sort up' onClick={() => handleSortUp('year')} />
                                <FaSortDown className='sortIcon' title='sort down' onClick={() => handleSortDown('year')} />
                            </div>
                        </div>
                        <input value={year} name='year' placeholder="enter valid year" onChange={handleChange} />
                    </div>
                </div>
                <div className="advancedSearchFiled">
                    <div>
                        <div className='advancedSerachWrapper'>
                            <div>
                                <h3>Search by Actors</h3>
                            </div>
                            <div className="sortIconsWrapp">
                                <FaSortUp className='sortIcon' title='sort up' onClick={() => handleSortUp('actors')} />
                                <FaSortDown className='sortIcon' title='sort down' onClick={() => handleSortDown('actors')} />
                            </div>
                        </div>
                        <input value={actors} name='actors' placeholder="enter valid actors name" onChange={handleChange} />
                    </div>
                </div>
                <div className="advancedSearchFiled">
                    <div>
                        <div className='advancedSerachWrapper'>
                            <div>
                                <h3>Search by Description</h3>
                            </div>
                            <div className="sortIconsWrapp">
                                <FaSortUp className='sortIcon' title='sort up' onClick={() => handleSortUp('description')} />
                                <FaSortDown className='sortIcon' title='sort down' onClick={() => handleSortDown('description')} />
                            </div>
                        </div>
                        <input value={description} name='description' placeholder="enter valid  description" onChange={handleChange} />
                    </div>
                </div>
                <div className="advancedSearchFiled">
                    <div>
                        <button className='adancedSearchBtn' type='submit'>Search</button>
                        <button className='advancedSearchResetBtn' type='button' onClick={() => handleReset()}>Reset Filters</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AdvancedSearch

