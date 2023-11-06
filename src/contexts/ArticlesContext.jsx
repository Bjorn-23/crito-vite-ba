import React, { createContext, useContext, useState, useEffect } from "react";

const ArticlesContext = createContext()
export const useArticles = () => useContext(ArticlesContext)


export const ArticlesProvider = ({children}) => {
    const apiUrl = 'https://win23-assignment.azurewebsites.net/api/articles'
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState(null)

    useEffect(()=> {
        getArticles()
    }, [])

    const getArticles = async () => {
        const result = await fetch(apiUrl)
        if (result.status === 200) {
            setArticles(await result.json())
        }
    }
   
    const getArticle = async () => {
        const result = await fetch(`${apiUrl}/${id}`)
        if (result.status === 200) {
            setArticle(await result.json())
        }    
    }


    return (
        <ArticlesContext.Provider value={{ articles, article, getArticles, getArticle }}>
            {children}
        </ArticlesContext.Provider>
    
    )
}