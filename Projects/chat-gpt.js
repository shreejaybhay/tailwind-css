{
  const button = document.getElementById("Chat-Btn");
  const div = document.getElementById("Chat-Btn-Div");

  var hide = 0;

  button.addEventListener("click", function () {
    if (hide == 0) {
      div.style.display = "block";
      hide = 1;
    } else {
      div.style.display = "none";
      hide = 0;
    }
  });
}

{
  const div = document.getElementById("Chat-Btn-Div");

  var hide = 0;

  div.addEventListener("click", function () {
    if (hide == 0) {
      div.style.display = "none";
      hide = 1;
    } else {
      div.style.display = "none";
      hide = 0;
    }
  });
}

{
  const button1 = document.getElementById("Chat-Btn1");
  const div1 = document.getElementById("Chat-Btn-Div1");

  var hide1 = 0;

  button1.addEventListener("click", function () {
    if (hide1 == 0) {
      div1.style.display = "block";
      button1.style.backgroundColor = "#2F2F2F";
      hide1 = 1;
    } else {
      div1.style.display = "none";
      button1.style.backgroundColor = "transparent";
      hide1 = 0;
    }
  });
}

{
  const div1 = document.getElementById("Chat-Btn-Div1");

  var hide1 = 0;

  div1.addEventListener("click", function () {
    if (hide1 == 0) {
      div1.style.display = "none";
      hide1 = 1;
    } else {
      div1.style.display = "none";
      hide1 = 0;
    }
  });
}

// Get the Button and Hidden Input Field by their IDs
const svgClick = document.getElementById("svg-click");
const hiddenInput = document.getElementById("hidden-input");

// Add a click event listener to the button
svgClick.addEventListener("click", () => {
  // Focus on the hidden input field
  hiddenInput.focus();
});

// {
//   const gptfourdiv = document.getElementById("GPT-4-div");
//   const poppricing = document.getElementById("Upgrade-your-plan");
//   const closepricingsvg = document.getElementById("close-pricing");
//   const div = document.getElementById("Chat-Btn-Div");

//   var popup = 0;

//   gptfourdiv.addEventListener("click", function () {
//     if (popup == 0) {
//       poppricing.style.display = "block";
//       div.style.display = "none";
//       popup = 1;
//     } else {
//       popup = 0;
//     }
//   });

//   closepricingsvg.addEventListener("click", function () {
//     if (popup == 0) {
//       popup = 1;
//     } else {
//       poppricing.style.display = "none";
//       popup = 0;
//     }
//   });
// }

// pc pricing popup menu

{
  var gptfourdiv = document.getElementById("GPT-4-div");
  var poppricing = document.getElementById("Upgrade-your-plan");
  var closepricingsvg = document.getElementById("close-pricing");
  var upgradeplan = document.getElementById("upgrade-plan");

  upgradeplan.onclick = function () {
    poppricing.style.display = "block";
  };

  gptfourdiv.onclick = function () {
    poppricing.style.display = "block";
  };

  closepricingsvg.onclick = function () {
    poppricing.style.display = "none";
  };
}

// mobile pricing popup menu

{
  var gptfourdiv1 = document.getElementById("GPT-4-div1");
  var poppricing = document.getElementById("Upgrade-your-plan");
  var closepricingsvg = document.getElementById("close-pricing");
  const button1 = document.getElementById("Chat-Btn1");
  var upgradeplan = document.getElementById("upgrade-plan");

  upgradeplan.onclick = function () {
    poppricing.style.display = "block";
  };

  gptfourdiv1.onclick = function () {
    poppricing.style.display = "block";
    button1.style.backgroundColor = "transparent";
  };

  closepricingsvg.onclick = function () {
    poppricing.style.display = "none";
  };
}

{
  const navclose = document.getElementById("nav-close-btn");
  const navtranslate = document.getElementById("nav-translate");
  const navopen = document.getElementById("nav-list");

  navopen.onclick = function () {
    navtranslate.style.transform = "translateX(0)";
  };

  navclose.onclick = function () {
    navtranslate.style.transform = "translateX(-550px)";
  };
}

// {
//   const threedot = document.getElementById("three-dot");
//   const threeoptions = document.getElementById("three-options");

//   let threedothide = 0;

//   threedot.addEventListener("click", function () {
//     if (threedothide == 0) {
//       threeoptions.style.display = "block";
//       threedothide = 1;
//     } else {
//       threeoptions.style.display = "none";
//       threedothide = 0;
//     }
//   });
// }
{
  function toggleDiv() {
    let opt = document.getElementById("three-options");
    opt.style.display = opt.style.display === "none" ? "block" : "none";
  }
}




