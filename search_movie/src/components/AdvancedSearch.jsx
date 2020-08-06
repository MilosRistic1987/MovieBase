import React , { useState} from 'react';


const AdvancedSearch = ({movies, filteredMovies, setFilteredMovies}) => {


const initialForm = {
    genre: "",
    year: "",
    actors: "",
    description: ""
  };  
  const[{genre,year,actors,description},setForm]=useState(initialForm) 
// const [genre, setGenre]=useState("");
// const [year, setYear]=useState('');
// const [actors, setActors]=useState('');
// const [description, setDescription]=useState('');



// useEffect(()=>{
//     setFilteredMovies([...movies])
// },[movies])

// const handleGenre=(e)=>{
//     setGenre(e.target.value);
// }

// const handleYear=(e)=>{
//     setYear(e.target.value);
// }

// const handleActors=(e)=>{
//     setActors(e.target.value);
// }

// const handleDescription=(e)=>{
//     setDescription(e.target.value);
// }





const handleChange=(e)=>{
    const { name, value } = e.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
    console.log(initialForm);
}



const handleReset=()=>{
    setForm({...initialForm})
    setFilteredMovies([...movies])
    
}


const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(movies, 'movies usao ' )
    let genreFilterdMovies = genre? [...movies].filter(el => el.Genre.includes(genre)) : [...movies]
    let yearFilterdMovies = year? [...genreFilterdMovies].filter(el => el.Year.includes(year)) : [...genreFilterdMovies]
    let actorFilterdMovies = actors? [...yearFilterdMovies].filter(el => el.Actors.includes(actors)) : [...yearFilterdMovies]
    let descriptionFilterdMovies = description? [...actorFilterdMovies].filter(el => el.Plot.includes(description)) : [...actorFilterdMovies]

    console.log(descriptionFilterdMovies, 'set movies')
    console.log(movies, 'movies izasao' )

    setFilteredMovies(descriptionFilterdMovies)
 
}



    return (
        <div className='advancedSearch'>
            <form  onSubmit={(e) =>handleSubmit(e)}>
          <div className="advancedSearchFiled">
              <div>
              <h3>Search by Genre</h3>
              <input value={genre} name='genre' placeholder="enter valid genre name" onChange={handleChange}/>
              </div> 
          </div>
          <div className="advancedSearchFiled">
              <div>
              <h3>Search by Year</h3>
              <input value={year} name='year' placeholder="enter valid year" onChange={handleChange}/>
              </div>
          </div>
          <div className="advancedSearchFiled">
          <div>
          <h3>Search by Actors</h3>
              <input value={actors} name='actors' placeholder="enter valid actors name" onChange={handleChange} />
          </div> 
          </div>
          <div className="advancedSearchFiled">
          <div>
          <h3>Search by Description</h3>
              <input value={description} name='description' placeholder="enter valid  description" onChange={handleChange}/>
          </div>
          </div>
          <div className="advancedSearchFiled">
              <div>
              <button className='adancedSearchBtn' type='submit'>Search</button>
              <button className='advancedSearchResetBtn' type='button' onClick={()=>handleReset()}>Reset Filters</button>
              </div>
          </div>
          </form>
        </div>
    )
}

export default AdvancedSearch

