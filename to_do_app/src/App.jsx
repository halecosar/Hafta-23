import React from 'react'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import FooterInfo from './components/footerInfo'


function App() {
  return (
    <div>
      <section className="todoapp">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>


      </section>

      <FooterInfo></FooterInfo>

    </div>
  )
}

export default App

