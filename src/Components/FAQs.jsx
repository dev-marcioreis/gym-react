import SectionHead from './SectionHead'
import { FaQuestion } from 'react-icons/fa'
import FAQ from './FAQ.jsx'
import { faqs } from '../data'

const FAQs = () => {
  return (
    <section className="faqs">
        <div className="container faqs__container">
            <SectionHead icon={<FaQuestion />} title='Dúvidas' />
            <div className="faqs__wrapper">
                {
                    faqs.map( ({id, question, answer}) => {
                        return (
                            <FAQ key={id} question={question} answer={answer} />
                        )
                    } )
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs