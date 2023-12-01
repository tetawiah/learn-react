import {useEffect, useState} from "react";

export function useGeolocation() {
    const [position,setPosition] = useState({});
    const [error,setError] = useState("");
    const[isLoading,setIsLoading] = useState(false);

    useEffect(() => {
        if (!navigator.geolocation)
            return setError("Your browser does not support geolocation");

        setError("");
        setIsLoading(true);
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                });
    },
            (e) => {console.log(error)
            setError(e.message)});
        setIsLoading(false);
},[])

return [position,setPosition,isLoading,error];

}