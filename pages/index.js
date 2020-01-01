import fetch from 'isomorphic-unfetch';
import Navbar from '../components/Navbar';
import Content from '../components/Content';

const Index = props => (
    <>
        <div>
            <Navbar />
            <Content data={props}/>
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

Index.getInitialProps = async function() {
    const res = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=731ab7e66ae042c38dda50759c5a8053');
    const data = await res.json();
    console.log(data.articles);

    return {
        articles: data.articles.map(entry => entry)
    };
};

export default Index;