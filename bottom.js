const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );

console.log(getURLParameters(location.search).text);

window.onload = () => {
  if (getURLParameters(location.search).text !== undefined) {
    document.getElementById("bottom").innerHTML = decodeURI(
      getURLParameters(location.search).text
    );
  }
};
