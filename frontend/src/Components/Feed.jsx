import Bleet from './Bleet';
import BleetContainer from './BleetContainer';

const Feed = (props) => {

    const bleets = [
        {
            address: "0x9198dwidaisdm1983dnsand7831",
            content: "This is the content of the bleet",
            username: "MrMegsh",
            createdAt: "2 hours ago"
        },
        {
            address: "0x9198dwidaisdm1983dnsand7831",
            content: "This is the content of the bleet",
            username: "MrMegsh",
            createdAt: "2 hours ago"
        },
        {
            address: "0x9198dwidaisdm1983dnsand7831",
            content: "This is the content of the bleet",
            username: "MrMegsh",
            createdAt: "2 hours ago"
        }
    ]

    const elements = null;

    return (
        <div>
        {
            bleets.map(bleet => <BleetContainer><Bleet bleet={bleet} /></BleetContainer>)
        }
        </div>
    );
}

export default Feed;