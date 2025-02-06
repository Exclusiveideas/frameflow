import Link from 'next/link';
import './ctabanner.css';

const CTABanner = () => {
  return (
    <div className='ctaBanner'>
        <h1 className="bannerHeader">Ready to Supercharge your Editing?</h1>
        <p className="bannerDesc">Join hundreds of Video Editors by using FrameFlow to manage your editing process</p>
        <Link href="#hero"><button className="bannerBtn">Get Started Now</button></Link>
    </div>
  )
}

export default CTABanner