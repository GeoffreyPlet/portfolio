
/*   window.addEventListener('load', function(event){
    alert('En continuant vous acceptez que certainnes fonctionnalité ne fonction pas. Site en cour de création.');
  }); */

    $(document).ready(function(){

      $('.front-1').click(function(){
        window.open('projets/maquette/index.html', '_blank');
      });
      
        $("#btn-back").click(function(){
            $("#vuejs").animate({
              height: 'hide'
            });
            $("#front").animate({
              height: 'hide'
            });
            $("#all").animate({
              height: 'hide'
            });
            $("#back").animate({
              height: 'show'
            });
          });

        $("#btn-all").click(function(){
            $("#vuejs").animate({
              height: 'hide'
            });
            $("#front").animate({
              height: 'hide'
            });
            $("#back").animate({
              height: 'hide'
            });
            $("#all").animate({
              height: 'show'
            });
          });


        $("#btn-vuejs").click(function(){
          $("#all").animate({
            height: 'hide'
          });
          $("#front").animate({
            height: 'hide'
          });
          $("#back").animate({
            height: 'hide'
          });
          $("#vuejs").animate({
            height: 'show'
          });
        });

        $("#btn-front").click(function(){
            $("#vuejs").animate({
              height: 'hide'
            });
            $("#all").animate({
              height: 'hide'
            });
            $("#back").animate({
              height: 'hide'
            });
            $("#front").animate({
              height: 'show'
            });
          });

        
      });




function navFunction(){

   if(window.scrollY == 0){
    document.getElementById('nav').style.backgroundColor= "transparent";
    document.getElementById('nav').style.transition = '1s';
    document.getElementById('nav').style.transform = 'scale(1)';
   }
   else{
       if(window.scrollY > 399){
         document.getElementById('nav').classList.remove('bg-transparent');
         document.getElementById('nav').style.backgroundColor= "#6c757d";
         document.getElementById('nav').style.color= "#fff";   
         document.getElementById('nav').style.transition = '1s';
         document.getElementById('nav').style.transform = 'scale(1.1)'; 
       }
   }
    
    
}
 
/* DEBUT JS modal devis */
  var devisObject = {
    type: 0,
    charte: 0,
    domaine: 0,
    admin: 0
  };

  var modalDevis = document.getElementById('modal-devis');
  

  var detailTop = document.getElementById('detail-top');
  var chaineDetailTop = document.createElement('h3');
  chaineDetailTop.textContent = 'Détail de vos selections';

  var detailBot = document.getElementById('detail-bot');
  var chaineDetailBot = document.createElement('h4');

  var types = modalDevis.getElementsByClassName('cadre');
  var chaineType = document.createElement('p');
  var verifType = 0;
  var prixType = 0;

  var chartes = document.getElementById('select-charte');
  var chaineCharte = document.createElement('p');;
  var verifCharte = 0;
  var prixCharte = 0;

  var domaines = [document.getElementById('radio-domaine-sans'), document.getElementById('radio-domaine-avec')];
  var chaineDomaine = document.createElement('p');;
  var verifDomaine = 0;

  var admins = [document.getElementById('radio-administration-sans'), document.getElementById('radio-administration-avec'), document.getElementById('radio-administration-avec-plus')];
  var chaineAdmin = document.createElement('p');;
  var verifAdmin = 0;

  var verfiPrix = 0;

  /* DEBUT TYPE */

    /* SITE VITRINE */
      types[0].addEventListener('click', function(){


        //VERIF
        if(verifType == 0)
        {
          //STRING value
          chaineDetailTop.classList.add('text-right');
          detailTop.appendChild(chaineDetailTop);

          chaineType.textContent ='Type de projet:';
          chaineType.classList.add('m-0', 'mt-5', 'font-size-13');
          detailTop.appendChild(chaineType);

          chaineType = document.createElement('p');
          chaineType.textContent = '500€*   -   Site vitrine';
          chaineType.classList.add('text-uppercase', 'font-weight-light', 'font-size-13');
          detailTop.appendChild(chaineType);

          verifType = 1;
        }
        else{
          chaineType.textContent = '500€*   -   Site vitrine';
        }

        //DIV take change
        types[0].style.backgroundColor = '#000';
        types[0].style.color = '#fff';

        //DIV not change
        types[1].style.backgroundColor = '#fff';
        types[1].style.color = '#000';
        types[2].style.backgroundColor = '#fff';
        types[2].style.color = '#000';

        //SAVE value
        devisObject.type = 0;
        prixType = 500;
        

        // SHOW next step
        document.getElementById('charte').hidden = false;
      });
    /* SITE VITRINE */

    /* SITE PERSONNALISE */
      types[1].addEventListener('click', function(){

        //VERIF
        if(verifType == 0)
        {
          //STRING value
          chaineDetailTop.classList.add('text-right');
          detailTop.appendChild(chaineDetailTop);

          chaineType.textContent ='Type de projet:';
          chaineType.classList.add('m-0', 'mt-5', 'font-size-13');
          detailTop.appendChild(chaineType);

          chaineType = document.createElement('p');
          chaineType.textContent = '700€*   -   Site personnalisé';
          chaineType.classList.add('text-uppercase', 'font-weight-light', 'font-size-13');
          detailTop.appendChild(chaineType);

          verifType = 1;
        }
        else{
          chaineType.textContent = '700€*   -   Site personnalisé';
        }
        
        types[1].style.backgroundColor = '#000';
        types[1].style.color = '#fff';

        types[0].style.backgroundColor = '#fff';
        types[0].style.color = '#000';
        types[2].style.backgroundColor = '#fff';
        types[2].style.color = '#000';

        //SAVE value
        devisObject.type = 1;
        prixType = 700;

        //SHOW next step
        document.getElementById('charte').hidden = false;
        
      });
    /* SITE PERSONNALISE */

    /* SITE E-COMMERCE */
      types[2].addEventListener('click', function(){

        //VERIF
        if(verifType == 0)
        {
          //STRING value
          chaineDetailTop.classList.add('text-right');
          detailTop.appendChild(chaineDetailTop);

          chaineType.textContent ='Type de projet:';
          chaineType.classList.add('m-0', 'mt-5', 'font-size-13');
          detailTop.appendChild(chaineType);

          chaineType = document.createElement('p');
          chaineType.textContent = '1 200€*   -   Site e-commerce';
          chaineType.classList.add('text-uppercase', 'font-weight-light', 'font-size-13');
          detailTop.appendChild(chaineType);

          verifType = 1;
        }
        else{
          chaineType.textContent = '1 200€*   -   Site e-commerce';
        }

        types[2].style.backgroundColor = '#000';
        types[2].style.color = '#fff';

        types[1].style.backgroundColor = '#fff';
        types[1].style.color = '#000';
        types[0].style.backgroundColor = '#fff';
        types[0].style.color = '#000';

        //SAVE value
        devisObject.type = 2;
        prixType = 1200;

        //SHOW next step
        document.getElementById('charte').hidden = false;
        
      });
    /* SITE E-COMMERCE */
  /* FIN TYPE */

  /* DEBUT CHARTE */
    chartes.addEventListener('click', function(event){


      //CHECK prix
      switch(event.target.value){
        case '0':
          prixCharte = 0;
          break;
        case '1':
          prixCharte = 120;
          break;
        case '2':
          prixCharte = 200;
          break;
      }

      //VERIF
      if(verifCharte == 0){
        chaineCharte.textContent = 'Selection graphique:';
        chaineCharte.classList.add('m-0', 'mt-5', 'font-size-13')
        detailTop.appendChild(chaineCharte);

        chaineCharte = document.createElement('p');
        chaineCharte.textContent =prixCharte+'€*   -   '+chartes[event.target.value].textContent;
        chaineCharte.classList.add('text-uppercase', 'font-weight-light', 'font-size-13');
        detailTop.appendChild(chaineCharte);

        verifCharte = 1;
      }
      else{
        chaineCharte.textContent = prixCharte+'€*   -   '+chartes[event.target.value].textContent;
      }

      //SAVE value
      devisObject.charte = event.target.value;
      
      //SHOW next step
      document.getElementById('domaine').hidden = false;
    });
  /* FIN CHARTE */

  /* DEBUT DOMAINE */
    domaines[0].addEventListener('click', function(){

      //VERIF
      if(verifDomaine == 0)
      {
        //STRING value

        chaineDomaine.textContent ='Chois du domaine et de l\'hébergement:';
        chaineDomaine.classList.add('m-0');
        detailTop.appendChild(chaineDomaine);

        chaineDomaine = document.createElement('p');
        chaineDomaine.textContent = 'Sans domaine n\'y hébergement';
        chaineDomaine.classList.add('text-uppercase');
        detailTop.appendChild(chaineDomaine);

        verifDomaine = 1;
      }
      else{
        chaineDomaine.textContent = 'Sans domaine n\'y hébergement';
      }

      //SAVE value
      devisObject.domaine = domaines[0].value;

      //SHOW next step
      document.getElementById('administration').hidden = false;
    });

    domaines[1].addEventListener('click', function(){

      //VERIF
      if(verifDomaine == 0)
      {
        //STRING value

        chaineDomaine.textContent ='Chois du domaine et de l\'hébergement:';
        chaineDomaine.classList.add('m-0');
        detailTop.appendChild(chaineDomaine);

        chaineDomaine = document.createElement('p');
        chaineDomaine.textContent = 'Avec domaine et hébergement';
        chaineDomaine.classList.add('text-uppercase');
        detailTop.appendChild(chaineDomaine);

        verifDomaine = 1;
      }
      else{
        chaineDomaine.textContent = 'Avec domaine et hébergement';
      }

      //SAVE value
      devisObject.domaine = domaines[1].value;

      //SHOW next step
      document.getElementById('administration').hidden = false;
    });
  /* FIN DOMAINE */

  /* DEBUT ADMINISTRATION */
    admins[0].addEventListener('click', function(){

      

      if(verfiPrix == 0){
        chaineDetailBot.textContent = 'Prix site vitrine';
        detailBot.appendChild(chaineDetailBot);
      }
      else{
        chaineDetailBot.textContent = 'Prix site vitrine';
      }
       //VERIF
       if(verifAdmin == 0)
       {
         //STRING value
 
         chaineAdmin.textContent ='Option d\'administration:';
         chaineAdmin.classList.add('m-0');
         detailTop.appendChild(chaineAdmin);
 
         chaineAdmin = document.createElement('p');
         chaineAdmin.textContent = 'Sans administration';
         chaineAdmin.classList.add('text-uppercase');
         detailTop.appendChild(chaineAdmin);
 
         verifAdmin = 1;
       }
       else{
        chaineAdmin.textContent = 'Sans administration';
       }

      //SAVE value
      devisObject.admin = admins[0].value;

      //SHOW next step
      document.getElementById('go-devis').hidden = false;
    });

    admins[1].addEventListener('click', function(){

      console.log(devisObject.admin + devisObject.charte + devisObject.domaine + devisObject.type);
      

      if(verfiPrix == 0){
        chaineDetailBot.textContent = 'Prix site personnalisé';
        detailBot.appendChild(chaineDetailBot);
      }
      else{
        chaineDetailBot.textContent = 'Prix site personnalisé';
      }

      //VERIF
      if(verifAdmin == 0)
      {
        //STRING value

        chaineAdmin.textContent ='Option d\'administration:';
        chaineAdmin.classList.add('m-0');
        detailTop.appendChild(chaineAdmin);

        chaineAdmin = document.createElement('p');
        chaineAdmin.textContent = 'Avec administration';
        chaineAdmin.classList.add('text-uppercase');
        detailTop.appendChild(chaineAdmin);

        verifAdmin = 1;
      }
      else{
       chaineAdmin.textContent = 'Avec administration';
      }

      //SAVE value
      devisObject.admin = admins[1].value;

      //SHOW next step
      document.getElementById('go-devis').hidden = false;
    });

    admins[2].addEventListener('click', function(){

      console.log(devisObject.admin + devisObject.charte + devisObject.domaine + devisObject.type);

      if(verfiPrix == 0){
        chaineDetailBot.textContent = 'Prix site e-commerce';
        detailBot.appendChild(chaineDetailBot);
      }
      else{
        chaineDetailBot.textContent = 'Prix site e-commerce';
      }

      //VERIF
      if(verifAdmin == 0)
      {
        //STRING value

        chaineAdmin.textContent ='Option d\'administration:';
        chaineAdmin.classList.add('m-0');
        detailTop.appendChild(chaineAdmin);

        chaineAdmin = document.createElement('p');
        chaineAdmin.textContent = 'Administration personnalisé';
        chaineAdmin.classList.add('text-uppercase');
        detailTop.appendChild(chaineAdmin);

        verifAdmin = 1;
      }
      else{
       chaineAdmin.textContent = 'Administration personnalisé';
      }

      //SAVE value
      devisObject.admin = admins[2].value;

      //SHOW next step
      document.getElementById('go-devis').hidden = false;
    });
  /* FIN ADMINISTRATION */

  console.log(chartes +' '+domaines[0].value+' '+ admins[2].value);
/* FIN JS modal devis */

    

    


