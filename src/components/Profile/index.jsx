import s from './style.module.css';

export default function Profile(props) {
  console.log(props);

    return (
      <div className={s.profile}>
        <div className={s.description}>
           <img
            src={props.avatar}
            alt="User avatar"
            className={s.avatar}
    width="30" />
          <p className={s.name}>{props.username}</p>
          <p className={s.tag}>@{props.tag}</p>
          <p className={s.location}>{props.location}</p>
  </div>

        <ul className={s.list}>
         <li className={s.item}>
              <span className={s.label}>Followers</span>
              <span className={s.quantity}>{props.stats.followers}</span>
          </li>  
    <li className={s.item}>
              <span className={s.label}>Views</span>
              <span className={s.quantity}>{props.stats.views}</span>
          </li>  
    <li className={s.item}>
              <span className={s.label}>Likes</span>
              <span className={s.quantity}>{props.stats.likes}</span>
    </li>       
    </ul> 
</div>
    );
}