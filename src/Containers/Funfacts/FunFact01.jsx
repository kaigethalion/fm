import React from 'react';
import FunBox01 from '../../Components/FunFactElements/FunBox01';


const FunFact01 = () => {
    const FunData = [
        {
            id: '1',
            img: 'images/funfact/p1.png',
            number: '33',
            name: 'Years of Experience'
        },
        {
            id: '2',
            img: 'images/funfact/p2.png',
            number: '100',
            name: 'Projects Completed'
        },
        {
            id: '3',
            img: 'images/funfact/p3.png',
            number: '300',
            name: 'Expert Builders'
        },
        {
            id: '4',
            img: 'images/funfact/p4.png',
            number: '36',
            name: 'Ongoing Project'
        },
    ];

    return (
        <div id="funfacts" className="funfacts">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="section_header">
                            <h6 className="section_sub_title">FUNFACTS OF Freedom Forest Mangement</h6>
                            <h1 className="section_title">Our Fact Speaks about the result of our Effort</h1>
                        </div>
                        <div className="fun_bottom">
                            <div className="row">
                                {
                                    FunData.map(data =>
                                        <FunBox01
                                            key={data.id}
                                            data={data}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="man_img">
                            <img src="images/funfact01/logo_ffm.png" alt="icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FunFact01;