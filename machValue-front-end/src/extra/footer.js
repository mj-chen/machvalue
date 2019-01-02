import React, {Component} from 'react';


class Footer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            language: this.props.language,
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.language !== prevProps.language) {
            this.setState({
                language: this.props.language,
            })
        }
    }

    render(){
        return(
            <footer>
                {
                    this.state.language === 'fr'?
                    <p>mentions l&eacute;gales</p>:
                    <p>Legal notice</p>
                }
                <p>
                    <a href="#">f</a>
                    <a href="https://www.linkedin.com/in/max-pagniol-958a9144/" target='_blank'>in</a>
                </p>
            </footer>
        ) 
    }
}

export default Footer;