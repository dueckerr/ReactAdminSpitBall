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
                <th>Username</th>
                <th>Date registered</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Vishnu Serghei</td>
                <td>2012/01/01</td>
                <td>Member</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Zbyněk Phoibos</td>
                <td>2012/02/01</td>
                <td>Staff</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Einar Randall</td>
                <td>2012/02/01</td>
                <td>Admin</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Félix Troels</td>
                <td>2012/03/01</td>
                <td>Member</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Aulus Agmundr</td>
                <td>2012/01/21</td>
                <td>Staff</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Vishnu Serghei</td>
                <td>2012/01/01</td>
                <td>Member</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Zbyněk Phoibos</td>
                <td>2012/02/01</td>
                <td>Staff</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Einar Randall</td>
                <td>2012/02/01</td>
                <td>Admin</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Félix Troels</td>
                <td>2012/03/01</td>
                <td>Member</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Aulus Agmundr</td>
                <td>2012/01/21</td>
                <td>Staff</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Vishnu Serghei</td>
                <td>2012/01/01</td>
                <td>Member</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Zbyněk Phoibos</td>
                <td>2012/02/01</td>
                <td>Staff</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Einar Randall</td>
                <td>2012/02/01</td>
                <td>Admin</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Félix Troels</td>
                <td>2012/03/01</td>
                <td>Member</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Aulus Agmundr</td>
                <td>2012/01/21</td>
                <td>Staff</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Vishnu Serghei</td>
                <td>2012/01/01</td>
                <td>Member</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Zbyněk Phoibos</td>
                <td>2012/02/01</td>
                <td>Staff</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Einar Randall</td>
                <td>2012/02/01</td>
                <td>Admin</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Félix Troels</td>
                <td>2012/03/01</td>
                <td>Member</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Aulus Agmundr</td>
                <td>2012/01/21</td>
                <td>Staff</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Vishnu Serghei</td>
                <td>2012/01/01</td>
                <td>Member</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Zbyněk Phoibos</td>
                <td>2012/02/01</td>
                <td>Staff</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Einar Randall</td>
                <td>2012/02/01</td>
                <td>Admin</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Félix Troels</td>
                <td>2012/03/01</td>
                <td>Member</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Aulus Agmundr</td>
                <td>2012/01/21</td>
                <td>Staff</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr><tr>
                <td>Vishnu Serghei</td>
                <td>2012/01/01</td>
                <td>Member</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Zbyněk Phoibos</td>
                <td>2012/02/01</td>
                <td>Staff</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Einar Randall</td>
                <td>2012/02/01</td>
                <td>Admin</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Félix Troels</td>
                <td>2012/03/01</td>
                <td>Member</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Aulus Agmundr</td>
                <td>2012/01/21</td>
                <td>Staff</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr><tr>
                <td>Vishnu Serghei</td>
                <td>2012/01/01</td>
                <td>Member</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Zbyněk Phoibos</td>
                <td>2012/02/01</td>
                <td>Staff</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Einar Randall</td>
                <td>2012/02/01</td>
                <td>Admin</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Félix Troels</td>
                <td>2012/03/01</td>
                <td>Member</td>
                <td>
                  <Badge color="success">Details</Badge>
                </td>
              </tr>
              <tr>
                <td>Aulus Agmundr</td>
                <td>2012/01/21</td>
                <td>Staff</td>
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
