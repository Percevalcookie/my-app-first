import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="M.E.U.H" keywords={[`gatsby`, `application`, `react`]} />
    <div className="partie11">
      <div className="topmenu">
        <img className="logo" src="https://lescreasdetiti.fr/52303-large_default/motif-thermocollant-point-d-interrogation.jpg"/><p><span id="span1"><Link to="/home/">M.E.U.H</Link></span><span><Link to="/Website/">Access Web Site</Link></span><span><Link to="/DownloadApp/">Dowload the app</Link></span><span><Link to="/Signin/"> sign in/sign out</Link></span></p>
      </div>
      <p id="log1P">Log in : </p>
      <div className="connexionCadre">
      
        <div className="Cadre">
            <label>
                <input type="text "className="inputCadre" placeholder="login" id="login"/>
            </label>    

        </div>
        <div className="Cadre">
            <label> 
                <input type="text" className="inputCadre" placeholder="Password" id="password"/>
        
            </label>
        </div>
        <div className="Cadre">
            <label> 
                <input type="button" className="inputCadre" value="submit" id="submitButton"/>
        
            </label>
        
        </div>
      </div>
    </div>
    


    
  </Layout>
)

export default IndexPage
