
/*   window.addEventListener('load', function(event){
    alert('En continuant vous acceptez que certainnes fonctionnalité ne fonction pas. Site en cour de création.');
  }); */

    $(document).ready(function(){

  
      $('.projet-jeux').click(function(){
        window.open('projets/JEUX/index.html', '_blank');
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
 

    

    


