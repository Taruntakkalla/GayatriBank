import { SearchIcon } from "lucide-react"

import { useState } from "react"
function Nav(){
    const [font,IncrementFont] = useState<number>()

    
        
    
    return(
       <>
         <div>
      <div className= "TopNav">
        <img src="https://gayatri.bank.in/wp-content/uploads/2021/06/GCUB-Logo-for-Web_01-copy-1-1024x167.png" className="LogoImg" alt="Logo"/>
        <img src = "https://gayatri.bank.in/wp-content/uploads/elementor/thumbs/GCUB-Round-Logo-PNG-p9d97qwofgtttjakf14w8q3v24wtt49ne1t8x4s432.png" className="MobileLogo" alt="Logo"/>
        <div>
          <div className="search">
            <input className= "SearchInput" type = "search" placeholder='search '/>
            <SearchIcon className="iconSearch"/>
          </div>
          <div>
           
          </div>
        </div>
        <div >
             <select id="lang-select" name="lang">
                <option value="en">English</option>
                <option value="Tel">Telugu</option>
                <option value="hn">Hindhi</option>
            </select>
        </div>
        <div>
          <button onClick={() => IncrementFont(font + 1)}>A+</button>
          <button>A</button>
          <button>A-</button>
        </div>
      </div>
      <div className="BtmNav">
         <div className="LinksSection">
           <p style = {{ fontSize: `10+${font + 2}px` }} className="links" >Home</p>
             <a 
                href="https://gayatri.bank.in/about-us/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none'}}
              >
                <p className="links">About</p>
              </a>
           <a 
                href="https://gayatri.bank.in/deposits/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none'}}
              >
                <p className="links">Deposit</p>
              </a>
           <a 
                href="https://gayatri.bank.in/loan-types/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none'}}
              >
                <p className="links">Loans</p>
              </a>
           <a 
                href="https://gayatri.bank.in/branch-locator/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none'}}
              >
                <p className="links">Branch locator</p>
              </a>
           <a 
                href="https://gayatri.bank.in/atmlocator/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none'}}
              >
                <p className="links">ATM locator</p>
              </a>
           <a 
                href="https://gayatri.bank.in/about-us/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ textDecoration: 'none'}}
              >
                <p className="links">Career</p>
              </a>
         </div>
      </div>
    </div>
       </>
    )
}


export default Nav