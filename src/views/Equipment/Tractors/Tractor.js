import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import TractorsData from './TractorsData'

class Tractor extends Component {

  render() {

    const Tractor = TractorsData.find( Tractor => Tractor.id.toString() === this.props.match.params.id)

    const TractorDetails = Tractor ? Object.entries(Tractor) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Tractor id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                sdfghjkl;''
                  <Table responsive striped hover>
                    <tbody>
                      {
                        TractorDetails.map(([key, value]) => {
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
        </Row>
      </div>
    )
  }
}

export default Tractor;
