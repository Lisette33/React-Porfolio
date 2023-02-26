import logo from './logo.svg';
import './App.css';

function App() {

  const name="Lisette Morales";
  const navTitleOne="About Me";
  const navTitleTwo="Portfolio";
  const navTitleThree="Contact";
  const navTitleFour="Resume";

  return (
    <div> 
      <h1>{name}</h1>
      <h2>{navTitleOne}</h2>
      <h3>{navTitleTwo}</h3>
      <h4>{navTitleThree}</h4>
      <h5>{navTitleFour}</h5>
    </div>
  );
}

export default App;
