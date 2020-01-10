import fetch from 'isomorphic-unfetch';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import firebase from 'firebase/app';
import clientCredentials from '../credentials/client';
import { useState } from 'react';

const Index = function(props) {
    const [topic, setTopic] = useState(props.popular);
    const [closeMenu, setMenu] = useState(true);

    if (!firebase.apps.length)
        firebase.initializeApp(clientCredentials);

    function handleNavClick(topic) {
        if (topic === 'technology') setTopic(props.technology);
        else if (topic === 'business') setTopic(props.business);
        else if (topic === 'sports') setTopic(props.sports);
        else if (topic === 'popular') setTopic(props.popular);
    }

    function handleClick() {
        if (!closeMenu) setMenu(true);
    }

    function menuClick() {
        setMenu(!closeMenu);
    }

    return (
        <>
            <div onClick={handleClick}>
                <Navbar navClick={handleNavClick} menuClick={menuClick} closeMenu={closeMenu} />
                <Content data={topic} />
            </div>
            <style jsx global>{`
            html, body, div {
                margin: 0;
                padding: 0;
                height: 100%;
            }
        `}</style>
        </>
    );
};

Index.getInitialProps = async function () {
    const res1 = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=731ab7e66ae042c38dda50759c5a8053');
    const res2 = await fetch('https://newsapi.org/v2/top-headlines?category=technology&country=us&apiKey=731ab7e66ae042c38dda50759c5a8053');
    const res3 = await fetch('https://newsapi.org/v2/top-headlines?category=business&country=us&apiKey=731ab7e66ae042c38dda50759c5a8053');
    const res4 = await fetch('https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=731ab7e66ae042c38dda50759c5a8053');

    const pop = await res1.json();
    const tech = await res2.json();
    const biz = await res3.json();
    const sports = await res4.json();

    return {
        popular: pop.articles.map(entry => entry),
        technology: tech.articles.map(entry => entry),
        business: biz.articles.map(entry => entry),
        sports: sports.articles.map(entry => entry)
    };
};

export default Index;