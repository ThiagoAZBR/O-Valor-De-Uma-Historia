import { useHistory } from 'react-router-dom';
import '../styles/components/card.scss';

export function Card(props) {

    const history = useHistory();

    return (
        <div className='card' onClick={props.function}>
                <img src={props.img} alt={props.alt} />
                <h2> {props.title} </h2>
                <h4> {props.date} </h4>
        </div>
    )
}