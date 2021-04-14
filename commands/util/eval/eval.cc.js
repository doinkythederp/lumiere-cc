// "eval" Custom Command

let evl = eval(args.str);

let f = args.str.toLowerCase().split(/\/\/|\n/g).map(x => x.trim());
f.shift();

if (f.includes("keys") && !f.includes("json")) evl = "[" + Object.keys(evl).join(", ") + "]";
if (f.includes("keys") && f.includes("json")) evl = Object.keys(evl);

if (f.includes("values") && !f.includes("json")) evl = "[" + Object.values(evl).join(", ") + "]";
if (f.includes("values") && f.includes("json")) evl = Object.values(evl)

if (f.includes("entries") && !f.includes("json")) evl = "[" + Object.entries(evl).map(entry => "[" + entry.join(", ") + "]").join(", ") + "]";
if (f.includes("entries") && f.includes("json")) evl = Object.entries(evl);

if (f.includes("allkeys") && !f.includes("json")) evl = "[" + Object.keys(Object.getOwnPropertyDescriptors(evl)).join(", ") + "]";
if (f.includes("allkeys") && f.includes("json")) evl = Object.keys(Object.getOwnPropertyDescriptors(evl));

if (f.includes("allvalues") && !f.includes("json")) evl = "[" + Object.values(Object.getOwnPropertyDescriptors(evl)).map(p => p.value).join(", ") + "]";
if (f.includes("allvalues") && f.includes("json")) evl = Object.values(Object.getOwnPropertyDescriptors(evl)).map(p => p.value);

if (f.includes("allentries") && !f.includes("json")) evl = "[" + Object.entries(Object.getOwnPropertyDescriptors(evl)).map(entry => "[" + entry.map((v, i) => i ? v.value : v).join(", ") + "]").join(", ") + "]";
if (f.includes("allentries") && f.includes("json")) evl = Object.entries(Object.getOwnPropertyDescriptors(evl)).map(entry => entry.map((v, i) => i ? v.value : v));

if (f.includes("json")) evl = JSON.stringify(evl, null, 2);

"```js\n" + evl + "\n```";