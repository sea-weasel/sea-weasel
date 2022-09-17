import logo from "./logo.svg";
import "./App.css";
import gweasel from "./images/sea-weasel-boat-g300x300.png";
import swtype from "./images/SeaWeaselGoldTypeFinal-removebg(2).png";
import mono from "./images/SeaWeaselGoldMono-removebg-preview.png";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./components/CustomForm";


function App() {
  const postUrl = `https://gmail.us11.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

  return (
    <>
      <div className="App">
        <div className="container">
          <div className="opaque-canvas">
            <div className="title">
              <img src={swtype} className="logo-type" alt="Sea Weasel" />
              <img src={mono} className="logo-mono" alt="Sea Weasel" />
            </div>

            <div className="content">
              <div className="cta">
                <h2>You're the captain now...</h2>
                <p>
                  Sea Weasels swim around all over the place, we don't give a
                  shit. Sign up below to find out when you can get your paws on
                  Sea Weasel Apparel.
                </p>

                <div className="mailchimp">
                  <MailchimpSubscribe
                    url={postUrl}
                    render={({ subscribe, status, message }) => (
                      <CustomForm
                        status={status}
                        message={message}
                        onValidated={(formData) => subscribe(formData)}
                      />
                    )}
                  />
                </div>

                {/* <input placeholder="enter email address"></input>
                <button className="ripple">Notify me</button> */}
              </div>

              <div className="image">
                <img src={gweasel} alt="sea-weasel"></img>
              </div>
            </div>

            {/* <div className="social">
              <a href="https://www.facebook.com/">
                <i class="devicon-facebook-plain"></i>
              </a>
              <a href="https://twitter.com/home">
                <i class="devicon-twitter-original"></i>
              </a>
              <a href="https://www.linkedin.com/in/damon-pickett/">
                <i class="devicon-linkedin-plain"></i>
              </a>
            </div> */}

            <div className="copyright">
              <p>&copy; Sea Weasel Apparel 2022</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
