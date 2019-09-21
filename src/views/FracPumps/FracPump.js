import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table, Button, Collapse, FormGroup, Label, Input } from 'reactstrap';

import FracPumpsData from './FracPumpData'

class FracPump extends Component {
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

    const FracPump = FracPumpsData.find( FracPump => FracPump.id.toString() === this.props.match.params.id)

    const FracPumpDetails = FracPump ? Object.entries(FracPump) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>FracPump id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                    <tbody>
                      {
                        FracPumpDetails.map(([key, value]) => {
                          return (
                            <tr key={key}>
                              <td>{`${key}:`}</td>
                              <td><strong>{value}</strong></td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="4" md="4" lg="4">
            <Card>
              <CardHeader>
                <strong>Search & Filter Pumps</strong>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="name">Pump Number</Label>
                      <Input type="text" id="name" placeholder="Enter Pump Number" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    <FormGroup>
                      <Label htmlFor="ccnumber">Serial Number</Label>
                      <Input type="text" id="ccnumber" placeholder="0000 0000 0000 0000" required />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Engine Type</Label>
                      <Input type="select" name="ccmonth" id="ccmonth">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="Fluidend">Fluid End Type</Label>
                      <Input type="select" name="Fluidend" id="Fluidend">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                  <FormGroup>
                      <Label htmlFor="ccyear">Fleet</Label>
                      <Input type="select" name="ccyear" id="ccyear">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>

        <Col xs="12" lg="12">
          <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Shop Equipment 
                <div className="card-header-actions">
                </div>
              </CardHeader>
              <CardBody>
                <div id="accordion">
                  <Card className="mb-0">
                    <CardHeader id="headingOne">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)} aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                        <h5 className="m-0 p-0">Frac Pump Parts</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                      <CardBody>
                      <Table hover bordered striped responsive size="sm">
              <thead>
              <tr>
                <th>Part</th>
                <th>Hole 1</th>
                <th>Hole 2</th>
                <th>Hole 3</th>
                <th>Hole 4</th>
                <th>Hole 5</th>
              </tr>
              </thead>
              <tbody>
              <tr>
            <td rowspan = "2">Discharge D-Ring</td>
            <td>Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 2 Cell 3</td>
            <td>Row 2 Cell 4</td>
            <td>Row 2 Cell </td>
              </tr>
              <tr>
            <td>Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 2 Cell 3</td>
            <td>Row 2 Cell 4</td>
            <td>Row 2 Cell </td>
              </tr>
              <tr>
              <td rowspan = "2">Discharge Valve</td>
            <td>Row 1 Cell 2</td>
            <td>Row 1 Cell 3</td>
            <td>Row 2 Cell 2</td>
            <td>Row 2 Cell 3</td>
            <td>Row 2 Cell 3</td>
              </tr>
              <tr>
            <td>Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 2 Cell 3</td>
            <td>Row 2 Cell 4</td>
            <td>Row 2 Cell </td>
              </tr>
              <tr>
              <td rowspan = "2">Discharge Seat</td>
            <td>Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 2 Cell 3</td>
            <td>Row 2 Cell 4</td>
            <td>Row 2 Cell </td>
              </tr>
              <tr>
            <td>Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 2 Cell 3</td>
            <td>Row 2 Cell 4</td>
            <td>Row 2 Cell </td>
              </tr>
              <tr>
            <td rowspan = "2">Suction D-Ring</td>
            <td>Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 2 Cell 3</td>
            <td>Row 2 Cell 4</td>
            <td>Row 2 Cell </td>
              </tr>
              <tr>
            <td>Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 2 Cell 3</td>
            <td>Row 2 Cell 4</td>
            <td>Row 2 Cell </td>
              </tr>
              <tr>
              <td rowspan = "2">Suction Valve</td>
            <td>Row 1 Cell 2</td>
            <td>Row 1 Cell 3</td>
            <td>Row 2 Cell 2</td>
            <td>Row 2 Cell 3</td>
            <td>Row 2 Cell 3</td>
              </tr>
              <tr>
            <td>Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 2 Cell 3</td>
            <td>Row 2 Cell 4</td>
            <td>Row 2 Cell </td>
              </tr>
              <tr>
              <td rowspan = "2">Suction Seat</td>
            <td>Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 2 Cell 3</td>
            <td>Row 2 Cell 4</td>
            <td>Row 2 Cell </td>
              </tr>
              <tr>
            <td>Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 2 Cell 3</td>
            <td>Row 2 Cell 4</td>
            <td>Row 2 Cell </td>
              </tr>
              <tr>
              <td rowspan = "2"> Packing</td>
            <td>Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 2 Cell 3</td>
            <td>Row 2 Cell 4</td>
            <td>Row 2 Cell </td>
              </tr>
              <tr>
            <td>Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 2 Cell 3</td>
            <td>Row 2 Cell 4</td>
            <td>Row 2 Cell </td>
              </tr>
              <tr>
              <td rowspan = "2"> Plunger</td>
            <td>Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 2 Cell 3</td>
            <td>Row 2 Cell 4</td>
            <td>Row 2 Cell </td>
              </tr>
              <tr>
            <td>Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 2 Cell 3</td>
            <td>Row 2 Cell 4</td>
            <td>Row 2 Cell </td>
              </tr>
              </tbody>
            </Table>
              </CardBody>
                    </Collapse>
                  </Card>
                  <Card className="mb-0">
                    <CardHeader id="headingTwo">
                      <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)} aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                        <h5 className="m-0 p-0">Equipment Issues & Notes</h5>
                      </Button>
                    </CardHeader>
                    <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                      <CardBody>
                          23456
                      </CardBody>
                    </Collapse>
                  </Card>
                </div>
              </CardBody>
            </Card>
          </Col>      
    </Row>
      </div>
    )
  }
}

export default FracPump;
