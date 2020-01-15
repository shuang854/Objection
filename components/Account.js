import Link from 'next/link';

export default function Account(props) {
    return (
        <>
            <div id="dropdown">
                <ul>
                    {!props.signedIn && <li><Link href="/login"><a>Sign In</a></Link></li>}
                    {!props.signedIn && <li><Link href="/signup"><a>Create Account</a></Link></li>}
                    {props.signedIn && <li><Link href=""><a onClick={props.logOut}>Logout</a></Link></li>}
                    <li><a>Settings</a></li>
                </ul>
            </div>
            <style jsx>{`
                div {
                    position: absolute;
                    font-family: Verdana, sans-serif;
                    font-size: 18px;
                    background: #e4e4e4;
                    right: 0;
                    width: 150px;
                    height: 100px;
                    z-index: 1;
                    display: inline-block;
                }

                ul {
                    list-style-type: none;
                    padding-inline-start: 0;
                    margin-block-start: 0;
                    margin-block-end: 0;
                }

                li {
                    border-bottom-style: solid;
                    padding: 5px;
                }

                a {
                    color: black;
                    text-decoration: none;
                }
            `}</style>
        </>
    );
};