import Header from '../../Components/Header'
import HeaderImg from '../../images/header_1.png'
import Card from '../../UI/Card'
import { plans } from '../../data'
import './plans.css'

const Plans = () => {
  return (
    <>
      <Header title='Nossos Planos' image={HeaderImg}>
        Os melhores equipamentos, infraestrutura e muito mais com mensalidades acessíveis.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {
            plans.map(({id, name, desc, price, features}) => {
              return (
                <Card key={id} className='plan'>
                  <h3>{name}</h3>
                  <small>{desc}</small>
                  <h1>{`R$ ${price}`} /mês</h1>
                  <h4>Plano</h4>
                  {
                    features.map(({feature, available}, index) => {
                      return (
                        <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                      )
                    })
                  }
                  <button className='btn'>Escolha seu plano</button>
                </Card>
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Plans