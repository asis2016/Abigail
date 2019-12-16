import React, {Component} from "react";
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import {BlogItemBase} from "./BlogItem.style";


interface IProps {
}

interface IState {
    blogItem: any;
}

class BlogItem extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            blogItem: {}
        }
    };

    componentDidMount(): void {
        axios.get('http://localhost:9003/blog/1')
            .then(result => {
                this.setState({blogItem: result.data})
            })

    };

    render() {

        console.log(this.state.blogItem)

        return <BlogItemBase>
            <Container>

                <Row>
                    <Col>

                                <div className="blog-item-featured-img"
                                     style={{backgroundImage: 'url("https://via.placeholder.com/900x400")'}}></div>

                                <h1 className="caption mt-4">From the Category</h1>
                                <hr/>
                                <h1>{this.state.blogItem.Title}</h1>

                                <div className="excerpt">

                                </div>
                                <div className="content">

                                </div>


                    </Col>
                </Row>

            </Container>
        </BlogItemBase>
    }
};

export default BlogItem;