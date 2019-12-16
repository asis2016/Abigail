import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {Container, Row} from "react-bootstrap";
import {BlogRecentBase} from "./BlogRecent.style";
import {APICollection} from "../../server/config";
import {SectionTitleCaption} from "../SectionTitleCaption/SectionTitleCaption";
import {CardBlog} from "../CardBlog/CardBlog";


interface IProps {
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

                <SectionTitleCaption title={"From the Blog"}
                                     caption={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."}/>

                <Row>
                    {blogTopThree.filter((i: any) => i.author === '1').map((i) =>
                        <div className="col-md-6" key={i.id}>
                            <CardBlog id={i.id}
                                      featuredImage={i.featuredImage}
                                      title={i.title}
                                      excerpt={i.excerpt}
                                      date={i.date}
                                      author={i.author}/>
                        </div>
                    )}

                </Row>
            </Container>
        </BlogRecentBase>
    }
};

export default BlogRecent;