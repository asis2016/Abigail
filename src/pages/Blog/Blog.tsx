import React, {Component} from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import axios from 'axios';
import {Col, Container, Row} from "react-bootstrap";
import {APICollection} from "../../server/config";
import {ListGroupMenu} from "../../components/ListGroupMenu/ListGroupMenu";
import {CardBlog} from "../../components/CardBlog/CardBlog";
import {TitleCaptionJumbotron} from "../../components/TitleCaptionJumbotron/JumboTron";

interface IState {
    posts: Array<any>;
    tags: Array<any>;
    authors: Array<any>;
};

class Blog extends Component<RouteComponentProps<any>, IState> {


    constructor(props: RouteComponentProps) {
        super(props);
        this.state = {
            posts: [],
            tags: [],
            authors: []
        }
    };

    componentDidMount(): void {
        axios.get('http://localhost:9003/blog?_page=3&_limit=5')
            .then(result => {
                this.setState({posts: result.data})
            });

        /* Tags */
        axios.get(APICollection.apiTag)
            .then(result => {
                this.setState({tags: result.data})
            });

        /* Authors */
        axios.get(APICollection.apiAuthor)
            .then(result => {
                this.setState({authors: result.data})
            });
    }

    /*
    * Get Blog Tag Name
    * */
    public getBlogTag = (id: string): any => {
        const tags = this.state.tags;
        return <>
            {tags.filter((i: any) => i.id === id).map((i: any) => <>{i.title}</>)}
        </>;
    };

    /*
    * Get Blog Author Name
    * */
    public getBlogAuthor = (id: string): any => {
        const author = this.state.authors;
        return <>
            {author.filter((i: any) => i.id === id).map((i: any) => <>{i.name}</>)}
        </>
    };

    render() {

        const posts = this.state.posts;
        const tags = this.state.tags;
        const authors = this.state.authors;

        console.log(authors)
        return <>

            {/* JumboTron Component */}
            <TitleCaptionJumbotron title={"Blog"}
                       content={"Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS"}
            />

            <Container>
                <Row>

                    <Col md={3}>

                        {/* Tags */}
                        <h3 className={"mt-5 mb-3"}>Popular Tags</h3>
                        <ul className="list-group list-group-flush">
                            {tags.map((i) =>
                                <>
                                    <ListGroupMenu title={i.title} url={'http:goog.gl'} id={i.id}/>
                                </>
                            )}
                        </ul>

                        {/* Authors */}
                        <h3 className={"mt-5 mb-3"}>Our Authors</h3>
                        {authors.map((i) =>
                            <div className="media mb-3" key={i.id}>
                                <img src={require("../../assets/images/author/" + i.imgUrl)}
                                     alt=""
                                     className="mr-3"
                                     style={{width: '64px', height: '64px', objectFit: 'cover'}}/>
                                <div className="media">
                                    <img className="mr-3" src="" alt=""/>
                                    <div className="media-body">
                                        <h6 className="mt-0">{i.name}</h6>
                                        <a href="http://google.gl">Read Article</a>
                                    </div>
                                </div>
                            </div>
                        )}

                    </Col>

                    <Col md={8}>

                        {posts.map((i) =>
                            <div key={i.id}>
                                <CardBlog id={i.id}
                                          featuredImage={i.featuredImage}
                                          title={i.title.substring(0, 40)}
                                          excerpt={i.excerpt.substring(0, 200)}
                                          date={i.date}
                                          tag={this.getBlogTag(i.tag)}
                                          author={this.getBlogAuthor(i.author)}
                                />
                            </div>
                        )}

                        {/* Paging */}
                        <nav aria-label="...">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <span className="page-link">Previous</span>
                                </li>
                                <li className="page-item"><a className="page-link" href="http://google.gl">1</a></li>
                                <li className="page-item active" aria-current="page">
                            <span className="page-link">         2
                            <span className="sr-only">(current)</span>
                            </span>
                                </li>
                                <li className="page-item"><a className="page-link" href="http://google.gl">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="http://google.gl">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Container>

        </>
    }
}

export default withRouter(Blog);