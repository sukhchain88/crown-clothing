import './directory-item.style.scss'



const DirectoryItems = ({ category }) => {

    const { imageUrl, title } = category

    return (
        <div className="directory-item-container">
            <div className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="body">
                <h1>{title}</h1>
                <p>Shop Know</p>
            </div>
        </div>
    )
}

export default DirectoryItems