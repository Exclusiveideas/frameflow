"use client";

import "./heroSection.css";

const HeroSection = ({ handleScroll }) => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js";
  //   script.defer = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     // Cleanup if necessary
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div id="hero" className="heroWrapper">
      <p className="herotagline">
        Sign up for Early Access and get 100% Free Storyboards for 2 Project
      </p>
      <h2 className="heroWord">
        Edit Your Videos Faster <span className="ampersand"> & </span>Better
        With <br />
        AI-Powered Suggestion
      </h2>
      <p className="herotagline">
        Be equipped with industry and Niche Specific suggestions with
        <b> AI-Powered Video Analysis</b>
      </p>
      <p className="herotagline">
        Spend less time thinking and more time editing and earning, Sign Up Now!
      </p>
      <p className="herotagline">No more creative blocks</p>
      <div className="heroWaitlist_wrapper">
        {/* <div
          className="launchlist-widget"
          data-key-id="m2QxrD"
          data-height="180px"
        ></div> */}
        <div id="getWaitlistContainer" data-waitlist_id="24920" data-widget_type="WIDGET_3"></div>
      </div>
    </div>
  );
};

export default HeroSection;
