$(document).ready(function(){
    $(document).mousemove(function(pos){
        let cursorX = pos.pageX
        let cursorY = pos.pageY

        let transX = ((7* cursorX) / 570) + 40;
        let transY = ((7* cursorY) / 570) + 50;

        $('h1').css({
            "background-position": transX + "%" + transY + "%"
        })
    })
})