import {useState, useEffect} from 'react';

export default () => {
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
        (position) => setLat(position.coords.latitude), //callback #1 (success callback)
        (err) => setErrorMessage(err.message)
        );
    }, []);

    return [lat, errorMessage];
};