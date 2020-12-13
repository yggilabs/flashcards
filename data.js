---
---
const lcg=s=>()=>(2**31-1&(s=Math.imul(48271,s)))/2**31;
const xmur3 = (str) => {
  for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
      h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
      h = h << 13 | h >>> 19;
  return function() {
      h = Math.imul(h ^ h >>> 16, 2246822507);
      h = Math.imul(h ^ h >>> 13, 3266489909);
      return (h ^= h >>> 16) >>> 0;
  }
}

const seed = xmur3(this.location.pathname)();
const rand = lcg(seed)  
const list = {{ site.data.vocab | jsonify }}
const sorted = list.sort(() => rand() - 0.5)


function getRemoteData() {
  return {items: sorted.slice(0,5)}
}

exportFunction('getRemoteData', getRemoteData);
