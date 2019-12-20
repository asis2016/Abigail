import React, {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import {BlogItemBase} from "./BlogItem.style";
import {APICollection} from "../../server/config";
import {TestProduct} from "../../model/TestProduct";


interface IProps {
}

interface IState {
    id: string;
    blogItem: any;
}

class BlogItem extends Component<RouteComponentProps<any>, IState> {

    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            blogItem: {}
        }
    };

    componentDidMount(): void {
        axios.get(`${APICollection.apiBlog + '/' + this.state.id}`)
            .then(result => {
                this.setState({blogItem: result.data})
            })

    };

    render() {

        const blogItem = this.state.blogItem;

        return <BlogItemBase>
            <Container>

                <Row>
                    <Col>

                        {/*<div className="blog-item-featured-img">

                        </div>*/}


                        <h1 className="caption mt-4">From the Category</h1>
                        <hr/>
                        <h2>{this.state.blogItem.title}</h2>

                        <div className="excerpt">
                            <p>{blogItem.excerpt}</p>
                        </div>
                        <div className="content">

                        </div>


                    </Col>
                </Row>

            </Container>
        </BlogItemBase>
    }
};

export default withRouter(BlogItem);