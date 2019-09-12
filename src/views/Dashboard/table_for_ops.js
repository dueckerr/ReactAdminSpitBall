
        <Row>
        <Col>
          <Card>
            <CardHeader>
              Traffic {' & '} Sales
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="12" md="6" xl="6">
                  <Row>
                    <Col sm="6">
                      <div className="callout callout-info">
                        <small className="text-muted">New Clients</small>
                        <br />
                        <strong className="h4">9,123</strong>
                        <div className="chart-wrapper">
                          <Line data={makeSparkLineData(0, brandPrimary)} options={sparklineChartOpts} width={100} height={30} />
                        </div>
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="callout callout-danger">
                        <small className="text-muted">Recurring Clients</small>
                        <br />
                        <strong className="h4">22,643</strong>
                        <div className="chart-wrapper">
                          <Line data={makeSparkLineData(1, brandDanger)} options={sparklineChartOpts} width={100} height={30} />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <hr className="mt-0" />
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Monday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <Progress className="progress-xs" color="info" value="34" />
                      <Progress className="progress-xs" color="danger" value="78" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Tuesday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <Progress className="progress-xs" color="info" value="56" />
                      <Progress className="progress-xs" color="danger" value="94" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Wednesday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <Progress className="progress-xs" color="info" value="12" />
                      <Progress className="progress-xs" color="danger" value="67" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Thursday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <Progress className="progress-xs" color="info" value="43" />
                      <Progress className="progress-xs" color="danger" value="91" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Friday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <Progress className="progress-xs" color="info" value="22" />
                      <Progress className="progress-xs" color="danger" value="73" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Saturday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <Progress className="progress-xs" color="info" value="53" />
                      <Progress className="progress-xs" color="danger" value="82" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Sunday
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <Progress className="progress-xs" color="info" value="9" />
                      <Progress className="progress-xs" color="danger" value="69" />
                    </div>
                  </div>
                  <div className="legend text-center">
                    <small>
                      <sup className="px-1"><Badge pill color="info">&nbsp;</Badge></sup>
                      New clients
                      &nbsp;
                      <sup className="px-1"><Badge pill color="danger">&nbsp;</Badge></sup>
                      Recurring clients
                    </small>
                  </div>
                </Col>
                <Col xs="12" md="6" xl="6">
                  <Row>
                    <Col sm="6">
                      <div className="callout callout-warning">
                        <small className="text-muted">Pageviews</small>
                        <br />
                        <strong className="h4">78,623</strong>
                        <div className="chart-wrapper">
                          <Line data={makeSparkLineData(2, brandWarning)} options={sparklineChartOpts} width={100} height={30} />
                        </div>
                      </div>
                    </Col>
                    <Col sm="6">
                      <div className="callout callout-success">
                        <small className="text-muted">Organic</small>
                        <br />
                        <strong className="h4">49,123</strong>
                        <div className="chart-wrapper">
                          <Line data={makeSparkLineData(3, brandSuccess)} options={sparklineChartOpts} width={100} height={30} />
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <hr className="mt-0" />
                  <ul>
                    <div className="progress-group">
                      <div className="progress-group-header">
                        <i className="icon-user progress-group-icon"></i>
                        <span className="title">Male</span>
                        <span className="ml-auto font-weight-bold">43%</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="warning" value="43" />
                      </div>
                    </div>
                    <div className="progress-group mb-5">
                      <div className="progress-group-header">
                        <i className="icon-user-female progress-group-icon"></i>
                        <span className="title">Female</span>
                        <span className="ml-auto font-weight-bold">37%</span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="warning" value="37" />
                      </div>
                    </div>
                    <div className="progress-group">
                      <div className="progress-group-header">
                        <i className="icon-globe progress-group-icon"></i>
                        <span className="title">Organic Search</span>
                        <span className="ml-auto font-weight-bold">191,235 <span className="text-muted small">(56%)</span></span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="success" value="56" />
                      </div>
                    </div>
                    <div className="progress-group">
                      <div className="progress-group-header">
                        <i className="icon-social-facebook progress-group-icon"></i>
                        <span className="title">Facebook</span>
                        <span className="ml-auto font-weight-bold">51,223 <span className="text-muted small">(15%)</span></span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="success" value="15" />
                      </div>
                    </div>
                    <div className="progress-group">
                      <div className="progress-group-header">
                        <i className="icon-social-twitter progress-group-icon"></i>
                        <span className="title">Twitter</span>
                        <span className="ml-auto font-weight-bold">37,564 <span className="text-muted small">(11%)</span></span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="success" value="11" />
                      </div>
                    </div>
                    <div className="progress-group">
                      <div className="progress-group-header">
                        <i className="icon-social-linkedin progress-group-icon"></i>
                        <span className="title">LinkedIn</span>
                        <span className="ml-auto font-weight-bold">27,319 <span className="text-muted small">(8%)</span></span>
                      </div>
                      <div className="progress-group-bars">
                        <Progress className="progress-xs" color="success" value="8" />
                      </div>
                    </div>
                    <div className="divider text-center">
                      <Button color="link" size="sm" className="text-muted" data-toggle="tooltip" data-placement="top"
                              title="" data-original-title="show more"><i className="icon-options"></i></Button>
                    </div>
                  </ul>
                </Col>
              </Row>
              {/* 
              
              
              Below put pump maint logs, filters for fleets & individual pumps
              
              
              
              
              */}
              <br />
              <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                <tr>
                  <th className="text-center"><i className="icon-people"></i></th>
                  <th>User</th>
                  <th className="text-center">Country</th>
                  <th>Usage</th>
                  <th className="text-center">Payment Method</th>
                  <th>Activity</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className="text-center">
                    <div> FP - 14
                    </div>
                  </td>
                  <td>
                    <div>Yiorgos Avraamu</div>
                    <div className="small text-muted">
                      <span>Crew 2</span> | Registered: Jan 1, 2015
                    </div>
                  </td>
                  <td className="text-center">
                    <i className="flag-icon flag-icon-us h4 mb-0" title="us" id="us"></i>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>50%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="success" value="50" />
                  </td>
                  <td className="text-center">
                    <i className="fa fa-cc-mastercard" style={{ fontSize: 24 + 'px' }}></i>
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>10 sec ago</strong>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <div className="avatar">
                      <img src={'assets/img/avatars/2.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                      <span className="avatar-status badge-danger"></span>
                    </div>
                  </td>
                  <td>
                    <div>Avram Tarasios</div>
                    <div className="small text-muted">

                      <span>Recurring</span> | Registered: Jan 1, 2015
                    </div>
                  </td>
                  <td className="text-center">
                    <i className="flag-icon flag-icon-br h4 mb-0" title="br" id="br"></i>
                  </td>
                  <td>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>10%</strong>
                      </div>
                      <div className="float-right">
                        <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                      </div>
                    </div>
                    <Progress className="progress-xs" color="info" value="10" />
                  </td>
                  <td className="text-center">
                    <i className="fa fa-cc-visa" style={{ fontSize: 24 + 'px' }}></i>
                  </td>
                  <td>
                    <div className="small text-muted">Last login</div>
                    <strong>5 minutes ago</strong>
                  </td>
                </tr>
                
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
}
