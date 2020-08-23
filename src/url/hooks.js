import { useState, useEffect } from 'react';
import axios from 'axios';

export const useHttp = (url, dependencies) => {
    // const [isLoading, setIsLoading] = useState(false);
    const [fetchedData, setData] = useState([]);

    useEffect(() => {
        console.log("Sending http request");
        async function incomingData() { await axios.get(url) }
        // .then(res => {
        //     if (!res.ok) {
        //         throw new Error('Failed to fetch.');
        //     }
        //     return res.json();
        // })
        // .then(data => {
        // setIsLoading(false);
        setData(incomingData.data.results);
        // })
        // .catch(err => {
        //     console.log(err);
        //     // setIsLoading(false);
        // })
        // eslint-disable-next-line react-hooks/exhaustive-deps
        console.log(fetchedData);

    }, dependencies);

    return fetchedData;
};

