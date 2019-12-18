import {Link} from "react-router-dom";
import React, {FC} from "react";
import {faIcon} from "../../assets/style/style";


interface IProps {
    id: string;
    featuredImage: string;
    title: string;
    excerpt: string;
    date: string;
    author?: string;
    tag?: string;
}

export const CardBlog: FC<IProps> = (props) => {

    return <div className="card flex-md-row mb-4 box-shadow h-md-150">
        <div className="card-body d-flex flex-column align-items-start">
            <span className="badge badge-primary">{props.tag}</span>
            <h3 className="mt-3">{props.title.substring(0, 40)}</h3>
            <div className="mt-1 text-muted">
                <i className={faIcon.calendar}></i> {props.date}
                <span className="mr-3"></span>
                <i className={faIcon.author}></i> {props.author}
            </div>
            <p className="mt-2">{props.excerpt.substring(0, 200)}...</p>
            <Link to={`/blog-item/` + props.id} className="btn btn-sm btn-primary">
                <i className={faIcon.readme}></i> View article
            </Link>
        </div>
        <img className="card-img-right flex-auto d-none d-md-block"
             alt=""
             src={require("../../assets/images/blog/" + props.featuredImage)}
             style={{width: '200px', objectFit: 'cover'}}
        />
    </div>
};