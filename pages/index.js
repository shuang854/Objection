import Link from 'next/link';
import Navbar from '../components/Navbar';
import Content from '../components/Content';

const Index = () => (
    <>
        <div>
            <Navbar />
            <Content />
        </div>
        <style jsx global>{`
            html, body, div {
                margin: 0;
                padding: 0;
                height: 100%;
            }
        `}</style>
    </>
)

export default Index;