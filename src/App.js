import Articles from './components/Articles';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Skeleton Loader</h1>
      </header>
      <div className="content">
        <Articles />
        <UserProfile />
      </div>
    </div>
  );
}

export default App;
