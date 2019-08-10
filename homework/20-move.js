/*
*ele object 必须,要运动的节点
*attr string 必须,要改变的css的属性
*target number 必须,属性的终点值
* step number 选填,运动的速度
 */
window.Move =  (function(){//形成闭包,只使用了一次requestAnimationFrame
    window.requestAnimationFrame = window.requestAnimationFrame || function (f) {return setTimeout(f, 1000 / 60)};
    window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;
    return function(ele,attr,target,step=5){
 //获取ele元素的初始值
        let cssobj = ele.currentStyle || getComputedStyle(ele);
        //初始的值
        let sval = parseFloat( cssobj[attr] );
        //考虑初始值与目标值大小的问题
        let bool = sval > target;

        if(sval > target){
            step = -Math.abs(step);
        }else if(sval<target){
            step = Math.abs(step);
        }else{
            return;
        }

        function f(){
            sval += step;
            if( bool?sval<=target:sval>=target ){
                //当初始值大于目标值时,直到初始值小于目标值时,程序结束
                ele.style[attr] = target+'px';
            }else{
                ele.style[attr] = sval+'px';
                requestAnimationFrame(f);
            }
        }
        requestAnimationFrame(f);
    }
})();

















