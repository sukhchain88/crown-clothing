import CategoryItems from "../category-item/category-item.cmponent";

import './directory.style.scss'

const Driectory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map(category => (
                <CategoryItems key={category.id} category={category} />
            ))}
        </div>
    );
}

export default Driectory