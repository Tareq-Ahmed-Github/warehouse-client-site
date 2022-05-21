import React from 'react';
import { Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='mx-1'>
            <div className='m-2 p-2 border bg-dark text-white'>
                <h1 className='text-warning'>Javascript Vs. Nodejs</h1>

                <Table striped bordered hover>
                    <thead className='bg-warning border-dark'>
                        <tr>
                            <th>#</th>
                            <th>Javascript</th>
                            <th>Node js</th>

                        </tr>
                    </thead>
                    <tbody className='border-dark'>
                        <tr>
                            <td className='text-white'>1</td>
                            <td className='text-white'>Javascript is a programming language that is used for writing scripts on the website.</td>
                            <td className='text-white'>NodeJS is a Javascript runtime environment.</td>

                        </tr>
                        <tr>
                            <td className='text-white'>2</td>
                            <td className='text-white'>Javascript can only be run in the browsers.</td>
                            <td className='text-white'>We can run Javascript outside the browser with the help of NodeJS.</td>

                        </tr>
                        <tr>
                            <td className='text-white'>3</td>
                            <td className='text-white'>It is basically used on the client-side.</td>
                            <td className='text-white'>It is mostly used on the server-side.</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='m-2 p-2 border bg-dark text-white'>
                <h1 className='text-warning'>When should you use nodejs and when should you use mongodb?</h1>
                <h4 className='text-warning'>When should we use Nodejs?</h4>
                <p>Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...

                    So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.</p>
                <br />
                <h4 className='text-warning'>When should we use MongoDB?</h4>
                <p>
                    If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing
                </p>
            </div>
            <div className='m-2 p-2 border bg-dark text-white'>
                <h1 className='text-warning'>SQL Vs. NoSQL databases</h1>
                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
        </div>
    );
};

export default Blogs;