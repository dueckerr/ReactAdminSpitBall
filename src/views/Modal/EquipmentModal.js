import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Form, FormGroup, Col, Input } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}Enter Equipment Note</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
          <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Select Equipment</Label>
                    </Col>
                    <Col xs="12" md="9">
                    <Input type="select" name="select" id="select">
                        <option value="0">Please select</option>
                        <option value="1">123456</option>
                        <option value="2">123456</option>
                        <option value="3">123456</option>
                        <option value="4">123456</option>
                        <option value="5">123456</option>
                        <option value="6">123456</option>
                        <option value="7">123456</option>
                        <option value="8">123456</option>
                        <option value="9">123456</option>
                        <option value="11">123456</option>
                        <option value="12">123456</option>
                        <option value="13">123456</option>
                        <option value="14">123456</option>
                        <option value="15">123456</option>
                        <option value="16">123456</option>
                        <option value="17">123456</option>
                        <option value="18">123456</option>
                        <option value="19">123456</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="9">
                      <Label htmlFor="textarea-input">Enter Notes</Label>
                    </Col>
                    <Col xs="12" md="12">
                      <Input type="textarea" name="textarea-input" id="textarea-input" rows="9"
                             placeholder="Content..." />
                    </Col>
                  </FormGroup>
                </Form>            
                <br />
                </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Enter</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;