import React, {FC} from 'react';
import {FooterMenuStyleTwoBase} from "./FooterMenuStyleTwo.style";

const FooterMenuStyleOneContent = [
    {
        id: 0,
        title: 'Mauris nec',
        content: [
            {
                menuIitle: 'Nulla ac',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Phasellus placerat',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Ass non odio ',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Vivamus vel',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Donec maximus vel',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Vivamus vel',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Etiam laoreet',
                menuUrl: 'http://google.com'
            },

        ]
    },
    {
        id: 1,
        title: 'Sed sit amet',
        content: [
            {
                menuIitle: 'Nulla ac',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Donec maximus vel',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Vivamus vel',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Etiam laoreet',
                menuUrl: 'http://google.com'
            },
        ]
    },
    {
        id: 2,
        title: 'Nam lacinia',
        content: [
            {
                menuIitle: 'Nulla ac',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Phasellus placerat',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Ass non odio ',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Vivamus vel',
                menuUrl: 'http://google.com'
            },
        ]
    },
    {
        id: 3,
        title: 'Etiam eget ante',
        content: [
            {
                menuIitle: 'In dapibus arcu',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Phasellus placerat',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Ass non odio ',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Vivamus vel',
                menuUrl: 'http://google.com'
            },
        ]
    },
    {
        id: 5,
        title: 'Sed sollicitudin massa',
        content: [
            {
                menuIitle: 'Nulla ac',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Phasellus placerat',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Ass non odio ',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Vivamus vel',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Donec maximus vel',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Vivamus vel',
                menuUrl: 'http://google.com'
            },
            {
                menuIitle: 'Etiam laoreet',
                menuUrl: 'http://google.com'
            },

        ]
    },
];


interface IProps {
    id?: number;
}

export const FooterMenuStyleTwo: FC<IProps> = (props) => {
    return <FooterMenuStyleTwoBase>
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 pt-2 col-one">
                    <a href="http://googl.gl">
                        {/*<img className="logo"
                             src={require("../../assets/images/logo.png")}
                        />*/}
                    </a>
                    <p className="pt-3">
                        Nunc varius, justo in bibendum bibendum, sem metus malesuada libero, nec dictum metus magna
                        ac elit. Integer feugiat risus eget ante congue, vel tempor libero faucibus. Donec sit amet
                        enim urna.
                    </p>
                    <p className="copyright pt-3">
                        Copyright (c) Your Company 2019.
                    </p>
                </div>
                <div className="col-4 p-2">
                    <h5>Contacts</h5>
                    <ul>
                        <li>155 Lorem Ipsum Street, Germany</li>
                        <li>mhrj.asis@gmail.com</li>
                        <li>www.asm.com.np</li>
                    </ul>

                    <h5 className="pt-5">Lorem ipsum feugiat</h5>
                    <ul>
                        <li>
                            <a href="http://google.gl">Faucibus mattis felis</a>
                        </li>
                        <li>
                            <a href="http://google.gl">Enim urna massa</a>
                        </li>
                        <li>
                            <a href="http://google.gl">Integer feugiat Aliquam</a>
                        </li>
                        <li>
                            <a href="http://google.gl">In bibendum ultrices</a>
                        </li>
                        <li>
                            <a href="http://google.gl">Nunc luctus lectus</a>
                        </li>
                    </ul>
                </div>
                <div className="col-4">
                    <h5>Bibendum</h5>
                    <ul>
                        <li><a href="http://google.gl">Metus Faucibus Interdum</a></li>
                        <li><a href="http://google.gl">Vel tempor scelerisque</a></li>
                        <li><a href="http://google.gl">Libero Faucibus cursus</a></li>
                        <li><a href="http://google.gl">Varius justo risus</a></li>
                    </ul>

                    <h5 className="pt-5">Lorem ipsum</h5>
                    <ul>
                        <li>
                            <a href="http://google.gl">Faucibus sodales</a>
                        </li>
                        <li>
                            <a href="http://google.gl">Enim urna vitae</a>
                        </li>
                        <li>
                            <a href="http://google.gl">Integer feugiat quis</a>
                        </li>
                        <li>
                            <a href="http://google.gl">In bibendum pretium</a>
                        </li>
                        <li>
                            <a href="http://google.gl">Nunc varius, justo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="row no-gutters social">
            <div className="col">
                <a className="social-inner" href="http://google.gl">
                    <i className="fa fa-twitter"></i> Twitter
                </a>
            </div>
            <div className="col">
                <a className="social-inner" href="http://google.gl">
                    <i className="fa fa-facebook"></i> Facebook
                </a>
            </div>
            <div className="col">
                <a className="social-inner" href="http://google.gl">
                    <i className="fa fa-instagram"></i> Instagram
                </a>
            </div>
            <div className="col">
                <a className="social-inner" href="http://google.gl">
                    <i className="fa fa-youtube"></i> Youtube
                </a>
            </div>
        </div>
    </FooterMenuStyleTwoBase>
};