import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="M.E.U.H" keywords={[`gatsby`, `application`, `react`]} />
    <div className="partie1">
      <div className="topmenu">
        <img className="logo" src="https://lescreasdetiti.fr/52303-large_default/motif-thermocollant-point-d-interrogation.jpg"/><p><span id="span1"><Link to="/home/">M.E.U.H</Link></span><span><Link to="/Website/">Access Web Site</Link></span><span><Link to="/DownloadApp/">Dowload the app</Link></span><span><Link to="/connexion/"> sign in/sign out</Link></span></p>
      </div>

      <div className="centralPartOne">
        <h1>M.E.U.H.com : The first website able to create a meet-up !!</h1>
        <p>Read</p>
       <Link to="/connexion/" className="ConnexionButtonLink"> Ready to create your fisrt meet up ? </Link>
        
        </div>
    </div>
    


    <div id="Image">
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/404/">Go to 404 page </Link>
  </Layout>
)

export default IndexPage
