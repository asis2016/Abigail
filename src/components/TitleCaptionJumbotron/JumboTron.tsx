import React, {FC} from "react";


interface IProps {
    title: string;
    content?: string;
    actionButton1?: Array<IActionButton1>;
    actionButton2?: Array<any>;
}

interface IActionButton1 {
    url: string;
    title: string;
}

export const TitleCaptionJumbotron: FC<IProps> = (props) => {
    return <section className="jumbotron text-center" style={{paddingTop: '100px', paddingBottom: '100px'}}>
        <div className="container" style={{maxWidth: '40rem'}}>
            <h1 className="jumbotron-heading">
                {props.title}
            </h1>
            <p className="caption">
                {props.content}
            </p>
        </div>
    </section>
};