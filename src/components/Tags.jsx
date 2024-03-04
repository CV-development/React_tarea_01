import Badge from 'react-bootstrap/Badge'

const BadgeCustom = ({textBadge = 'quiltro', colorBadge = 'primary'}) => {
  return (
    <>
      <Badge style={{fontSize: 16}} bg={ colorBadge }> { textBadge } </Badge>
    </>
  )
}

export default BadgeCustom