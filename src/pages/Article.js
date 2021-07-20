import '../styles/pages/article.scss';
import backArrow from '../assets/images/backArrow.svg';
import '../styles/pages/article.scss';
import { PessoasInvisiveis } from '../articles/PessoasInvisiveis';
import { ProjetoIntegrador } from '../articles/ProjetoIntegrador';
import { RelatoAdelmo1 } from '../articles/RelatoAdelmo1';
import { RelatoAdelmo2 } from '../articles/RelatoAdelmo2';

export function Article(props) {
    
    function goToInit() {
        window.scrollTo(0,0);
    }
    goToInit();
    function GetToHome() {
        window.location.reload();
    }
    const paramIndex = props.index;

    function renderComponent(param) {
        switch(param) {
            case 0:
                return <ProjetoIntegrador />
            case 1:
                return <PessoasInvisiveis />
            case 2:
                return <RelatoAdelmo1 />
            case 3:
                return <RelatoAdelmo2 />
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