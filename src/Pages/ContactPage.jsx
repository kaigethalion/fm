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
            infoBody02: '+1(333) 601- 4821',
            infoBody03: '+1(333) 601- 4821',
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
            infoBody02: 'Marina Del Rey<br /> California, USA',
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