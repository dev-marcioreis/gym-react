import { useState } from 'react'
import { BiPlus, BiMinus } from 'react-icons/bi'

const FAQ = ( {question, answer} ) => {

    const [isAnswerShow, setIsAnswerShow] = useState(false)

  return (
    <article className="faq" onClick={ () => setIsAnswerShow(prev => !prev)}>
        <div>
            <h4>{question}</h4>
            <button className="faq__icon">
                {
                    isAnswerShow ? <BiMinus /> : <BiPlus />
                }
            </button>
        </div>
        {
            isAnswerShow && <p>{answer}</p>
        }
    </article>
  )
}

export default FAQ