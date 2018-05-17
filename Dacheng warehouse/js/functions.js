



function loadingImgs(imgNames, oImgs) {
    var len     = oImgs.length,
        imgPath = "",
        idx     = 0;
    // 循环添加图片
    for(var i = 0; i < len; i++) {
        // idx = oImgs[i].getAttribute("data-idx");
        idx = oImgs[i].dataset["idx"];
        imgPath = imgNames[idx];
        oImgs[i].style.cssText = "background: url('" + imgPath + "') no-repeat center center";
    }
}


// 切换图片
function tab(offset, oImgWrap) {

    // 设置滚动帧动画
    var duration  = 800,
        interval  = 15,
        frames    = duration / interval,
        speed     = Math.ceil(offset / frames),
        curOffset = oImgWrap.offsetLeft,
        tarOffset = curOffset + offset;
    // 记录动画状态
    sessionStorage.setItem("isAnimating", true);
    var t = setInterval(function () {
        curOffset = oImgWrap.offsetLeft;
        if((offset < 0 && curOffset > tarOffset) ||(offset > 0 && curOffset < tarOffset)) {
            oImgWrap.style.left = curOffset + speed + "px";
        }else {
            clearInterval(t);
            // 移除动画状态
            sessionStorage.removeItem("isAnimating");
            oImgWrap.style.left = tarOffset + "px";
            // 边界值处理
            if(oImgWrap.offsetLeft < -4850) {
                oImgWrap.style.left = "-970px";
            }else if(oImgWrap.offsetLeft >-970) {
                oImgWrap.style.left = "-4850px";
            }
        }
    }, interval);
}

// 切换小圆点
function changeIdots(oIdots, index) {

    // 清除上一次显示样式
    for(var i = 0, len = oIdots.length; i < len; i++) {
        if(oIdots[i].classList.contains("active")) {
            oIdots[i].classList.remove("active");
            break;
        }
    }
    oIdots[index].classList.add("active");

}




























