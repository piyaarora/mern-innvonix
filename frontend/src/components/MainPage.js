import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row, Dropdown, Card, Button } from 'react-bootstrap';
import Navigation from './Navbar';
import axios from 'axios';
import UserContext from './context/UserContext';


function MainPage() {
    const {contextUserData} = useContext(UserContext);

    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        // fetch users list
        axios.get(`http://localhost:3000/api/events/`)
          .then(res => {
            setEvents(res.data);
          })
      }, [])
    return (
        <div>
           <Navigation/>
           <Container style={{marginTop:'40px'}}>
              <Row>
                 <Col style={{border:'1px solid #ccc',borderRadius:'5px', padding:'5px'}}>
                 <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    All products
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Published</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Unpublished</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </Col>
              </Row>
            
              <Row style={{marginTop:'20px'}}>
              {
                  events.map((eventt,index)=>{
                      return  <Col key={index} style={{marginTop:'20px'}}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={eventt.prodImage} />
                        <Card.Body>
                            <Card.Title>{eventt.title}</Card.Title>
                            <Card.Text>
                            {eventt.description}
                            </Card.Text>
                            <Card.Text>
                            Category: {eventt.category}
                            </Card.Text>
                            <Button variant="primary">Publish</Button>
                            <Button variant="primary" style={{float:'right'}}>Unpublish</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                  })
              }
                  </Row>

             
            </Container>
        </div>
    )
}

export default MainPage
