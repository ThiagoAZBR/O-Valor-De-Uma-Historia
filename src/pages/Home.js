import menuBar from '../assets/images/menu_bar.svg';
import backgroundImgPng from '../assets/images/backgroundImg1.png';
import backgroundImgPng2 from '../assets/images/backgroundImg2.png';
import backgroundImgPng3 from '../assets/images/backgroundImg3.png';
import enterImagePng from '../assets/images/enterImage.png';
import { Card } from '../components/Card';
import '../styles/pages/home.scss';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { Article } from './Article';
export function Home() {
  
  const history = useHistory();
  const [showHome, setShowHome] = useState(true);
  const [img, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [index, setIndex] = useState(0);

  function getToSettings() {
    history.push('/pages/settings');
  }
  
  function getToArticle1() {
    setImage(enterImagePng);
    setTitle('Essas Pessoas Invisíveis merecem ser vistas');
    setDate('jul 16');
    setIndex(1);
    setShowHome(false);
  }
  function getToArticle2() {
    setImage(enterImagePng);
    setTitle('Título 2');
    setDate('jul 16');
    setIndex(2);
    setShowHome(false);
  }
  function getToArticle3() {
    setImage(enterImagePng);
    setTitle('Título 3');
    setDate('jul 16')
    setIndex(3);
    setShowHome(false);
  }
  function getToArticle4() {
    setImage(enterImagePng);
    setTitle('Título 3');
    setDate('jul 16');
    setIndex(4);
    setShowHome(false);
  }

  return (
  <div className="app">
    { showHome ? (
      <>
      <div className="appBar">
        <button onClick={getToSettings}>
          <img src={menuBar} alt="Barra de configuração" />
        </button>
      </div>
      
      <h2 id='title'>
        Nossos Artigos
      </h2>

      <div className="content">
        <Card
            img={backgroundImgPng3}
            title='Essas Pessoas Invisíveis merecem ser vistas'
            date='16 de jul'
            function={getToArticle1}
        />
      </div>
      </>
    ) : (
      <Article
        img={img}
        title={title}
        date={date}
        index={index}
      />
    )}
    
  </div>
  );
}