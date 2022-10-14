import { useSelector } from 'react-redux';

function App() {

  interface themeState {
    theme: string,
  }

  const theme = useSelector((state: themeState) => state.theme)

  return (
    <div className="App" id={theme}>
    </div>
  );
}

export default App;
