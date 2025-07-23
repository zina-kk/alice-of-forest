document.addEventListener('DOMContentLoaded', () => {
  const mainMenus = document.querySelectorAll('.mainMenu');

  mainMenus.forEach(i => {
    const parentLi = i.parentElement;
    const subMenu = parentLi.querySelector('.subMenu');

    if (subMenu) {
      parentLi.addEventListener('mouseenter', () => {
        subMenu.classList.add('active');
      });

      parentLi.addEventListener('mouseleave', () => {
        subMenu.classList.remove('active');
      });

      i.addEventListener('focus', () => {
        subMenu.classList.add('active');
      });

      const lastSM = subMenu.querySelector('a:last-child');

      lastSM.addEventListener('blur', () => {
        subMenu.classList.remove('active');
      });
    }
  });


    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab') || 'notice'; // 기본값 공지사항

    // 모든 섹션 숨기고
    document.querySelectorAll('#community_menu section').forEach(sec => sec.hidden = true);

    // 선택한 섹션 보이기
    const active = document.getElementById(tab);
    if (active) {
      active.hidden = false;

      // 버튼 aria-expanded 처리 (선택사항)
      document.querySelectorAll('#community_menu nav button').forEach(btn => {
        btn.setAttribute('aria-expanded', btn.getAttribute('aria-controls') === tab ? 'true' : 'false');
      });
    }
 


}); //js end!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 