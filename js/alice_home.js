document.addEventListener('DOMContentLoaded', () => {
  //슬라이드
  const slides = document.getElementById('slide');
  const bar = document.querySelectorAll('#slideArea .pos_bar button');
  let num = 0;
  let interval;

  // 자동 슬라이드 함수
  const slide_left = () => {
    slides.style.transition = 'transform 1s';
    slides.style.transform = 'translateX(-100%)';

    setTimeout(() => {
      slides.style.transition = 'none';
      slides.append(slides.firstElementChild);
      slides.style.transform = 'translateX(0)';

      num++;
      if (num >= bar.length) num = 0;

      updateActive();
    }, 1000);
  };
  

  // 활성화 버튼 갱신 함수
  const updateActive = () => {
    bar.forEach(i => i.classList.remove('active'));
    bar[num].classList.add('active');
  };

  // 자동 슬라이드 시작
  interval = setInterval(slide_left, 3500);

  // 버튼 클릭 이벤트
  bar.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (index === num) return; // 같은 버튼이면 무시

      // 자동 슬라이드 멈춤
      clearInterval(interval);

      // 이동해야 할 차이 계산
      let diff = (index - num + bar.length) % bar.length;

      // 한 번에 여러 장 이동 (왼쪽으로)
      slides.style.transition = 'transform 1s';
      slides.style.transform = `translateX(-${diff * 100}%)`;

      setTimeout(() => {
        slides.style.transition = 'none';
        for (let i = 0; i < diff; i++) {
          slides.append(slides.firstElementChild);
        }
        slides.style.transform = 'translateX(0)';

        num = index;
        updateActive();
      }, 1000);
    });
  });

}); //js end!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 