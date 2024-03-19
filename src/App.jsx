import Profile from './components/Profile/Profile';
import userData from './userData.json'
import FriendList from './components/FriendList/FriendList';
import friend from './friends.json';

function App() {
  const {username, tag, location, avatar, stats} = userData;
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friend} />
    </>
  );
}

export default App
