import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import FracPumpsData from './FracPumpData'

function FracPumpRow(props) {
  const FracPump = props.FracPump
  const FracPumpLink = `/FracPumps/${FracPump.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={FracPump.id.toString()}>
      <th scope="row"><Link to={FracPumpLink}>{FracPump.id}</Link></th>
      <td><Link to={FracPumpLink}>{FracPump.name}</Link></td>
      <td>{FracPump.Pad}</td>
      <td>{FracPump.Customer}</td>
      <td>{FracPump.Fleet}</td>
      <td>{FracPump.DateStarted}</td>
      <td>{FracPump.DateEnded}</td>
      <td>{FracPump.Stages}</td>
      <td>{FracPump.PumpingHours}</td>
      <td>{FracPump.NPTHours}</td>
      <td><Link to={FracPumpLink}><Badge color={getBadge(FracPump.status)}>{FracPump.status}</Badge></Link></td>
    </tr>
  )
}

class FracPumps extends Component {

  render() {

    const FracPumpList = FracPumpsData.filter((FracPump) => FracPump.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={9}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> FracPumps <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">FracPump Name</th>
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
                    {FracPumpList.map((FracPump, index) =>
                      <FracPumpRow key={index} FracPump={FracPump}/>
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

export default FracPumps;
