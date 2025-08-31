const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

function App() {
  const user = {
    imgSrc:
      'https://media.themoviedb.org/t/p/w500/A14lLCZYDhfYdBa0fFRpwMDiwRN.jpg',
    name: 'Emma Watson',
    nick: '@EmWatson',
    tweetsQty: 1337,
    folowing: 561,
    folowers: 718,
  };
  return (
    <>
      <UserCard
        userImg={user.imgSrc}
        userName={user.name}
        userNick={user.nick}
        userTweetQty={user.tweetsQty}
        userFolowing={user.folowing}
        userFolowers={user.folowers}
      />
    </>
  );
}

function UserCard({
  userImg,
  userName,
  userNick,
  userTweetQty,
  userFolowing,
  userFolowers,
}) {
  return (
    <article className='userCard'>
      <div className='imageWrapper'>
        <img src={userImg} alt={userName} className='userImg' />
        <h2 className='userName'>{userName}</h2>
        <p className='userNick'>{userNick}</p>
      </div>
      <button className='addButton'>+</button>
      <div className='userNumbers'>
        <div className='statItem'>
          <p className='statLabel'>Tweets</p>
          <p className='statNumber'>{userTweetQty}</p>
        </div>
        <div className='statItem'>
          <p className='statLabel'>Following</p>
          <p className='statNumber'>{userFolowing}</p>
        </div>
        <div className='statItem'>
          <p className='statLabel'>Followers</p>
          <p className='statNumber'>{userFolowers}</p>
        </div>
      </div>
    </article>
  );
}
