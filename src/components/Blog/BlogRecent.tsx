import React, {Component} from "react";
import axios from "axios";
import {Container, Row} from "react-bootstrap";
import {BlogRecentBase} from "./BlogRecent.style";
import {APICollection} from "../../server/config";
import {CardBlog} from "../CardBlog/CardBlog";
import {TitleCaptionSection} from "../TitleCaptionSection/SectionTitleCaption";


interface IProps {
}

interface IState {
    blog: Array<any>;
    tags: Array<any>;
    authors: Array<any>;
}

class BlogRecent extends Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = {
            blog: [],
            tags: [],
            authors: []
        }
    };

    componentDidMount(): void {
        axios.get(APICollection.apiBlog)
            .then(result => {
                this.setState({blog: result.data})
            })

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
    };

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

        const blogTopThree = this.state.blog;
        const tags = this.state.tags;
        const authors = this.state.authors;

        return <BlogRecentBase>
            <Container>

                <TitleCaptionSection title={"From the Blog"}
                                     caption={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."}/>

                <Row>
                    {blogTopThree.filter((i: any) => i.author === '1').map((i) =>
                        <div className="col-md-6" key={i.id}>
                            <CardBlog id={i.id}
                                      featuredImage={i.featuredImage}
                                      title={i.title.substring(0, 30)}
                                      excerpt={i.excerpt.substring(0, 200)}
                                      date={i.date}
                                      tag={this.getBlogTag(i.tag)}
                                      author={this.getBlogAuthor(i.author)}
                            />
                        </div>
                    )}

                </Row>
            </Container>
        </BlogRecentBase>
    }
};

export default BlogRecent;