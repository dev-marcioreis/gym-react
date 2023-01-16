import Header from '../../Components/Header'
import HeaderImg from '../../images/header_3.png'
import './gallery.css'

const Gallery = () => {

  const galleryLength = 6
  const images = []

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
      <Header title="Nossas Fotos" image={HeaderImg}>
        Está na hora da mudança, coloque mais saúde no seu verão.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map( (image, index) => {
              return (
                <article key={index}>
                  <img src={image} alt={`Galeria de imagens ${index + 1}`} />
                </article>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery