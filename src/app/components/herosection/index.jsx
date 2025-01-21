import "./heroSection.css";

const HeroSection = ({ handleScroll }) => {
  return (
    <div className="heroWrapper">
      <h2 className="heroWord">
        Edit Your Videos Faster Without Creative Blocks
      </h2>
      <p className="herotagline">
        Let AI give you industry-specific storyboard suggestions so you focus
        only on the editing
      </p>
      <div className="bulletPoints">
        <p className="points">Uniquely trained models just for you</p>
        <p className="points">Spend less time on each project</p>
        <p className="points">Take on more more projects and earn more</p>
        <p className="points">No more burnouts</p>
      </div> 
      <div className="ctaBtn" onClick={handleScroll}>
        <p>Join Waitlist</p>
      </div>
    </div>
  );
};

export default HeroSection;
