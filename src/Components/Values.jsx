import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import { values } from '../data'
import Card from '../UI/Card'
import { TbReportMoney } from 'react-icons/tb'

const Values = () => {
  return (
    <section className="values">
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="Home e Mulher" />
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<TbReportMoney />} title='Preços' />
                <p>A sua melhor opção na hora de levar uma vida + saudável.</p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc}) => {
                            return (
                                <Card className="values__value" key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values