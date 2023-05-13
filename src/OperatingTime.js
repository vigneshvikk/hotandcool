import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function OperatingTime({workingTime}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
    

    <Button variant="primary" onClick={handleShow}>
    View Operating Time
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
    <Modal.Title>Operating Hours</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <ListGroup>
    <ListGroup.Item><p>Monday : <strong className='text-primary'>{workingTime.Monday}</strong></p></ListGroup.Item>
    <ListGroup.Item><p>Tuesday : <strong className='text-primary'>{workingTime.Tuesday}</strong></p></ListGroup.Item>
    <ListGroup.Item><p>Wednesday : <strong className='text-primary'>{workingTime.Wednesday}</strong></p></ListGroup.Item>
    <ListGroup.Item><p>Thursday : <strong className='text-primary'>{workingTime.Thursday}</strong></p></ListGroup.Item>
    <ListGroup.Item><p>Friday : <strong className='text-primary'>{workingTime.Friday}</strong></p></ListGroup.Item>
    <ListGroup.Item><p>Saturday : <strong className='text-primary'>{workingTime.Saturday}</strong></p></ListGroup.Item>
    <ListGroup.Item><p>Sunday : <strong className='text-primary'>{workingTime.Sunday}</strong></p></ListGroup.Item>

  </ListGroup>
    </Modal.Body>
   
  </Modal>


    </div>
  )
}

export default OperatingTime