import DirectoryItems from "../directory-item/directory-item.cmponent";

import './directory.style.scss'

const Driectory = ({ categories }) => {
    return (
        <div className="directory-container">
            {categories.map(category => (
                <DirectoryItems key={category.id} category={category} />
            ))}
        </div>
    );
}

export default Driectory