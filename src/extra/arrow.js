import React, {Component} from 'react';

class Arrow extends Component {
    constructor(props){
        super(props);
        this.arrowRef = React.createRef();
    }

    componentDidMount(){
        window.addEventListener('scroll',this.toggleArrow)
    }

    toggleArrow = () => {
        if (window.pageYOffset > 500) {
            this.arrowRef.current.classList.remove('hidden');
        } else {
            this.arrowRef.current.classList.add("hidden");
        }
    }

    backToTop = ()=>{
        window.scrollTo(0,0);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.toggleArrow);
    }

    render(){
        return (
            <span id="arrow" className='hidden' onClick={()=>this.backToTop()} ref={this.arrowRef}>
            </span>
        )
    }
}

export default Arrow;