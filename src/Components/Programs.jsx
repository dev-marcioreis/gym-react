import { FaInfo } from 'react-icons/fa'
import { BiCategoryAlt } from 'react-icons/bi'
import SectionHead from './SectionHead'
import { programs } from '../data'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<BiCategoryAlt />} title='Programas' />
        <div className="programs__wrapper">
          {
            programs.map(({id, icon, title, info, path}) => {
              return (
                <Card className="programs__program" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className="btn">Saiba mais <FaInfo /></Link>
                </Card>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Programs
