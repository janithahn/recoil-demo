import './App.css';
import { useRecoilValueLoadable } from 'recoil';
import { userSelector } from './recoil/actions/fetchUsers';

function App() {

  const fetchedUser = useRecoilValueLoadable(userSelector);

  console.log(fetchedUser);

  return (
    <div className="App">
      <header style={{ paddingLeft: 20, paddingRight: 20 }} className="App-header">
        <h2>State: {fetchedUser.state}</h2>
        {fetchedUser.contents.results ? 
          <h1>Info: {
            JSON.stringify(fetchedUser.contents.results[0].name)
          }</h1>
        :undefined}
      </header>
    </div>
  );
}

export default App;
