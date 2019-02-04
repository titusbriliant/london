$(window).scroll(function() {
    var windowDiScroll = $(this).scrollTop();
    //console.log(windowDiScroll);
    if(windowDiScroll > 400) {
       // console.log(xxxx);
      // $("#makanan .card").addClass("tampil");
       $('#makanan .card').each(function (i) {
           setTimeout(
               function () {
                   $('#makanan .card').eq(i).addClass('tampil');
               },
               300 * (i+1));           
       }); 
    } 

}
);

