import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from'./components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <>
      <MyNav brand="EpiBooks"/>
      <Welcome heading="Welcome to EpiBooks" subTitle="il miglior shop!"/>
      <AllTheBooks/>
      <MyFooter footerContent="EpiBooks"/>
    </>
  );
}

export default App;
