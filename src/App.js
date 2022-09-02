import logo from './logo.svg';
import './App.css';
import gweasel from './images/sea-weasel-boat-g300x300.png';

function App() {
  return (
    <div className="App">

      <div className='container'>

        <div className='title'>
          <h1>Sea Weasel Apparel</h1>
        </div>

        {/* <img src={sw} alt='logo'></img> */}

        <div className='content'>

          <div className='cta'>
            <h2>You're the captain now...</h2>
            <p>Sea Weasels swim around all over the place, we don't give a shit. Sign up below to find out when you can get your paws on Sea Weasel Apparel.</p>
            <input placeholder='enter email address'></input>
            <button className='ripple'>Notify me</button>
          </div>

          <div className='image'>
            <img src={gweasel} alt='sea-weasel'></img>
          </div>

        </div>

        <div className='social'>
          <a href='https://www.facebook.com/'><i class="devicon-facebook-plain"></i></a>
          <a href='https://twitter.com/home'><i class="devicon-twitter-original"></i></a>
          <a href='https://www.linkedin.com/in/damon-pickett/'><i class="devicon-linkedin-plain"></i></a>
        </div>

        <div className='copyright'>
          <p>&copy; Sea Weasel Apparel 2022</p>
        </div>

      </div>

    </div>
  );
}

export default App;
