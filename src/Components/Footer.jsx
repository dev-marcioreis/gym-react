import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { AiFillFacebook, AiOutlineTwitter, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to='/' className='logo'>
                    <img src={Logo} alt="Logo" />
                </Link>
                <p>Os melhores equipamentos, infraestrutura e muito mais com mensalidades acessíveis.</p>
                <div className="footer__social">
                    <a href="https://www.facebook.com/" target="_blank" rel='noreferrer noopener'><AiFillFacebook /></a>
                    <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter /></a>
                    <a href="https://www.instagram.com/" target="_blank" rel='noreferrer noopener'><AiFillInstagram /></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel='noreferrer noopener'><AiFillLinkedin /></a>
                </div>
            </article>
            <article>
                <h4>Institucional</h4>
                <Link to='/about' className='link'>Sobre</Link>
                <Link to='/gallery' className='link'>Galeria</Link>
                <Link to='/trainers' className='link'>Professores</Link>
                <Link to='/contact' className='link'>Contato</Link>
            </article>
            <article>
                <h4>Planos</h4>
                <Link to='/plans' className='link'>Planos</Link>
                <Link to='/' className='link'>Contratos</Link>
                <Link to='/' className='link'>Valores</Link>
                <Link to='/' className='link'>Corporativos</Link>
            </article>
            <article>
                <h4>Corporativo</h4>
                <Link to='/' className='link'>Imprensa</Link>
                <Link to='/' className='link'>Indique um ponto</Link>
                <Link to='/' className='link'>Franqueado</Link>
                <Link to='/' className='link'>Trabalhe Conosco</Link>
            </article>
        </div>
        <div className="footer__copy">
            <small>2022 Márcio Reis - &copy;Todos os direitos reservados.</small>
        </div>
    </footer>
  )
}

export default Footer