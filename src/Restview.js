import {React, useEffect, useState } from 'react'
import { Col,Container,Row} from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './App.css';
import ListGroup from 'react-bootstrap/ListGroup';
import OperatingTime from './OperatingTime';
import Review from './Review';



function Restview() {
  
 
  

  const [restList, setRest] = useState([])

  // api to access data
  const getData = async () => {
    const result = await fetch('/restaurants.json')
    result.json().then(data => setRest(data.restaurants))

  }

  // object create for useParams
  const params = useParams()
  console.log(params.id);

  // find single restaurant data
  const singleRest=restList.find(i => i.id == params.id)
  console.log(singleRest  ,"SINGLE");



  useEffect(() => {
    getData()
},[])



  

  return (
 <>
 
 
{
  singleRest?
 
 (   
  
 <Container className='mb-5 mt-5 p-5  '>
    <Row>
    <Col lg={6} md={6}  className='py-3'> 
    <img src={singleRest.photograph} className='w-100 '   style={{height:'570px'}} />
    </Col>
    <Col lg={6} md={6} className='py-3'>
    <ListGroup className='ps-5 text-primary'>
    <ListGroup.Item> <h1 className='text-warning'>{singleRest.name}</h1> </ListGroup.Item>
    <ListGroup.Item >Address : <strong className='text-primary'>{singleRest.address}</strong> </ListGroup.Item>
    <ListGroup.Item>Neighborhood : <strong className='text-primary'>{singleRest.neighborhood}</strong></ListGroup.Item>
    <ListGroup.Item>Cusin Type : <strong className='text-primary'>{singleRest.cuisine_type}</strong></ListGroup.Item>
    <ListGroup.Item> 
    
     <OperatingTime  workingTime={singleRest.operating_hours}/>
     <Review reviewList={singleRest.reviews} />
    </ListGroup.Item>
  </ListGroup>
    </Col>
    </Row>
 </Container>


 ):''

}



 </>
  
  )
}

export default Restview