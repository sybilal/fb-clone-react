import './App.css';
import Header from './components/Header/Header.js';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import RightWidget from './components/RightWidget/RightWidget';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
        <RightWidget />
      </div>
    </div>
  );
}

export default App;
