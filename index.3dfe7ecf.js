({getCountries:function(n){return fetch("${ENDPOINT}${name}?fields=name,capital,population,flags,languages").then((n=>n.json()))}}).getCountries("Japan").then(console.log);
//# sourceMappingURL=index.3dfe7ecf.js.map
