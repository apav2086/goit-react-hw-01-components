import user from '../given/user.json';
import Profile from './Profile';
import FriendList from './FriendList';
import friendData from '../given/friends.json';

import Statistics from './Statistics';
import statData from '../given/data.json';
import transactions from '../given/transactions.json';
import TransactionHistory from './TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
      <Statistics title="Upload stats" stats={statData} />
      <Statistics stats={statData} />
      <FriendList friends={friendData} />
      <TransactionHistory items={transactions} />
      
    </div>
  );
};
