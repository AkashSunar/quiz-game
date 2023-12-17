import { useEffect, useState } from "react"
import axios from "axios";
import "./category.css"
import CategoryCard from "./CategoryCard";
import { useNavigate } from "react-router-dom";


const Category = () => {
    const[category,setCategory]=useState([])
    let uniqueCategories = ['Linux', 'DevOps', 'Networking', 'Cloud', 'Docker', 'Kubernetes'];
    const navigate = useNavigate();
    
    return (
        <>
            <div className="choose-category">
                <span>Select the category you want to play</span>
            </div>
            <div className="category-wrapper">
                
            
          {uniqueCategories.map((val) => {
              return (
                  <>
                      <CategoryCard category={val} />
                     
                  </>
          )
      })}
    </div>
      </>
     
  )
}

export default Category;
