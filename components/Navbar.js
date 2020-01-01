import { withRouter } from 'next/router';

export default function Navbar() {
    return (
        <>
            <nav>
                <div className="logo">
                    <a>Objection</a>
                    <a className="api">Powered by News API</a>
                </div>
                <div className="news">
                    <a>Popular</a>
                    <a>World</a>
                    <a>Tech</a>
                    <a>Sports</a>
                </div>
                <div className="account">
                    <a>Account</a>
                </div>
            </nav>
            <style jsx>{`
                nav {
                    position: relative;
                    z-index: 1;
                    left: 0;
                    box-sizing: border-box;
                    width: 100%;
                    height: 60px;
                    display: flex;
                    font-family: Verdana, sans-serif;
                    font-size: 20px;
                    padding: 14px 16px;
                    box-shadow: 0px 4px 4px 0px #ddd;
                    justify-content: space-between;
                    color: #696969
                }

                nav .news a {
                    padding-right: 40px;
                }

                nav .logo {
                    font-style: oblique;
                    font-size: 24px;
                }

                nav .logo .api {
                    font-size: 10px;
                    color: #cccccc;
                    padding: 5px;
                }

                a:hover {
                    color: #111;
                }
            `}</style>
        </>
    );
}