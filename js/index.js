document.addEventListener("DOMContentLoaded",()=>{

    // 위로 스크롤
     const btnTop = document.querySelector(".btn-top")
    if(btnTop){
        btnTop.addEventListener("click",()=>{
            window.scrollTo({top:0,behavior:"smooth"})
        })
    }

    // 스티커 제목 연해지기
    const detailTitle = document.querySelector(".detail-title")
    window.addEventListener("scroll",()=>{
        let windowHeight = window.innerHeight
        let scrollValue = window.scrollY
        console.log(scrollValue)
        let opacity = 1.1 - (scrollValue / windowHeight*3)
        opacity = Math.max(0.1, Math.min(1, opacity))
        detailTitle.style.opacity = opacity
    })

    // 전체 메뉴 버튼
    const btnMenu = document.querySelector(".btn-menu")
    const smartMenu = document.querySelector(".smart-menu")
    let statusMenu = false
    const btnImg = document.querySelector(".btn-img")

    btnMenu.addEventListener("click",()=>{
        if(statusMenu){

            smartMenu.classList.remove("on")
            btnImg.setAttribute('src','./img/btn-menu.svg')
            statusMenu = false
        }else{

            smartMenu.classList.add("on")
            btnImg.setAttribute('src','./img/btn-close-white.svg')
            statusMenu = true
        }
    })

    window.addEventListener('scroll',()=>{
        smartMenu.classList.remove("on")
        btnImg.setAttribute('src','./img/btn-menu.svg')
        statusMenu = false
    })
    
})