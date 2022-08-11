import img1 from '../assets/img/guyMaupassant.jpg'
import img2 from '../assets/img/endreArdy.jpg'
import img3 from '../assets/img/rachelBeer.jpg'
import arrow from '../assets/img/arrow.svg'
import { useState } from 'react'
import { motion } from 'framer-motion'

const Stars = () => {
  const texts = [
    'Lié à Gustave Flaubert et à Émile Zola, Maupassant a marqué la littérature française par ses six romans, dont Une vie en 1883, Bel-Ami en 1885, Pierre et Jean en 1887-1888, et surtout par sesnouvelles (parfois intitulées contes) comme Boule de Suif en 1880,les Contes de la bécasse (1883) ou Le Horla (1887).',
    'Poète et journaliste hongrois, né le 22 novembre 1877 à Érmindszent (renommé « Ady Endre » depuis, commune de Căuaș) et décédé le 27 janvier 1919 à Budapest. Il est le porte-drapeau du renouveau de la poésie et de la pensée sociale progressiste en Hongrie au début du xxe siècle.',
    "Après la mort de son mari, en 1903, sa santé mentale se dégrade. Elle est hospitalisée sans consentement l'année suivante et ses deux journaux sont revendus. Bien qu'elle récupère une partie de ses facultés, elle reste à l'écart de la vie publique jusqu'à sa mort, à l'âge de 69 ans de la syphilis probablement contaminée par son mari2. Sa fortune est partagée entre ses neveux, parmilesquels le poète Siegfried Sassoon1."
  ]
  const tiltes = ['Guy de MAUPASSANT', 'Endré ARDY', 'Rachel BEER']
  const years = ['6 juillet 1893', '27 janvier 1919', '29 avril 1927']
  const images = [img1, img2, img3]

  const [position, setPosition] = useState(0)

  const transTilte = {
    awayRight: {
      x: ['100vw', '20vw'],
      transition: { ease: 'easeInOut', yoyo: 7, duration: 3, times: [0.1, 0.9] }
    },
    awayLeft: {
      x: ['-100vw', '-20vw'],
      transition: { ease: 'easeInOut', yoyo: 7, duration: 3, times: [0.1, 0.9] }
    }
  }

  // const next = () => {
  //   setPosition(para => para + 1)
  // }
  // const back = () => {
  //   setPosition(para => para - 1)
  // }
  return (
    <div className='stars'>
      <div className='starContainer'>
        <div className='leftContainer'>
          <img src={images[position]} alt='img' />
          <div className='years'>
            <h2>{years[position]}</h2>
          </div>
        </div>
        <div className='rightContainer'>
          <div className='tiltes'>
            <h2>{tiltes[position]}</h2>
          </div>
          <div className='text'>{texts[position]}</div>
        </div>
      </div>
      <div className='navStars'>
        {/* <div className='actions'>
          <div className='left' onClick={back}>
            <img src={arrow} alt='arrow left' />
          </div>
          <div className='right' onClick={next}>
            <img src={arrow} alt='arrow right' />
          </div>
        </div> */}
        <ul className='stepper'>
          <li onClick={() => setPosition(0)}></li>
          <li onClick={() => setPosition(1)}></li>
          <li onClick={() => setPosition(2)}></li>
        </ul>
      </div>
    </div>
  )
}

export default Stars