import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import TractorsData from './TractorsData'

function TractorRow(props) {
  const Tractor = props.Tractor
  const TractorLink = `/Tractors/${Tractor.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={Tractor.id.toString()}>
      <th scope="row"><Link to={TractorLink}>{Tractor.id}</Link></th>
      <td><Link to={TractorLink}>{Tractor.name}</Link></td>
      <td>{Tractor.registered}</td>
      <td>{Tractor.role}</td>
      <td><Link to={TractorLink}><Badge color={getBadge(Tractor.status)}>{Tractor.status}</Badge></Link></td>
    </tr>
  )
}

class Tractors extends Component {

  render() {

    const TractorList = TractorsData.filter((Tractor) => Tractor.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Tractors <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">registered</th>
                      <th scope="col">role</th>
                      <th scope="col">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {TractorList.map((Tractor, index) =>
                      <TractorRow key={index} Tractor={Tractor}/>
                    )}
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

export default Tractors;
