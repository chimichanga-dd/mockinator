import Home from './components/home/home'
import Header from './components/shared/header'
import Footer from './components/shared/footer'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <div className='header'>
        <Header />
      </div>
      <div className='body'>
        <Home />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
