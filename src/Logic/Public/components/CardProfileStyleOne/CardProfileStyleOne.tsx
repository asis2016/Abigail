import React, {FC} from "react"
import {Card, Col, Image} from "react-bootstrap";
import {CardProfileStyleOneBase} from "./CardProfileStyleOne.style";
import {faIcon} from "../../Assets/style/style";

interface IProps {
    title: string;
};

export const CardProfileStyleOneContent = [
    {
        id: 1,
        imageUrl: 'author-5.jpg',
        name: 'Jane Doe',
        content: 'Weit über den nebligen Bergen kalt In tiefe Kerker und alte Höhlen. Wir müssen vor Tagesanbruch weg, um unser längst vergessenes Gold zu finden.',
        socialLink: [
            {
                faIcon: faIcon.facebook,
                url: 'http://facebook.com'
            },
            {
                faIcon: faIcon.instagram,
                url: 'http://instagram.com'
            },
            {
                faIcon: faIcon.twitter,
                url: 'http://twitter.com'
            },
            {
                faIcon: faIcon.linkedin,
                url: 'http://linkedin.com'
            },
        ]
    },
    {
        id: 2,
        imageUrl: 'author-9.jpg',
        name: 'John Sammy',
        content: 'Weit über den nebligen Bergen kalt In tiefe Kerker und alte Höhlen. Wir müssen vor Tagesanbruch weg, um unser längst vergessenes Gold zu finden.',
        socialLink: [
            {
                faIcon: faIcon.facebook,
                url: 'http://facebook.com'
            },
            {
                faIcon: faIcon.instagram,
                url: 'http://instagram.com'
            },
            {
                faIcon: faIcon.twitter,
                url: 'http://twitter.com'
            },
            {
                faIcon: faIcon.linkedin,
                url: 'http://linkedin.com'
            },
        ]
    },
    {
        id: 3,
        imageUrl: 'user-1.jpg',
        name: 'Nelly Austin',
        content: 'Weit über den nebligen Bergen kalt In tiefe Kerker und alte Höhlen. Wir müssen vor Tagesanbruch weg, um unser längst vergessenes Gold zu finden.',
        socialLink: [
            {
                faIcon: faIcon.facebook,
                url: 'http://facebook.com'
            },
            {
                faIcon: faIcon.instagram,
                url: 'http://instagram.com'
            },
            {
                faIcon: faIcon.twitter,
                url: 'http://twitter.com'
            },
            {
                faIcon: faIcon.linkedin,
                url: 'http://linkedin.com'
            },
        ]
    },
    {
        id: 4,
        imageUrl: 'author-2.jpg',
        name: 'Natalia Rose',
        content: 'Weit über den nebligen Bergen kalt In tiefe Kerker und alte Höhlen. Wir müssen vor Tagesanbruch weg, um unser längst vergessenes Gold zu finden.',
        socialLink: [
            {
                faIcon: faIcon.facebook,
                url: 'http://facebook.com'
            },
            {
                faIcon: faIcon.instagram,
                url: 'http://instagram.com'
            },
            {
                faIcon: faIcon.twitter,
                url: 'http://twitter.com'
            },
            {
                faIcon: faIcon.linkedin,
                url: 'http://linkedin.com'
            },
        ]
    },
];

export const CardProfileStyleOne: FC<IProps> = (props) => {
    return <CardProfileStyleOneBase>
            <h1>{props.title}</h1>
            <Col className="card-profile-simple-col">
                {CardProfileStyleOneContent.map((item) =>
                    <Card>
                        <Card.Body>
                            <Image src={require(`../../Assets/images/author/` + item.imageUrl)} fluid/>
                            <h3 className="pt-4">{item.name}</h3>
                            <p>
                                {item.content}
                            </p>
                            <p>
                                {item.socialLink.map((i) =>
                                    <a href={i.url}>
                                        <i className={i.faIcon} aria-hidden="true"></i>
                                    </a>
                                )}
                            </p>
                        </Card.Body>
                    </Card>
                )}
            </Col>
    </CardProfileStyleOneBase>
}