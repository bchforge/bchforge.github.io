(function () {
  var lang = (navigator.language || "en").toLowerCase();
  var locale = lang.indexOf("es") === 0 ? "/es/" : "/en/";
  window.location.replace(
    locale +
      (window.location.search || "") +
      (window.location.hash || "")
  );
})();
