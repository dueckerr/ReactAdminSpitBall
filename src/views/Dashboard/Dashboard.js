import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Row,
} from 'reactstrap';


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
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div className="text-value">Fleet 1</div>
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
                <div>Last Event: Well Closed ????</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
              </div>
            </Card>
          </Col>
          {/*  */}
          <Col xs="12" sm="6" lg="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Collapse <small>accordion</small>
                <div className="card-header-actions">
                </div>
              </CardHeader>
              <CardBody>
                <div id="accordion">
                  <Card className="mb-0">
                    <CardHeader id="headingOne">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h5 className="m-0 p-0">Collapsible Group Item #1</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                      <CardBody>
                      <div>Current Pad: Spud Muffin</div>
                      <div>Customer: Devon</div>
                      <div>Pad Progress: 40 of 150 Stages</div>
                      <div>NPT Last 24: XX:XX</div>
                      <div>Pump Hours Last 24: XX:XX</div>
                      <div>Stages Last 24: X </div>
                    </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingTwo">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                        <h5 className="m-0 p-0">Collapsible Group Item #2</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                      <CardBody>
                      <div>Current Pad: Spud Muffin</div>
                      <div>Customer: Devon</div>
                      <div>Pad Progress: 40 of 150 Stages</div>
                      <div>NPT Last 24: XX:XX</div>
                      <div>Pump Hours Last 24: XX:XX</div>
                      <div>Stages Last 24: X </div>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingThree">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <h5 className="m-0 p-0">Collapsible Group Item #3</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                      <CardBody>
                      <div>Current Pad: Spud Muffin</div>
                      <div>Customer: Devon</div>
                      <div>Pad Progress: 40 of 150 Stages</div>
                      <div>NPT Last 24: XX:XX</div>
                      <div>Pump Hours Last 24: XX:XX</div>
                      <div>Stages Last 24: X </div>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
          </Col>
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
                      <div>Pumping Hours: XX:xx</div>
                      <div>Zones Completed: X</div>
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
                      <div>Pumping Hours: XX:xx</div>
                      <div>Zones Completed: X</div>
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
                      <div>Pumping Hours: XX:xx</div>
                      <div>Zones Completed: X</div>
                      <div>NPT: XX:xx</div>
                      <div>Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
                      <div>Equipment Issues: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummyveniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </div>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div className="text-value">Fleet 1</div>
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
                <div>Last Event: Well Closed ????</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
              </div>
            </Card>
          </Col>
          {/*  */}
          <Col xs="12" sm="6" lg="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Collapse <small>accordion</small>
                <div className="card-header-actions">
                </div>
              </CardHeader>
              <CardBody>
                <div id="accordion">
                  <Card className="mb-0">
                    <CardHeader id="headingOne">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h5 className="m-0 p-0">Collapsible Group Item #1</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                      <CardBody>
                      <div>Current Pad: Spud Muffin</div>
                      <div>Customer: Devon</div>
                      <div>Pad Progress: 40 of 150 Stages</div>
                      <div>NPT Last 24: XX:XX</div>
                      <div>Pump Hours Last 24: XX:XX</div>
                      <div>Stages Last 24: X </div>
                    </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingTwo">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                        <h5 className="m-0 p-0">Collapsible Group Item #2</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                      <CardBody>
                      <div>Current Pad: Spud Muffin</div>
                      <div>Customer: Devon</div>
                      <div>Pad Progress: 40 of 150 Stages</div>
                      <div>NPT Last 24: XX:XX</div>
                      <div>Pump Hours Last 24: XX:XX</div>
                      <div>Stages Last 24: X </div>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingThree">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <h5 className="m-0 p-0">Collapsible Group Item #3</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                      <CardBody>
                      <div>Current Pad: Spud Muffin</div>
                      <div>Customer: Devon</div>
                      <div>Pad Progress: 40 of 150 Stages</div>
                      <div>NPT Last 24: XX:XX</div>
                      <div>Pump Hours Last 24: XX:XX</div>
                      <div>Stages Last 24: X </div>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
          </Col>
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
                      <div>Pumping Hours: XX:xx</div>
                      <div>Zones Completed: X</div>
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
                      <div>Pumping Hours: XX:xx</div>
                      <div>Zones Completed: X</div>
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
                      <div>Pumping Hours: XX:xx</div>
                      <div>Zones Completed: X</div>
                      <div>NPT: XX:xx</div>
                      <div>Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
                      <div>Equipment Issues: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummyveniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </div>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <div className="text-value">Fleet 2</div>
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
                <div>Last Event: Well Closed ????</div>
                              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
              </div>
            </Card>
          </Col>
          {/*  */}
          <Col xs="12" sm="6" lg="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Collapse <small>accordion</small>
                <div className="card-header-actions">
                </div>
              </CardHeader>
              <CardBody>
                <div id="accordion">
                  <Card className="mb-0">
                    <CardHeader id="headingOne">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h5 className="m-0 p-0">Collapsible Group Item #1</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                      <CardBody>
                      <div>Current Pad: Spud Muffin</div>
                      <div>Customer: Devon</div>
                      <div>Pad Progress: 40 of 150 Stages</div>
                      <div>NPT Last 24: XX:XX</div>
                      <div>Pump Hours Last 24: XX:XX</div>
                      <div>Stages Last 24: X </div>
                    </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingTwo">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                        <h5 className="m-0 p-0">Collapsible Group Item #2</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                      <CardBody>
                      <div>Current Pad: Spud Muffin</div>
                      <div>Customer: Devon</div>
                      <div>Pad Progress: 40 of 150 Stages</div>
                      <div>NPT Last 24: XX:XX</div>
                      <div>Pump Hours Last 24: XX:XX</div>
                      <div>Stages Last 24: X </div>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingThree">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <h5 className="m-0 p-0">Collapsible Group Item #3</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                      <CardBody>
                      <div>Current Pad: Spud Muffin</div>
                      <div>Customer: Devon</div>
                      <div>Pad Progress: 40 of 150 Stages</div>
                      <div>NPT Last 24: XX:XX</div>
                      <div>Pump Hours Last 24: XX:XX</div>
                      <div>Stages Last 24: X </div>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
          </Col>
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
                      <div>Pumping Hours: XX:xx</div>
                      <div>Zones Completed: X</div>
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
                      <div>Pumping Hours: XX:xx</div>
                      <div>Zones Completed: X</div>
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
                      <div>Pumping Hours: XX:xx</div>
                      <div>Zones Completed: X</div>
                      <div>NPT: XX:xx</div>
                      <div>Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
                      <div>Equipment Issues: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummyveniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </div>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" lg="3">
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
                <div>Last Event: Well Closed ????</div>
                              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
              </div>
            </Card>
          </Col>
          {/*  */}
          <Col xs="12" sm="6" lg="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Collapse <small>accordion</small>
                <div className="card-header-actions">
                </div>
              </CardHeader>
              <CardBody>
                <div id="accordion">
                  <Card className="mb-0">
                    <CardHeader id="headingOne">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h5 className="m-0 p-0">Collapsible Group Item #1</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                      <CardBody>
                      <div>Current Pad: Spud Muffin</div>
                      <div>Customer: Devon</div>
                      <div>Pad Progress: 40 of 150 Stages</div>
                      <div>NPT Last 24: XX:XX</div>
                      <div>Pump Hours Last 24: XX:XX</div>
                      <div>Stages Last 24: X </div>
                    </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingTwo">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                        <h5 className="m-0 p-0">Collapsible Group Item #2</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                      <CardBody>
                      <div>Current Pad: Spud Muffin</div>
                      <div>Customer: Devon</div>
                      <div>Pad Progress: 40 of 150 Stages</div>
                      <div>NPT Last 24: XX:XX</div>
                      <div>Pump Hours Last 24: XX:XX</div>
                      <div>Stages Last 24: X </div>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingThree">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <h5 className="m-0 p-0">Collapsible Group Item #3</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                      <CardBody>
                      <div>Current Pad: Spud Muffin</div>
                      <div>Customer: Devon</div>
                      <div>Pad Progress: 40 of 150 Stages</div>
                      <div>NPT Last 24: XX:XX</div>
                      <div>Pump Hours Last 24: XX:XX</div>
                      <div>Stages Last 24: X </div>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
          </Col>
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
                      <div>Pumping Hours: XX:xx</div>
                      <div>Zones Completed: X</div>
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
                      <div>Pumping Hours: XX:xx</div>
                      <div>Zones Completed: X</div>
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
                      <div>Pumping Hours: XX:xx</div>
                      <div>Zones Completed: X</div>
                      <div>NPT: XX:xx</div>
                      <div>Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
                      <div>Equipment Issues: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummyveniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </div>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" sm="6" lg="3">
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
                <div>Last Event: Well Closed ????</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
              </div>
            </Card>
          </Col>
          {/*  */}
          <Col xs="12" sm="6" lg="4">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Collapse <small>accordion</small>
                <div className="card-header-actions">
                </div>
              </CardHeader>
              <CardBody>
                <div id="accordion">
                  <Card className="mb-0">
                    <CardHeader id="headingOne">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h5 className="m-0 p-0">Collapsible Group Item #1</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                      <CardBody>
                      <div>Current Pad: Spud Muffin</div>
                      <div>Customer: Devon</div>
                      <div>Pad Progress: 40 of 150 Stages</div>
                      <div>NPT Last 24: XX:XX</div>
                      <div>Pump Hours Last 24: XX:XX</div>
                      <div>Stages Last 24: X </div>
                    </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingTwo">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                        <h5 className="m-0 p-0">Collapsible Group Item #2</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                      <CardBody>
                      <div>Current Pad: Spud Muffin</div>
                      <div>Customer: Devon</div>
                      <div>Pad Progress: 40 of 150 Stages</div>
                      <div>NPT Last 24: XX:XX</div>
                      <div>Pump Hours Last 24: XX:XX</div>
                      <div>Stages Last 24: X </div>
                      </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingThree">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)} aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                        <h5 className="m-0 p-0">Collapsible Group Item #3</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                      <CardBody>
                      <div>Current Pad: Spud Muffin</div>
                      <div>Customer: Devon</div>
                      <div>Pad Progress: 40 of 150 Stages</div>
                      <div>NPT Last 24: XX:XX</div>
                      <div>Pump Hours Last 24: XX:XX</div>
                      <div>Stages Last 24: X </div>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
          </Col>
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
                      <div>Pumping Hours: XX:xx</div>
                      <div>Zones Completed: X</div>
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
                      <div>Pumping Hours: XX:xx</div>
                      <div>Zones Completed: X</div>
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
                      <div>Pumping Hours: XX:xx</div>
                      <div>Zones Completed: X</div>
                      <div>NPT: XX:xx</div>
                      <div>Reason for NPT: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</div>
                      <div>Equipment Issues: Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummyveniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </div>
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
