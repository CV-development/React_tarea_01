import Card from 'react-bootstrap/Card'
import BadgeCustom from './Tags'

const  CardPet = ({img ='https://cdn.pixabay.com/photo/2017/05/09/21/49/gecko-2299365_960_720.jpg', nombre = 'Boby', desc = 'Es muy cariñoso', textBadge, colorBadge}) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={ img } />
      <Card.Body>
        <Card.Title>{ nombre }</Card.Title>
        <Card.Text>
          { desc }
        </Card.Text>
        <BadgeCustom textBadge={textBadge} colorBadge={colorBadge} />
      </Card.Body>
    </Card>
  )
}

export default CardPet