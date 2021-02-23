import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row, Dropdown, Card, Button } from 'react-bootstrap';
import Navigation from './Navbar';
import axios from 'axios';
import UserContext from './context/UserContext';


function MainPage() {
    const {contextUserData} = useContext(UserContext);

    const [events, setEvents] = useState([]);
    const [filteredEvents, setFilteredEvents] = useState(events);
    
    const fetchEvents = () => {
        axios.get(`http://localhost:3000/api/events/`)
          .then(res => {
            console.log('res', res.data);
            setEvents(res.data);
            setFilteredEvents(res.data);
          })
    }

    useEffect(() => {
        // fetch users list
        fetchEvents();
      }, [])

    const handleDeleteEvent = (value) => {
        axios.delete(`http://localhost:3000/api/events/${value}`)
        .then(res => fetchEvents())
        .catch(err => console.log('hun to mai gadhi hi', err));
    }

    const showAllRecords = () => {
        setFilteredEvents(events);
    }

    const showPublishedRecords = () => {
        setFilteredEvents(events.filter((eventt)=>new Date() > new Date(eventt.publishedAt)))
    }

    const showUnPublishedRecords = () => {
        setFilteredEvents(events.filter((eventt)=>new Date() < new Date(eventt.publishedAt)))
    }

    const showTemporaryDeletedRecords = () => {
        setFilteredEvents(events.filter((eventt)=>eventt.disabled === true))
    }
    
    return (
        <div>
           <Navigation/>
           <Container style={{marginTop:'40px'}}>
              <Row style={{border:'1px solid #fff',borderRadius:'5px', padding:'5px'}}>
                 <Col lg="9">
                 <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Filter Events
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={showAllRecords}>All</Dropdown.Item>
                    <Dropdown.Item onClick={showPublishedRecords}>Published</Dropdown.Item>
                    <Dropdown.Item onClick={showUnPublishedRecords}>Unpublished</Dropdown.Item>
                    {/* <Dropdown.Item onClick={showTemporaryDeletedRecords}>Temporarily Deleted</Dropdown.Item> */}
                </Dropdown.Menu>
                </Dropdown>
                </Col>
                <Col lg="3">
               <span onClick={showTemporaryDeletedRecords} style={{cursor:'pointer'}}> Temporary Deleted events <img src="https://img.icons8.com/material/24/000000/delete-forever--v2.png" onClick={showTemporaryDeletedRecords}/></span>
                </Col>
              </Row>
            
              <Row style={{marginTop:'20px'}}>
              {
                  filteredEvents.map((eventt,index)=>{
                      return  <Col key={index} style={{marginTop:'20px'}}>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`http://localhost:5003/images/${eventt.prodImage}`} />
                        <Card.Body>
                            <Card.Title>{eventt.title}</Card.Title>
                            <Card.Text>
                            <h6 style={{color:'#555'}}>{eventt.description}</h6>
                            </Card.Text>
                            <Card.Text>
                            Category: {eventt.category}
                            </Card.Text>
                            <Card.Text>
                                {/* {`disabled - ${eventt.disabled}`} */}
                            Published at: {new Date(eventt.publishedAt).toLocaleString()}
                            </Card.Text>
                           
                            {
                                new Date() < new Date(eventt.publishedAt) ? (
                                    <Button variant="primary">Publish</Button>
                                ) : (
                                    <Button variant="primary">Unpublish</Button>
                                )
                            }
                            <Button variant="danger" onClick={e=>handleDeleteEvent(eventt._id)}  style={{float:'right'}}>Delete</Button>
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
