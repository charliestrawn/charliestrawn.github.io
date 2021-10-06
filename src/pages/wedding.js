import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import MainCard from "../components/MainCard"
import Profile from "../components/Profile"

const WeddingPage = ({ data }) => {
  const [loaded, setLoaded] = useState(undefined)

  return (
    <Layout>
      <SEO title="Home" />
      <Profile home />
      <iframe src="https://open.spotify.com/embed/playlist/77f8q2bfnXimFV0902Q3Fv" width="100%" height="380"
              frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
      <iframe src="https://open.spotify.com/embed/playlist/4HF3e6nIzHlWi94bJdVRQ5" width="100%" height="380"
              frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    </Layout>
  )
}

export default WeddingPage
