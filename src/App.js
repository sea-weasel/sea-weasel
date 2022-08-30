import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className='container'>

        <div className='content'>
          <h1>Sea Weasel Apparel</h1>
          <h2>You're the captain now...</h2>
          <p>Sea Weasels swim around all over the place, they don't give a shit. You might find a Sea Weasel in bed with your wife. What are you gonna do about it? Nothing. Sign up below to find out when you can get your paws on Sea Weasel Apparel.</p>

          <div className='cta'>
            <input placeholder='enter email address'></input>
            <button>Sign up</button>
          </div>

        </div>

        <div className='social'>
          <i class="devicon-facebook-plain"></i>
          <i class="devicon-twitter-original"></i>
          <i class="devicon-linkedin-plain"></i>
        </div>

        <div className='copyright'>
          <p>&copy; Sea Weasel Apparel 2022</p>
        </div>

      </div>

    </div>
  );
}

export default App;
