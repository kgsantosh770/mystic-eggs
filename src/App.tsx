import { useSelector } from 'react-redux';
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
          <Homepage />
    </div>
  );
}

export default App;
