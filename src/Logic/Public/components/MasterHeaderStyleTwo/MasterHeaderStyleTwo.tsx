import React, {FC} from 'react'
import {Carousel} from "react-bootstrap";
import {MasterHeaderStyleTwoBase} from "./MasterHeaderStyleTwo.style";

interface IProps {
    title?: string;
}

export const MasterHeaderStyleTwoCarouselContent = [
    {
        id: 1,
        caption: 'Quo voluptas nulla pariatur dolore magnam aliquam quaerat? Weit über den nebligen Bergen kalt In tiefe Kerker und alte Höhlen. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
        title: 'Inventore veritatis pariatur',
        img: 'mh-3.jpg'
    },
    {
        id: 2,
        caption: 'Quis autem vel eum iure eos qui ratione voluptatem. Etiam sodales magna vitae tellus facilisis. magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam',
        title: 'Consequuntur magni iure',
        img: 'mh-2.jpg'
    },
    {
        id: 3,
        caption: 'Quis autem vel eum iure eos qui ratione voluptatem. Vestibulum ac orci odio. Quisque in nunc lobortis, faucibus velit eu, iaculis eros. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur',
        title: 'Consequuntur magni iure orci odio',
        img: 'mh-1.jpg'
    },
];

export const MasterHeaderStyleTwo: FC<IProps> = (props) => {
    return <MasterHeaderStyleTwoBase>
        <Carousel>
            {MasterHeaderStyleTwoCarouselContent.map((item) =>
                <div key={item.id}
                     className="carousel-item"
                     style={{backgroundImage: "url(" + require("../../Assets/images/" + item.img) + ")"}}>
                    <div className="overlay"></div>
                    <div className="container carousel-item-content">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <h1>{item.title}</h1>
                                <p>{item.caption}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Carousel>
    </MasterHeaderStyleTwoBase>
};