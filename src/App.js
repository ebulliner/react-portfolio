import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Aboutme from './components/Aboutme';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header/>
      <Section/>
      <Aboutme/>
      <Contact/>
    </div>
  );
}

export default App;
