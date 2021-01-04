const shadowEl = document.querySelector(".shadow-host");
const shadow = shadowEl.attachShadow({mode: 'open'});
const link = document.createElement("a");
link.href = shadowEl.querySelector("a").href;
link.innerHTML = `${shadowEl.querySelector("a").textContent}`;
shadow.appendChild(link);