import { useContext } from 'react';
import { BlitterContext } from '../Context/BlitterContext';
import Bleet from './Bleet';
import BleetContainer from './BleetContainer';

const Feed = (props) => {

    const bleets = [
        {
            id: 1,
            address: "0x9198dwidaisdm1983dnsand7831",
            content: "This is the content of the bleet",
            username: "MrMegsh",
            createdAt: "2 hours ago"
        },
        {
            id: 2,
            address: "0x9198dwidaisdm1983dnsand7831",
            content: "This is the content of the bleet",
            username: "MrMegsh",
            createdAt: "2 hours ago"
        },
        {
            id: 3,
            address: "0x9198dwidaisdm1983dnsand7831",
            content: "This is the content of the bleet",
            username: "MrMegsh",
            createdAt: "2 hours ago"
        }
    ]

    const elements = null;

    const { postBleet } = useContext(BlitterContext);

    return (
        <div>
        {
            bleets.map(bleet => (
                <BleetContainer onClicK={() => postBleet("lol")} key={bleet.id}>
                    <Bleet bleet={bleet} />
                </BleetContainer>
            ))
        }
        </div>
    );
}

export default Feed;