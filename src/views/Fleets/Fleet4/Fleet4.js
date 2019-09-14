import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class Buttons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="2">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div className="text-value">Fleet 4</div>
                <div>Current Pad: Spud Muffin</div>
                <div>Customer: Devon</div>
                <div>Pad Progress: 40 of 150 Stages</div>
                <div>NPT Last 24: XX:XX</div>
                <div>Pump Hours Last 24: XX:XX</div>
                <div>Stages Last 24: X </div>
                <div> Number of Wells: X </div>
                <div>Pumps: XX</div>
                <div>Standby Pumps: XX</div>
                <div>Blender: XXX</div>
                <div>Standby Blender: XXX</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
              </div>
            </Card>
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div className="text-value">Fleet 1 Equipment</div>
                  <Col>
                  <div className="text-value">Pumps</div>
                  </Col>
                  <Col>
                  <div className="text-value">Pumps</div>
                  </Col>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
              </div>
            </Card>
          </Col>
            </Row>
            <Row className="align-items-center mt-3">
              
            </Row>

        <Card>
          <CardHeader>
            <strong>Pad Stats.  Average stages, npt, pumping hours. Progress Bars</strong>
          </CardHeader>
          <CardBody>
            
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>End of Shift Notes</strong>
          </CardHeader>
          <CardBody>
            
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong> Buttons</strong>
          </CardHeader>
          <CardBody>

          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <strong>Put something here, maybe past pump maintenance</strong>
          </CardHeader>
          <CardBody>
            {/* I dont know what to put here */}
          </CardBody>
        </Card>


      

      </div>
    );
  }
}

export default Buttons;
