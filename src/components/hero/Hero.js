import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { backgroundImg, textBox, textContainer } from "./hero.module.css"

const Hero = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "RAIPL.jpeg" }) {
        childImageSharp {
          fluid(
            background: "transparent"
            traceSVG: {
              background: "transparent"
              color: "blue"
              alphaMax: 1.5
            }
          ) {
            tracedSVG
            srcSet
          }
        }
      }
    }
  `)
  console.log(file)
  return (
    <div className={backgroundImg}>
      <StaticImage
        src="../../../images/whale.jpg"
        aspectRatio={3 / 1.2}
        style={{ gridArea: "1/1", maxHeight: "50vh" }}
      />
      <div className={textBox}>
        <div className={textContainer}>
          <h1>Welcome to my site</h1>
          <Link to="/about/">Click here to learn more about me &rarr;</Link>
        </div>
      </div>
    </div>
  )
}
export default Hero
