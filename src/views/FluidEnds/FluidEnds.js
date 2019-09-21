import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table, FormGroup, Label, Input } from 'reactstrap';

import FluidEndsData from './FluidEndData'

function FluidEndRow(props) {
  const FluidEnd = props.FluidEnd
  const FluidEndLink = `/FluidEnds/${FluidEnd.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (    
  <tr key={FluidEnd.id.toString()}>
  <th scope="row"><Link to={FluidEndLink}>{FluidEnd.id}</Link></th>
  <td>{FluidEnd.engine}</td>
  <td>{FluidEnd.Fluidend}</td>
  <td>{FluidEnd.fluidendSize}</td>
  <td>{FluidEnd.FESerialNumber}</td>
  <td>{FluidEnd.currentHours}</td>
  <td>{FluidEnd.location}</td>
  <td><Link to={FluidEndLink}><Badge color={getBadge(FluidEnd.status)}>{FluidEnd.status}</Badge></Link></td>
</tr>
)
}

class FluidEnds extends Component {

render() {

const FluidEndList = FluidEndsData.filter((FluidEnd) => FluidEnd.id < 100)

return (
  <div className="animated fadeIn">
    <Row>
    <Col xs="12" sm="8" md="8" lg="8">
        <Card>
          <CardHeader>
            <i className="fa fa-align-justify"></i> FluidEnds <small className="text-muted">example</small>
          </CardHeader>
          <CardBody>
            <Table responsive hover>
              <thead>
                <tr>
                  <th scope="col">Unit Number</th>
                  <th scope="col">Engine</th>
                  <th scope="col">Fluid End Type</th>
                  <th scope="col">Fluid End Size</th>
                  <th scope="col">Fluid End Serial Number</th>
                  <th scope="col">Current Pumping Hours</th>
                  <th scope="col">Location</th>
                </tr>
              </thead>
              <tbody>
                {FluidEndList.map((FluidEnd, index) =>
                  <FluidEndRow key={index} FluidEnd={FluidEnd}/>
                )}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
      <Col xs="12" sm="4" md="4" lg="4">
            <Card>
              <CardHeader>
                <strong>Search & Filter Pumps</strong>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Pump Number</Label>
                      <Input type="text" id="name" placeholder="Enter Pump Number" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Serial Number</Label>
                      <Input type="text" id="ccnumber" placeholder="0000 0000 0000 0000" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Engine Type</Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="Fluidend">Fluid End Type</Label>
                      <Input type="select" name="Fluidend" id="Fluidend">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                  <FormGroup>
                      <Label htmlFor="ccyear">Fleet</Label>
                      <Input type="select" name="ccyear" id="ccyear">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
    </Row>
    </div>
    )
  }
}

export default FluidEnds;