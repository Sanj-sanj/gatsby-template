import React from "react"
import Layout from "../components/layout/Layout"
import Hero from "../components/hero/Hero"

const Home = () => {
  return (
    <>
      <Hero />
      <Layout>
        <h1>This is a title</h1>
        <div>Hello world!</div>
        <h2>This is my H2</h2>
        <div>what could this ever mean.</div>
      </Layout>
    </>
  )
}
export default Home
