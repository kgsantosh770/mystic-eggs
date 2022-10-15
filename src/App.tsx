import { useSelector } from 'react-redux';
import Banner from './components/Banner';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Homepage from './pages/Homepage';

function App() {

  interface themeState {
    theme: string,
  }

  const theme = useSelector((state: themeState) => state.theme)

  return (
    <div className="App" id={theme}>
        <Sidebar></Sidebar>
        <div className="container ml-[55px] py-6 px-9">
          <Header></Header>
          <Homepage />
        </div>
    </div>
  );
}

export default App;
