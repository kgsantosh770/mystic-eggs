import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Homepage from './pages/Homepage';
import Trending from './pages/Trending';

function App() {

  interface themeState {
    theme: string,
  }

  const theme = useSelector((state: themeState) => state.theme)

  return (
    <div className="App" id={theme}>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='trending' element={<Trending/>} />
      </Routes>
    </div>
  );
}

export default App;
