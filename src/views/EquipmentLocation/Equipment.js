import React, { Component, lazy } from 'react';
import { Button,   Collapse, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
const EquipmentCollapse = lazy(() => import('../Collapse/EquipmentCollapse'));
const ShopEquipmentCollapse = lazy(() => import('../Collapse/ShopEquipmentCollapse'));

class Breadcrumbs extends Component {
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
          <Col xs="12" lg="6">
          <Card>
          <CardHeader>
                <i className="fa fa-align-justify"></i> Fleet 1 Equipment 
                <div className="card-header-actions">
                </div>
          </CardHeader>
          <CardBody>
            <EquipmentCollapse> </EquipmentCollapse>
         </CardBody>
          </Card>
        </Col>
        
          <Col xs="12" lg="6">
          <Card>
          <CardHeader>
                <i className="fa fa-align-justify"></i> Fleet 2 Equipment 
                <div className="card-header-actions">
                </div>
          </CardHeader>
          <CardBody>
            <EquipmentCollapse> </EquipmentCollapse>
         </CardBody>
          </Card>
        </Col>
        </Row>

        <Row>

          <Col xs="12" lg="6">
          <Card>
          <CardHeader>
                <i className="fa fa-align-justify"></i> Fleet 3 Equipment 
                <div className="card-header-actions">
                </div>
          </CardHeader>
          <CardBody>
            <EquipmentCollapse> </EquipmentCollapse>
         </CardBody>
          </Card>
        </Col>

          <Col xs="12" lg="6">
          <Card>
          <CardHeader>
                <i className="fa fa-align-justify"></i> Fleet 4 Equipment 
                <div className="card-header-actions">
                </div>
          </CardHeader>
          <CardBody>
            <EquipmentCollapse> </EquipmentCollapse>
         </CardBody>
          </Card>
        </Col>

        </Row>

        <Row>

          <Col xs="12" lg="6">
          <Card>
          <CardHeader>
                <i className="fa fa-align-justify"></i> Fleet 5 Equipment 
                <div className="card-header-actions">
                </div>
          </CardHeader>
          <CardBody>
            <EquipmentCollapse> </EquipmentCollapse>
         </CardBody>
          </Card>
        </Col>

          <Col xs="12" lg="6">
          <Card>
          <CardHeader>
                <i className="fa fa-align-justify"></i> Fleet 6 Equipment 
                <div className="card-header-actions">
                </div>
          </CardHeader>
          <CardBody>
            <EquipmentCollapse> </EquipmentCollapse>
         </CardBody>
          </Card>
        </Col>

        </Row>



        <Col xs="12" lg="12">
          <Card>
          <CardHeader>
                <i className="fa fa-align-justify"></i> Shop Equipment 
                <div className="card-header-actions">
                </div>
          </CardHeader>
          <CardBody>
            <ShopEquipmentCollapse> </ShopEquipmentCollapse>
         </CardBody>
          </Card>
        </Col>

      </div>

    );
  }
}

export default Breadcrumbs;
