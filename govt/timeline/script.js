var items = [];

function isItemInView(item) {
  var rect = item.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function isItemInViewIntersect(item) {
  var rect = item.getBoundingClientRect();
  var h = window.innerHeight || document.documentElement.clientHeight;
  return rect.top >= -rect.height && rect.bottom <= h + (rect.height / 2 - 32);
}

function callbackFunc() {
  var highest = -1;
  for (var i = 0; i < items.length; i++) {
    if (isItemInViewIntersect(items[i])) {
      items[i].classList.add("show");
      highest = Math.max(i, highest);
    } else {
      items[i].classList.remove("show");
    }
  }

  var bgs = document.querySelectorAll(".bg-image");
  var ratio = items.length / bgs.length;
  highest /= ratio;
  highest = Math.floor(highest);


  for (var i = 0; i < bgs.length; i++) {
    if (i == highest) {
      bgs[i].classList.add("top");
    } else {
      bgs[i].classList.remove("top");
    }
  }
  //var url = "assets/images/image" + (highest + 1) + ".jpeg";
  //bg.style.backgroundImage = `url(${url})`;
}

function makeDecade(d, isLeft) {
  var side = isLeft ? "left" : "right";
  return `<li class='${side} locked show'>
    <div>
      <time class='large'>${d}s</time>
    </div>
  </li>`;
}

function makeItem(d) {
  var side = d.left ? "left" : "right";
  return `<li class='${side}'>
    <div>
      <time>${d.open_date}</time>
      <p>
        <span class='bolder'>${d.common_name || ""} </span> 
        <span class='faded'>${d.suburb || ""}</span> 
      </p>
      <p>
        <span class='faded'>${d.designer || ""} </span> 
      </p>
      <img class='preview-img' src="assets/images/${d.image}"/>
    </div>
  </li>`;
}

function htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}

function onLoad() {
  var holder = document.querySelector(".timeline");
  var wrapper = document.querySelector(".bg-image-wrapper");

  for (var decade in kData) {
    var elem = htmlToElement(makeDecade(decade, kData[decade][0].left));
    holder.append(elem);
    for (var i = 0; i < kData[decade].length; i++) {
      var elem = htmlToElement(makeItem(kData[decade][i]));
      holder.append(elem);
    }

    var bg = document.createElement("div");
    bg.classList.add("bg-image");
    var url = "assets/images/" + kData[decade][0].image;
    bg.style.backgroundImage = `url(${url})`;
    wrapper.append(bg);
  }

  items = document.querySelectorAll("li:not(.locked)");

  callbackFunc();
}

// listen for events
window.addEventListener("load", onLoad);
window.addEventListener("resize", callbackFunc);
window.addEventListener("scroll", callbackFunc);
