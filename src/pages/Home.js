import menuBar from '../assets/images/menu_bar.svg';
import backgroundImg from '../assets/images/backgroundImg1.svg';
import backgroundImgPng from '../assets/images/backgroundImg1.png';
import { Card } from '../components/Card';
import '../styles/pages/home.scss';
export function Home() {
    return (
    <div className="app">
      <div className="appBar">
        <img src={menuBar} alt="Barra de configuração" />
      </div>
      
      <h2 id='title'>
        Nossos Artigos
      </h2>

      <div className="content">
        <Card 
            img={backgroundImgPng}
            title='Alguém já te perguntou como foi seu dia?'
            date='06 de jul'
        />
      </div>
    </div>
    );
}