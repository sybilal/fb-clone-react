import { Avatar } from '@material-ui/core';
import { EmojiFlags, People, Chat, VideoLibrary, ExpandMoreOutlined, LocalHospital, Storefront } from '@material-ui/icons';
import React from 'react';
import SidebarRow from '../SidebarRow/SidebarRow';

const Sidebar = () => {
    return (
        <div>
            <SidebarRow title="Bilal Syed" Icon={() => <Avatar src="https://avatars.githubusercontent.com/u/29626378?v=4" />} />
            <SidebarRow title="COVID-19 Information Center" Icon={LocalHospital} />
            <SidebarRow title="Pages" Icon={EmojiFlags} />
            <SidebarRow title="Friends" Icon={People} />
            <SidebarRow title="Messenger" Icon={Chat} />
            <SidebarRow title="Marketplace" Icon={Storefront} />
            <SidebarRow title="Videos" Icon={VideoLibrary} />
            <SidebarRow title="Marketplace" Icon={ExpandMoreOutlined} />
        </div>
    )
}

export default Sidebar
