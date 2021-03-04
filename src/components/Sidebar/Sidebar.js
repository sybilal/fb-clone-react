import { Avatar } from '@material-ui/core';
import { EmojiFlags, People, Chat, VideoLibrary, ExpandMoreOutlined, LocalHospital, Storefront } from '@material-ui/icons';
import React from 'react';
import SidebarRow from '../SidebarRow/SidebarRow';

const Sidebar = () => {
    return (
        <div>
            <SidebarRow title="Bilal Syed" Icon={() => <Avatar src="https://media-exp1.licdn.com/dms/image/C5103AQEU5dFgRJDyGw/profile-displayphoto-shrink_100_100/0/1567578843442?e=1619654400&v=beta&t=aCrZs0MqBq_tWI-P556YsI4So1pAleLGWAamKpz1P6M" />} />
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
