import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import HydrationsData from './HydrationsData'

function HydrationRow(props) {
  const Hydration = props.Hydration
  const HydrationLink = `/Hydrations/${Hydration.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={Hydration.id.toString()}>
      <th scope="row"><Link to={HydrationLink}>{Hydration.id}</Link></th>
      <td><Link to={HydrationLink}>{Hydration.name}</Link></td>
      <td>{Hydration.registered}</td>
      <td>{Hydration.role}</td>
      <td><Link to={HydrationLink}><Badge color={getBadge(Hydration.status)}>{Hydration.status}</Badge></Link></td>
    </tr>
  )
}

class Hydrations extends Component {

  render() {

    const HydrationList = HydrationsData.filter((Hydration) => Hydration.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Hydrations <small className="text-muted">example</small>
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
                    {HydrationList.map((Hydration, index) =>
                      <HydrationRow key={index} Hydration={Hydration}/>
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

export default Hydrations;
