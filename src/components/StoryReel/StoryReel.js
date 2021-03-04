import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ScrollContainer from 'react-indiana-drag-scroll'
import Story from '../Story/Story.js'
import './StoryReel.css'



const StoryReel = () => {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        setStories(
            [
                {
                    profileSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Megan_Fox_2014.jpg/400px-Megan_Fox_2014.jpg',
                    image: 'https://i.pinimg.com/564x/fd/99/ae/fd99ae276cb549601af880a87c4aa49f.jpg',
                    title: 'Megan Fox',
                    seen: false
                },
                {
                    profileSrc: 'https://instagram.fauh1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/14726263_186588948448257_4356541072436887552_a.jpg?tp=1&_nc_ht=instagram.fauh1-1.fna.fbcdn.net&_nc_ohc=asxnEBcQcqQAX_K1DJW&oh=e7939f60da260461fa5f91f54291e008&oe=6068BAAE',
                    image: 'https://instagram.fauh1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/127233402_222309845933892_3125944430051239344_n.jpg?tp=1&_nc_ht=instagram.fauh1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=733BKe1QzyEAX8hDSgt&oh=bb27ffcf050a71abd059a6005d1517d7&oe=60664361',
                    title: 'Atif Aslam',
                    seen: true
                },
                {
                    profileSrc: 'https://instagram.ffjr1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/125430666_410380796818229_4185377368353646577_n.jpg?tp=1&_nc_ht=instagram.ffjr1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=S1lNHfai8sEAX-3SOrC&oh=20386fdf69b9dde17600bd5816012da7&oe=6069125F',
                    image: 'https://media.glamour.com/photos/5695c45816d0dc3747edf053/master/pass/entertainment-2015-11-hailee-steinfeld-courtesy-main.jpg',
                    title: 'Hailee Steinfeld',
                    seen: true
                },
                {
                    profileSrc: 'https://instagram.ffjr1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s320x320/149404999_1181390608960211_7825333961695543965_n.jpg?tp=1&_nc_ht=instagram.ffjr1-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=7c7bttpocKUAX86v_94&oh=9eb329711adce22ce9744e3f4c0ba7ce&oe=6069D5BF',
                    image: 'https://instagram.ffjr1-5.fna.fbcdn.net/v/t51.2885-15/e35/c0.180.1440.1440a/s240x240/152445403_4022420774480782_1669638331238376752_n.jpg?tp=1&_nc_ht=instagram.ffjr1-5.fna.fbcdn.net&_nc_cat=110&_nc_ohc=RAfX3ukk8yQAX9OUnO7&oh=d899de6e88a80a02a10dec0ebc6a8787&oe=6068B828',
                    title: 'Marz.z.z'
                },
                {
                    profileSrc: 'https://instagram.fauh1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/132197016_214462623590305_6641430723485871092_n.jpg?tp=1&_nc_ht=instagram.fauh1-1.fna.fbcdn.net&_nc_ohc=xVcLctWe-ooAX9mjeb-&oh=4b31db0e5ec74c1d783cc76fa606ea6f&oe=60684C93',
                    image: 'https://instagram.fauh1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/150391572_2566603803638802_7584376247762659577_n.jpg?tp=1&_nc_ht=instagram.fauh1-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=r7dHNDHgDYAAX8wpxaF&oh=e399ed47619170a36483fd6efb9db7b3&oe=60697E2C',
                    title: 'Gal Gadot',
                    seen: true
                },
                {
                    profileSrc: 'https://instagram.ffjr1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122821744_1442306945967480_496791532967701291_n.jpg?tp=1&_nc_ht=instagram.ffjr1-1.fna.fbcdn.net&_nc_ohc=S_L6VzXAV4YAX-AwfWl&oh=5f2127d507168056d47ee15ee1e36da2&oe=606938DD',
                    image: 'https://instagram.ffjr1-4.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/144847713_144187594098499_5653594650175968115_n.jpg?tp=1&_nc_ht=instagram.ffjr1-4.fna.fbcdn.net&_nc_cat=107&_nc_ohc=XsHlh_0ba84AX-sL5Zl&oh=49d82ec90810a1087d2c32f2dcfced97&oe=60680CBA',
                    title: 'Riz Ahmed',
                    seen: false
                }
            ]
        )
    }, [])

    const FadeEdge = styled.div`
    display: inline-block;
    height: 260px;
    width: 20px;
    position: absolute;
    `;

    const Start = styled(FadeEdge)`
    align-self: flex-start;
    margin-left: -10px;
    background-image: linear-gradient(to right, #f1f2f5, rgba(241,242,245,0.01));
    `;

    const End = styled(FadeEdge)`
    align-self: flex-end;
    margin-right: -10px;
    background-image: linear-gradient(to left, #f1f2f5, rgba(241,242,245,0.01));
    `;

    return (
        <>
            <Start />
            <ScrollContainer vertical={false} nativeMobileScroll={true} className="storyReel">
                {stories.map((e) => <Story
                    profileSrc={e.profileSrc}
                    image={e.image}
                    title={e.title}
                    seen={e.seen} />
                )}
            </ScrollContainer>
            <End />
        </>
    )
}

export default StoryReel
