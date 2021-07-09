import '../styles/pages/article.scss';
import backArrow from '../assets/images/backArrow.svg';
import { useHistory } from 'react-router-dom';
import '../styles/pages/article.scss';

export function Article(props) {

    function GetToHome() {
        window.location.reload();
    }
    return (
        <div className='principal'>
            <div className="imageArticle">
                <img src={props.img} alt='Enter Image' />
            </div>
            <div className="titleArticle">
                <h2> {props.title} </h2>
                <h4> {props.date} </h4>
                <div></div>
            </div>
            <div className="bodyArticle">
                <h4> {props.body} </h4>
            </div>
            <div className="bottomArticle">
                <div onClick={GetToHome} className="clickBox">
                    <img src={backArrow} alt="Back Arrow" />
                    <h4>Voltar</h4>
                </div>
            </div>
        </div>
    )
}