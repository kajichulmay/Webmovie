import './App.css';
import Content from './components/layout/Content';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <Home />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
