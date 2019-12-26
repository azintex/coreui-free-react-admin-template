import { useState, useEffect } from 'react';

const [fetchedData, fetchData] = useState([])

const useFetch = () => {
    useEffect(() => {
        fetchData(fetchedData);
    }, [])
}

export default useFetch()