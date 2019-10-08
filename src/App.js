import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [{

id:1,
title:"spaceJam 1"
},
{
 id:2,
 title:"spaceJam 2" 
},{
  id:3,
  title:"spaceJam 3" 
 }];

class App extends Component {
  
  render() { 
    
   return (
     <div className="App">
      <header className="App-header" style={{color:'green'}}>
        {/* below I am iterating over an array. mapping the array of objects -> to a ("./Movie.js" - Component).  w/ the keys of movie's[id,title] */}
          {movies.map(movie => <Movie key={movie.id} movie={movie} />)}

        {/*Company Logo */}
          <img src={logo} className="App-logo" alt="logo"/>
          
       </header> 
      
       
        
        
     </div>
   );
  }
}

export default App;
