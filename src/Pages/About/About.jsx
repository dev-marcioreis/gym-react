import Header from '../../Components/Header'
import HeaderImg from '../../images/bg1.png'
import Story from '../../images/story.jpg'
import Vision from '../../images/vision.jpg'
import Mission from '../../images/mission.jpg'
import './about.css'

const About = () => {
  return (
    <>
      <Header title='Sobre Gym' image={HeaderImg}>
      Os melhores equipamentos, infraestrutura e muito mais com mensalidades acessíveis.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-img">
            <img src={Story} alt="História" />
          </div>
          <div className="about__section-content">
            <h1>História</h1>
            <p>Nosso objetivo é levar e democratizar a atividade fisica para todos.</p>
            <p>A primeira Academia Gym inaugurou em 2009, em São Paulo, logo seguida por mais academias na Capital Paulista, Rio de Janeiro, Brasília e Porto Alegre.</p>
            <p>A expansão foi sempre muito rápida. Em 2016, aconteceu uma grande festa para comemorar meio milhão de alunos. Para atender os seus clientes bem, é preciso inovação.</p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Visão</h1>
            <p>O cliente é um só e vive em dois mundos: um físico (off) e outro digital (on). Com esta lógica, a Gym criou, a partir de 2017, uma série de inovações tecnológicas para fazer parte da vida do cliente, e não só quando ele está na academia.</p>
            <p>Este foi o ano da inauguração da Gym que é a primeira unidade a funcionar 24 horas na Avenida Paulista, com direito a shows..</p>
          </div>
          <div className="about__section-img">
            <img src={Vision} alt="Visão" />
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-img">
            <img src={Mission} alt="Missão" />
          </div>
          <div className="about__section-content">
            <h1>Missão</h1>
            <p>A Gym é uma rede de academias baratas feitas para todos os públicos, e nossa missão é atender à todos de forma igual.</p>
            <p>Nossa principal missão é transformar vidas através da atividade fisica em todas as classes da sociedade Brasileira.</p>
            <p>Hoje estamos conseguindo cumprir a meta de estar em todos os lugares e atender a todos.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About