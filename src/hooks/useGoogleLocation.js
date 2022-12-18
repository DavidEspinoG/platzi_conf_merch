import { useState } from "react";

function useGoogleLocation(){
    const [location, setLocation] = useState({lat: 0, lng: 0})

    async function getLocation(address) {
        const apiKey = 'AIzaSyAJ-Wg-PBcqZlSQ4aYZ01O0BZw77BxjgIk'
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`
        const res = await fetch(url)
        const data = await res.json()
        setLocation(data.results[0].geometry.location)
    }
    
    return { location, getLocation}
}

export { useGoogleLocation }