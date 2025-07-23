document.addEventListener('DOMContentLoaded', () => {
  //서브메뉴 + 버튼 활성화
  document.querySelectorAll("#community_menu nav button, header li .subMenu a").forEach(button => {
    button.addEventListener('click' , function (){
      const targetId = this.getAttribute("aria-controls");

      document.querySelectorAll("#community_menu nav button, header li .subMenu a").forEach(el => {
        el.setAttribute("aria-expanded" , "false");

        document.querySelectorAll(`#community_menu nav button[aria-controls="${targetId}"],header li .subMenu a[aria-controls="${targetId}"]`).forEach(el =>{
          el.setAttribute("aria-expanded","true");
        });

        document.querySelectorAll("#notice , #contect , #gallery , #review").forEach(section => {
          section.setAttribute("hidden" , true);

          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.removeAttribute("hidden");
          }
        });
      });
    });
  });



}); //js end!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 