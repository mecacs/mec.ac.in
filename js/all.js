 
var docElem = window.document.documentElement;
var view=false;
$(window).load(function()
  {

    setTimeout(function()
      {
         $("#loadingpage").fadeOut("slow");
    view=true;
    $("#pgcon").css({"display":"block"});
  },3000);
   


  });


$(document).ready(function(){


if(view==false)
{
$("#pgcon").css({"display":"none"});
}

jQuery.fn.exists = function(){return this.length>0;}

setInterval(function (){
          recalcscrolltofix();
          
        },5000);

    var hlocatn=0.0;
	 var $timeline_block = $('.cd-timeline-block');


	 //when added overflow occurs in x-direction sccrollbar appears and dissappears.
  //hide timeline blocks which are outside the viewport
  $timeline_block.each(function(){
    if($(this).offset().top> $(window).scrollTop()+$(window).height()*0.75) {
      $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    }
  });

 
  //on scolling, show/animate timeline blocks when enter the viewport
  $(window).on('scroll', function(){
    $timeline_block.each(function(){
      if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75-30 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
        $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
      }
    });
  });
  //navbar.js starts
  
  
  
    
  

  var ht = $("nav").outerHeight(true);
    function recalcscrolltofix()   //recalculate scroll to fix 
    {
      
          
          $('.location').trigger('detach.ScrollToFixed');

         
        
          $(".location").scrollToFixed({ bottom:0,limit: $(".contain2").offset().top-$(".location").height()});

          if($("#stats").exists())
          {

          $("#stats .transpbox").trigger('detach.ScrollToFixed');
          $("#stats .transpbox").scrollToFixed({marginTop:$("#navbarcont").outerHeight()});
          }
    }

    
        

        
         //icon bar and  button colors
   $(".icon-bar").css({"background-color":"rgb(180,180,180)"});
   $(".navbar-header button").css({"background-color":"rgb(3,113,164)","border-radius":"0px","border":"none"}).hover(
    function ()
    {
      $(".icon-bar").css({"background-color":"white"});
    },
      function ()
      {
        $(".icon-bar").css({"background-color":"rgb(180,180,180)"});
      }
    );

    //initial color of 
    for(i=1;i<=6;i++) //link color initially to 200,200,200
    {
      $("#nav" + i).css({"color":"rgb(250,250,250)"});
    }

    $("#popdiv.navlinks a").css({"color":"white"});
          

        
        
    /*finding width of scrollbar*/
     var $inner = jQuery('<div style="width: 100%; height:200px;">test</div>'),
     $outer = jQuery('<div style="width:200px;height:150px; position: absolute; top: 0; left: 0; visibility: hidden; overflow:hidden;"></div>').append($inner),
     inner = $inner[0],
     outer = $outer[0];
   
    jQuery('body').append(outer);
    var width1 = inner.offsetWidth;
    $outer.css('overflow', 'scroll');
    var width2 = outer.clientWidth;
    $outer.remove();
    var sclbar_width = width1-width2;
    
    

    var win_width = $(window).width(); /*checking initially to switch accordion/hover effect*/
    var givelinks=true;
    if((win_width + sclbar_width)<768)
    {   
      givelinks=false;
      /*adding accordion effect and removing hover box(popdiv) if <768px initially*/
       $("#navigation a[data-parent='#nav-parent']").removeClass("custom-link");
    
        $(".navlinks").addClass("panel ");
        $("#nav-parent").addClass("panel-group").removeClass("nav-justified");
        $("#popdiv").css({"display":"none"});
        for(var i=0;i<6;i++)
        {
          $("#nav" + (i+1)).attr("href","#nav-cont" + i); //adding href attribute ..for accordion effect
        }                                                     //bootstrap

    }

    else
    {   /*removing accordion effect*/ 
      givelinks=true;
        $(".navlinks").removeClass("panel");
      $("#navigation a[data-parent='#nav-parent']").addClass("custom-link");
        $("#nav-parent").removeClass("panel-group").addClass("nav-justified");
        for(var i=0;i<6;i++)
        {
          $("#nav" + (i+1)).removeAttr("href");
    
        }


    }

    //mainpage
    //setting color of links in about-us accordion to "blue" (cant do directly cause of conflict.)
    $("#abvm .panel-title a").click(function(){
      setTimeout(function (){

        recalcscrolltofix();
       

      },500);
      $(this).css({"color":"#0371A3"});
    });


    height=$("#header").outerHeight(true);

    /*checking dynamically to switch accordion/hover effect*/
    var grtr = false,height; //use of these variables to stop repeating same when resized.
    var lessr = false,read = true,top=0;
    var once=true;
    
    $(".navbar-header button").click(function ()
    {
    
        if(read==true)
        {
          once=true;
        $('nav').trigger('detach.ScrollToFixed');
        top=(window.pageYOffset || docElem.scrollTop)-height;

        if(top<0)top=0;

         $("nav").css({"position":"relative","top":top+"px","z-index":"10000"});
        read=false;
        }
        else
        { read=true;
          once=false;
              $("nav").css({"position":"relative","top":"0px","z-index":"10000"});
             $("nav").scrollToFixed();
             $("#navigation").css({"height":ht});


        }
      setTimeout(function (){

        recalcscrolltofix();
       

      },1100);


    });

     var lastbx;
   if($("#stats").exists())
    {
     $("#stats .statbox").each(function(){
          
          lastbx=this;
          
        });
      hlocatn = $(lastbx).offset().top;
    }
  
   
    //when window resized
    $(window).resize(function ()
    {
       if($("#stats").exists())
      {
        hlocatn = $(lastbx).offset().top-$(lastbx).outerHeight();

      }

      //recalculating scrolltofixed
      setTimeout(function (){
          recalcscrolltofix();
        },100);

      for(i=1;i<=6;i++)
      {

      
      $("#nav" + i).css({"background-color":"rgb(3,113,164)","color":"rgb(250,250,250)"});
      }
      
      height=$("#header").outerHeight(true);
      ht = $("nav").outerHeight(true);

      var win_width = $(window).width();

  
      if((win_width + sclbar_width)< 768)//changing navbar effects accordingly
      { 
        givelinks=false;
        grtr = false;
        if(!lessr)
          {
                lessr=true;

                $("#popdiv").css({"display":"none"});/*removing hover box*/

                /*adding accordion effect*/
                $("#navigation a[data-parent='#nav-parent']").removeClass("custom-link");
                $(".navlinks").addClass("panel");
              $("#nav-parent").addClass("panel-group").removeClass("nav-justified");
              for(var i=0;i<6;i++)
              {
                $("#nav" + (i+1)).attr("href","#nav-cont" + i);
              }
         
          
          }
      }

      if((win_width + sclbar_width)>= 768)
      {  
        givelinks=true;
          lessr=false;
          if(!grtr)
          {      
            grtr = true;
            /*removing any open accordion panels*/
            for(var i=0;i<6;i++)
            {
                $("#nav-cont" + i).removeClass("in");
            }
                          
                         /*removing accordion effect*/ 
         $(".navlinks").removeClass("panel");
         $("#navigation a[data-parent='#nav-parent']").addClass("custom-link");
         $("#nav-parent").removeClass("panel-group").addClass("nav-justified");
         $("#navbar-main").removeClass("in")
          for(var i=0;i<6;i++)
          {
            $("#nav" + (i+1)).removeAttr("href");

          }

                  
          }

      }
    });/*window.resize() ends*/



  var z,show;
  var l =0;
    /*hover effect in widescreens>768*/

  
  
//if scrolled to top above opened navbar ..autoclosing it.
  $(document).scroll(function ()
  {
     if($("#stats").exists())
          {
            if((window.pageYOffset || docElem.scrollTop)>=hlocatn)
             {

                  $("#stats .transpbox").fadeOut("slow");
             }
              if((window.pageYOffset || docElem.scrollTop)<hlocatn)
             {

                  $("#stats .transpbox").fadeIn("slow");
             }
           }  
    if((window.pageYOffset || docElem.scrollTop)>height)
          {
             $("#popdiv").css({"display":"none"});
           }

           if(top!=0)
           if((window.pageYOffset || docElem.scrollTop)<top+height)
          {
            if(once == true)
            {
              once=false;
            $("#navigation .navbar-header button").addClass("collapsed");  
            $(".navbar-header button").click();
            }
           }



  });//document.scroll ends



  //when clicked on tab elements in accordion navbar...highlighting when clicked
  var k =null;
  $("#navbar-main [data-parent='#nav-parent']").click(function ()
    {
      setTimeout(function()
        {
          recalcscrolltofix();
        },1100);
      
      
      if(k!=null)
      {
        $(k).data("clicked",false);
        $(k).css({"background-color":"rgb(3,113,164)","color":"rgb(250,250,250)"});
      }

      $(this).css({"background-color":"rgb(0,50,80)","color":"rgb(250,250,250)"});
      $(this).data("clicked",true);
      k=this;

      


    });//click fn ends

  //in hovering navbar showing contents accordingly
   $(".navlinks").hover(
    function ()
    {    var win_width = $(window).width();
             
        if((win_width + sclbar_width)>=768)/*if >768 , display box and contents acordingly*/
        {
          if((window.pageYOffset || docElem.scrollTop)<=height)
          {

          $("#popdiv").css({"display":"block"});
          show=true;
         
          }
        

          if((window.pageYOffset || docElem.scrollTop)>height)
          {
             $("#popdiv").css({"display":"none"});
             show=false;
             for( var i=0;i<6;i++)
            {
                      
              if($("#nav" + (i+1)).is(":hover"))/*if navlinks hovered*/
              {
                             
                $("#links" + (i+1)).fadeIn().css({"display":"block"}).siblings().css({"display":"none"});
                              
                $("#nav" + (i+1)).css({"background-color":"rgb(0,50,80)","color":"rgb(250,250,250)"});
                                 
                                

              }
            }
             
          }

          if(show==true)
          for( var i=0;i<6;i++)
          {
                     
            if($("#nav" + (i+1)).is(":hover"))/*if navlinks hovered*/
            {
                            
              $("#links" + (i+1)).fadeIn().css({"display":"block"}).siblings().css({"display":"none"});
                            
              $("#nav" + (i+1)).css({"background-color":"rgb(0,50,80)","color":"rgb(250,250,250)"});
                               
                              

            }
  
            /*making nav links "clicked" according to popdiv content*/
            else if($("#links" + (i+1)).is(":hover"))
            {
              
              $("#nav" + (i+1)).css({"background-color":"rgb(0,50,80)","color":"rgb(250,250,250)"});
            
              
                          
            }

            else
            {
              $("#nav" + (i+1)).css({"background-color":"rgb(3,113,164)","color":"rgb(250,250,250)"});
                            
            }
            
            
          }
          
                      
                
        }
        else
          {   for(i=0;i<6;i++)
            {
              if($("#nav" + (i+1)).is(":hover"))/*if navlinks hovered*/
              {
                              
                
                $("#nav" + (i+1)).css({"background-color":"rgb(0,50,80)","color":"rgb(250,250,250)"});
                                   
                                

              }
              else if($("#nav-cont" +(i)).is(":hover"))
              {
                $("#nav" + (i+1)).css({"background-color":"rgb(0,50,80)","color":"rgb(250,250,250)"});
              }
            }
          }
        
    },/*mouseover functn ends*/
    
    function ()
    {
    $("#popdiv").css({"display":"none"});

      

    for(i=1;i<=6;i++)
    {

      if(!($("#nav" + i).data("clicked")))//check whether clicked
      $("#nav" + i).css({"background-color":"rgb(3,113,164)","color":"rgb(250,250,250)"});

     
    
    }
    
    
    
    }/*mouseout functn ends*/

    ); /*hover check on navs ends*/

//making content appear on popdiv as links are hovered
var nav_id;
$("#popdiv a").hover(function ()
  {
         nav_id = $(this).text().replace(" ","-");
        
        $("#" +nav_id).fadeIn().removeClass("hide").siblings().addClass("hide");
  },
  function()
  {
     nav_id = $(this).text().replace(/ /g,"_");
     
    
     $("#" +nav_id).siblings().addClass("hide");
  }
  );



     //links in accordion
      var base="www.mec.ac.in/mec/";  //change here

 $("#navigation #nav-parent .custom-link").click(function()
        {
          if(givelinks)
          {
            
          window.location= $(this).attr("data-href");
          }
          
        });


//clubs
$("#clubs .cd-timeline-content .dntshow").hide();
$("#clubs .cd-timeline-content .cd-read-more").click(function(){
  $(this).siblings(".dntshow").toggle("500");
   setTimeout(function (){

        recalcscrolltofix();
       

      },500);
});

//footer2.js..
   $(".location").scrollToFixed({ bottom:0,limit:$(".contain2").offset().top-$(".location").height()});
   $("nav").scrollToFixed();
        if($("#stats").exists())
          {

          
          $("#stats .transpbox").scrollToFixed({marginTop:$("#navbarcont").outerHeight()});
          }
         

   

  
//map

//hide the map initially and load on toggle
    $("#map").hide();
    $("#location").click(function(){
        $("#map").slideToggle("slow",load);
    });

    
function load() 
  {
      if (GBrowserIsCompatible()) 
    {       
      var map = new GMap2(document.getElementById("map"));
        map.setCenter(new GLatLng(10.028495, 76.328684), 13);
        map.setUIToDefault();

        var polyline = new GPolyline([
  new GLatLng(10.028655, 76.328966),
  new GLatLng(10.028865, 76.328976),
  new GLatLng(10.029865, 76.329096),
  new GLatLng(10.031395, 76.329165),
  new GLatLng(10.031395, 76.329699),
  new GLatLng(10.031895, 76.329699),
  new GLatLng(10.034500, 76.329000),//temple
  new GLatLng(10.034158,76.328223),
  new GLatLng(10.033688,76.327423),
  new GLatLng(10.033424,76.325653),
  new GLatLng(10.032124,76.323153),
  new GLatLng(10.031902,76.321930),
  new GLatLng(10.030809,76.320750),
  new GLatLng(10.029953,76.319055),
  new GLatLng(10.029953,76.318014),
  new GLatLng(10.029298,76.317161),
  new GLatLng(10.028273,76.316501),
  new GLatLng(10.027248,76.315010),
  new GLatLng(10.026012,76.312226),
  new GLatLng(10.027402,76.311185),
  new GLatLng(10.029081,76.310526),//toll
  new GLatLng(10.024707,76.307956),
  new GLatLng(10.023408,76.308911),
  new GLatLng(10.021084,76.310230),
  new GLatLng(10.018902, 76.310729),
  new GLatLng(10.012557, 76.311743),
  new GLatLng(10.005051, 76.312902),
  new GLatLng(9.991759, 76.315080),
  new GLatLng(9.985276, 76.316169),
  new GLatLng(9.978810, 76.317081),
  new GLatLng(9.968300, 76.318130)//vytilla
 ], "#ff0000", 3);
map.addOverlay(polyline);
var polyline = new GPolyline([
  //new GLatLng(10.028495, 76.328684),//College
 new GLatLng(10.028655, 76.328966),
  new GLatLng(10.028558,76.329081),
  new GLatLng(10.027771,76.329172),
  new GLatLng(10.027571,76.329870),
  new GLatLng(10.027755,76.330385),
  new GLatLng(10.027470,76.331431),
  new GLatLng(10.027312,76.331972),
  new GLatLng(10.026504,76.331903),
  new GLatLng(10.025658,76.332021),
  new GLatLng(10.024771,76.332584),
  new GLatLng(10.024111,76.332793),
  new GLatLng(10.023387,76.333008),
  new GLatLng(10.022584,76.333228),
  new GLatLng(10.021792,76.333673),
  new GLatLng(10.020750,76.334450),//NGO
  new GLatLng(10.019435,76.334971),
  new GLatLng(10.017819,76.335872),
  new GLatLng(10.016002,76.336087),
  new GLatLng(10.015553,76.335867),
  new GLatLng(10.015104,76.335325),
  new GLatLng(10.014554,76.334306),
  new GLatLng(10.013614,76.331640),
  new GLatLng(10.012663,76.327767),
  new GLatLng(10.012172,76.325476),
  new GLatLng(10.011876,76.323658),
  new GLatLng(10.011274,76.321887),
  new GLatLng(10.010529,76.319645),
  new GLatLng(10.009689,76.317376),
  new GLatLng(10.008891,76.316389),
  new GLatLng(10.007407,76.315595),
  new GLatLng(10.005864,76.315257),
  new GLatLng(10.005442,76.314388),
  new GLatLng(10.004977,76.312666)//Palarivattom
 ],"#ff0000",3);
map.addOverlay(polyline);
var polyline = new GPolyline([
  new GLatLng(10.029081,76.310526),
  new GLatLng(10.052181, 76.319779),
  new GLatLng(10.060922, 76.322960),
  new GLatLng(10.064250, 76.326351),
  new GLatLng(10.070821, 76.331962)
  ], "#ff0000", 3);
map.addOverlay(polyline);
// Our info window content
var infoTabs = [
  new GInfoWindowTab("MEC", "<b>Model Engineering College,</b>Thrikkakara<br>")
  ];

var marker = new GMarker(map.getCenter());
GEvent.addListener(marker, "click", function() {
  marker.openInfoWindowTabsHtml(infoTabs);
});
map.addOverlay(marker);
marker.openInfoWindowTabsHtml(infoTabs);    
       function createMarker(point) {
  var marker = new GMarker(point);
  GEvent.addListener(marker, "click", function() {
    marker.openInfoWindowHtml("Model Engineering College Mens Hostel");
  });
  return marker;
}

 function createMarker1(point) {
  var marker = new GMarker(point);
  GEvent.addListener(marker, "click", function() {
    marker.openInfoWindowHtml("Trikkakara");
  });
  return marker;
}

 function createMarker2(point) {
  var marker = new GMarker(point);
  GEvent.addListener(marker, "click", function() {
    marker.openInfoWindowHtml("NGO Quaters");
  });
  return marker;
}

 function createMarker3(point) {
  var marker = new GMarker(point);
  GEvent.addListener(marker, "click", function() {
    marker.openInfoWindowHtml("Palarivattom");
  });
  return marker;
}

 function createMarker4(point) {
  var marker = new GMarker(point);
  GEvent.addListener(marker, "click", function() {
    marker.openInfoWindowHtml("Vytilla");
  });
  return marker;
}

 function createMarker5(point) {
  var marker = new GMarker(point);
  GEvent.addListener(marker, "click", function() {
    marker.openInfoWindowHtml("Toll");
  });
  return marker;
}

 function createMarker6(point) {
  var marker = new GMarker(point);
  GEvent.addListener(marker, "click", function() {
    marker.openInfoWindowHtml("To Ernakulam");
  });
  return marker;
}

 function createMarker7(point) {
  var marker = new GMarker(point);
  GEvent.addListener(marker, "click", function() {
    marker.openInfoWindowHtml("To Airport");
  });
  return marker;
}

// Creates a marker at the given point with the given number label
var point = new GLatLng(10.02927, 76.328255);
  map.addOverlay(createMarker(point));
  
var point = new GLatLng(10.034500, 76.329000);
  map.addOverlay(createMarker1(point));
   
  var point = new GLatLng(10.020909, 76.334483);
  map.addOverlay(createMarker2(point)); 

  var point = new GLatLng(10.004977,76.312666);
  map.addOverlay(createMarker3(point)); 
  
  var point = new GLatLng(9.968300, 76.318130);
  map.addOverlay(createMarker4(point));
 
 var point = new GLatLng(10.029081,76.310526);
  map.addOverlay(createMarker5(point));

var point = new GLatLng(10.002319, 76.306181);
  map.addOverlay(createMarker6(point)); 

var point = new GLatLng(10.070821, 76.331962);
  map.addOverlay(createMarker7(point)); 
}
}   

//footer2.js ends

//news and events js starts...

    

  /*initialising the marquee and selecting initially public */
   $("#public").addClass("active in").css({"display":"block"}).siblings().css({"display":"none"});
   $("#line1").addClass("color1");
   
  $('.nae-marquee').marquee();
   
      
         
      
     /*selecting the item to show according to clicked button*/
    $(".nae-click").click(function ()
      {  
        $($(this).children().attr("href")).addClass("active").css({"display":"block"}).siblings().css({"display":"none"});
        
        for(var i=1;i<4;i++)
        { 
          var k = "line" + i;
          if($(this).find("div").attr("id")==k)
            {
              $("#line" + i).addClass("color" + i);
              clicked=i;
            }
            else
            {
               $("#line" + i).removeClass("color" + i);
            }

        }
       
        
      $('.nae-marquee').marquee();
    });

  

  var mq = $('.nae-marquee').marquee(); /*making the marquee stop when hovered and resume when out*/
  $('#nae-content').mouseover(function()
    {
      mq.marquee('pause');

    });
  $('#nae-content').mouseout(function()
    {
      mq.marquee('resume');
  
    });
//news and events.js ends







//calendar initialisation
 $("#my-calendar").zabuto_calendar({
        cell_border: true, today: true, show_days: true, weekstartson: 0,
        legend: [
            {type: "text", label: "Event", badge: "Date"}
        ],
        ajax: {
            /*url: "show_data.php",*/
            url: "data.json",
            modal: true
        }
    });
 // calendar ends   
        
         $("img.lazy").lazyload({
    effect:"fadeIn",
    threshold:0,
   });
         
    });



