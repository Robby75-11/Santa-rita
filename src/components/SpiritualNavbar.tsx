import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

interface SpiritualNavbarProps {
  onToggleMusic: () => void;
  isPlaying: boolean;
}

const SpiritualNavbar: React.FC<SpiritualNavbarProps> = ({ onToggleMusic, isPlaying }) => {
  return (
    <Navbar expand="lg" className="glass-navbar" sticky="top" bg="dark" variant="dark">
      <Container>
        {/* Brand con icona chiesa */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-warning fw-bold fs-4">
          <i className="bi bi-bank me-2 fs-3 text-warning"></i>
          Santa Rita
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Galleria</Nav.Link>
          </Nav>
          <button
            type="button"
            onClick={onToggleMusic}
            style={{
              background: "none",
              border: "none",
              color: "white",
              fontSize: "1.5rem",
              cursor: "pointer"
            }}
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SpiritualNavbar;
