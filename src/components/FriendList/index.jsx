import s from './style.module.css';
export default function FriendList(props) {
    console.log(props.friends);
    return (
        <div className={s.friends}>
            <h2 className={s.title}>Friends</h2>
            <ul className={s.list}>
                {props.friends.map(friend => (
                    <li key={friend.id} className={s.item}>
                        <span className={friend.isOnline ? s.online : s.offline}></span>
                        <img className={s.img} src={friend.avatar} alt='' width="48px" />
                        <h4>{friend.name}</h4>
                    </li>
                ))}
  
</ul>
</div>
    );
}