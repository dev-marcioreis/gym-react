import Header from '../../Components/Header'
import HeaderImg from '../../images/header_4.png'
import { trainers } from '../../data'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'
import Trainer from '../../Components/Trainer'
import './trainers.css'

const Trainers = () => {
  return (
    <>
      <Header title='Nossos Professores' image={HeaderImg}>
        Todos os nossos profissionais são formados, capacitados e sempre à disposição para te ajudar no treino.
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {
            trainers.map(({id, image, name, job, socials}) => {
              return (
                <Trainer key={id} image={image} name={name} job={job} socials={
                  [
                    {icon: <AiFillInstagram />, link: socials[0]},
                    {icon: <AiOutlineTwitter />, link: socials[1]},
                    {icon: <FaFacebookF />, link: socials[2]},
                    {icon: <GrLinkedinOption />, link: socials[3]}
                  ]}
                />
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers