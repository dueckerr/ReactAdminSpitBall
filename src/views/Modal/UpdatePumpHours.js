import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Form, FormGroup, Col, Input, Table } from 'reactstrap';

class UpdatePumpHours extends React.Component {
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
        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}Update Pumping Hours</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Update Pumping Hours</ModalHeader>
          <ModalBody>
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
                    <Input type="text" id="name" placeholder="New Hours" required />
                          </td>
                        </tr>
                        <tr>
                          <td>173243</td>
                          <td>Vatlek</td>
                          <td>1232</td>
                          <td>
                    <Input type="text" id="name" placeholder="New Hours" required />
                          </td>
                        </tr>
                        <tr>
                          <td>173432</td>
                          <td>SPM</td>
                          <td>1232</td>
                          <td>
                    <Input type="text" id="name" placeholder="New Hours" required />
                          </td>
                        </tr>
                        <tr>
                          <td>182324</td>
                          <td>Endurance</td>
                          <td>3214</td>
                          <td>
                    <Input type="text" id="name" placeholder="New Hours" required />
                          </td>
                        </tr>
                        <tr>
                          <td>123232</td>
                          <td>ST9</td>
                          <td>2314</td>
                          <td>
                    <Input type="text" id="name" placeholder="New Hours" required />
                          </td>
                        </tr>
                        <tr>
                          <td>18021</td>
                          <td>Kerr F1X</td>
                          <td>2012</td>
                          <td>
                    <Input type="text" id="name" placeholder="New Hours" required />
                          </td>
                        </tr>
                        <tr>
                          <td>180022</td>
                          <td>Vatlek</td>
                          <td>1232</td>
                          <td>
                    <Input type="text" id="name" placeholder="New Hours" required />
                          </td>
                        </tr>
                        <tr>
                          <td>162323</td>
                          <td>SPM</td>
                          <td>1232</td>
                          <td>
                    <Input type="text" id="name" placeholder="New Hours" required />
                          </td>
                        </tr>
                        <tr>
                          <td>170892</td>
                          <td>Endurance</td>
                          <td>3214</td>
                          <td>
                    <Input type="text" id="name" placeholder="New Hours" required />
                          </td>
                        </tr>
                        <tr>
                          <td>123132</td>
                          <td>ST9</td>
                          <td>652</td>
                          <td>
                    <Input type="text" id="name" placeholder="New Hours" required />
                          </td>
                        </tr>
                        <tr>
                          <td>130922</td>
                          <td>Kerr F1X</td>
                          <td>2012</td>
                          <td>
                    <Input type="text" id="name" placeholder="New Hours" required />
                          </td>
                        </tr>
                        <tr>
                          <td>184098</td>
                          <td>Vatlek</td>
                          <td>1232</td>
                          <td>
                    <Input type="text" id="name" placeholder="New Hours" required />
                          </td>
                        </tr>
                        <tr>
                          <td>152087</td>
                          <td>SPM</td>
                          <td>1232</td>
                          <td>
                    <Input type="text" id="name" placeholder="New Hours" required />
                          </td>
                        </tr>
                        <tr>
                          <td>185678</td>
                          <td>Endurance</td>
                          <td>3214</td>
                          <td>
                    <Input type="text" id="name" placeholder="New Hours" required />
                          </td>
                        </tr>
                        <tr>
                          <td>123456</td>
                          <td>ST9</td>
                          <td>652</td>
                          <td>
                    <Input type="text" id="name" placeholder="New Hours" required />
                          </td>
                        </tr>
                        <tr>
                          <td>140987</td>
                          <td>Kerr F1X</td>
                          <td>2012</td>
                          <td>
                    <Input type="text" id="name" placeholder="New Hours" required />
                          </td>
                        </tr>
                        <tr>
                          <td>182045</td>
                          <td>Vatlek</td>
                          <td>1232</td>
                          <td>
                    <Input type="text" id="name" placeholder="New Hours" required />
                          </td>
                        </tr>
                        <tr>
                          <td>140987</td>
                          <td>SPM</td>
                          <td>1232</td>
                          <td>
                    <Input type="text" id="name" placeholder="New Hours" required />
                          </td>
                        </tr>
                        </tbody>
                      </Table>
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

export default UpdatePumpHours;    