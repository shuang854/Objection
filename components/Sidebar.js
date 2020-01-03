import Link from 'next/link';

const Sidebar = function (props) {
    const data = props.data;
    return (
        <>
            <ul>
                {data.map(article => (
                    <li>
                        <a onClick={() => (props.handleClick(article.content, article.title))}>
                            {article.title.substring(0, article.title.indexOf(' - '))}
                        </a>
                        {article.source.name}
                    </li>
                ))}
            </ul>
            <style jsx>{`
                ul {
                    position: relative;
                    margin-block-start: 0;
                    margin-block-end: 0;
                    list-style-type: none;
                    width: 250px;
                    height: 100%;
                    padding: 0px;
                    background-color: #e4e4e4;
                    overflow-y: auto;
                }

                li a {
                    display: block;
                    padding: 8px 8px;
                    color: #000;
                    cursor: pointer;
                }

                li {
                    padding: 10px;
                    border-bottom-style: solid;
                    border-width: 1px;
                    border-color: #696969;
                }
            `}</style>
        </>
    );
};

export default Sidebar;