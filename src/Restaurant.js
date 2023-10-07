import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './Restaurant.css';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';


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


console.log(restList);
  return (

<>
  <div>
  
  <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      id='carousel'
      src="./kisspng-coffee-bean-cafe-single-origin-coffee-coffee-beans-transparent-background-5a78ef52dbb6a1.2904727815178750269.png"
      alt=""
    />
    <Carousel.Caption>
      <h3 className='text-primary'>Welcome to Hot N Cool </h3>
      <p className='text-warning'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  

  <Carousel.Item>
    <img
      className="d-block w-100"
      id='carousel'
      src="./ice-cream-chocolate-dessert-mint-wallpaper-preview.jpg"
      alt=""
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>

<Carousel.Item>
  <img
    className="d-block w-100"
    id='carousel'
    src="./lOyAuhG.jpg"
    alt=""
  />
  <Carousel.Caption>

  </Carousel.Caption>
</Carousel.Item>


<Carousel.Item>
<img
  className="d-block w-100"
  id='carousel'
  src="./GettyImages-1165807395-2000-28ea3eaf72f34ddaa97d9a54ca0c6025.jpg"
  alt=""
/>


<Carousel.Caption>

</Carousel.Caption>
</Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      id='carousel'
      src="./28366-Drink-Coffee-BeansCoffee-HD-Wallpaper.jpg"
      alt=""
    />
    <Carousel.Caption>



    </Carousel.Caption>
  </Carousel.Item>


  <Carousel.Item>
    <img
      className="d-block w-100"
      id='carousel'
      src="./wp4526265.webp"
      alt=""
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
  </div>
  
  
  
  
  
      
     <Container className='mt-5 mb-5 py-3'>
        <Row >
        {
       restList.map(rest=>(
       
    
        
      <Col lg={4}  md={6} className='py-4  d-flex justify-content-center ' >
      <Link to={`/viewRest/${rest.id}`} id='l1'>
        <Card style={{ width: '18rem' , height:'550px' }} id='c1'>
          <Card.Img variant="top" src={rest.photograph} className='w-100 h-100' />
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
</>
  )
}

export default Restaurant