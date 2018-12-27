import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Page 3" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ratione
      quasi quam possimus alias libero nesciunt, sequi optio repudiandae
      corrupti aut! Iure pariatur accusantium laborum suscipit consectetur
      vitae, iusto ducimus.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
