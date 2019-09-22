import React, {Component} from "react";
import SVGIcon from "../svgIcons/icons";

class Prestations extends Component {

  render(){
    return this.props.language === "fr" ? (
      <div className="prestations">
        <p>
          <span>
            Fort de notre exp&eacute;rience <strong>B2B et B2B2C</strong>{" "}
            nous sommes
          </span>{" "}
          &agrave; m&ecirc;me de vous proposer plusieurs prestations :
        </p>
        <article>
          <div>
            <div className="etape">
              <p className="number">1</p> <p className="line" />
            </div>
            <div>
              <p>
                La <strong>connaissance de votre client&egrave;le</strong> :
                par contact t&eacute;l&eacute;phonique, nous
                <strong> qualifierons</strong> les diff&eacute;rents acteurs
                de votre environnement (orientation m&eacute;tier, potentiel
                avec r&eacute;partition familles d'achat, fournisseurs, zone
                de chalandise, niveau d'infrastructures internes,
                donn&eacute;es financi&egrave;res, etc...) afin de
                construire un
                <strong> fichier &laquo; vivant &raquo;</strong> permettant
                d'allouer les ressources de prospection l&agrave; o&ugrave;
                il le faut. Ainsi vous pourrez &agrave; partir de ces
                donn&eacute;es construire une{" "}
                <strong>segmentation de client&egrave;le</strong> vous
                apportant une conduite plus efficiente de votre
                strat&eacute;gie de d&eacute;veloppement.
              </p>
            </div>
          </div>
          <div>
            <div className="etape">
              <p className="number">2</p> <p className="line" />
            </div>
            <div>
              <p>
                Nous pouvons &eacute;galement vous accompagner dans la{" "}
                <strong>vente sp&eacute;cifique d'un produit</strong>{" "}
                (march&eacute; de niches entre autres) aupr&egrave;s de{" "}
                <strong>segment de client&egrave;le test,</strong> validant
                ainsi la possibilit&eacute; d'un certain taux de
                transformation. Demain, vous pourrez exploiter de
                <strong> nouvelles opportunit&eacute;s</strong> de
                march&eacute;s &agrave; partir d'&eacute;l&eacute;ments
                concrets.
              </p>
            </div>
          </div>
          <div>
            <div className="etape">
              <p className="number">3</p> <p className="line" />
            </div>
            <div>
              <p>
                Conna&icirc;tre un client, c'est avant tout
                l'&eacute;couter, le comprendre, avoir une id&eacute;e
                claire de ses motivations et de ses attentes.
              </p>
              <p>
                Pour r&eacute;aliser ce type d'
                <strong>investigation</strong>, nos &laquo; Datas &raquo;
                sont construites de telle mani&egrave;re qu'elles vous
                permettront une connaissance de 95% des acteurs d'un segment
                de march&eacute; tant d'un point de vue qualitatif que
                quantitatif.
              </p>
            </div>
          </div>
          <div>
            <div className="etape">
              <p className="number">4</p> <p className="line" />
            </div>
            <div>
              <p>
                Mettre &agrave; disposition un{" "}
                <strong>outil de g&eacute;olocalisation</strong> de vos
                clients et prospects sur la base de vos secteurs de vente
                existants ou &agrave; venir.
              </p>
            </div>
          </div>
        </article>
      </div>
    ) : this.props.language === "korea" ? (
      <div className="prestations">
        <p>
          <span>B2B 및 B2B2C 경험을 통해</span>
          여러 가지 서비스를 제공 할 수 있습니다.
        </p>
        <article>
          <div>
            <div className="etape">
              <p className="number">1</p> <p className="line" />
            </div>
            <div>
              <p>
                고객에 대한 지식 : 전화연락을 통해 우리는 당사의 환경에
                따른 (비지니스 방향, 구매가족 분포, 공급 업체, 집수지역, 내부
                인프라 수준, 재무 데이터 등) 다양한 관계자의 자격을
                부여합니다. 이는 자원의 필요에 따른 실질적인 잠재고객 파일을
                작성하기 위한것입니다. 따라서 이 데이터를 통해 고객을
                세분화하여 개발전략을 보다 효율적으로 관리할 수 있습니다.
              </p>
            </div>
          </div>
          <div>
            <div className="etape">
              <p className="number">2</p> <p className="line" />
            </div>
            <div>
              <p>
                우리는 고객 세그먼트를 테스트하기 위한 제품의
                특정판매 (틈새시장) 에서 당신을 도울 수 있으며, 이는 특정
                비율의 변환 가능성을 입증해줍니다. 추후 당신은 구체적인
                요소를 기반으로 새로운 시장기회를 확보할 수 있습니다.
              </p>
            </div>
          </div>
          <div>
            <div className="etape">
              <p className="number">3</p> <p className="line" />
            </div>
            <div>
              <p>
                무엇보다 고객을 알기 위해서는 고객의 이야기에 귀를 기울이고,
                이해하고, 그들의 동기와 기대를 명확히 가지고 있어야 합니다.
              </p>
              <p>
                이러한 유형의 조사를 수행하기 위해 당사의 &laquo; Datas
                &raquo; 는 질적 및 양적 관점에서 시장 분야의 약 95%의 고객을
                파악할 수 있도록 작성되었습니다.
              </p>
            </div>
          </div>
          <div>
            <div className="etape">
              <p className="number">4</p> <p className="line" />
            </div>
            <div>
              <p>
                기존 또는 향후 판매영역을 기반으로 고객 및 잠재고객을 위한
                위치정보 분석 도구를 제공합니다.
              </p>
            </div>
          </div>
        </article>
      </div>
    ) : (
      <div className="prestations">
        <p>
          <span>
            Based on our expertise in <strong>B2B</strong> and{" "}
            <strong>B2B2C</strong>, we are
          </span>
          capable of provide you with several services:
        </p>
        <article>
          <div>
            <div className="etape">
              <p className="number">1</p> <p className="line" />
            </div>
            <div>
              <p>
                <strong>Knowing your customers</strong> : By phone contact,
                we will <strong>define </strong>
                the various actors in your environment ( business
                orientation, potential based on purchasing categories,
                suppliers, level of internal infrastructures, financial
                data, etc... ) in order to build a{" "}
                <strong>&laquo; live &raquo; list</strong>, allowing to
                allocate prospection resources to the right customers. These
                data will help you define <strong>customer profiles</strong>{" "}
                what will enhance your efficiency and development strategy.
              </p>
            </div>
          </div>
          <div>
            <div className="etape">
              <p className="number">2</p> <p className="line" />
            </div>
            <div>
              <p>
                We can also assist you in the{" "}
                <strong>specific sale of a product </strong>( niche markets
                for example ), by{" "}
                <strong>testing a specific client segment</strong>,
                assessing the potential conversion rate ratio. You will be
                therefore ready to develop{" "}
                <strong>new business opportunities</strong> based on
                concrete elements.
              </p>
            </div>
          </div>
          <div>
            <div className="etape">
              <p className="number">3</p> <p className="line" />
            </div>
            <div>
              <p>
                Knowing a client, is primarily to be able to listen to him
                and understand him and to have a clear idea of his
                motivations and expectations.
              </p>
              <p>
                To carry out this type of <strong>investigation</strong>,
                our &laquo; Data &raquo;are constructed in such a way that
                they will enable you to know about 95% of the players in a
                market segment from both a qualitative and a quantitative
                perspective.
              </p>
            </div>
          </div>
          <div>
            <div className="etape">
              <p className="number">4</p> <p className="line" />
            </div>
            <div>
              <p>
                Provide a <strong>geolocation tool</strong> of your
                customers and prospects based on your existing or future
                sales sectors.
              </p>
            </div>
          </div>
        </article>
      </div>
    );

  }
   
}

export default Prestations;