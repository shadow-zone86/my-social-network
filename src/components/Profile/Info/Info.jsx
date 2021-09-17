import React from 'react'
import classes from './Info.module.css'

const Info = () => {
    return (
        <div>
            <div>
                <img src="https://t.eu1.jwwb.nl/W200065/eAyw227Zya2vAanKmuddoVUp0IM=/full-fit-in/1920x1920/filters:no_upscale()/f.eu1.jwwb.nl/public/d/6/4/wwwjelle/porsche_banner.jpg" alt="banner" />
            </div>
            <div className={ classes.description }>
                avatar + description
            </div>
        </div>
    )
}

export default Info