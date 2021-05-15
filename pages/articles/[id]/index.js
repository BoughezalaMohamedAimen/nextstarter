import React from 'react'

const articles=({article})=> {
    return (
        <div>
            <h1> {article.title}</h1>
            <p>{article.body} </p>
        </div>
    )
}

export const getStaticProps=async(context)=>{
    const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const article = await res.json();
    return {
        props:{
            article
        }
    }
}


export const getStaticPaths= async ()=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const articles = await res.json();
    const paths=articles.map(article=>({params: {id: article.id.toString()}}))
    console.log("*************************************");
    console.log(paths);
    return {
            paths,
            fallback:false
    }
}


// export const getServerSideProps=async(context)=>{
//     const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();
//     return {
//         props:{
//             article
//         }
//     }
// }

export default articles;