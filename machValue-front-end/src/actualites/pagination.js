import React, {Component} from 'react';


class Pagination extends Component{
    constructor(props) {
        super(props);
        this.pagination = React.createRef();
    }

    activePage =(index)=>{
        const pages = this.pagination.current.children;
        this.pagination.current.querySelector('.active').classList.remove('active');
        pages[index].classList.add('active');
    }

    render(){
        return (
            <div className="pagination">
                <p>&laquo;</p>
                <ul ref={this.pagination}>
                    <li onClick={() => this.props.prev(this.props.articleNumPerPage, this.props.currentPage - 1)}>&lt;</li>
                        {(function(pageNum, showPage, articleNumPerPage){
                            let lists=[];
                            for (let i = 1; i <= pageNum; i++){
                                let l = <li key={i} className={i===1?'active':''} onClick={() => showPage(articleNumPerPage,i)}>{i}</li>;
                                lists.push(l);
                        }
                            return lists;
                        })(this.props.page, this.props.showPage, this.props.articleNumPerPage)
                }
                <li onClick={()=>this.props.next(this.props.articleNumPerPage, this.props.currentPage+1)}>&gt;</li>
                </ul>
                <p>&raquo;</p>
            </div>
        )
    }
}

export default Pagination; 