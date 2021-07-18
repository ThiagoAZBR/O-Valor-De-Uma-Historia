import '../styles/pages/article.scss';
import backArrow from '../assets/images/backArrow.svg';
import '../styles/pages/article.scss';
import { RelatoAdelmo1 } from '../articles/RelatoAdelmo1';
import { PessoasInvisiveis } from '../articles/PessoasInvisiveis';

export function Article(props) {

    function GetToHome() {
        window.location.reload();
    }
    const paramIndex = props.index;

    function renderComponent(param) {
        switch(param) {
            case 1:
                return <PessoasInvisiveis />
            default:
                return 'Ocorreu um erro!'
        }
    }
    return (
        <div className='principal'>
            <div className="imageArticle">
                <img src={props.img} alt='Article' />
            </div>
            <div className="titleArticle">
                <h2> {props.title} </h2>
                <h4> {props.date} </h4>
                <div></div>
            </div>
            {renderComponent(paramIndex)}
            <div className="bottomArticle">
                <div onClick={GetToHome} className="clickBox">
                    <img src={backArrow} alt="Back Arrow" />
                    <h4>Voltar</h4>
                </div>
            </div>
        </div>
    )
}