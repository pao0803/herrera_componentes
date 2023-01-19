import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function FormularioSuscripcion() {

    const initialState={
        'matricula':'',
        'nombre':'',
        'tipo':'',
        'password':'',
    }

    const [datos, setDatos] = useState(initialState);
    const{matricula,nombre,tipo,password}= datos;

    function handleChange(e){
        setDatos({
            ...datos, [e.target.name]:e.target.value

         })
    }
    const handleSubmit =(e)=>{
      e.preventDefault();
      console.log(datos);

    }


  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="matricula">
                <Form.Label>Matricula</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa Matricula"
                    name="matricula"
                    value={matricula}
                    onChange={handleChange}
                 />
                 
              </Form.Group>
              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa Nombre"
                    name="nombre" 
                    value={nombre}
                    onChange={handleChange}
                   />
              </Form.Group>
              <Form.Group className="mb-3" controlId="tipo">
                <Form.Label>Tipo</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingresa tipo de Usuario" 
                    name="tipo"
                    value={tipo}
                    onChange={handleChange}
                  />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
                <Form.Control 
                    type="password"
                    placeholder="Ingrese Password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                   />
            </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default FormularioSuscripcion;