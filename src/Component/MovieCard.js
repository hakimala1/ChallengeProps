import {Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
function MovieCard({el:{title,posterUrl,description,trailer,rate},handleName}){
    return( 
        <>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={posterUrl} height="100%"/>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
        {description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Rate : {rate}</ListGroupItem>

  </ListGroup>
  <Card.Body>
    <Card.Link href={trailer}>Film Link</Card.Link>
    
  </Card.Body>
  <Button variant="primary" onClick={() =>handleName(title)}>Show Title</Button>

</Card>
        </>


    )
}

MovieCard.defaultProps = {
    title:"Name OF Film",
    description:"Vide",
    rate:0,
    trailer:'#'
}
MovieCard.propTypes = {
    title: PropTypes.string,
    handleName:PropTypes.func,
    rate:PropTypes.number,
    trailer :PropTypes.string,
    handleName:PropTypes.func  
    }

export default MovieCard



