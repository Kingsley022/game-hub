import { FaWindows, FaPlaystation, FaXbox , FaApple, FaLinux, FaAndroid} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
// Above are just icons
import { IconType } from "react-icons/lib/esm/iconBase";


import { Platform } from "../hooks/useGame";
import { HStack, Icon } from "@chakra-ui/react";


interface Props{
    platforms: Platform[]
}

const PlatFormIconList = ({platforms} : Props) => {
    const iconMap:{ [key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        android: FaAndroid,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    return (
        <HStack marginY={1}>
            {platforms.map((platform) => 
                <Icon as={iconMap[platform.slug]} color='gray.500'/>
            )}
        </HStack>
    );
}
 
export default PlatFormIconList;