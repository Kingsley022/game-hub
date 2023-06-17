import axios from "axios";
import { Platform } from "./useGame";
import { useQuery } from '@tanstack/react-query';


const usePlatform = () => {

    const{data:platforms, error} = useQuery<Platform[]>(['platforms'], async () => {
        const response  =  await axios.get('https://api.rawg.io/api/platforms/lists/parents?key=cb5b4d28d59a4896ba781fff32784a2d')
        return response.data.results
    });

    return {platforms, error};
}
export default usePlatform;