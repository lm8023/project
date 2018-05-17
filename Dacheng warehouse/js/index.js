

(function () {

    // 获取元素
    var oWrap     = document.getElementById("wrap");
    var oImgWrap  = document.getElementsByClassName("imgs")[0];
    var oImgs     = document.querySelectorAll(".img");
    var oIdots    = document.querySelectorAll(".idot");
    var oPrev     = document.querySelector(".prev");
    var oNext     = document.querySelector(".next");
    var model     = new Model();
    var curImgIdx = 0; // 记录当前显示图片下标
    var timer     = null; // 定时器（自动轮播）


    // 加载图片
    loadingImgs(model.imgNames, oImgs);
    // 点击上一张
    oPrev.addEventListener("click", function () {
        // 如果当前正在做切换效果
        // 则点击无效
        if(sessionStorage.getItem("isAnimating")) {
            return;
        }
        if(curImgIdx == 0) {
            curImgIdx = 4;
        }else {
            curImgIdx--;
        }
        tab(970, oImgWrap);
        changeIdots(oIdots, curImgIdx);

    }, false);
    // 点击下一张
    oNext.addEventListener("click", next, false);
    // 点击小圆点
    for(var i = 0, len = oIdots.length; i < len; i++) {
        oIdots[i].addEventListener("click", function () {

            // offset = -(des - cur) * 500
            var desIdx = this.dataset["idx"];
            var offset = -(desIdx - curImgIdx) * 970;

            if(sessionStorage.getItem("isAnimating") || desIdx == curImgIdx) {
                return;
            }

            tab(offset, oImgWrap);
            curImgIdx = desIdx;
            changeIdots(oIdots, curImgIdx);
        }, false);
    }
    

    autoPlay();

    oWrap.addEventListener("mouseenter", stop, false);
    oWrap.addEventListener("mouseleave", autoPlay, false);


    function autoPlay() {
        timer = setInterval(function () {
            next();
        }, 3000);

    }
    function stop(e) {
        clearInterval(timer);
        timer = null;
    }
    
    function next() {
        if(sessionStorage.getItem("isAnimating")) {
            return;
        }
        if(curImgIdx == 4) {
            curImgIdx = 0;
        }else {
            curImgIdx++;
        }
        tab(-970, oImgWrap);
        changeIdots(oIdots, curImgIdx);
    }
})();













