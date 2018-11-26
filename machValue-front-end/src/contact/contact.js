import React,{Component} from 'react';
import Header from "../header/header";
import SVGIcon from "../svgIcons/icons";
import Plan from "../assets/img/Plan.png";
import Footer from "../extra/footer";

class Contact extends Component{
   constructor(props){
     super(props);
     this.state={
       lastName:'',
       email:'',
       firstName:'',
       occupation:'',
       company:'',
       phone:'',
       addresse:'',
       postCode:'',
       city:'',
       message:'',
       valide:true,
     }
   }

   update=(ele)=>{
     const value = ele.value;
     const name = ele.getAttribute('name');
     this.setState({[`${name}`]:value});
     if(ele.classList.contains('invalide')){
       ele.classList.remove('invalide');
       ele.parentElement.removeChild(ele.previousElementSibling);
     }
     if (document.getElementsByClassName('invalide').length === 0 && !this.state.valide){
       this.setState({ valide: true });
     }
   }

  addErrorBox=(ele,message)=>{
    const errorBox = document.createElement('P');
    errorBox.className = 'errorBox';
    ele.classList.add('invalide');
    errorBox.innerText = message;
    ele.insertAdjacentElement('beforebegin', errorBox);
    if (this.state.valide) this.setState({ valide: false });
  }

  sendMessage=()=>{
    const { lastName, email, firstName, company, phone, addresse, postCode, city, message, valide } = this.state;
    if(lastName === ''){
      const nameInput = document.querySelector('input[name=lastName]');
      if(!nameInput.classList.contains('invalide'))
        this.addErrorBox(nameInput,'Veuillez renseigner votre nom!')
    }
    if (!/(.+)@(.+)+\.(.+){2,}/.test(email)){
      const emailInput = document.querySelector('input[name=email]');
      if (!emailInput.classList.contains('invalide'))
      this.addErrorBox(emailInput,'Adresse non valide!');
    
    }
    if (firstName === '') {
      const firstnameInput = document.querySelector('input[name=firstName]');
      if (!firstnameInput.classList.contains('invalide'))
      this.addErrorBox(firstnameInput, 'Veuillez renseigner votre prénom!')
    }
    if (company === ''){
      const companyInput = document.querySelector("input[name=company]");
      if (!companyInput.classList.contains('invalide'))
      this.addErrorBox(companyInput, "Veuillez renseigner le nom de votre société!");
    }
    if (!/[0-9 -()+]+$/.test(phone) && phone !== ''){
      const phoneInput = document.querySelector("input[name=phone]");
      if (!phoneInput.classList.contains('invalide'))
      this.addErrorBox(phoneInput, "Numéro de téléphone non valide!"); 
    }
    if(message.length < 10){
      const messageInput = document.querySelector("textarea[name=message]");
      if (!messageInput.classList.contains('invalide'))
      this.addErrorBox(messageInput, "Veuillez renseigner votre message!"); 
    }
    if(valide){
      const url ="http://localhost:3000"
      const lettre = {
        lastName,
        firstName,
        email,
        phone,
        company,
        addresse,
        postCode,
        city,
        message
      }
      this.setState({valide:false})
      fetch(`${url}`,{
        mode:'cors',
        method:"POST",
        headers:{
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body:JSON.stringify(lettre)
      }).then(response=>{
        if(!response.ok){
          throw Error(response.statusText)
        }
        return response;
      }).then(response=>{
        if(response.status === 200){
          console.log('message sent')
          this.setState({valide:true})
        }
      }).catch(error=>{
        console.log('failure')
      })
    }
  }

    render(){
        const {firstName,email,lastName,occupation,company,phone,addresse,postCode,city,message, valide}=this.state;
        return <div>
            <Header />
            <div className="contact">
              <p className="sectionTitle">
                <span>4. </span>
                CONTACT
              </p>
              <div>
                <div>
                  <input name="lastName" placeholder="NOM*" type="text" value={lastName} data-validation="true" onChange={(e) => this.update(e.target)} />
                </div>
                <div>
                  <input name="email" placeholder="MAIL*" type="email" value={email} data-validation="true" onChange={(e) => this.update(e.target)} />
                </div>
                <div>
                  <input name="firstName" placeholder="PR&Eacute;NOM*" value={firstName} type="text" data-validation="true" onChange={(e) => this.update(e.target)} />
                </div>
                <div>
                  <input name="occupation" placeholder="FONCTION" value={occupation} type="text" onChange={(e) => this.update(e.target)} />
                </div>
                <div>
                  <input name="company" placeholder="SOCI&Eacute;T&Eacute;*" type="text" value={company} data-validation="true" onChange={(e) => this.update(e.target)} />
                </div>
                <div>
                  <input name="phone" placeholder="TEL" type="phone" value={phone} onChange={(e) => this.update(e.target)} />
                </div>
                <div>
                  <div>
                    <input name="addresse" placeholder="ADRESSE" type="addresse" value={addresse} onChange={(e) => this.update(e.target)} />
                  </div>
                  <div>
                    <input name="postCode" placeholder="CODE POSTAL" type="text" value={postCode} onChange={(e) => this.update(e.target)} />
                  </div>
                  <div>
                    <input name="city" placeholder="VILLE" type="text" value={city} onChange={(e) => this.update(e.target)} />
                  </div>
                </div>
                <div>
                  <textarea name="message" placeholder="MESSAGE*" data-validation="true" value={message} onChange={(e) => this.update(e.target)} />
                </div>
              </div>
              <div>
                <p>*champs obligatoires</p>
                <p onClick={()=>this.sendMessage()} className={valide?'':'disabled'} >
                  <span>ENVOYER</span> <SVGIcon name="boiteaulettre" width="35px" />
                </p>
              </div>
                <p className="title">
                    <span>NOUS TROUVER</span>
                </p>
                <section>
              <img src={`/${Plan}`} />
              <aside>
                <h2>MachValue</h2>
                <p>30, rue de la Varenne</p>
                <p>94100 Saint-Maur-des-Foss&eacute;s</p>
                <p>mob:+33 (0)6 89 09 08 63</p>
                <p><em>max.pagniol@machvalue.com</em></p>
              </aside>

                </section>
            </div>
            <Footer/>
            </div>     
    }
}

export default Contact;