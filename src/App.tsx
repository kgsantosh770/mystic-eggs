import { useSelector } from 'react-redux';
import Header from './components/Header';

function App() {

  interface themeState {
    theme: string,
  }

  const theme = useSelector((state: themeState) => state.theme)

  return (
    <div className="App" id={theme}>
        <Header></Header>
    </div>
  );
}

export default App;
