console.log("jeb");

$(document).ready(function () {

  $('#profile_ripples').ripples({
    resolution: 512,
    dropRadius: 10

  })
  const bars = document.querySelectorAll('.progress_bar');
  bars.forEach((bar) => {
    let percentage = bar.dataset.percent;
    let tooltip = bar.children[0];
    tooltip.innerText = percentage + "%";
    bar.style.width = percentage + "%";

  })

  let counters = document.querySelectorAll('.counter');

  function runcounter() {
    counters.forEach(counter => {
      counter.innerText = 0;

      let target = +counter.dataset.count
      let step = target / 100;


      let countInt = function () {
        let dispaly = +counter.innerText
        if (dispaly < target) {
          counter.innerText = Math.ceil(dispaly + step);
          setTimeout(countInt, 10)
        }
        else {
          counter.innerText = target;
        }
      }
      countInt()
    });
  }
  runcounter()
  let countersection = document.querySelector(".counter_wrapper");

  const sectionobserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {

      runcounter()
    }
  })
  sectionobserver.observe(countersection);



  //image filter jquery

  var $wrapper = $('.portfolio_wrapper');

  $wrapper.isotope({
    filter: "*",
    layoutMode: 'masonry',
    animationOptions: {
      duration: 750,
      easing: 'linear'
    }
  })


  let links = document.querySelectorAll(".tebs a")
  links.forEach((link) => {
    let selector = link.dataset.filter;

    link.addEventListener("click", (e) => {
      e.preventDefault()



      $wrapper.isotope({
        filter: selector,
        layoutMode: 'masonry',
        animationOptions: {
          duration: 750,
          easing: 'linear'
        }
      })
      links.forEach((link) => {
        link.classList.remove("active")
      })
      e.target.classList.add("active");

    })
  })

  $('.magnify').magnificPopup({
    type:'image',
    gallery:{
      enabled:true

    },
    zoom:{
      enable:true
    }
  })


  //slider

  $('.slider').slick({
    arrows:false,
    autoplay:true
  })
});