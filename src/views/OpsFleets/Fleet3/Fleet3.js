import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Row,
  Table, 
  Badge,
  Input,
  Label,
  FormGroup
} from 'reactstrap';
import { AppSwitch } from '@coreui/react'



class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: 'Closed',
      fadeIn: true,
      timeout: 300,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }
  onEntering() {
    this.setState({ status: 'Opening...' });
  }

  onEntered() {
    this.setState({ status: 'Opened' });
  }

  onExiting() {
    this.setState({ status: 'Closing...' });
  }

  onExited() {
    this.setState({ status: 'Closed' });
  }

  toggleAccordion(tab) {

    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      accordion: state,
    });
  }

  toggleCustom(tab) {

    const prevState = this.state.custom;
    const state = prevState.map((x, index) => tab === index ? !x : false);

    this.setState({
      custom: state,
    });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {

    return (
      <div className="animated fadeIn">
        
        <Row>
          <Col xs="12" sm="6" lg="2">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div className="text-value">Fleet 3</div>
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
              <div className="chart-wrapper mx-3" style={{ height: '50px' }}>
              </div>
            </Card>
          </Col>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Well Actions</strong>
                <small> Open/Close, NPT events, equipment issues... Some of this will be pop ups</small>
              </CardHeader>
              <CardBody>
              <Col md="4">
                      <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Start Stage</Button>
              </Col>
              <br></br>
              <Col md="4">
                      <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i>Open/Close Well</Button>
              </Col>
              <br></br>
              <Col md="4">
                      <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> End Stage</Button>
              </Col>
              <br></br>
              <Col md="4">
                      <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i>End Shift</Button>
              </Col>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="4">
            <Card>
            <CardHeader>
                <strong>Up Coming Pump Maintenance</strong>
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                        <thead>
                        <tr>
                          <th>Unit Number</th>
                          <th>Fluid End Type</th>
                          <th>Current Hours</th>
                          <th>Maintenance</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>180982</td>
                          <td>Kerr F1X</td>
                          <td>2012</td>
                          <td>Valves</td>
                        </tr>
                        <tr>
                          <td>173243</td>
                          <td>Vatlek</td>
                          <td>1232</td>
                          <td>Valves & Seats</td>
                        </tr>
                        <tr>
                          <td>173432</td>
                          <td>SPM</td>
                          <td>1232</td>
                          <td>Valves & Seats</td>
                        </tr>
                        <tr>
                          <td>182324</td>
                          <td>Endurance</td>
                          <td>3214</td>
                          <td>Valves & Seats</td>
                        </tr>
                        <tr>
                          <td>123232</td>
                          <td>ST9</td>
                          <td>2314</td>
                          <td>Packing</td>
                        </tr>
                        <tr>
                          <td>18021</td>
                          <td>Kerr F1X</td>
                          <td>2012</td>
                          <td>Valves & Seats</td>
                        </tr>
                        </tbody>
                      </Table>
              </CardBody>
            </Card>
          </Col>
          </Row>
          <Row>
          {/*  */}
          <Col xs="12" sm="6" lg="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Equipment on Location                     
                <Row>
                <Col md="4">
                      <Input type="text" placeholder="Add Unit" />
                </Col>
                <Col md="4">
                      <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>
                </Col>
                </Row>
                <div className="card-header-actions">
                </div>
              </CardHeader>
              <CardBody>
                <div id="accordion">
                  <Card className="mb-0">
                    <CardHeader id="headingOne">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h5 className="m-0 p-0">Frac Pumps</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                      <CardBody>
                      <Table hover bordered striped responsive size="sm">
                        <thead>
                        <tr>
                          <th>Unit Number</th>
                          <th>Fluid End Type</th>
                          <th>Current Hours</th>
                          <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>180982</td>
                          <td>Kerr F1X</td>
                          <td>2012</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>173243</td>
                          <td>Vatlek</td>
                          <td>1232</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>173432</td>
                          <td>SPM</td>
                          <td>1232</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>182324</td>
                          <td>Endurance</td>
                          <td>3214</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>123232</td>
                          <td>ST9</td>
                          <td>2314</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>18021</td>
                          <td>Kerr F1X</td>
                          <td>2012</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>180022</td>
                          <td>Vatlek</td>
                          <td>1232</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>162323</td>
                          <td>SPM</td>
                          <td>1232</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>170892</td>
                          <td>Endurance</td>
                          <td>3214</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>123132</td>
                          <td>ST9</td>
                          <td>652</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>130922</td>
                          <td>Kerr F1X</td>
                          <td>2012</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>184098</td>
                          <td>Vatlek</td>
                          <td>1232</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>152087</td>
                          <td>SPM</td>
                          <td>1232</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>185678</td>
                          <td>Endurance</td>
                          <td>3214</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>123456</td>
                          <td>ST9</td>
                          <td>652</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>140987</td>
                          <td>Kerr F1X</td>
                          <td>2012</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>182045</td>
                          <td>Vatlek</td>
                          <td>1232</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>140987</td>
                          <td>SPM</td>
                          <td>1232</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingTwo">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                        <h5 className="m-0 p-0">Blender</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                      <CardBody>
                      <Table hover bordered striped responsive size="sm">
                        <thead>
                        <tr>
                          <th>Unit Number</th>
                          <th>Fluid End Type</th>
                          <th>Current Hours</th>
                          <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>180982</td>
                          <td>Kerr F1X</td>
                          <td>2012</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>173243</td>
                          <td>Vatlek</td>
                          <td>1232</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>173432</td>
                          <td>SPM</td>
                          <td>1232</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        <tr>
                          <td>182324</td>
                          <td>Endurance</td>
                          <td>3214</td>
                          <td>
                          <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                          </td>
                        </tr>
                        </tbody>
                      </Table>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingThree">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <h5 className="m-0 p-0">Hydration</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                      <CardBody>
                      <Table hover bordered striped responsive size="sm">
                          <thead>
                          <tr>
                            <th>Unit Number</th>
                            <th>Fluid End Type</th>
                            <th>Current Hours</th>
                            <th>Status</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>180982</td>
                            <td>Kerr F1X</td>
                            <td>2012</td>
                            <td>
                            <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                            </td>
                          </tr>
                          <tr>
                            <td>173243</td>
                            <td>Vatlek</td>
                            <td>1232</td>
                            <td>
                            <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                            </td>
                          </tr>
                          <tr>
                            <td>173432</td>
                            <td>SPM</td>
                            <td>1232</td>
                            <td>
                            <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                            </td>
                          </tr>
                          <tr>
                            <td>182324</td>
                            <td>Endurance</td>
                            <td>3214</td>
                            <td>
                            <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingThree">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <h5 className="m-0 p-0">Tractors</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                      <CardBody>
                      <Table hover bordered striped responsive size="sm">
                          <thead>
                          <tr>
                            <th>Unit Number</th>
                            <th>Fluid End Type</th>
                            <th>Current Hours</th>
                            <th>Status</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr>
                            <td>180982</td>
                            <td>Kerr F1X</td>
                            <td>2012</td>
                            <td>
                            <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                            </td>
                          </tr>
                          <tr>
                            <td>173243</td>
                            <td>Vatlek</td>
                            <td>1232</td>
                            <td>
                            <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                            </td>
                          </tr>
                          <tr>
                            <td>173432</td>
                            <td>SPM</td>
                            <td>1232</td>
                            <td>
                            <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                            </td>
                          </tr>
                          <tr>
                            <td>182324</td>
                            <td>Endurance</td>
                            <td>3214</td>
                            <td>
                            <AppSwitch className={'mx-1'} color={'primary'} outline={'alt'} label checked />
                            </td>
                          </tr>
                          </tbody>
                        </Table>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="8">
            <Card>
              <CardHeader>
                <strong>Current Shift Report</strong>
              </CardHeader>
                <CardBody>
                <strong>Completed Zones</strong>
                <br></br>
                <Col xs="12" sm="3">
                <Table hover bordered striped responsive size="sm">
                        <thead>
                        <tr>
                          <th>Well</th>
                          <th>Stage</th>
                          <th>Details</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>ABC</td>
                          <td>10</td>
                          <td> <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Details</Button></td>
                        </tr>
                        <tr>
                          <td>ABC</td>
                          <td>10</td>
                          <td> <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Details</Button></td>
                        </tr>
                        <tr>
                          <td>ABC</td>
                          <td>10</td>
                          <td> <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Details</Button></td>
                        </tr>
                        <tr>
                          <td>ABC</td>
                          <td>10</td>
                          <td> <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Details</Button></td>
                        </tr>
                        <tr>
                          <td>ABC</td>
                          <td>10</td>
                          <td> <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button></td>
                        </tr>
                        <tr>
                          <td>ABC</td>
                          <td>10</td>
                          <td> <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button></td>
                        </tr>
                        </tbody>
                      </Table>
                      </Col>
              </CardBody>
            </Card>
          </Col>
          </Row>
          <Row>
          <Col xs="12" sm="6" lg="5">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> End of Shift Reports 
                <div className="card-header-actions">
                </div>
              </CardHeader>
              <CardBody>
                <div id="accordion">
                  <Card className="mb-0">
                    <CardHeader id="headingOne">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h5 className="m-0 p-0">Day 9/5/19</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                      <CardBody>
                      <div>Zones Completed: X</div>
                      <div>Pumping Hours: XX:xx</div>
                      <div>NPT: XX:xx</div>
                      <div>Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore atio.</div>
                      <div>Equipment Issues: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </div>
                    </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingTwo">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                        <h5 className="m-0 p-0">Night 9/4/19</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                      <CardBody>
                      <div>Zones Completed: X</div>
                      <div>Pumping Hours: XX:xx</div>
                      <div>NPT: XX:xx</div>
                      <div>Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
                      <div>Equipment Issues: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingThree">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <h5 className="m-0 p-0">Day 9/4/19</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                      <CardBody>
                      <div>Zones Completed: X</div>
                      <div>Pumping Hours: XX:xx</div>
                      <div>NPT: XX:xx</div>
                      <div>Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
                      <div>Equipment Issues: Lorem ipsum dolor sit amet,  quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </div>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </div>
    );
  }
}

export default Dashboard;
