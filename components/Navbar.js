import Account from './Account';

export default function Navbar(props) {
    return (
        <>
            <nav>
                <div className="logo">
                    <a>Objection</a>
                    <a className="api">Powered by News API</a>
                </div>
                <div className="news">
                    <a onClick={() => (props.navClick('popular'))}>Popular</a>
                    <a onClick={() => (props.navClick('business'))}>Business</a>
                    <a onClick={() => (props.navClick('technology'))}>Tech</a>
                    <a onClick={() => (props.navClick('sports'))}>Sports</a>
                </div>
                <div className="acc">
                    <a onClick={props.menuClick}>{props.user}</a>
                </div>
            </nav>
            {props.closeMenu ? null : <Account signedIn={props.signedIn} logOut={props.logOut} />}
            <style jsx>{`
                nav {
                    position: relative;
                    left: 0;
                    z-index: 2;
                    box-sizing: border-box;
                    width: 100%;
                    height: 60px;
                    display: flex;
                    font-family: Verdana, sans-serif;
                    font-size: 20px;
                    padding: 14px 16px;
                    box-shadow: 0px 4px 4px 0px #ddd;
                    justify-content: space-between;
                    line-height: 30px;
                    color: #696969
                }

                nav .news a {
                    padding-right: 40px;
                    cursor: pointer;
                }

                nav .acc a {
                    cursor: pointer;
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
};