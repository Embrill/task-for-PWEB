(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (o) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  const o = document.querySelector(".cookies"),
    t =
      (document.querySelector(".cookies-show"),
      document.querySelector(".cookies-close"),
      document.querySelector(".cookies__btn"));
  setTimeout(() => {
    o.classList.add("cookies-show");
  }, 1e3),
    (t.onclick = function () {
      o.classList.add("cookies-close"), o.classList.remove("cookies-show");
    }),
    (window.FLS = !0),
    (function (e) {
      let o = new Image();
      (o.onload = o.onerror =
        function () {
          e(2 == o.height);
        }),
        (o.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let o = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(o);
    });
})();
