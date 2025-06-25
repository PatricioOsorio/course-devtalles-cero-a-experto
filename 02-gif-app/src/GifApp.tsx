import { useState } from 'react';
import './GifApp.scss';

export const GifApp = () => {
  const [categories, setCategories] = useState(['one piece', 'naruto', 'dragon balls']);

  const handleAddCategory = () => {
    setCategories([...categories, 'new category']);
  };

  return (
    <article>
      <h1>Gif App</h1>

      <button onClick={handleAddCategory}>Add category</button>

      <ol>
        {categories.map((category, index) => {
          return <li key={index}>{category}</li>;
        })}
      </ol>
    </article>
  );
};
