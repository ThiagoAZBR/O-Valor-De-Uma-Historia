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
  const [body, setBody] = useState('');

  function getToSettings() {
    history.push('/pages/settings');
  }
  
  function getToArticle1() {
    setImage(enterImagePng);
    setTitle('A Desesperança da Situação de Rua');
    setDate('jun 7')
    setBody("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non lacus convallis, suscipit magna nec, ultrices mauris. Proin ut neque id enim luctus accumsan. Nunc eu est sit amet enim fermentum molestie vel vitae leo. Sed nec suscipit arcu. Integer pulvinar ante nisl, nec scelerisque purus gravida in. Donec nec est purus. Fusce vitae ex a magna vulputate commodo a sit amet lacus. Nullam nisl tortor, viverra tincidunt bibendum nec, imperdiet non lectus. Morbi sed mollis ex. Vestibulum ex risus, volutpat non tempus eget, sodales ut nibh. Aenean a laoreet sapien, vitae mollis diam. Praesent cursus nisi eget odio interdum tempor.\nMaecenas eu nisl sed nibh finibus posuere vitae vitae tellus. Etiam sagittis viverra nunc, vitae mattis ante faucibus vel. Nullam semper mattis turpis quis aliquam. In eu arcu et ex tristique suscipit ac sed urna. Cras elit magna, efficitur in turpis a, convallis imperdiet lorem. Aliquam sit amet ipsum sagittis, imperdiet felis euismod, convallis ipsum. Etiam tortor velit, tincidunt in turpis a, pharetra hendrerit urna. Duis ullamcorper metus et elit lobortis eleifend eu in elit. Sed non vestibulum ante, id sodales magna. Aliquam molestie sollicitudin ultrices. Curabitur volutpat rhoncus lacus, vitae porttitor mauris eleifend eget. Sed velit libero, elementum vel volutpat at, porttitor ac ante. Suspendisse facilisis vitae nunc sed interdum.\nDuis sit amet erat porttitor, commodo odio ac, sodales diam. Etiam vel iaculis magna, nec placerat leo. Aliquam diam turpis, tempus eu porta ac, pharetra in magna. Aliquam eu erat ante. Etiam venenatis molestie dignissim. Praesent diam arcu, vulputate in tempor nec, rutrum a sapien. Nulla vehicula porta fringilla. Integer ullamcorper diam eu purus sagittis varius. Ut velit eros, aliquam nec eros sit amet, porttitor pharetra risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent viverra vehicula varius. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ipsum dolor sit amet, consectetur adipiscing elit. Aenean a viverra arcu. Nulla in leo non velit convallis congue. Nunc ultricies erat est, id sollicitudin enim dapibus ac. Nam sapien ligula, dapibus at congue quis, vestibulum ac massa. Fusce malesuada nibh nec nulla lacinia, ut porttitor sapien blandit. Suspendisse eu porta lacus. Sed sollicitudin tortor ac est accumsan porta a at leo. Quisque sollicitudin dignissim auctor.")
    setShowHome(false);
  }
  function getToArticle2() {
    setImage(enterImagePng);
    setTitle('Título 2');
    setDate('09/07/2021')
    setBody('_Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a viverra arcu. Nulla in leo non velit convallis congue. Nunc ultricies erat est, id sollicitudin enim dapibus ac. Nam sapien ligula, dapibus at congue quis, vestibulum ac massa. Fusce malesuada nibh nec nulla lacinia, ut porttitor sapien blandit. Suspendisse eu porta lacus. Sed sollicitudin tortor ac est accumsan porta a at leo. Quisque sollicitudin dignissim auctor.')
    setShowHome(false);
  }
  function getToArticle3() {
    setImage(enterImagePng);
    setTitle('Título 3');
    setDate('09/07/2021')
    setBody('-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a viverra arcu. Nulla in leo non velit convallis congue. Nunc ultricies erat est, id sollicitudin enim dapibus ac. Nam sapien ligula, dapibus at congue quis, vestibulum ac massa. Fusce malesuada nibh nec nulla lacinia, ut porttitor sapien blandit. Suspendisse eu porta lacus. Sed sollicitudin tortor ac est accumsan porta a at leo. Quisque sollicitudin dignissim auctor.')
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
            title='A desesperança da situação de rua'
            date='07 de jul'
            function={getToArticle1}
        />
        <Card
            img={backgroundImgPng2}
            title='A importância da leitura na nossa vida cotidiana'
            date='07 de jul'
            function={getToArticle2}
        />
        <Card 
            img={backgroundImgPng}
            title='Alguém já te perguntou como foi seu dia?'
            date='06 de jul'
            function={getToArticle3}
        />
      </div>
      </>
    ) : (
      <Article
        img={img}
        title={title}
        date={date}
        body={body}
      />
    )}
    
  </div>
  );
}