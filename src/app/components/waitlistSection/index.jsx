"use client";

import "./waitlistSection.css";

const WaitlistSection = () => {
  const handleSubmit = () => {};

  return (
    <div className="waitlistWrapper">
      <div className="bgContainer">
      </div>
      <h3 className="waitlistHeader">Sign Up to Waitlist</h3>
      <form className="form_container" onSubmit={handleSubmit} method="post">
        <input
          type="email"
          required
          className="waitlist-input"
          placeholder="type your email"
        />
        <button type="submit" className="ctaBtn">
          <p>Join Waitlist</p>
        </button>
      </form>
    </div> 
  );
};

export default WaitlistSection;
