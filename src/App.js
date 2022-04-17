import React from 'react'
import Layout from './components/layout/Layout'
import Home from './components/Home'
import Who from './components/Who'
import Mywork from './components/Mywork'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Layout>
      <Home />
      <Who />
      <Mywork />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default App
