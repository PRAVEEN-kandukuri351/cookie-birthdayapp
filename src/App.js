import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
  const [showError, setShowError] = useState(false);

  const correctEmail = 'cookie@gmail.com';
  const correctPassword = 'cookie0304';

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email.toLowerCase() === correctEmail &&
      password.toLowerCase() === correctPassword
    ) {
      setIsLoggedIn(true);
      setError('');
      setShowError(false);
    } else {
      setShowError(true);
      setError(
        "Hey Bujji! 💕 The password is your nickname I have kept for you and My birthday date and Followed by your birthday date (all small letters). Think about it 😊"
      );
    }
  };

  if (isLoggedIn) {
    return <BirthdayPage />;
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <span className="gift-icon">🎁</span>
          <h1>A Special Surprise Awaits!</h1>
          <p>Login to unwrap your gift 💝</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          {showError && <div className="error-message">{error}</div>}

          <button className="login-btn">Open My Surprise 💖</button>
        </form>

        <div className="hint">
          <p>✨ Hint: Something sweet is waiting for you! ✨</p>
        </div>
      </div>
    </div>
  );
}

function BirthdayPage() {
  const photos = [
    '/photo1.jpg',
    '/photo2.png',
    '/photo3.jpg',
    '/photo4.jpg'
  ];

  return (
    <div className="birthday-container">
      <Confetti />

      <div className="birthday-content">
        <div className="main-wish">
          <h1 className="birthday-title">🎉 Happy Birthday 🎉</h1>
          <h2 className="birthday-name">My Dear Cookie ❤️</h2>
        </div>

        <div className="message-card">
          <p>
            On this special day, I want you to know how much you mean to me.
            You make every moment brighter and every day more beautiful. Since you came into my life, for the first time I'm truly happy—heartfully, without any filter or pretending like I'm happy. Thank you for coming into your chinna pandu's life.💖
          </p>
          <p>
            May this year bring you endless happiness, love, and success 🌸 and May Next year we can celebratee together in our home. Love you bujji thalli till my soul go to heaven
          </p>
          <p className="signature">With all the love and affection from Your Chinna Pandu💕</p>
        </div>

        <div className="photo-gallery">
          <h3>✨ Our Memories ✨</h3>
          <div className="gallery-grid">
            {photos.map((photo, index) => (
              <div key={index} className="photo-frame">
                <img src={photo} alt="memory" />
              </div>
            ))}
          </div>
        </div>

        <div className="wishes-section">
          <h3>💖 Birthday Wishes 💖</h3>
          <div className="wishes-grid">
            <div className="wish-card">
              <span>🌈</span>
              <p>May your life be colorful</p>
            </div>
            <div className="wish-card">
              <span>⭐</span>
              <p>Shine bright always</p>
            </div>
            <div className="wish-card">
              <span>🌸</span>
              <p>Happiness everywhere</p>
            </div>
            <div className="wish-card">
              <span>🎉</span>
              <p>Joyful moments forever</p>
            </div>
          </div>
        </div>

        <div className="cake-section">
          <div className="cake">🎂</div>
          <p className="blow-text">Make a wish! 💫</p>
        </div>

        <div className="final-message">
          <p>You're not just a year older, you're a year more amazing 💖</p>
          <span className="big-heart">❤️</span>
        </div>
      </div>
    </div>
  );
}

function Confetti() {
  const pieces = Array.from({ length: 40 });

  return (
    <div className="confetti-container">
      {pieces.map((_, i) => (
        <div
          key={i}
          className="confetti-piece"
          style={{
            left: Math.random() * 100 + '%',
            animationDelay: Math.random() * 3 + 's',
            backgroundColor: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff9ff3'][
              Math.floor(Math.random() * 4)
            ]
          }}
        ></div>
      ))}
    </div>
  );
}

export default App;