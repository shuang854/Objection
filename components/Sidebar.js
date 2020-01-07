import Link from 'next/link';

const Sidebar = function (props) {
    const data = props.data;
    return (
        <>
            <ul>
                {data.map(article => (
                    <li>
                        <div className="voting">
                            <p className="up_arrow"></p>
                            <p className="votes">112</p>
                            <p className="down_arrow"></p>
                        </div>
                        <div>
                            <a onClick={() => (props.handleClick(article.content, article.title))}>
                                {article.title.substring(0, article.title.indexOf(' - '))}
                            </a>
                            <p>{article.source.name}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <style jsx>{`
                ul {
                    position: relative;
                    margin-block-start: 0;
                    margin-block-end: 0;
                    list-style-type: none;
                    width: 300px;
                    height: 100%;
                    padding: 0px;
                    background-color: #e4e4e4;
                    overflow-y: auto;
                }

                li a {
                    display: block;
                    padding: 8px 5px 5px 12px;
                    color: #000;
                    cursor: pointer;
                }

                li p {
                    margin-block-start: 0;
                    margin-block-end: 0;
                    display: inline-block;
                    padding: 5px;
                }

                li .up_arrow {
                    width: 0;
                    border: solid black;
                    border-width: 0 3px 3px 0;
                    transform: rotate(-135deg);
                }

                li .down_arrow {
                    width: 0;
                    border: solid black;
                    border-width: 0 3px 3px 0;
                    transform: rotate(45deg);
                }

                li .votes {
                    border-width: 0 0 0 0;
                }

                li .voting {
                    display: flex;
                    flex-direction: column;
                    text-align: center;
                    align-items: center;
                    padding-right: 5px;
                    padding-top: 10px;
                    padding-bottom: 10px;
                }

                li {
                    padding: 5px;
                    border-bottom-style: solid;
                    border-width: 1px;
                    border-color: #696969;
                    display: flex;
                    align-items: center;
                }
            `}</style>
        </>
    );
};

export default Sidebar;