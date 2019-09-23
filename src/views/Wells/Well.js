import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Row, Table, Badge, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import usersData from './WellData'

class User extends Component {

  render() {

    const user = usersData.find( user => user.id.toString() === this.props.match.params.id)

    const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Well: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      {
                        userDetails.map(([key, value]) => {
                          return (
                            <tr key={key}>
                              <td>{`${key}:`}</td>
                              <td><strong>{value}</strong></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" lg="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Bordered Table
              </CardHeader>
              <CardBody>
                <Table responsive bordered>
                  <thead>
                  <tr>
                    <th>Stage</th>
                    <th>Date</th>
                    <th>Duration </th>
                    <th>Crew</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td> 50</td>
                    <td>2012/01/01</td>
                    <td>1:12</td>
                    <td><Link> <Badge color="success">Details</Badge></Link></td>
                  </tr>
                  <tr>
                    <td>49</td>
                    <td>2012/02/01</td>
                    <td>1:21</td>
                    <td><Link> <Badge color="success">Details</Badge></Link></td>
                  </tr>
                  <tr>
                    <td>48</td>
                    <td>2012/02/01</td>
                    <td>1:09</td>
                    <td><Link> <Badge color="success">Details</Badge></Link></td>
                  </tr>
                  <tr>
                    <td>47</td>
                    <td>2012/03/01</td>
                    <td>1:26</td>
                    <td><Link> <Badge color="success">Details</Badge></Link></td>
                  </tr>
                  <tr>
                    <td>46</td>
                    <td>2012/01/21</td>
                    <td>1:56</td>
                    <td><Link> <Badge color="success">Details</Badge></Link></td>
                  </tr>
                  </tbody>
                </Table>
                <Pagination>
                  <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                  <PaginationItem active>
                    <PaginationLink tag="button">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem className="page-item"><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                  <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                </Pagination>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default User;
