import { useState } from 'react'
import CardPet from './components/MyCard'
import HeaderText from './components/Header'
import FooterComp from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header> <HeaderText headerText='Adopta un perrito'/> </header>
      <main>
        <CardPet img='https://cdn.pixabay.com/photo/2019/08/19/07/45/corgi-4415649_960_720.jpg'
        nombre='Perroberto'
        desc='Algo retraido, pero muy juguetón cuando gana confianza.'
        textBadge='Corgi'
        colorBadge='success'/>

        <CardPet img='https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_960_720.jpg'
        nombre='Italiano'
        desc='Suele atorarse en lugares inesperados, pero avisa de forma oportuna.'
        textBadge='Salchicha'
        colorBadge='info'/>

        <CardPet img='https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_960_720.jpg'
        nombre='Rati'
        desc='Ex PDI, dejó su carrera de perro detector de bombas por su pasión: dar amor a los niños y niñas.'
        textBadge='Labrador'
        colorBadge='warning'/>

        <CardPet img='https://cdn.pixabay.com/photo/2015/11/03/12/58/dalmatian-1020790_960_720.jpg'
        nombre='Platanín'
        desc='Es algo grande para su temperamento tan juguetón. Siempre cae bien.'
        textBadge='Dálmata'
        colorBadge='danger'/>
      </main>
      <footer><FooterComp footerText='Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre.'/></footer>
        
    </>
  )
}

export default App
