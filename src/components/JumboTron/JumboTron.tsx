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

export const JumboTron: FC<IProps> = (props) => {
    return <section className="jumbotron text-center" style={{marginTop:'50px'}}>
        <div className="container" style={{maxWidth: '40rem'}}>
            <h1 className="jumbotron-heading">
                {props.title}
            </h1>
            <p className="lead text-muted">
                {props.content}
            </p>
        </div>
    </section>
};

export default JumboTron;