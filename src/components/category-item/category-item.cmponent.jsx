import './category-item.style.scss'



const CategoryItems = ({ category }) => {

    const { imageUrl, title } = category

    return (
        <div className="category-container">
            <div className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="category-body-container">
                <h1>{title}</h1>
                <p>Shop Know</p>
            </div>
        </div>
    )
}

export default CategoryItems