
import videourl from './assets/final.mp4';
import React, { useState } from 'react';
import Sirisha from 'src/assets/Sirisha.png';
function App() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpen = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const [type, onType] = useState(true);

  const notype = () => {
    onType(true);
  };
  const strtype = () => {
    onType(false);
  };


  return (
    <div>

      <header id="header">
        <div id='SB'><img id="logosb" src=".\assets\sblogo.png" /></div>
        <nav id='nav'>
          <ul>
            <li id="navcont"><a onClick={handleOpen} href='#'>Sign in</a></li>
            <li><a href='./Projects.jsx'>Contact</a></li>
            <li><a href='#'>About</a></li>
            <li ><a href='https://www.linkedin.com/in/sirisha-dalasari-990871336/'>Home</a></li>

          </ul>

        </nav>

      </header>

      <section id='intro'>
        <div class="divs" id="bio3">
          <h1 id="bio1">This is <span>"SIRISHA DALASARI"</span></h1>
          <h2 id="bio2">A curious and passionate developer always eager to learn</h2>
          <h2>and create.
            I believe in blending creativity with code to build meaningful experiences.</h2>

        </div>
        <div class="divs" id="photo">
          <img src={Sirisha} alt="siri" />
        </div>
      </section>
      <footer id="footer">

        <div class="fc" id="fd1">


          <a href='https://www.linkedin.com/in/sirisha-dalasari-990871336/' >

            <img src="src\assets\linkedin.png" alt="LinkedIn" width="50" height="50" />
            <h3>Linked In</h3>

          </a>


        </div>
        <div class="fc" id='fd2'>
          <a href="https://github.com/siridalasari" >
            <img src="src\assets\github.png" alt='Git Hub' width='50' height='50' />
            <h3>Git Hub</h3>
          </a>
        </div>
        <div class="fc" id='fd3'>
          <a href="" >
            <img src="src\assets\mail.png" alt='Git Hub' width='50' height='50' />
            <h3>@Mail</h3>
          </a>
        </div>
      </footer>

      <div className='app'>
        <button onClick={handleOpen}>Click me</button>
        {
          showPopup && (
            <div className="popup-overlay">
              <div className="popup-box">
                <section id="contactbox">
                  <div id='ctop' width='500px' height='200px' >
                   <a href="#" onClick={handleClose}><img src="src\assets\cross.png" width='40px' height='40px ' style={{float:'right'}}/></a>
                  </div>
                  <div id='cbody'>
                    <div id="cdiv1">
                      <h1>Contact me </h1>
                      <div className='form-group'>
                       
                        <input type='text'  placeholder='👤Name'></input>
                      </div>
                      <div className="form-group">
                       
                        <input type="email" placeholder="📧Email" />
                      </div>

                      <div className="form-group">
                        <textarea placeholder="Message" rows="4"></textarea>
                      </div>

                      <button onClick={handleClose}>Send</button>

                    </div>
                    <div id="cdiv2">
<img src='src\assets\contimg.png' style={{backgroundAttachment:"fixed", objectFit:'cover', width:'100%', height:'100%'}}></img>
                    </div>
                  </div>

                </section>

              </div>
            </div>
          )
        }
      </div>

     
    </div>
  );
}

export default App;

