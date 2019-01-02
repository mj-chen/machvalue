import React, {Component} from 'react';

class Gallery extends Component{
    constructor(props) {
        super(props);
        this.gallery = React.createRef();
    }
   
    render(){
        return(
            <div className='gallery' ref={this.gallery}>
                    {
                        this.props.imgs.map((img,index,array)=>{
                            return(
                                <div className='mySlides hidden img' key={index} >
                                    <div className='numbertext'>{index+1}/{array.length}</div>
                                    <img src={`/${img.url}`}/>
                                </div>
                            )
                        })
                    }
                    <a className="prev" onClick={()=>this.props.plusSlides(-1)}>❮</a>
                    <a className="next" onClick={()=>this.props.plusSlides(1)}>❯</a>
                    <div className='row'>
                        {
                            this.props.imgs.map((img, index, array) => {
                                return(
                                    <div className='column' key={index}>
                                        <img src={`/${img.petit}`} className='demo cursor' onClick={()=>this.props.currentSlide(index+1)} alt={img.alt}/>
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>
        ) 
    }
}

export default Gallery