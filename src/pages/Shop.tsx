import React, {Component} from "react";
import {Card, Col, Container, Row, Button, ListGroup, ListGroupItem} from "react-bootstrap";
import {APICollection} from "../assets/content";

interface IProps {

}

interface IState {
    productList?:Array<any>;
    productCategoryList?:Array<any>;
    productCategoryID?:string;
}

const product = [1,2,3,4,5,6,7,8,9,10];

class Shop extends Component<IProps, IState>{

    constructor(props: IProps){
        super(props);
        this.state={
            productList:[],
            productCategoryList:[],
            productCategoryID:'2'
        }
    };

    componentDidMount() {
        fetch(APICollection.localShop)
            .then(res => res.json())
            .then(result=>{
                this.setState({productList:result})
            });

        /* Fetch category */
        fetch(APICollection.shopCategory)
            .then(res=>res.json())
            .then(result=>{this.setState({productCategoryList:result})})
    };

    changeCategory = (catId:string):void =>{
        this.setState({productCategoryID: catId});
    };


    render(){
        console.log(this.state.productCategoryID);
        const pList:any = this.state.productList;
        const pCList:any = this.state.productCategoryList;
        return <Container fluid className={"pt-2"}>
            <Row>
                <Col md={2}>

                    <ListGroup variant="flush">
                        {pCList.map((i: any)=>
                            <ListGroup.Item>
                                <input  type="button"
                                        value={i.id}
                                        onClick={()=>this.changeCategory(i.id)}
                                />
                            </ListGroup.Item>
                        )}

                    </ListGroup>

                </Col>

                <Col md={10}>

                    <Row>
                        {pList.filter((i:any)=>i.category === this.state.productCategoryID)
                            .map((i:any)=>
                                <Col md={3}>
                                    <Card className="m-2">
                                        <Card.Img variant="top" src={require('../assets/images/'+i.imgUrl)} />
                                        <Card.Body>
                                            <Card.Title>{i.name}</Card.Title>
                                            <Card.Text>
                                                $ {i.price}
                                            </Card.Text>
                                            <Button variant="primary">Add to Cart</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )}

                    </Row>

                </Col>

            </Row>
        </Container>
    }
};

export default Shop;