console.log("yes");

dropdown = document.getElementById("dd");
console.log(dd);

dropdownitem = document.getElementById("dm-elem");

dropdownitem.addEventListener(
  "click",
  function (ev) {
    console.log("clicked");

    dm.classList.remove("show");
    var text = document.getElementsByClassName("scan-button-text");
    text[0].innerHTML = "Ethereum Wallet";
    ev.preventDefault();
  },
  false
);

dropdown.addEventListener(
  "click",
  function (ev) {
    console.log("clicked");
    var dm = document.getElementById("dm");
    dm.classList.add("show");
    ev.preventDefault();
  },
  false
);

$(".dropdown dt a").on("click", function () {
  $(".dropdown dd ul").slideToggle("fast");
});

$(".dropdown dd ul li a").on("click", function () {
  $(".dropdown dd ul").hide();
});

function getSelectedValue(id) {
  return $("#" + id)
    .find("dt a span.value")
    .html();
}

$(document).bind("click", function (e) {
  var $clicked = $(e.target);
  if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});

$('.mutliSelect input[type="checkbox"]').on("click", function () {
  var title = $(this)
      .closest(".mutliSelect")
      .find('input[type="checkbox"]')
      .val(),
    title = $(this).val() + ",";

  if ($(this).is(":checked")) {
    var html = '<span title="' + title + '">' + title + "</span>";
    $(".multiSel").append(html);
    $(".hida").hide();
  } else {
    $('span[title="' + title + '"]').remove();
    var ret = $(".hida");
    $(".dropdown dt a").append(ret);
  }
});

function fs()
{
    console.log("form submitted")
}