import React, {FC, useEffect, useState} from "react";
import {AdminHeader} from "../../components/header/header";
import {Card, Container, Row} from "react-bootstrap";
import {AdminNavigation} from "../../components/nav/nav";
import {AdminSectionTitle} from "../../components/sectionTitle/AdminSectionTitle";
import {APICollection} from "../../config";
import {TableStrip} from "../../components/TableStrip";

export const AdminTag: FC = (props) => {

    const [tags, setTags] = useState([]);

    useEffect(() => {
        fetch(APICollection.apiTag)
            .then(res => res.json())
            .then(response => setTags(response))
    }, [])

    console.log(tags.length)


    return <>
        <AdminHeader/>
        <Container fluid>
            <Row>
                {/* Navigation */}
                <AdminNavigation/>

                {/* Main Content */}
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                    <AdminSectionTitle title={'Product Tags'} share={false}/>

                    {/* Tag List */}
                    <Card>
                        <Card.Header>
                            <h3>Tag Lists</h3>
                        </Card.Header>
                        <Card.Body>
                            {tags.length === 0 ? 'Not record found.' :
                                <TableStrip
                                    thead={['#', 'id', 'Title']}
                                    tbodys={tags.map((item) =>
                                        <tr>
                                            <td></td>
                                            <td>{item['id']}</td>
                                            <td>{item['title']}</td>
                                        </tr>
                                    )}
                                />
                            }
                        </Card.Body>
                    </Card>


                </main>
            </Row>
        </Container>
    </>
};