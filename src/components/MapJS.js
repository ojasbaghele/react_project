import React from 'react';
import './MapJS.css';

export default function MapJS() {
    const names=['Ojas','Mohit','Swapnil','Yash']
    const book1 = {
        "author": "Frank Herbert",
        "title": "Dune",
        "summary": "The story of a boy and a great family’s ambitious attempt to realize mankind’s most ancient and unattainable dream."
    }
     
    const book2 = {
        "author": "Mur Lafferty",
        "title": "Six Wakes",
        "summary": "A crew of clones awakens aboard a space ship to find they're being hunted-and any one of them could be the killer."
    }
     
    const book3 = {
        "author": "Yann Martel",
        "title": "Life of Pi",
        "summary": " An inspirational tale of survival, endurance, resilience and aboard a space ship to find faith."
    }
  return (
    <div><h1>Map.js</h1>
        <div><h3>using Array</h3>
        <p>{names[0]}</p>
        <p>{names[1]}</p>
        <p>{names[2]}</p>
        <p>{names[3]}</p>
        </div>
        <div><h3>using Map</h3>
            {
                names.map(name=><h2>My name is : {name}</h2>)
            }
        </div>
        <h2> Array Objects</h2>
        <div id ="books">
        <div class="book">
            <h2>Book Name is : {book1.title}</h2>
            <h3>Aurthor : {book1.author}</h3>
            <p> Summary : {book1.summary}</p> 
            <button type="button" class="btn btn-light">Show</button>
            <button type="button" class="btn btn-dark">Hide</button>
        </div>
        <div class="book">
            <h2>Book Name is : {book2.title}</h2>
            <h3>Aurthor : {book2.author}</h3>
            <p> Summary : {book2.summary}</p>
            <button type="button" class="btn btn-light">Show</button>
            <button type="button" class="btn btn-dark">Hide</button>   
        </div>
        <div class="book">
            <h2>Book Name is : {book3.title}</h2>
            <h3>Aurthor : {book3.author}</h3>
            <p> Summary : {book3.summary}</p>
            <button type="button" class="btn btn-light">Show</button>
            <button type="button" class="btn btn-dark">Hide</button>  
        </div>
        </div>
        
    </div>
  )
}
