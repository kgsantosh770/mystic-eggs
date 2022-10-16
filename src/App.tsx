import { useSelector } from 'react-redux';
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
        <div className="lg:w-2/3 ml-16 py-6 px-10 lg:pl-14 lg:pr-3">
          <Header></Header>
          <Homepage />
        </div>
        <div className='w-1/3 pr-14 pl-3'></div>
    </div>
  );
}

export default App;
