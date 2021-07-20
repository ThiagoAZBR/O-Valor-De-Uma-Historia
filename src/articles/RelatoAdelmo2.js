import ArianeImg from '../assets/images/arianeImg.png';
import FernandoImg from '../assets/images/FernandoImg.png';

export function RelatoAdelmo2() {
    return (
        <div className='bodyArticle'>
            <img src={ArianeImg} id='arianeImg' alt="" />
            <p id="paragrafo1">
            Essa experiencia que tive foi muito diferente, desde pequena meu pai sempre me falava que as pessoas da rua sempre estavam atrás de drogas e bebidas. Porém nesse dia foi diferente, eu vi que nem sempre as pessoas estão atrás de bebidas e sim de igualdade,visibilidade, esse homem me trouxe muitos conhecimentos de coisas que nem eu sabia.
            </p>
            
            <p id="paragrafo2">
            Hoje sei que as pessoas mais honestas então na rua....
            </p>

            <img src={FernandoImg} id='fernandoImg' alt="" />

            <p id="paragrafo3">
            Eu gostei bastante de entrevistar ele por que ele falou muita coisa que fazia sentido e que a história dele é muita interessante por causa das coisas que ele já passou, E também por causa das dificuldades dele que ele passa diariamente.
            </p>
        </div>
    )
}