import '../styles/components/card.scss';

export function Card(props) {

    return (
        <div className='card' onClick={props.function}>
                <img src={props.img} alt={props.alt} />
                <h2> {props.title} </h2>
                <h4> {props.date} </h4>
        </div>
    )
}