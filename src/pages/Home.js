import menuBar from '../assets/images/menu_bar.svg';
import backgroundImg from '../assets/images/backgroundImg1.svg';
import backgroundImg2 from '../assets/images/backgroundImg2.svg';
import backgroundImg3 from '../assets/images/backgroundImg3.svg';
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

  function getToSettings() {
    history.push('/pages/settings');
  }
  
  function getToArticle() {
    setShowHome(false);
    history.push('/pages/article');
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
            title='A desesperança da situação de rua'
            date='07 de jul'
            function={getToArticle}
        />
        <Card
            img={backgroundImgPng2}
            title='A importância da leitura na nossa vida cotidiana'
            date='07 de jul'
            function={getToArticle}
        />
        <Card 
            img={backgroundImgPng}
            title='Alguém já te perguntou como foi seu dia?'
            date='06 de jul'
            function={getToArticle}
        />
    </div>
      </>
    ) : (
      <Article
        img={enterImagePng}
      />
    )}
    
  </div>
  );
}