import menuBar from '../assets/images/menu_bar.svg';
import backgroundImgPng3 from '../assets/images/backgroundImg3.png';
import enterImagePng from '../assets/images/enterImage.png';
import AdelmoImg from '../assets/images/foto-adelmo.png';
import AdelmoImg2 from '../assets/images/foto-adelmo2.png';
import ProjetoImg from '../assets/images/projetoImg.png';
import { Card } from '../components/Card';
import '../styles/pages/home.scss';
import { useHistory } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Article } from './Article';
import { projectContext } from '../App';
export function Home() {
  
  const history = useHistory();
  const {showHome, setShowHome} = useContext(projectContext);
  const [img, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [index, setIndex] = useState(0);

  function getToSettings() {
    history.push('/pages/settings');
  }
  
  function getToArticle0() {
    setImage(ProjetoImg);
    setTitle('Você já ouviu uma história hoje?');
    setDate('jul 20');
    setIndex(0);
    setShowHome(false);
  }

  function getToArticle1() {
    setImage(enterImagePng);
    setTitle('Essas Pessoas Invisíveis merecem ser vistas');
    setDate('jul 16');
    setIndex(1);
    setShowHome(false);
  }
  function getToArticle2() {
    setImage(AdelmoImg);
    setTitle('Relatos de uma visita à Adelmo Part 1');
    setDate('jul 20');
    setIndex(2);
    setShowHome(false);
  }
  function getToArticle3() {
    setImage(AdelmoImg2);
    setTitle('Relatos de uma visita à Adelmo Part 2');
    setDate('jul 20');
    setIndex(3);
    setShowHome(false);
  }

  return (
  <div className="app">
    { showHome ? (
      <>
      <div className="appBar">
        <button onClick={getToSettings}>
          <img src={menuBar} id='settingBar' alt="Barra de configuração" />
        </button>
      </div>
      
      <h2 id='title'>
        Nossos Artigos
      </h2>
      
      <div className="content">
        <Card
            img={ProjetoImg}
            title='O valor de Uma Historia'
            date='20 de jul'
            function={getToArticle0}
        />
        <Card
            img={AdelmoImg}
            title='Relatos de uma visita à Adelmo Part. 1'
            date='20 de jul'
            function={getToArticle2}
        />
        <Card
            img={AdelmoImg2}
            title='Relatos de uma visita à Adelmo Part. 2'
            date='20 de jul'
            function={getToArticle3}
        />
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