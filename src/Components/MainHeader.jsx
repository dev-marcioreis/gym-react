import { Link } from 'react-router-dom'
import Image from '../images/header-img.png'

const MainHeader = () => {
  return (
    <div className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#2023JáTáAí</h4>
          <h1>Coloque a preguiça para <span>correr</span>!</h1>
          <p>Dá para comprar on-line, não perca tempo.</p>
          <Link to='/plans' className='btn'>Eu Quero</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Home e Mulher" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader