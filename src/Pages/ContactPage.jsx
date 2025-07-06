import React from 'react';
import PageHeader from '../Components/common/PageHeader';
import CommunicationCard from '../Components/ContactElements/CommunicationCard';
import Map from '../Components/ContactElements/Map';
import Banner from '../Containers/Banner';

const ContactPage = () => {
    const ContactData = [
        {
            id: '1',
            iconClass: 'ion-ios-telephone-outline',
            infoBody01: 'Phone No',
            infoBody02: '+33 987 654 321',
            infoBody03: '+33 123 456 789',
        },
        {
            id: '2',
            iconClass: 'fa fa-envelope-o',
            infoBody01: 'Email Address',
            infoBody02: 'freedomforestmangement@gmail.com',
            infoBody03: 'care@freedomforestmangement.com',
        },
        {
            id: '3',
            iconClass: 'fa fa-map-marker',
            infoBody01: 'Office Address',
            infoBody02: 'Gr. Benjamin Street 609<br /> Florida, USA',
            infoBodyClass: 'd-none',
        },
    ];

    return (
        <>
            <PageHeader activeClass01='active' activeClass02='d-none' routeName01='Contact Us' heading='Contact Us' />

             
               
            
        </>
    );
};

export default ContactPage;