import React, {Component} from "react";
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import {BlogRecentBase} from "./BlogRecent.style";
import {APICollection} from "../../server/config";


interface IProps {
    title: string;
    caption: string;
}

interface IState {
    blog: Array<any>;
}

class BlogRecent extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            blog: []
        }
    };

    componentDidMount(): void {
        axios.get(APICollection.apiBlog)
            .then(result => {
                this.setState({blog: result.data})
            })
    };

    render() {

        const blogTopThree = this.state.blog;

        return <BlogRecentBase>
            <Container>
                <Row className="pb-5">
                    <Col md={{span: 6, offset: 3}} className="text-center">
                        <h1>{this.props.title}</h1>
                        <p className="pt-3 pb-3 caption">{this.props.caption}</p>
                    </Col>
                </Row>

                <Row>
                    {blogTopThree.filter((i:any)=> i.Author === '1').map((i) =>
                        <div className="col-md-4" key={i.id}>
                            <div className="card mb-4 box-shadow">
                                <img className="card-img-top img-fluid"
                                     src={require("../../assets/images/blog/" + i.Featured_Image)}
                                     style={{height: '200px', objectFit: 'cover'}}
                                />
                                <div className="card-body">
                                    <h6 className="card-title">{i.Title.substring(0, 35)}</h6>
                                    <p className="card-text">{i.Excerpt.substring(0,200)}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">View
                                            </button>
                                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit
                                            </button>
                                        </div>
                                        <small className="text-muted">{i.Date}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                </Row>
            </Container>
        </BlogRecentBase>
    }
};

export default BlogRecent;