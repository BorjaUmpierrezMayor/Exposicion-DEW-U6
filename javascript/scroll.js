window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    let color = devolverColor(last_known_scroll_position);

    document.getElementById("fondo").style.backgroundColor = color;

    document.getElementById("texto").textContent = color.charAt(0).toUpperCase() + color.substring(1);
    function devolverColor(scrollY){
        let color = "";
        if(scrollY < 800){
            color = "red";
        }else if(scrollY < 1600){
            color = "purple";
        }else if(scrollY < 2400){
            color = "blue";
        }else if(scrollY < 3200){
            color = "green";
        }else{
            color = "yellow";
        }
        return color;
    }
});