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
                    profileSrc: 'https://img.indiaforums.com/person/480x360/0/2164-atif-aslam.jpg?c=7vP7E1',
                    image: 'https://cdn.siasat.com/wp-content/uploads/2021/11/photo_2021-11-14_18-08-11.jpg',
                    title: 'Atif Aslam',
                    seen: true
                },
                {
                    profileSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Hailee_Steinfeld_by_Gage_Skidmore.jpg/220px-Hailee_Steinfeld_by_Gage_Skidmore.jpg',
                    image: 'https://media.glamour.com/photos/5695c45816d0dc3747edf053/master/pass/entertainment-2015-11-hailee-steinfeld-courtesy-main.jpg',
                    title: 'Hailee Steinfeld',
                    seen: true
                },
                {
                    profileSrc: 'https://www.famousbirthdays.com/faces/marz-image.jpg',
                    image: 'https://i.redd.it/0llrsle2bhu71.png',
                    title: 'Marz.z.z'
                },
                {
                    profileSrc: 'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/gal-gadot-11088-17-10-2017-11-45-36.jpg',
                    image: 'https://cdn.tatlerasia.com/asiatatler/i/ph/2021/03/02101541-screenshot-2021-03-02-at-101534-am_cover_2000x1337.png',
                    title: 'Gal Gadot',
                    seen: true
                },
                {
                    profileSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Riz_Ahmed_at_the_Rogue_One_-_A_Star_Wars_Story_-_World_Premeire_Red_Carpet_-_DSC_0437_%2831547570706%29_%28cropped%29.jpg/220px-Riz_Ahmed_at_the_Rogue_One_-_A_Star_Wars_Story_-_World_Premeire_Red_Carpet_-_DSC_0437_%2831547570706%29_%28cropped%29.jpg',
                    image: 'https://www.easterneye.biz/wp-content/uploads/2022/04/GettyImages-1314417372-scaled.jpg',
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
