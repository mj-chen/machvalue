import React,{Component} from "react";
import bouayad from "../assets/img/ANIS_BOUAYAD.png";

class Bouayad extends Component{

    constructor(props) {
        super(props);
        this.state = {
            language: this.props.language
        }
        this.article = React.createRef();
    }

    componentDidUpdate(prevProps) {
        if (this.props.language !== prevProps.language) {
            this.setState({
                language: this.props.language,
            })
        }
    }

    open = (div) => {
        if (window.innerWidth < 768) {
            this.article.current.classList.toggle('hidden');
        }
    }

    render(){
        return <div id="bouayad">
            <div onClick={(e)=>this.open(e.currentTarget)}>
                <p className="title">
                    <span>ANIS BOUAYAD</span>
                </p>
            </div>
            <article className='hidden' ref={this.article}>
                <div>
                    <img src={`/${bouayad}`} alt="anis bouayad" />
                </div>
                {
                    this.state.language === 'fr'?
                    <div>
                        <p>
                            Dans la continuit&eacute; de Jean-Louis SWINERS, une expression d'Anis BOUYAD pourrait &ecirc;tre <strong>&laquo; Pour gagner la guerre, il faut trouver la bonne alliance &raquo;.</strong>
                        </p>
                         <p>
                            C'est ainsi que dans son livre &laquo; Les alliances strat&eacute;giques, ma&icirc;triser les facteurs cl&eacute;s du succ&egrave;s &raquo;, Anis d&eacute;veloppe l'id&eacute;e simple que &laquo; mieux vaut se d&eacute;velopper et vivre avec d'autres que r&eacute;gresser et mourir seul &raquo;.
                        </p>
                    </div>:
                    <div>
                        <p>
                            In keeping with Jean-Luis Swiners, an expression of Anis BOUYAD could be <strong>&laquo; In order to win the war, we must find the right alliance &raquo;</strong>.
                        </p>
                        <p>
                            Indeed, in his book &laquo; Les alliances stratégiques, maîtriser les facteurs clés du succès &raquo;, 
                            (Strategic alliances, mastering the key factors of success), Anis develops the simple idea 
                            that &laquo; it is better to evolve and live with others than regress and die alone &raquo;.
                        </p>
                    </div>
                }
                {
                    this.state.language === 'fr'?
                    <div>
                        <p>
                            Anis BOUYAD est Docteur en Sciences de gestion, sp&eacute;cialis&eacute; dans le conseil en strat&eacute;gie, avec cette singularit&eacute; qu'il observe finement tous les changements de notre monde (politique, soci&eacute;tal, g&eacute;opolitique, climatique, &eacute;nerg&eacute;tique,...)
                        </p>
                        <p>
                            Pragmatique, il a toujours apport&eacute; dans ses analyses, les outils mettant en lecture ces changements.
                        </p>
                    </div>:
                    <div>
                        <p>
                            Anis BOUYAD is a Doctor in management sciences, specialized in strategic consulting, enhanced by his keen observations of all the changes in the world (political, societal, geopolitical, climatic, energetics...)
                        </p>
                        <p>
                            In his pragmatic approach, his analyses are always supported by tools allowing to demonstrate these changes. 
                        </p>
                    </div>
                }
            </article>
        </div>;
    }
    
}

export default Bouayad;