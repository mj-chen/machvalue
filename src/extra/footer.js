import React, {Component} from 'react';


class Footer extends Component{
 
    render(){
        return(
            <footer>
                {
                    this.props.language === 'fr'?
                    <p>mentions l&eacute;gales</p>:
                    this.props.language === 'korea'?
                    <p>법적고지</p>:
                    this.props.language === 'cn'?
                    <p>版权公告</p>:
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