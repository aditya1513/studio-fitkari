import React from 'react'
import { Link } from 'gatsby'
import Container from '../Container/Container'
import BrandLogo from '../../images/logo.png'


const NavItem = ['Home','Work','Client','Contact']
// const Navigation = <Link style={{margin : '0 1rem'}}></Link>

const Header = () => (

<header
   style={{
     height : '65px',
     display :'grid',
     gridTemplateColumns :'inherit',
     gridColumn: '1/4',
     padding: '1.9rem 0 3.9rem',
   }}
>
    <Container>
      <div className="company-branding"
      
      style={{
        gridColumn:'1/4',
        justifyContent :'flex-start',
        display : 'flex',
      }}>  
        <Link
          to="/"
          >
          <img src={BrandLogo} />
        </Link>
        </div>

        <nav className="site-nav"
          style={{
            gridColumn :'7/13',
            justifyContent :'flex-end',
            display : 'flex',
            alignItems : 'center',
            fontSize : '14px',
            textTransform: 'uppercase',
            fontWeight : 'bold',
            letterSpacing: '1px',
          }}
        className="not-mobile"> 
         <Link style={{margin : '0 1rem'}}>{NavItem[0]}</Link>
         <Link style={{margin : '0 1rem'}}>{NavItem[1]}</Link>
         <Link style={{margin : '0 1rem'}}>{NavItem[2]}</Link>
         <Link style={{margin : '0 1rem'}}>{NavItem[3]}</Link>
         </nav>
         
        </Container>
  </header>
  
);

export default Header
