import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Table, Row, Col } from 'reactstrap';
import classnames from 'classnames';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Operational Details
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Equipment Notes/Issues
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Stage Notes
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Pump Maintenance
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <div> Pad: Spud Muffin</div>
                <div>Customer: Devon</div>
                <div>Completed Stage: 4</div>
                <div>NPT: XX:XX</div>
                <div>Pump Hours Last 24: XX:XX</div>
                <div>Pumps: XX</div>
                <div>Standby Pumps: XX</div>
                <div>Blender: XXX</div>
                <div>Standby Blender: XXX</div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
              <ul>- Blender 820193: Discharge C-Pump hydraulic pressure fluctuates when going to 3# sand</ul>
              <ul>- Frac Pump 182033: Fall's out of lockup in 3rd gear</ul>
              <ul>- Frac Pump 182045: 500 PM </ul>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <div>Well: 1 - Cut 40,000 lbs of 40/70 due to high pressure</div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">
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
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

