import React, {Component} from 'react';
import { Link } from "react-router-dom";



class ArticleList extends Component{
    constructor(props) {
        super(props);
        this.list = React.createRef();
    }

    renderList=(num)=>{
       Array.from(this.list.current.children).splice(0,num).map(l=>{
        l.classList.remove('hidden');
       })
    }
    turnPage=(num,i)=>{
        const articleList = Array.from(this.list.current.children);
        articleList.map(e=>{
            e.classList.add('hidden');
        })
        const start = num*(i-1);
        articleList.splice(start,num).map(e=>{
            e.classList.remove('hidden');
        })
    }
    render(){
        return(
            <ul ref={this.list}>
                {this.props.articles.map((article)=>
                    <li key={article.id} className='hidden'>
                        <p>{article.date}</p>
                        <h6>{article.title}</h6>
                        <p>{article.resume}</p>
                        <Link to={`/actualités/articles/${article.id}`}>
                            LIRE LA SUITE
                        </Link>
                    </li>
                )}
            </ul>
        )
    }
}

export default ArticleList;