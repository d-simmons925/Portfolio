import './appnavbar.css'
import { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap'

const AppNavbar = () => {
  const [collapsed, setCollapsed] = useState(false)

  const handleToggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div>
      <Navbar color="dark" dark expand="sm">
        <Container>
          <NavbarToggler onClick={handleToggle} />
          <Collapse isOpen={collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="#main-header">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#skills">Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#projects">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact Me</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default AppNavbar
