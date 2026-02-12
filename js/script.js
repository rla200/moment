$(document).ready(function () {
    // 햄버거 버튼 클릭 이벤트
    $('#hamburger-1').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
        $('#nav-overlay').toggleClass('active');
    });

    // 오버레이 바깥쪽 클릭 시 닫기
    $(document).on('click', function (e) {
        if (!$(e.target).closest('#hamburger-1, #nav-overlay').length) {
            $('#nav-overlay').removeClass('active');
            $('#hamburger-1').removeClass('is-active');
        }
    });

    $(function () {
        // 2. 메인 스와이퍼 초기화 (충돌 방지 선택자) 
        var mainSwiper = new Swiper(".mySwiper", {
            loop: true,
            speed: 800,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                // #visual 내부의 버튼임을 명시적으로 지정
                nextEl: ".mySwiper .swiper-button-next",
                prevEl: ".mySwiper .swiper-button-prev",
            },
        });


        // 3. 메인 스와이퍼 초기화 (충돌 방지 선택자)
        new Swiper(".mySw1", {
            navigation: {
                nextEl: ".swiper2-button1-next",
                prevEl: ".swiper2-button1-prev",
            },
        });
    });
});

var swiper = new Swiper(".mySw2", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper3-button3-next",
        prevEl: ".swiper3-button3-prev",
    },
});


//클릭이동

//처음에 .option 요소를 숨김
$(".option").hide();

$(".nav_btn").click(function () {
    $(".option").slideToggle();
    $(".nav_btn img").toggleClass("turn");
});

function option1() {
    $(".lang").text("EN");
    $(".option").slideUp(0);
    $(".nav_btn img").removeClass("turn");
}

function option2() {
    $(".lang").text("CN");
    $(".option").slideUp(0);
    $(".nav_btn img").removeClass("turn");
}


//타이핑

var typingBool = false;
var typingldx = 0;
var typingTxt = $(".typing-txt").text();
// 타이핑된 텍스트를 가져온다
typingTxt = typingTxt.split("");
//한글자씩 자른다
if (typingBool == false) {
    //타이핑이 진행되지 않았다면
    typingBool = true;
    //타이핑 스피드 설정
    var tylnt = setInterval(typing, 100);
    function typing() {
        if (typingldx < typingTxt.length) {
            // 타이핑될 텍스트 길이만큼 반복
            $(".typing").append(typingTxt[typingldx]);
            // 한글자씩 이어준다
            typingldx++;

        } else {
            // 끝나면 반복종료
            clearInterval(tylnt)
        }
    }
}


// 룸 탭 전환
function openRoom(evt, boardName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("room_board");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        x[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("opacity");
    }
    const target = document.getElementById(boardName);
    target.style.display = "block";
    target.classList.add("active");
    evt.currentTarget.classList.add("opacity");
}

// 사진 탭 전환 (Board01)
function openPhoto(evt, photoName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("photo_board");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        x[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tablink1");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("opacity1");
    }
    const target = document.getElementById(photoName);
    target.style.display = "block";
    target.classList.add("active");
    evt.currentTarget.classList.add("opacity1");
}

// 사진 탭 전환 (Board02)
function openPhoto1(evt, photoName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("photo1_board");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        x[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tablink2");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("opacity2");
    }
    const target = document.getElementById(photoName);
    target.style.display = "block";
    target.classList.add("active");
    evt.currentTarget.classList.add("opacity2");
}

// 언어 변경 함수
function option1() { $(".lang").text("EN"); }
function option2() { $(".lang").text("CN"); }

// 초기 로드 시 탭 활성화
window.addEventListener("DOMContentLoaded", function () {
    // 메인 탭 초기화
    const mainTab = document.querySelector("#box1 .tablink");
    if (mainTab) mainTab.click();

    // 갤러리1 초기화 (두 번째 썸네일 활성화)
    const gallery1 = document.querySelectorAll("#box2 .tablink1")[1];
    if (gallery1) gallery1.click();

    // 갤러리2 초기화
    const gallery2 = document.querySelector("#box3 .tablink2")[1];
    if (gallery2) gallery2.click();
});


//링크 이동

window.addEventListener("load", function () {

    // URL에서 #container 값 가져오기
    const hash = window.location.hash;

    if (hash) {
        const target = document.querySelector(hash);

        if (target) {
            // 헤더 높이 (필요하면 숫자 조절)
            const headerHeight = 120;

            const targetPosition =
                target.getBoundingClientRect().top
                + window.pageYOffset
                - headerHeight;

            // 부드럽게 이동
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        }
    }
});

//top 버튼 
$(function () {
    // 1. 클릭 시 부드럽게 이동
    $(".top a").click(function (e) {
        // [중요] 기본 이동 동작 방지
        e.preventDefault();

        $("html, body").stop().animate({
            scrollTop: 0
        }, 1000); // 2000은 너무 느릴 수 있어 1000(1초)으로 조절했습니다.
    });

    // 2. 일정 구간부터 버튼 나타나게 하기
    $(".top a").hide();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".top a").fadeIn();
        } else {
            $(".top a").fadeOut();
        }
    });
});
