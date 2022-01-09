import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ImageGrid from './components/ImageGrid';
import Nav from './components/Nav'
import sampleData from './sampleData';

const App: React.FC = () => {

  const [recipes, setRecipes] = useState(sampleData)
  const [endPoint, setEndPoint] = useState('https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=dd5ac6591f404c4d9a7ea8475237d2d7&cuisine=italian&intolerances=egg&diet=vegetarian');
  // 'https://api.spoonacular.com/recipes/complexSearch?query=pasta&apiKey=dd5ac6591f404c4d9a7ea8475237d2d7&cuisine=italian&intolerances=egg&diet=vegetarian'
  // useEffect(() => {
  //   const fetchData = async() => {
  //     const res = await fetch(endPoint)
  //     const resJson = await res.json()
  //     console.log("this is the response>>", resJson.results)
  //     setRecipes(resJson.results)
  //   }
  //   fetchData();
  // }, [endPoint]);

  const submitSearch = (event: any, type?: string) => {
    event.preventDefault();
    console.log('hello')
    setEndPoint(`https://api.spoonacular.com/recipes/complexSearch?type=${type}&apiKey=dd5ac6591f404c4d9a7ea8475237d2d7`);
  }

  return (
    <main className="App">
      <Nav />
      <section className="main-container">
        <Form submitSearch={submitSearch}/>
        <ImageGrid recipes={recipes} />
      </section>
    </main>
  );
}
export default App;
