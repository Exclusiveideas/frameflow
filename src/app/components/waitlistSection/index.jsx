"use client";

import "./waitlistSection.css";

const WaitlistSection = () => {
  
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://getlaunchlist.com/js/widget.js";
  //   script.defer = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     // Cleanup if necessary
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <div className="waitlistWrapper">
      <div className="bgContainer">
      </div>
      <h3 className="waitlistHeader">Sign Up to Waitlist</h3>
      {/* <div className="launchlist-widget" data-key-id="m2QxrD" data-height="180px"></div> */}
    </div> 
  );
};

export default WaitlistSection;
