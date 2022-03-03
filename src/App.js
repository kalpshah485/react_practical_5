import { useSelector } from 'react-redux';
function App() {
  const users = useSelector(state => state.reducer.users);
  return (
    <>
      <p className="h1">{users[0].first_name + " " + users[0].last_name}</p>
      <p className="h1">{users[0].email}</p>
      <img src={users[0].avatar} alt="" />
    </>
  );
}

export default App;
