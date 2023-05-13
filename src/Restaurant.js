import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Restaurant.css';
import { Link } from 'react-router-dom';



function Restaurant() {
   
  //state cteation
  const [restList,setRest]=useState([])  //initialize as an empty array

  //api to access data
  const getData=async()=>{
  const result=await fetch('./restaurants.json')
  result.json().then(data=>setRest(data.restaurants))
  }
console.log(restList ,'listrestaturant');
  useEffect(()=>{
   getData()
  },[])



  return (
   <Container className='mt-5 mb-5 py-3'>
      <Row >
      {
     restList.map(rest=>(
  
  
      <Col lg={4}  md={6} className='py-4  d-flex justify-content-center ' >
        <Link to={`/viewRest/${rest.id}`} id='l1'>
          <Card style={{ width: '18rem' , height:'550px' }} id='c1'>
            <Card.Img variant="top" src={rest.photograph} />
            <Card.Body>
              <Card.Title id='title' className="text-center"  >{rest.name}</Card.Title>
              <Card.Text className="text-center text-light">
                {rest.address}
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
  
  
     ))
      }   
      </Row>
   </Container>
  )
}

export default Restaurant