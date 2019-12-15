import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {MasterHeaderStyleTwo} from "../../components/MasterHeaderStyleTwo/MasterHeaderStyleTwo";
import PopularProductStyleOne from "../../components/PopularProductStyleOne/PopularProductStyleOne";


export const Home = () => {
    return <Container fluid style={{paddingRight: '0px', paddingLeft: '0px'}}>

        {/* Header Component */}
        <MasterHeaderStyleTwo/>

        {/*PopularProductStyleOne Component*/}
        <PopularProductStyleOne title={"Popular Products "}
                                caption={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis."}
                                selectProductCategoryId={"6"}
        />

    </Container>;
}

export default Home;