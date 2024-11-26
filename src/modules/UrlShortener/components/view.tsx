import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUrlByCode } from '../services/UrlShorterService';

function ViewUrlShortener() {

    const [url, setUrl] = useState('');
    const { code } = useParams();

    const init = async () => {
        const data = await getUrlByCode(code);
        setUrl(data.original);
    }

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        if (url !== null && url !== '') {
            window.open(url, '_blank');
            window.history.back();
        }
    }, [url]);


    return (
        <>
            {
                <h2>Waiting for a moment</h2>
            }
        </>
    );
}

export default ViewUrlShortener;