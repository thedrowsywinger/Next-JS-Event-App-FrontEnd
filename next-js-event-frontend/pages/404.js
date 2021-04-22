import Layout from '@/components/Layout'

import {FaExclamationTriangle} from 'react-icons/fa'

import { Card, Button } from 'react-bootstrap'

import Link from 'next/link'




export default function NotFoundPage() {

    return (
        <Layout title='Page Not Found'>
            <Card className="text-center">
                    {/* <Card.Header>Featured</Card.Header> */}
                        <Card.Body>
                            <Card.Title> <FaExclamationTriangle/> Error 404</Card.Title>
                                    <Card.Img variant="top" src="/404.png" />
                                    <Card.Text>
                                        Sorry, this page doesn't seem to exist
                                    </Card.Text>
                                <Button variant="primary" href="./">Go Back Home</Button>
                        </Card.Body>
                </Card>
        </Layout>
    )
}
