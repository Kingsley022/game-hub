import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { Platform } from "./useGame";

const usePlatform = () => {

    const[platforms, setPlatforms] = useState<Platform[]>([]);
    const[error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        axios.get('https://api.rawg.io/api/platforms/lists/parents?key=cb5b4d28d59a4896ba781fff32784a2d')
        .then(res => {
            setPlatforms(res.data.results);
        })
        .catch(err => {
            if(err instanceof CanceledError) return;
            setError(err.message)
        });
        return () => controller.abort();
    }, []);

    return {platforms, error};
}
export default usePlatform;