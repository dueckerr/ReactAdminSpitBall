import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import WellsData from './WellData'

function WellRow(props) {
  const Well = props.Well
  const WellLink = `/Wells/${Well.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={Well.id.toString()}>
      <th scope="row"><Link to={WellLink}>{Well.id}</Link></th>
      <td><Link to={WellLink}>{Well.name}</Link></td>
      <td>{Well.Pad}</td>
      <td>{Well.Customer}</td>
      <td>{Well.Fleet}</td>
      <td>{Well.DateStarted}</td>
      <td>{Well.DateEnded}</td>
      <td>{Well.Stages}</td>
      <td>{Well.PumpingHours}</td>
      <td>{Well.NPTHours}</td>
      <td><Link to={WellLink}><Badge color={getBadge(Well.status)}>{Well.status}</Badge></Link></td>
    </tr>
  )
}

class Wells extends Component {

  render() {

    const WellList = WellsData.filter((Well) => Well.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={9}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Wells <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Well Name</th>
                      <th scope="col">Pad</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Fleet</th>
                      <th scope="col">Date Started</th>
                      <th scope="col">Date Ended</th>
                      <th scope="col">Stages</th>
                      <th scope="col">Pumping Hours</th>
                      <th scope="col">NPT </th>
                      <th scope="col">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {WellList.map((Well, index) =>
                      <WellRow key={index} Well={Well}/>
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

export default Wells;
