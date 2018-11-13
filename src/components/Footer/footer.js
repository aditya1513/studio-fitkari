import React from 'react'
import { Link } from 'gatsby'
import Container from '../Container/Container'
import BrandLogo from '../../images/logo.png'

const Footer = () => (

    <footer
    style={{
        display :'grid',
        gridTemplateColumns :'inherit',
        gridColumn: '1/4',
        padding : '3rem 0 3rem 0',
    }}
    >
        <Container>

        <div className="branding-footer"
        style={{
            gridColumn : '1/4',
            
        }}
        >
         <img src={BrandLogo} />
         <p>Culpa qui officia deserunt mollit 
             anim id est laborum. Sed ut </p>
        </div>
        <div className="footer-links"
        
        style={{
            display :'grid',
            gridTemplateColumns : '1fr 1fr',
            gridColumn : '4/9'
        }}
        >
          <div className="footer-services"
           style={{
               display : 'flex',
               gridColumn : '1',
               gridRow : '1/3',
               flexDirection : 'column',
           }}
          >
          <h4>Services</h4>
          <Link to='/'>Product Design</Link>
          <Link to='/'>Website Design</Link>
          <Link to='/'>Android App Design</Link>
          <Link to='/'>IOS App Design</Link>
          <Link to='/'>Hybrid App Design</Link>
          <Link to='/'>Dashboard Design</Link>
          <Link to='/'>Digital Product Branding</Link>
          </div>
          <div className="footer-company"
          style={{
            gridColumn : '2',
            gridRow : '1/2',
            display : 'flex',
            flexDirection : 'column',
        }}
          >
          <h4>Company</h4>
          <Link to='/'>About</Link>
          <Link to='/'>Logo</Link>
          <Link to='/'>Contact</Link>
          </div>
          <div className="footer-social-media"
          style={{
            gridColumn : '2',
            gridRow : '2/3',
        }}
          >
          <h4>Follow us</h4>
          <Link to='/'>Dribbble</Link>
          <Link to='/'>Instagram</Link>
          <Link to='/'>GitHub</Link>
          </div>
        
        </div>
        <div className="footer-subscribe"
         style={{
             gridColumn : '9/13',
            flexDirection : 'column',
             display:'flex',

         }}

        >
        <h4>Subscribe</h4>
        <input type="text" placeholder="Full Name"/>
        <input type="text" placeholder="Email id" />
        <button>Subscribe Now</button>
        </div>
        </Container>

    </footer>

);

export default Footer

