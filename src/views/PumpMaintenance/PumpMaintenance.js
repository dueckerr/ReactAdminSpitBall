import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table, Label, Form, FormGroup, Input } from 'reactstrap';

class Tables extends Component {
  render() {
    return (
      <div className="animated fadeIn">
      <Row>
      <Col>
        <Card>
          <CardHeader>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                  <strong>Filter Pumps</strong> 
                    <Col xs="12" md="1" lg="1">
                      <Input type="text" id="text-input" name="text-input" placeholder="Unit Number" />
                    </Col>
                    <Col xs="12" md="1" lg="1">
                      <Input type="text" id="text-input" name="text-input" placeholder="Unit Number" />
                    </Col>
                    <Col xs="12" md="1" lg="1">
                      <Input type="text" id="text-input" name="text-input" placeholder="Unit Number" />
                    </Col>
                    <Col xs="12" md="1" lg="1">
                      <Label htmlFor="select">Select Engie Type</Label>
                    </Col>
                    <Col xs="12" md="1" lg="2">
                      <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">CAT</option>
                        <option value="2">NRG</option>
                        <option value="3">SPM</option>
                      </Input>
                    </Col>
                    <Col xs="12" md="1" lg="1">
                    <Label htmlFor="select">Select Fluid End Type</Label>
                    </Col>
                    <Col xs="12" md="1" lg="2">
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
          </CardHeader>
          <CardBody>
            <Table hover bordered striped responsive size="sm">
              <thead>
              <tr>
                <th>Pump Number</th>
                <th>Date </th>
                <th>Hours</th>
                <th>Maintenance</th>
                <th>Details</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>182012</td>
                <td>2012/01/01</td>
                <td>2512</td>
                <td>Valves & Seats</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>171045</td>
                <td>2012/02/01</td>
                <td>2223</td>
                <td>Valves</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>171055</td>
                <td>2012/02/01</td>
                <td>2908</td>
                <td>Packing</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>182099</td>
                <td>2012/03/01</td>
                <td>2731</td>
                <td>Valves & Seats</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>182101</td>
                <td>2012/01/21</td>
                <td>1709</td>
                <td>Valves</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>182012</td>
                <td>2012/01/01</td>
                <td>902</td>
                <td>Valves & Seats</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>171045</td>
                <td>2012/02/01</td>
                <td>1863</td>
                <td>Valves</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>171055</td>
                <td>2012/02/01</td>
                <td>1098</td>
                <td>Packing</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>182099</td>
                <td>2012/03/01</td>
                <td>1863</td>
                <td>Valves & Seats</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>182101</td>
                <td>2012/01/21</td>
                <td>872</td>
                <td>Valves</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>182012</td>
                <td>2012/01/01</td>
                <td>1221</td>
                <td>Valves & Seats</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>171045</td>
                <td>2012/02/01</td>
                <td>1221</td>
                <td>Valves</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>171055</td>
                <td>2012/02/01</td>
                <td>1863</td>
                <td>Packing</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>182099</td>
                <td>2012/03/01</td>
                <td>1221</td>
                <td>Valves & Seats</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>182101</td>
                <td>2012/01/21</td>
                <td>1221</td>
                <td>Valves</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>182012</td>
                <td>2012/01/01</td>
                <td>1221</td>
                <td>Valves & Seats</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>171045</td>
                <td>2012/02/01</td>
                <td>1221</td>
                <td>Valves</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>171055</td>
                <td>2012/02/01</td>
                <td>1221</td>
                <td>Packing</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>182099</td>
                <td>2012/03/01</td>
                <td>1221</td>
                <td>Valves & Seats</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>182101</td>
                <td>2012/01/21</td>
                <td>1221</td>
                <td>Valves</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>182012</td>
                <td>2012/01/01</td>
                <td>1221</td>
                <td>Valves & Seats</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>171045</td>
                <td>2012/02/01</td>
                <td>1221</td>
                <td>Valves</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>171055</td>
                <td>2012/02/01</td>
                <td>1221</td>
                <td>Packing</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>182099</td>
                <td>2012/03/01</td>
                <td>1221</td>
                <td>Valves & Seats</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>182101</td>
                <td>2012/01/21</td>
                <td>1221</td>
                <td>Valves</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr><tr>
                <td>182012</td>
                <td>2012/01/01</td>
                <td>1221</td>
                <td>Valves & Seats</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>171045</td>
                <td>2012/02/01</td>
                <td>1221</td>
                <td>Valves</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>171055</td>
                <td>2012/02/01</td>
                <td>1863</td>
                <td>Packing</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>182099</td>
                <td>2012/03/01</td>
                <td>2021</td>
                <td>Valves</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>182101</td>
                <td>2012/01/21</td>
                <td>221</td>
                <td>Valves</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr><tr>
                <td>182012</td>
                <td>2012/01/01</td>
                <td>2921</td>
                <td>Valves</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>171045</td>
                <td>2012/02/01</td>
                <td>1142</td>
                <td>Valves</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>171055</td>
                <td>2012/02/01</td>
                <td>2421</td>
                <td>Packing</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>182099</td>
                <td>2012/03/01</td>
                <td>2121</td>
                <td>Valves</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>182101</td>
                <td>2012/01/21</td>
                <td>1621</td>
                <td>Valves</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              </tbody>
            </Table>
            <nav>
              <Pagination>
                <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                <PaginationItem active>
                  <PaginationLink tag="button">1</PaginationLink>
                </PaginationItem>
                <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
              </Pagination>
            </nav>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>

);
}
}



export default Tables;
