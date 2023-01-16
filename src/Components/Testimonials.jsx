import { useState } from 'react'
import SectionHead from './SectionHead'
import { FaUserCheck, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Card from '../UI/Card'
import { testimonials } from '../data'

const Testimonials = () => {

    const [index, setIndex] = useState(0)
    const {name, quote, job, avatar} = testimonials[index]

    const prevTestimonial = () => {
        setIndex(prev => prev - 1)

        if(index <= 0) {
            setIndex(testimonials.length - 1)
        }
    }

    const nextTestimonial = () => {
        setIndex(prev => prev + 1)

        if(index >= testimonials.length - 1) {
            setIndex(0)
        }
    }

  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHead icon={<FaUserCheck /> } title='Depoimentos' className='tetimonials__head' />
            <Card className="testimonial"> 
                <div className="testimonial__avatar">
                    <img src={avatar} alt={name} />
                </div>
                <p className='testimonial__quote'>{`"${quote}"`}</p>
                <h5 className='testimonial__name'>{name}</h5>
                <small className='testimonial__title'>{job}</small>
            </Card>
            <div className="testimonials__btn-container">
                <button className="testimonials__btn" onClick={prevTestimonial}><FaArrowLeft /></button>
                <button className="testimonials__btn" onClick={nextTestimonial}><FaArrowRight /></button>
            </div>
        </div>
    </section>
  )
}

export default Testimonials