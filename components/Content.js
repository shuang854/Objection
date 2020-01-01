import Sidebar from './Sidebar';
import { useState } from 'react';

export default function Content(props) {
    const [title, setTitle] = useState(props.data.articles[0].title)
    const [content, setContent] = useState(props.data.articles[0].content);
    function handleClick(text, head) {
        setTitle(head);
        setContent(text);
    }

    return (
        <>
            <div className="content">
                <Sidebar data={props.data} handleClick={handleClick}/>
                <div className="article">
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
            </div>
            <style jsx>{`
                .content {
                    display: flex;
                    height: calc(100% - 60px);
                }

                .article {
                    flex: calc(100% - 250px);
                    padding: 10px;
                    max-height: calc(100% - 20px);
                    overflow-y: auto;
                }
            `}</style>
        </>
    )
}