import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Brand</Navbar.Brand>
                <Nav className="mr-auto">
                {/* <Nav.Link href="/">Home</Nav.Link> */}
                <Nav.Link href="/about">About Us</Nav.Link>
                {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </header >
    )
}
