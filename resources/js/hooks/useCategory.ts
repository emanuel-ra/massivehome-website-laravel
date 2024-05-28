import { useCallback, useState } from "react";
import { Categories } from "../interfaces/category";
import { GetCategoriesServiceAsync } from "../services/category/GetCategories";

export const useGetCategories = () => {
    const [categories,setCategories] = useState<Categories>([]);
    
    const GetCategories = useCallback( async ()=>{
        const result: Categories = await GetCategoriesServiceAsync()
        setCategories(result)        
    },[])

    return { categories, GetCategories } 
}