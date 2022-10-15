import { useSelector } from 'react-redux';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {

  interface themeState {
    theme: string,
  }

  const theme = useSelector((state: themeState) => state.theme)

  return (
    <div className="App" id={theme}>
        <Header></Header>
        <Sidebar></Sidebar>
    </div>
  );
}

export default App;
