import React from 'react'
import './RightWidget.css'
const RightWidget = () => {
    return (
        <div className="rightWidget">
            <iframe
                title="Gal Gadot"
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGalgadot%2F&tabs=timeline&width=300&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
            </iframe>
        </div>
    )
}

export default RightWidget
