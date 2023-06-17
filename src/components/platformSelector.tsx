import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from 'react-icons/bs';
import usePlatform from "../hooks/usePlatforms";
import { Platform } from '../hooks/useGame';

interface Props{
    onSelectPlatform: (Platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}:Props) => {

    const{platforms, error} = usePlatform();
    if(error) return null;


    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{ selectedPlatform?.name || 'Platforms'}</MenuButton>
            <MenuList>
                {platforms?.map(platform =>(
                    <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}
 
export default PlatformSelector;