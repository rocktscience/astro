import React from "react";

import { Button, Col, Dropdown, Row } from "react-bootstrap";

import { Calendar, Filter, RefreshCw } from "lucide-react";

const Header = () => {
  return (
    <Row className="mb-2 mb-xl-3">
      <Col xs="auto" className="d-none d-sm-block">
        <h3>Dashboard</h3>
      </Col>

      <Col xs="auto" className="ms-auto text-end mt-n1">
        <Dropdown className="d-inline me-2">
          <Dropdown.Toggle variant="light" className="bg-white shadow-sm">
            <Calendar className="lucide align-middle mt-n1" /> Today
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another Action</Dropdown.Item>
            <Dropdown.Item>Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Seperated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button variant="primary" className="shadow-sm me-1">
          <Filter className="lucide" />
        </Button>
        <Button variant="primary" className="shadow-sm">
          <RefreshCw className="lucide" />
        </Button>
      </Col>
    </Row>
  );
};

export default Header;
