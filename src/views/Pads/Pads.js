import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import PadsData from './PadData'

function PadRow(props) {
  const Pad = props.Pad
  const PadLink = `/Pads/${Pad.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={Pad.id.toString()}>
      <th scope="row"><Link to={PadLink}>{Pad.id}</Link></th>
      <td><Link to={PadLink}>{Pad.name}</Link></td>
      <td>{Pad.Pad}</td>
      <td>{Pad.Customer}</td>
      <td>{Pad.Fleet}</td>
      <td>{Pad.DateStarted}</td>
      <td>{Pad.DateEnded}</td>
      <td>{Pad.Stages}</td>
      <td>{Pad.PumpingHours}</td>
      <td>{Pad.NPTHours}</td>
      <td><Link to={PadLink}><Badge color={getBadge(Pad.status)}>{Pad.status}</Badge></Link></td>
    </tr>
  )
}

class Pads extends Component {

  render() {

    const PadList = PadsData.filter((Pad) => Pad.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={9}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Pads <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Pad Name</th>
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
                    {PadList.map((Pad, index) =>
                      <PadRow key={index} Pad={Pad}/>
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

export default Pads;
