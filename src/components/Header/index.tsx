
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '@assets/Logo-Bzone-11.jpg'
import "./Header.scss"

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand className="brand" href="#home">
        <img className="logo" src={logo}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="item" href="#home">Trang Chủ</Nav.Link>
          <Nav.Link className="item" href="#link">Tìm Sân</Nav.Link>
          <Nav.Link className="item" href="#link">Khuyến mãi</Nav.Link>
          <Nav.Link className="item" href="#link">Giải đấu</Nav.Link>
          <Nav.Link className="item" href="#link">Liên Hệ</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link className="login" href="#home"><i className="fa-solid fa-user"></i>Đăng Nhập/Đăng Ký</Nav.Link>
        </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
