import React from 'react'
import { useNavigate } from 'react-router-dom'
import './directory-item.style.scss'

const DirectoryItems = ({ category }) => {
    const { imageUrl, title, route } = category
    const navigate = useNavigate();

    const navigateHendler = () => navigate(route)
    return (
        <div className="directory-item-container" onClick={navigateHendler}>
            <div className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="body">
                <h1>{title}</h1>
                <p>Shop Know</p>
            </div>
        </div>
    )
}
export default DirectoryItems