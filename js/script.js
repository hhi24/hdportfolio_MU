// 구동

$(document).ready(function() {

    // 메뉴
        $('#menu_button').on('click', function() {
            $('#navi').stop().slideToggle(300); 
        });

        
    // 위아래 방향키
    let currentIndex = 0; // 현재 페이지 인덱스 저장
    const pages = $('.page'); // 모든 페이지 요소 가져오기
    const totalPages = pages.length; // 전체 페이지 수

    // 페이지로 스크롤하는 함수
    function scrollToPage(index) {
        if (index >= 0 && index < totalPages) {
            const targetOffset = $(pages[index]).offset().top;
            $('html, body').stop().animate({ scrollTop: targetOffset }, 400);
        }
    }

    // 방향키 이벤트 처리
    $(document).on('keydown', function (event) {
        if (event.key === 'ArrowDown') {
            // 아래 방향키
            if (currentIndex < totalPages - 1) {
                currentIndex++;
                scrollToPage(currentIndex);
            }
        } else if (event.key === 'ArrowUp') {
            // 위 방향키
            if (currentIndex > 0) {
                currentIndex--;
                scrollToPage(currentIndex);
            }
        }
    });

})


// ===== 최상단으로 이동하는 함수 정의 =====
window.scrollToTop = function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  };
  