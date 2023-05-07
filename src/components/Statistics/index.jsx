import s from './style.module.css';
export default function Statistics(props) {
    console.log(props);
    return (
        <div className={s.statistics}>
            {props.title && <h2 className={s.title}>{props.title}</h2>}
                <ul className={s.stats}>
                {props.stats.map(stat => (
                    <li key={stat.id} className={s.item}>
                        <span className={s.label}>{stat.label}</span>
                        <span className={s.percentage}>{stat.percentage}</span>
                        </li>
                ))}    
                </ul>
        </div>
    );
}