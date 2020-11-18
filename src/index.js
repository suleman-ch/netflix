import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Cards';


ReactDOM.render(
  <div>
    <h1 className="headding_style">List of top 5 Netflix series in 2020</h1>
    
    <Card
    imgsrc="http://wallpapercave.com/wp/wp4056410.jpg"
      title="Netflix Orignal series"
      sname="DARK"
      link="https:www.netflix.com/in/title/80990668?source=35"
    />
    
    <Card
    imgsrc="http://www.hitc.com/static/uploads/hitcn/1816/extracurricular_netflix_780_1544944.jpg"
      title="Netflix Orignal series"
      sname="Extra curricular"
      link="https:www.netflix.com/in/title/80990668?source=35"
      />

      <Card
      imgsrc="http://wallpapercave.com/wp/wp1917154.jpg"
      title="Netflix Orignal series"
      sname="Stranger Things"
      link="https:www.netflix.com/in/title/80990668?source=35"
      />

      <Card
      imgsrc="https://images.justwatch.com/poster/8589251/s592"
      title="The vampire Diaries"
      sname="Azon Orignal seriess"
      link="https:www.netflix.com/in/title/80990668?source=35"
      />

      <Card
      imgsrc="https://i.pinimg.com/474x/7b/19/58/7b19584ec5ffba063a121508e78fe7a4.jpg"
      title="Netflix Orignal series"
      sname="My First-2 Love"
      link="https:www.netflix.com/in/title/80990668?source=35"
      />
      
    </div>,
  document.getElementById('root')
);


