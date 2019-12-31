export default function Sidebar() {
    return (
        <>
            <ul>
                <li><a>Title of News Article</a>CNN</li>
                <li><a>Title of News Article</a>TechCrunch</li>
                <li><a>Title of News Article</a>Medium</li>
                <li><a>Title of News Article</a>BBC</li>
                <li><a>Title of News Article Title of News Article Title</a>Business Insider</li>
                <li><a>Title of News Article</a>Reuters</li>
            </ul>
            <style jsx>{`
                ul {
                    position: relative;
                    margin-block-start: 0;
                    margin-block-end: 0;
                    list-style-type: none;
                    width: 200px;
                    height: 100%;
                    padding: 0px;
                    background-color: #e4e4e4;
                    overflow-y: auto;
                }

                li a {
                    display: block;
                    padding: 8px 8px;
                    color: #000;
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
}