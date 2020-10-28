import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

const Formulir = ({nama, harga, deskripsi, handleChange, handleSubmit}) => {
    return (
        <div className="mt-5">
            <Row>
                <Col>
                    <h4>Tambah Project</h4>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="nama">
                            <Form.Label>Name Project</Form.Label>
                            <Form.Control
                                type="text"
                                name="Name Project"
                                value={nama}
                                onChange={(event) => handleChange(event)}
                            />
                        </Form.Group>

                        <Form.Group controlId="deskripsi">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                nama="deskripsi"
                                value={deskripsi}
                                onChange={(event) => handleChange(event)}
                            />
                        </Form.Group>

                        <Form.Group controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="Price"
                                value={harga}
                                onChange={(event) => handleChange(event)}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Formulir;
