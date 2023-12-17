import "./category.css"
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ category }) => {
    const navigate = useNavigate();

    const handleButtonChange = category => {
        navigate(`/${category}`)
    }

    return (
    
        <div className='category-card' onClick={() => handleButtonChange(category)}>
           
          <span>{category}</span>
      
    </div>
  )
}

export default CategoryCard;
