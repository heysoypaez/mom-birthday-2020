import React from 'react'
import Layout from '../components/layout'
import { StaticQuery, graphql } from 'gatsby'
import Card from '../components/Card'
import MusicCard from '../components/MusicCard'
const garfielfBirthDayImg =
  'https://loscomentarios.com/files/cumpleanos/imagenes_de_cumpleanos-2602.gif'

const IndexPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query MyQuery {
          json {
            data {
              music {
                elevation
                title
              }
              mountains {
                elevation
                title
                image {
                  publicURL
                }
              }
            }
          }
        }
      `}
      render={data => {
        console.log(data)
        if (!data.json.data) {
          return <p>Loading…</p>
        }

        return (
          <section>
            <figure style={{ margin: 'auto', textAlign: 'center' }}>
              <img src={garfielfBirthDayImg} width={200} />
            </figure>
            <h1>¡ Feliz cumpleaños Mami !</h1>
            <blockquote>
              Señora de las 4 decadas + 1, Gracias por todo, por el apoyo, por
              la educación en Santo Cristo, por cada plato de comida, por tu
              esfuerzo al ir a Panama, por tu lucha al ayudarme a llegar Chile.
            </blockquote>
            <h2>Música para que goces</h2>
            <section className="MusicList">
              <MusicCard />
              <MusicCard
                src="https://www.youtube.com/embed/LH1VLXKNIuY"
                title="Mi novia se está poniendo vieja"
                author="Ricardo Arjona"
              />
              <MusicCard
                src="https://www.youtube.com/embed/0RM4OJQ8Kso"
                title="Maracas"
                author="Joan Sebastian"
              />
              <MusicCard
                src="https://www.youtube.com/embed/r8oWe1zCLK0"
                title="Margarita"
                author="Fito Páez"
              />
              <MusicCard
                src="https://www.youtube.com/embed/Y1TG6PANdZM"
                title="Brindis"
                author="Thalia"
              />
            </section>
            <h2>Fotos de Susana</h2>
            <section className="PhotosList">
              {data.json.data.mountains.map(d => (
                <Card
                  title={d.title}
                  elevation={d.elevation}
                  src={d.image.publicURL}
                />
              ))}
            </section>
            <blockquote>Feliz cumpleaños</blockquote>
          </section>
        )
      }}
    />
  </Layout>
)

export default IndexPage
