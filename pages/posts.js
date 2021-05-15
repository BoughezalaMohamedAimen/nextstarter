import React from 'react';
import Link from 'next/link';

const posts = ({articles}) => {
    return (
        <div className="bg-dark py-4" >
            {articles.map(article=>(
                <div className="container py-3 mb-3 border shadow bg-white" key={article.id}>
                    <h3 className="font-weight-bold mb-2">
                         <Link href="/articles/[id]" as={`articles/${article.id}`}>  
                            <a> { article.title} </a> 
                         </Link> 
                    </h3>
                    <p>{article.body}</p>
                </div>
            ))}
        </div>
    )
}

export const getStaticProps= async ()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const articles = await res.json();
    return {
        props:{
            articles
        }
    }
}
export default posts ; 