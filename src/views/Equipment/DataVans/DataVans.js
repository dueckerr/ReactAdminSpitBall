import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row, Table, Label, FormGroup, Form, Input } from 'reactstrap';

import usersData from './DataVanData'

function UserRow(props) {
  const user = props.user
  const userLink = `/Fracpump/${user.id}`


  return (
    <tr key={user.id.toString()}>
      <th scope="row"><Link to={userLink}>{user.id}</Link></th>
      <td>{user.engine}</td>
      <td>{user.Fluidend}</td>
      <td>{user.fluidendSize}</td>
      <td>{user.FESerialNumber}</td>
      <td>{user.currentHours}</td>
      <td>{user.location}</td>
    </tr>
  )
}

class Users extends Component {

  render() {

    const userList = usersData.filter((user) => user.id < 100)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Frac Pumps 
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">Pump Number</th>
                      <th scope="col">Engine</th>
                      <th scope="col">FE Type</th>
                      <th scope="col">FE Size</th>
                      <th scope="col">FE Serial Number</th>
                      <th scope="col">Current Hours</th>
                      <th scope="col">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <strong>Filter Pumps</strong> 
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Search Pump Number</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" name="text-input" placeholder="Unit Number" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="select">Select Engie Type</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">CAT</option>
                        <option value="2">NRG</option>
                        <option value="3">SPM</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                    <Label htmlFor="select">Select Fluid End Type</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">CAT</option>
                        <option value="2">Kerr Gen 3</option>
                        <option value="3">Valtek</option>
                        <option value="4">Endurance</option>
                        <option value="5">JPM</option>
                        <option value="6">ST9</option>
                      </Input>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;
