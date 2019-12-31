import Sidebar from './Sidebar';

export default function Content(props) {
    return (
        <>
            <div className="content">
                <Sidebar />
                <div className="article">
                    <h1>Title of News Article</h1>
                    <p>
                        slkdjflksjdflk laskjdf;lkjd oirehgknfvlknx oiwejflkjskdfflkjd lskdjflkjk
                        oiwueroiuwoei ihgjngkjdnfjnd poqwopjlfkdj xnmcnvmcxn dkjfjkjlwke
                        qpowkl;qdsa 09230oeg09jo 0924utgrihjknf 9y23h9ioejklds 0293iojerfkl
                        9p3ioq;la oiewjdkln oewijfdklm09erugiojhjbfkn o23iqk1-eqpwj lskdjfjfkdjfkjdkjfk
                    </p>
                </div>
            </div>
            <style jsx>{`
                .content {
                    display: flex;
                    height: calc(100% - 55px);
                }

                .article {
                    flex: calc(100% - 200px);
                    padding: 10px;
                    max-height: calc(100% - 20px);
                    overflow-y: auto;
                }
            `}</style>
        </>
    )
}