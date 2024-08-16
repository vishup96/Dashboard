window.document.onkeydown = function (e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
};

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById("light").style.display = "block";
  document.getElementById("fade").style.display = "block";
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById("light").style.display = "none";
  document.getElementById("fade").style.display = "none";
  lightBoxVideo.pause();
}



    $('.jobs-c').owlCarousel({
        autoplay: false,
        loop: true,
        margin: 21,
        dots:false,
         navText: [$('.am-prev'),$('.am-next')],
        nav: true,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1,
               
            },
            600: {
                items: 2,
              
            },
            1000: {
                items: 2
            }
        }
    });



    $('.recent-jobs-c').owlCarousel({
        autoplay: false,
        loop: true,
        margin: 20,
        dots:false,
         navText: [$('.rc-am-prev'),$('.rc-am-next')],
        nav: true,
        smartSpeed: 2000,
        responsive: {
            0: {
                items: 1,
               
            },
            600: {
                items: 2,
              
            },
            1000: {
                items: 3
            }
        }
    });



var xValues = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,22,22];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [5,8,4,8,9,10,6,3,2,7,15,16,5,8,4,8,9,10,6,3,2,7,15,16],
      borderColor: "#3751FF",
      fill: true,
      borderWidth:2,
    }, { 
      data: [2,3,4,9,9,2,1,7,9,8,3,14,19,22,2,3,4,9,9,2,1,7,9,8,3,14,19,22],
      borderColor: "#DFE0EB",
      fill: false,
      borderWidth:2,
    }]
  },
  options: {
    legend: {display: false},
     scales: {
        xAxes: [{
            gridLines: {
                display:false,

            }
        }],
        yAxes: [{
            gridLines: {
                display:true
            }   
        }]
    }
  },

});


     jQuery(document).ready(function($) {
     $(function () {
  $("#search-menu").removeClass("toggled");

  $("#search-icon").click(function (e) {
    e.stopPropagation();
    $("#search-menu").toggleClass("toggled");
    $("#popup-search").focus();
  });

  $("#search-menu input").click(function (e) {
    e.stopPropagation();
  });

  $("#search-menu, body").click(function () {
    $("#search-menu").removeClass("toggled");
  });
});
 });


//  browse function

     document.getElementById("uploadBtn").onchange = function () {
  document.getElementById("uploadFile").value = this.value.replace(
    "C:\\fakepath\\",
    ""
  );
};


     document.getElementById("uploadBtnthumb").onchange = function () {
  document.getElementById("uploadFilethumb").value = this.value.replace(
    "C:\\fakepath\\",
    ""
  );
};


     document.getElementById("uploadBtnviedo").onchange = function () {
  document.getElementById("uploadFilevideo").value = this.value.replace(
    "C:\\fakepath\\",
    ""
  );
};


     document.getElementById("uploadlogoBtn").onchange = function () {
  document.getElementById("uploadlogo").value = this.value.replace(
    "C:\\fakepath\\",
    ""
  );
};

// upload image

function initImageUpload(box) {
  let uploadField = box.querySelector(".image-upload");

  uploadField.addEventListener("change", getFile);

  function getFile(e) {
    let file = e.currentTarget.files[0];
    checkType(file);
  }

  function previewImage(file) {
    let thumb = box.querySelector(".js--image-preview"),
      reader = new FileReader();

    reader.onload = function () {
      thumb.style.backgroundImage = "url(" + reader.result + ")";
    };
    reader.readAsDataURL(file);
    thumb.className += " js--no-default";
  }

  function checkType(file) {
    let imageType = /image.*/;
    if (!file.type.match(imageType)) {
      throw "Datei ist kein Bild";
    } else if (!file) {
      throw "Kein Bild gewählt";
    } else {
      previewImage(file);
    }
  }
}

// initialize box-scope
var boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
  let box = boxes[i];
  initDropEffect(box);
  initImageUpload(box);
}

/// drop-effect
function initDropEffect(box) {
  let area,
    drop,
    areaWidth,
    areaHeight,
    maxDistance,
    dropWidth,
    dropHeight,
    x,
    y;

  // get clickable area for drop effect
  area = box.querySelector(".js--image-preview");
  area.addEventListener("click", fireRipple);

  function fireRipple(e) {
    area = e.currentTarget;
    // create drop
    if (!drop) {
      drop = document.createElement("span");
      drop.className = "drop";
      this.appendChild(drop);
    }
    // reset animate class
    drop.className = "drop";

    // calculate dimensions of area (longest side)
    areaWidth = getComputedStyle(this, null).getPropertyValue("width");
    areaHeight = getComputedStyle(this, null).getPropertyValue("height");
    maxDistance = Math.max(parseInt(areaWidth, 10), parseInt(areaHeight, 10));

    // set drop dimensions to fill area
    drop.style.width = maxDistance + "px";
    drop.style.height = maxDistance + "px";

    // calculate dimensions of drop
    dropWidth = getComputedStyle(this, null).getPropertyValue("width");
    dropHeight = getComputedStyle(this, null).getPropertyValue("height");

    // calculate relative coordinates of click
    // logic: click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center
    x = e.pageX - this.offsetLeft - parseInt(dropWidth, 10) / 2;
    y = e.pageY - this.offsetTop - parseInt(dropHeight, 10) / 2 - 30;

    // position drop and animate
    drop.style.top = y + "px";
    drop.style.left = x + "px";
    drop.className += " animate";
    e.stopPropagation();
  }
}
