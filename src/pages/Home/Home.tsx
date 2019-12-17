import React from "react";
import {Container} from "react-bootstrap";
import {MasterHeaderStyleTwo} from "../../components/MasterHeaderStyleTwo/MasterHeaderStyleTwo";
import PopularProductStyleOne from "../../components/PopularProductStyleOne/PopularProductStyleOne";
import BlogRecent from "../../components/Blog/BlogRecent";
import {ProductTile} from "../../components/ProductTile/ProductTile";
import {FeatureStyleFour} from "../../components/FeatureStyleFour/FeatureStyleFourBase";
import {ProductInspiration} from "../../components/ProductInspiration/ProductInspiration";


export const Home = () => {
    return <Container fluid style={{paddingRight: '0px', paddingLeft: '0px'}}>

        {/* Header Component */}
        <MasterHeaderStyleTwo/>


        {/*PopularProductStyleOne Component*/}
        <PopularProductStyleOne selectProductCategoryId={"6"}/>


        <FeatureStyleFour title={'a'} caption={'a'}/>

        {/* Product Tile */}
        <ProductTile/>

        <ProductInspiration/>
        {/* From the Blog */}
        <BlogRecent/>

    </Container>
}

export default Home;