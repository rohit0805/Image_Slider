//SlideContoller
var SlideContoller=(function(){
    var DOMstring={
        slider:"#slider",
        image:".image",
        right_slide:".right_slide",
        left_slide:".left_slide"
    };
    var selector={
        slider:document.querySelector(DOMstring.slider),
        image:document.querySelector(DOMstring.image),
        right_slide:document.querySelector(DOMstring.right_slide),
        left_slide:document.querySelector(DOMstring.left_slide)
    };
    var counter=Math.ceil(Math.random()*10);

    return{
        getDOM:function(){
            return DOMstring;
        },
        getSelector:function(){
            return selector;
        },
        RightShift:function(e){
            counter++;
            if(counter>10){
                counter=1;
            }
            selector.image.style.background=`url('./img/${counter}.jpg') no-repeat center center/cover`;
        },

        LeftShift:function(e){
            counter--;
            if(counter===0){
                counter=10;
            }
            selector.image.style.background=`url('./img/${counter}.jpg') no-repeat center center/cover`;
        }
    };

})();

//Controller
var Controller=(function(SlideCtrl){

    var SetupEventListener=function(){
        var selector=SlideCtrl.getSelector();
        selector.slider.addEventListener("mouseover",function(event){
            selector.right_slide.style.display="block";
            selector.left_slide.style.display="block";
        });
        selector.slider.addEventListener("mouseout",function(event){
            selector.right_slide.style.display="none";
            selector.left_slide.style.display="none";
        });
        selector.right_slide.addEventListener("click",function(){
            SlideCtrl.RightShift(event);
        });
        selector.left_slide.addEventListener("click",function(event){
            SlideCtrl.LeftShift(event);
        });
    };

    return{
        init:function(){
            SetupEventListener();
            SlideCtrl.RightShift();
        }
    };
})(SlideContoller);

Controller.init();