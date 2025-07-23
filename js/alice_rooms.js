document.addEventListener('DOMContentLoaded', () => {

  //rooms 팝업

  document.querySelectorAll("#room_img button").forEach(button => {
    button.addEventListener("click", e => {
        const img = e.currentTarget.querySelector("img");
        let src = img.getAttribute("src");
        const alt = img.getAttribute("alt");
        // 이미지 파일명 변경 (.jpg → -large.jpg)
        src = src.replace(".jpg", "-large.jpg");

        const popupImg = document.querySelector("#popup img");
        const popupTitle = document.querySelector("#popup h3");
        const popup = document.querySelector("#popup");

        popupImg.setAttribute("src", src);
        popupImg.setAttribute("alt", alt);
        popupTitle.textContent = alt;

        popup.style.display = "block";
        popup.style.opacity = 0;
        // fadeIn 효과
        setTimeout(() => popup.style.opacity = 1, 0);
    });
    });

    // 팝업 클릭 시 닫기
    document.querySelector("#popup").addEventListener("click", () => {
    const popup = document.querySelector("#popup");
    popup.style.opacity = 0;
    setTimeout(() => popup.style.display = "none", 300); // fadeOut 0.3초
    });

    // ESC 키로 닫기
    document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        const popup = document.querySelector("#popup");
        popup.style.opacity = 0;
        setTimeout(() => popup.style.display = "none", 300);
    }
    });



}); //js end!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 