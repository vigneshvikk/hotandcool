import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

function Review({reviewList}) {
  return (
    <div className='mt-3'>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Review's</Accordion.Header>
        <Accordion.Body>
         {
            reviewList.map(i=>
              <div>
              <h6>{i.name}</h6>
              <p>{i.date}</p>
              <h4>{i.rating}</h4>
              <p>{i.comments}</p>

              <hr />
              </div>
              


                )
         }
        </Accordion.Body>
      </Accordion.Item>
     </Accordion>
    </div>
  )
}

export default Review