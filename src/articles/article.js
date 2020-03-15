import React, {Component} from 'react';


class Article extends Component {
    constructor(props) {
        super(props);
        this.articleRef = React.createRef();
    }

    render() {
        const { article} = this.props;
        return (
            <article>
                {
                    article? (
                        <>
                        <h5>{article.title}</h5>
                        <div className='img'>
                            <img src={article.images[0].url} alt={article.images[0].alt} />
                        </div>
                        <div>{article.text}</div>
                        </>
                    ):(
                       <p>Loading...</p>
                    )
                }
            </article>
        )
    }
}

export default Article;