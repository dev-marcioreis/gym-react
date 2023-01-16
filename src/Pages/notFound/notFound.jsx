import { Link } from 'react-router-dom'
import notFoundImg from '../../images/notfound.png'
import './notFound.css'

const notFound = () => {
  return (
    <section>
      <div className="container notfound__container">
        <h2>Página não encontrada.</h2>
        <Link to='/gym' className='btn'>Voltar</Link>
        <img src={notFoundImg} alt="Página não encontrada" />
      </div>
    </section>
  )
}

export default notFound