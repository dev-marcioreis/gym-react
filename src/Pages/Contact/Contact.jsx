import Header from '../../Components/Header'
import HeaderImg from '../../images/header_2.png'
import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineMessage } from 'react-icons/ai'
import './contact.css'

const Contact = () => {
  return (
    <>
      <Header title='Fale Conosco' image={HeaderImg}>
        Você pode entrar em contato conosco todos dias do ano.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:dev.marcioreis@gmail.com" target="_blank" rel="noreferrer noopener"><AiOutlineMail /></a>
            <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511994341245" target="_blank" rel="noreferrer noopener"><AiOutlineWhatsApp /></a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener"><AiOutlineMessage /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact