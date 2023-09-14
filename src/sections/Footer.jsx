import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import FooterLinkCard from "../components/FooterLinkCard"
import {footerLinks, socialMedia} from "../constants"
const Footer = () => {
  return (
<footer className="max-container">
  <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
    <div className="flex flex-col items-start">
      <a href="/">
      <img src={footerLogo} alt="footerlogo" width={150} height={40}/>
      </a>
      <p className="text-white-400 mt-6 text-base leading-7 font-montserrat sm:max-w-sm">Get shoes ready for the new term at your nearst Nike store. Find your perfect size in store. Get rewards.</p>
      <div className="flex gap-2 mt-3">
      {
        socialMedia.map((item) => (
          <img src={item.src} alt={item.alt}  className="bg-white rounded-full object-contain w-6 p-1" />
        ))
      }
    </div>
    </div>
  
    <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap ">
      {
        footerLinks.map((item) => (
          <FooterLinkCard key={item.title} {...item} />
        ))
      }
    </div>
  </div>
  <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center ">
    <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
      <img src={copyrightSign} alt="copyright sign" width={20} height={20} className="rounded-full m-0" />
      <p>Copyright. All rights reserved.</p>
        
    </div>
    <p className="font-montserrat cursor-pointer">Terms & Conditions</p>

  </div>

</footer>  )
}

export default Footer