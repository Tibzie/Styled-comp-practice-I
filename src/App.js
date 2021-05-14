import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GlobalStyle from './components/globalStyle';



function App() {
  return (
      <div className="container">
        <GlobalStyle />
        <Navbar />
        <Hero />
      </div>
  );
}

export default App;
