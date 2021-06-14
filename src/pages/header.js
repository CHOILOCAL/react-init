import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Form,
  Button,
  Modal,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand>홈</Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/aboutDamdeeng">담딩투어 소개</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/product">여행상품</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/makeproduct">나만의여행상품만들기</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/review">리뷰</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/qna">문의</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/withme">동행구하기</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/sns">담딩 SNS</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/history">예제</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/Bootstrap">BootstrapSample</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/d3">D3Sample</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/icon">IconMeterialSample</Link>
          </Nav.Link>
        </Nav>

        <Form inline>
          {/* <FormControl
            type="text"
            placeholder="검색어를 입력해주세요."
            className="mr-sm-2"
          />
          <Button variant="outline-primary">검색</Button> */}
          <Button variant="outline-dark" onClick={handleShow}>
            로그인
          </Button>
          <Button variant="outline-dark">회원가입</Button>
        </Form>
      </Navbar>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>담딩투어</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          로그인해주세요.
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">이메일</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="hyunchoi@hist.co.kr"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">비밀번호</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="1234"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-2">
              <Form.Check
                inline
                label="남"
                name="sex"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="여"
                name="sex"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={handleClose}>
            로그인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    // <div>
    //     <ul>
    //         <li>
    //             <NavLink to="/" activeStyle={{ background: 'red', color: 'black' }}>홈</NavLink>
    //         </li>
    //         <li>
    //             <Link to="/aboutDamdeeng">담딩투어 소개</Link>
    //         </li>
    //         <li>
    //             <Link to="/product">여행상품</Link>
    //         </li>
    //         <li>
    //             <Link to="/makeproduct">나만의여행상품만들기</Link>
    //         </li>
    //         <li>
    //             <Link to="/review">리뷰</Link>
    //         </li>
    //         <li>
    //             <Link to="/qna">문의</Link>
    //         </li>
    //         <li>
    //             <Link to="/withme">동행구하기</Link>
    //         </li>
    //         <li>
    //             <Link to="/sns">담딩 SNS</Link>
    //         </li>
    //         <li>
    //             <Link to="/history">예제</Link>
    //         </li>
    //         <li>
    //             <Link to="/Bootstrap">BootstrapSample</Link>
    //         </li>
    //         <li>
    //             <Link to="/d3">D3Sample</Link>
    //         </li>
    //         <li>
    //             <Link to="/icon">IconMeterialSample</Link>
    //         </li>
    //     </ul>
    // </div>
  );
};

export default Header;
