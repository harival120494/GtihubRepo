import React from "react";
import { useSelector } from "react-redux";
import { ListGroup, Row, Col } from "react-bootstrap";
const Repo = () => {
  const repos = useSelector((state) => state.reducerRepo)[0];

  return repos.map((t, idx) => (
    <ListGroup.Item key={idx}>
      <Row>
        <Col xl={2} md={2} sm={2}>
          Nama Repository
        </Col>
        <Col xl={5} md={5} sm={5}>
          : {t.name}
        </Col>
      </Row>
      <Row>
        <Col xl={2} md={2} sm={2}>
          Language
        </Col>
        <Col xl={5} md={5} sm={5}>
          : {t.language}
        </Col>
      </Row>
      <Row>
        <Col xl={2} md={2} sm={2}>
          URL
        </Col>
        <Col xl={5} md={5} sm={5}>
          : {t.html_url}
        </Col>
      </Row>
      <Row>
        <Col xl={2} md={2} sm={2}>
          Tgl. Dibuat
        </Col>
        <Col xl={5} md={5} sm={5}>
          : {t.created_at}
        </Col>
      </Row>
      <Row>
        <Col xl={2} md={2} sm={2}>
          Deskripsi
        </Col>
        <Col xl={5} md={5} sm={5}>
          : {t.description}
        </Col>
      </Row>
    </ListGroup.Item>
  ));
};
export default Repo;
