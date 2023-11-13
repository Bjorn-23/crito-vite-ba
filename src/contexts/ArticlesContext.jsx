import React, { createContext, useContext, useState, useEffect } from "react";
import { useParams } from 'react-router-dom'


const ArticlesContext = createContext()
export const useArticles = () => useContext(ArticlesContext)


export const ArticlesProvider = ({children}) => {
    const apiUrl = 'https://win23-assignment.azurewebsites.net/api/articles'
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState(null)
    const { id } = useParams()

    useEffect(()=> {
        getArticles()
    }, [])

    useEffect(() => {
        if (id !== undefined) {
        getArticle()
        return
        }
    }, [id])    

    const getArticles = async () => {
        const result = await fetch(apiUrl)
        if (result.status === 200) {
            setArticles(await result.json())
        }
    }   

    const getArticle = async (id) => {
        if (id !== undefined) {
        const result = await fetch(`${apiUrl}/${id}`)
            if (result.status === 200)
            setArticle(await result.json())
            //console.log('article exists')
        }
        else //console.log('no article exists')
            return
    }

    const clearArticle =  () => {
        setArticle(null)
    }

    return (
        <ArticlesContext.Provider value={{ articles, article, getArticles, getArticle, clearArticle }}>
            {children}
        </ArticlesContext.Provider>
    )
}