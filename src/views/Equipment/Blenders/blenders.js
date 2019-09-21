import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import BlendersData from './BlenderData'

function BlenderRow(props) {
  const Blender = props.Blender
  const BlenderLink = `/Blenders/${Blender.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={Blender.id.toString()}>
      <th scope="row"><Link to={BlenderLink}>{Blender.id}</Link></th>
      <td><Link to={BlenderLink}>{Blender.name}</Link></td>
      <td>{Blender.Blender}</td>
      <td>{Blender.Customer}</td>
      <td>{Blender.Fleet}</td>
      <td>{Blender.DateStarted}</td>
      <td>{Blender.DateEnded}</td>
      <td>{Blender.Stages}</td>
      <td>{Blender.PumpingHours}</td>
      <td>{Blender.NPTHours}</td>
      <td><Link to={BlenderLink}><Badge color={getBadge(Blender.status)}>{Blender.status}</Badge></Link></td>
    </tr>
  )
}

class Blenders extends Component {

  render() {

    const BlenderList = BlendersData.filter((Blender) => Blender.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={9}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Blenders <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">Blender Name</th>
                      <th scope="col">Blender</th>
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
                    {BlenderList.map((Blender, index) =>
                      <BlenderRow key={index} Blender={Blender}/>
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

export default Blenders;
