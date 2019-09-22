import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Table, Collapse, Row } from 'reactstrap';

class Collapses extends Component {

  constructor(props) {
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

  toggle() {
    this.setState({ collapse: !this.state.collapse });
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

  render() {
    return (
      <div className="animated fadeIn">
        <Row>

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
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>173243</td>
                          <td>Vatlek</td>
                          <td>1232</td>
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>173432</td>
                          <td>SPM</td>
                          <td>1232</td>
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>182324</td>
                          <td>Endurance</td>
                          <td>3214</td>
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>123232</td>
                          <td>ST9</td>
                          <td>2314</td>
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>18021</td>
                          <td>Kerr F1X</td>
                          <td>2012</td>
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>180022</td>
                          <td>Vatlek</td>
                          <td>1232</td>
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>162323</td>
                          <td>SPM</td>
                          <td>1232</td>
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>170892</td>
                          <td>Endurance</td>
                          <td>3214</td>
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>123132</td>
                          <td>ST9</td>
                          <td>652</td>
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>130922</td>
                          <td>Kerr F1X</td>
                          <td>2012</td>
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>184098</td>
                          <td>Vatlek</td>
                          <td>1232</td>
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>152087</td>
                          <td>SPM</td>
                          <td>1232</td>
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>185678</td>
                          <td>Endurance</td>
                          <td>3214</td>
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>123456</td>
                          <td>ST9</td>
                          <td>652</td>
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>140987</td>
                          <td>Kerr F1X</td>
                          <td>2012</td>
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>182045</td>
                          <td>Vatlek</td>
                          <td>1232</td>
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>140987</td>
                          <td>SPM</td>
                          <td>1232</td>
                          <td>Rigged In</td>
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
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>173243</td>
                          <td>Vatlek</td>
                          <td>1232</td>
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>173432</td>
                          <td>SPM</td>
                          <td>1232</td>
                          <td>Rigged In</td>
                        </tr>
                        <tr>
                          <td>182324</td>
                          <td>Endurance</td>
                          <td>3214</td>
                          <td>Rigged In</td>
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
                            <td>Rigged In</td>
                          </tr>
                          <tr>
                            <td>173243</td>
                            <td>Vatlek</td>
                            <td>1232</td>
                            <td>Rigged In</td>
                          </tr>
                          <tr>
                            <td>173432</td>
                            <td>SPM</td>
                            <td>1232</td>
                            <td>Rigged In</td>
                          </tr>
                          <tr>
                            <td>182324</td>
                            <td>Endurance</td>
                            <td>3214</td>
                            <td>Rigged In</td>
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
                            <td>Rigged In</td>
                          </tr>
                          <tr>
                            <td>173243</td>
                            <td>Vatlek</td>
                            <td>1232</td>
                            <td>Rigged In</td>
                          </tr>
                          <tr>
                            <td>173432</td>
                            <td>SPM</td>
                            <td>1232</td>
                            <td>Rigged In</td>
                          </tr>
                          <tr>
                            <td>182324</td>
                            <td>Endurance</td>
                            <td>3214</td>
                            <td>Rigged In</td>
                          </tr>
                          </tbody>
                        </Table>
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            {/* </Card> */}
        </Row>
      </div>
    );
  }
}

export default Collapses;
