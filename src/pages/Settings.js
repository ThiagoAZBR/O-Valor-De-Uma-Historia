import '../styles/pages/settings.scss';
import closeButton from '../assets/images/closeButton.svg';
import { useHistory } from 'react-router-dom';

export function Settings() {
    const history = useHistory();

    function getToHome() {
        history.push('/')
    }
    return (
        <div className='global'>
            <div className="header">
                <button onClick={getToHome}>
                    <img src={closeButton} alt="Close button" />
                </button>
            </div>
            <div className='settings'>
                <div className="options">
                    <div className="line_"></div>

                    <h4>Quem somos</h4>

                    <div className="line"></div>

                    <h4>Desejo ajudar também</h4>

                    <div className="line"></div>

                    <h4>Contato</h4>

                    <div className="line_"></div>
                </div>
            </div>
        </div>
    );
}