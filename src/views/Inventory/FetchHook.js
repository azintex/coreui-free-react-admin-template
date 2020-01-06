import { useState, useEffect } from 'react';
import { url, version } from '../../_api.json';

const useFetch = (props) => {

    const APIURL = `${url}/${version}/props.fetched.item/props.fetched.item.type`;

    const [data, fetchData] = useState([])

    useEffect(() => {
        try async {
            const response = await fetch(APIURL)
            return response.json();
        } catch (error) {
            alert(error)
        }
    })
}

export default useFetch();