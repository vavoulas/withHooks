import React, { useState } from 'react';
import axios from 'axios';

const Searching = () => {
    const [queryTxt,setQuery ] = useState('');

    const apiUrl = 'https://api.chucknorris.io'
    
    const [jokes, findJokes ] = useState([]);


    

    const searchQuery = e => {
      e.preventDefault();
      if(!queryTxt) return;

      
      axios.get(
        `${apiUrl}/jokes/search?query=${queryTxt}`
      )
      .then(res => findJokes( res.data.result)
      
      )
      .catch(err => console.log(err));

      

      

      


    }

    console.log(jokes);


    return (
        <div className='container'>
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
            
              
                <form  className="card card-sm" onSubmit={searchQuery}>
                  <div className="card-body row no-gutters align-items-center">
                    <div className="col">
                      <input
                        name='queryText'
                        type='text'
                        placeholder='Search a Chuck Norris Joke'
                        className='form-control form-control-lg form-control-borderless '
                        value={queryTxt} 
                        onChange={e=>setQuery(e.target.value)} 
                      />
                    </div>
                    <div className="col-auto">
                      <button 
                    
                        type='submit'
                        value='Search'
                        className='btn btn-primary'>
                        
                        Search
                      </button>
                    </div>
                  </div>
                  
  
                  
                </form>
            </div>  
            
          </div> 
          <br/>
          <div className="out">
            <h1 className="text-center">Jokes</h1>
           
             
          
           
            <ul className='list-group'>
              {jokes.map(bloop => 
                <li className = "list-group-item d-flex flex-column justify-content-between ">
                  <img className="align-self-center mb-1" src={bloop.icon_url} alt=""/>
                  <p className="text center">{bloop.value}</p>
                </li>
              )}
            
            </ul>
          </div>
        </div>
      )



}



export default Searching;