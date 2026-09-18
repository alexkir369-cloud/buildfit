/* Shared BUILDFIT cart: amounts are stored in euros; totals use integer cents. */
(() => {
'use strict';
const KEY = 'buildfit-cart';
const catalog = {"site": {"name": "SitePro Canvas Jacket", "price": 89, "sizes": ["S", "M", "L", "XL", "XXL"], "illustration": "<svg viewBox=\"0 0 400 440\" role=\"img\" aria-label=\"SitePro Canvas Jacket illustration in Sand / Charcoal\"><defs><linearGradient id=\"fabric-site\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop stop-color=\"#ac915b\"/><stop offset=\"1\" stop-color=\"#766038\"/></linearGradient></defs>\n        <path d=\"M142 61 174 44 224 44 257 61 307 79 326 115 372 295 328 316 292 215 290 386 Q199 406 109 386L108 213 72 316 28 295 73 115 94 80Z\" fill=\"url(#fabric-site)\" stroke=\"#766038\" stroke-width=\"2\"/>\n        <path d=\"m143 61 31-17 50 0 33 17-20 44-38-27-37 27Z\" fill=\"#34372f\"/><path d=\"m174 44 25 34 25-34\" fill=\"#151913\"/>\n        <path d=\"m94 80 49-19 19 44-45 15-17 72-41-12 14-65Z M257 61l50 18 19 36 15 65-42 12-16-72-46-15Z\" fill=\"#3c4035\"/>\n        <path d=\"M199 79v311\" stroke=\"#383a2d\" stroke-width=\"8\"/><path d=\"M198 90v292\" stroke=\"#cfb985\" stroke-width=\"2\" stroke-dasharray=\"2 3\"/><path d=\"M204 108v16\" stroke=\"#e0d9bc\" stroke-width=\"4\"/>\n        <path d=\"M123 146h57v64l-28 7-29-7Z M220 146h55v64l-27 7-28-7Z\" fill=\"#ac915b\" stroke=\"#ac915b\" stroke-width=\"1.2\"/><path d=\"M122 145h59v18h-59Z M219 145h57v18h-57Z\" fill=\"#ac915b\"/>\n        <path d=\"m121 268 58-13v81l-58 12Z M219 255l57 13v80l-57-12Z\" fill=\"#3a3e32\"/><path d=\"m131 280 38-9 M229 271l37 9\" stroke=\"#171c13\" stroke-width=\"5\"/>\n        <path d=\"m37 272 43 18-8 26-44-21Z M320 290l43-18 9 23-44 21Z M109 369q90 16 181 0v17q-91 20-181 0Z\" fill=\"#34392d\"/>\n        <path d=\"M116 121v238 M283 121v238 M87 121l-38 143 M313 121l38 143\" fill=\"none\" stroke=\"#ac915b\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/>\n        <rect x=\"229\" y=\"177\" width=\"36\" height=\"13\" rx=\"1\" fill=\"#ffbd39\"/><text x=\"247\" y=\"186\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"6\" font-weight=\"900\" fill=\"#252920\">BUILDFIT</text>\n      </svg>"}, "flex": {"name": "FlexCore Softshell Jacket", "price": 99, "sizes": ["XS", "S", "M", "L", "XL", "XXL"], "illustration": "<svg viewBox=\"0 0 400 440\" role=\"img\" aria-label=\"FlexCore Softshell Jacket illustration in Graphite\"><defs><linearGradient id=\"fabric-flex\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop stop-color=\"#555b57\"/><stop offset=\"1\" stop-color=\"#292e2b\"/></linearGradient></defs>\n        <path d=\"M142 61 174 44 224 44 257 61 307 79 326 115 372 295 328 316 292 215 290 386 Q199 406 109 386L108 213 72 316 28 295 73 115 94 80Z\" fill=\"url(#fabric-flex)\" stroke=\"#292e2b\" stroke-width=\"2\"/>\n        <path d=\"m143 61 31-17 50 0 33 17-20 44-38-27-37 27Z\" fill=\"#34372f\"/><path d=\"m174 44 25 34 25-34\" fill=\"#151913\"/>\n        <path d=\"m94 80 49-19 19 44-45 15-17 72-41-12 14-65Z M257 61l50 18 19 36 15 65-42 12-16-72-46-15Z\" fill=\"#3c4035\"/>\n        <path d=\"M199 79v311\" stroke=\"#383a2d\" stroke-width=\"8\"/><path d=\"M198 90v292\" stroke=\"#cfb985\" stroke-width=\"2\" stroke-dasharray=\"2 3\"/><path d=\"M204 108v16\" stroke=\"#e0d9bc\" stroke-width=\"4\"/>\n        <path d=\"M123 146h57v64l-28 7-29-7Z M220 146h55v64l-27 7-28-7Z\" fill=\"#555b57\" stroke=\"#555b57\" stroke-width=\"1.2\"/><path d=\"M122 145h59v18h-59Z M219 145h57v18h-57Z\" fill=\"#555b57\"/>\n        <path d=\"m121 268 58-13v81l-58 12Z M219 255l57 13v80l-57-12Z\" fill=\"#3a3e32\"/><path d=\"m131 280 38-9 M229 271l37 9\" stroke=\"#171c13\" stroke-width=\"5\"/>\n        <path d=\"m37 272 43 18-8 26-44-21Z M320 290l43-18 9 23-44 21Z M109 369q90 16 181 0v17q-91 20-181 0Z\" fill=\"#34392d\"/>\n        <path d=\"M116 121v238 M283 121v238 M87 121l-38 143 M313 121l38 143\" fill=\"none\" stroke=\"#555b57\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/>\n        <rect x=\"229\" y=\"177\" width=\"36\" height=\"13\" rx=\"1\" fill=\"#ffbd39\"/><text x=\"247\" y=\"186\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"6\" font-weight=\"900\" fill=\"#252920\">BUILDFIT</text>\n      </svg>"}, "storm": {"name": "StormGuard Rain Jacket", "price": 119, "sizes": ["S", "M", "L", "XL", "XXL"], "illustration": "<svg viewBox=\"0 0 400 440\" role=\"img\" aria-label=\"StormGuard Rain Jacket illustration in Olive / Black\"><defs><linearGradient id=\"fabric-storm\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop stop-color=\"#737963\"/><stop offset=\"1\" stop-color=\"#3d4437\"/></linearGradient></defs><path d=\"M141 70Q131 5 199 8Q268 5 257 70L230 101 199 73 169 101Z\" fill=\"#3d4437\" stroke=\"#737963\" stroke-width=\"3\"/>\n        <path d=\"M142 61 174 44 224 44 257 61 307 79 326 115 372 295 328 316 292 215 290 386 Q199 406 109 386L108 213 72 316 28 295 73 115 94 80Z\" fill=\"url(#fabric-storm)\" stroke=\"#3d4437\" stroke-width=\"2\"/>\n        <path d=\"m143 61 31-17 50 0 33 17-20 44-38-27-37 27Z\" fill=\"#34372f\"/><path d=\"m174 44 25 34 25-34\" fill=\"#151913\"/>\n        <path d=\"m94 80 49-19 19 44-45 15-17 72-41-12 14-65Z M257 61l50 18 19 36 15 65-42 12-16-72-46-15Z\" fill=\"#3c4035\"/>\n        <path d=\"M199 79v311\" stroke=\"#383a2d\" stroke-width=\"8\"/><path d=\"M198 90v292\" stroke=\"#cfb985\" stroke-width=\"2\" stroke-dasharray=\"2 3\"/><path d=\"M204 108v16\" stroke=\"#e0d9bc\" stroke-width=\"4\"/>\n        <path d=\"M123 146h57v64l-28 7-29-7Z M220 146h55v64l-27 7-28-7Z\" fill=\"#737963\" stroke=\"#737963\" stroke-width=\"1.2\"/><path d=\"M122 145h59v18h-59Z M219 145h57v18h-57Z\" fill=\"#737963\"/>\n        <path d=\"m121 268 58-13v81l-58 12Z M219 255l57 13v80l-57-12Z\" fill=\"#3a3e32\"/><path d=\"m131 280 38-9 M229 271l37 9\" stroke=\"#171c13\" stroke-width=\"5\"/>\n        <path d=\"m37 272 43 18-8 26-44-21Z M320 290l43-18 9 23-44 21Z M109 369q90 16 181 0v17q-91 20-181 0Z\" fill=\"#34392d\"/>\n        <path d=\"M116 121v238 M283 121v238 M87 121l-38 143 M313 121l38 143\" fill=\"none\" stroke=\"#737963\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/>\n        <rect x=\"229\" y=\"177\" width=\"36\" height=\"13\" rx=\"1\" fill=\"#ffbd39\"/><text x=\"247\" y=\"186\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"6\" font-weight=\"900\" fill=\"#252920\">BUILDFIT</text>\n      <path d=\"M193 98h14v280h-14Z\" fill=\"#737963\"/></svg>"}, "hi": {"name": "SiteLight Hi-Vis Jacket", "price": 109, "sizes": ["M", "L", "XL", "XXL", "3XL"], "illustration": "<svg viewBox=\"0 0 400 440\" role=\"img\" aria-label=\"SiteLight Hi-Vis Jacket illustration in Signal Yellow / Charcoal\"><defs><linearGradient id=\"fabric-hi\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop stop-color=\"#ecd436\"/><stop offset=\"1\" stop-color=\"#b5a322\"/></linearGradient></defs>\n        <path d=\"M142 61 174 44 224 44 257 61 307 79 326 115 372 295 328 316 292 215 290 386 Q199 406 109 386L108 213 72 316 28 295 73 115 94 80Z\" fill=\"url(#fabric-hi)\" stroke=\"#b5a322\" stroke-width=\"2\"/>\n        <path d=\"m143 61 31-17 50 0 33 17-20 44-38-27-37 27Z\" fill=\"#34372f\"/><path d=\"m174 44 25 34 25-34\" fill=\"#151913\"/>\n        <path d=\"m94 80 49-19 19 44-45 15-17 72-41-12 14-65Z M257 61l50 18 19 36 15 65-42 12-16-72-46-15Z\" fill=\"#3c4035\"/>\n        <path d=\"M199 79v311\" stroke=\"#383a2d\" stroke-width=\"8\"/><path d=\"M198 90v292\" stroke=\"#cfb985\" stroke-width=\"2\" stroke-dasharray=\"2 3\"/><path d=\"M204 108v16\" stroke=\"#e0d9bc\" stroke-width=\"4\"/>\n        <path d=\"M123 146h57v64l-28 7-29-7Z M220 146h55v64l-27 7-28-7Z\" fill=\"#ecd436\" stroke=\"#ecd436\" stroke-width=\"1.2\"/><path d=\"M122 145h59v18h-59Z M219 145h57v18h-57Z\" fill=\"#ecd436\"/>\n        <path d=\"m121 268 58-13v81l-58 12Z M219 255l57 13v80l-57-12Z\" fill=\"#3a3e32\"/><path d=\"m131 280 38-9 M229 271l37 9\" stroke=\"#171c13\" stroke-width=\"5\"/>\n        <path d=\"m37 272 43 18-8 26-44-21Z M320 290l43-18 9 23-44 21Z M109 369q90 16 181 0v17q-91 20-181 0Z\" fill=\"#34392d\"/>\n        <path d=\"M116 121v238 M283 121v238 M87 121l-38 143 M313 121l38 143\" fill=\"none\" stroke=\"#ecd436\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/>\n        <rect x=\"229\" y=\"177\" width=\"36\" height=\"13\" rx=\"1\" fill=\"#ffbd39\"/><text x=\"247\" y=\"186\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"6\" font-weight=\"900\" fill=\"#252920\">BUILDFIT</text>\n      <path d=\"M111 229h180v19H111Z M110 343h181v19H110Z M43 239l42 16-6 18-42-16Z M316 255l42-16 6 18-42 16Z\" fill=\"#e0e3dc\"/></svg>"}, "thermal": {"name": "ThermoCore Padded Jacket", "price": 129, "sizes": ["S", "M", "L", "XL", "XXL", "3XL"], "illustration": "<svg viewBox=\"0 0 400 440\" role=\"img\" aria-label=\"ThermoCore Padded Jacket illustration in Midnight Navy\"><defs><linearGradient id=\"fabric-thermal\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop stop-color=\"#455667\"/><stop offset=\"1\" stop-color=\"#202d3c\"/></linearGradient></defs>\n        <path d=\"M142 61 174 44 224 44 257 61 307 79 326 115 372 295 328 316 292 215 290 386 Q199 406 109 386L108 213 72 316 28 295 73 115 94 80Z\" fill=\"url(#fabric-thermal)\" stroke=\"#202d3c\" stroke-width=\"2\"/>\n        <path d=\"m143 61 31-17 50 0 33 17-20 44-38-27-37 27Z\" fill=\"#34372f\"/><path d=\"m174 44 25 34 25-34\" fill=\"#151913\"/>\n        <path d=\"m94 80 49-19 19 44-45 15-17 72-41-12 14-65Z M257 61l50 18 19 36 15 65-42 12-16-72-46-15Z\" fill=\"#3c4035\"/>\n        <path d=\"M199 79v311\" stroke=\"#383a2d\" stroke-width=\"8\"/><path d=\"M198 90v292\" stroke=\"#cfb985\" stroke-width=\"2\" stroke-dasharray=\"2 3\"/><path d=\"M204 108v16\" stroke=\"#e0d9bc\" stroke-width=\"4\"/>\n        <path d=\"M123 146h57v64l-28 7-29-7Z M220 146h55v64l-27 7-28-7Z\" fill=\"#455667\" stroke=\"#455667\" stroke-width=\"1.2\"/><path d=\"M122 145h59v18h-59Z M219 145h57v18h-57Z\" fill=\"#455667\"/>\n        <path d=\"m121 268 58-13v81l-58 12Z M219 255l57 13v80l-57-12Z\" fill=\"#3a3e32\"/><path d=\"m131 280 38-9 M229 271l37 9\" stroke=\"#171c13\" stroke-width=\"5\"/>\n        <path d=\"m37 272 43 18-8 26-44-21Z M320 290l43-18 9 23-44 21Z M109 369q90 16 181 0v17q-91 20-181 0Z\" fill=\"#34392d\"/>\n        <path d=\"M116 121v238 M283 121v238 M87 121l-38 143 M313 121l38 143\" fill=\"none\" stroke=\"#455667\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/>\n        <rect x=\"229\" y=\"177\" width=\"36\" height=\"13\" rx=\"1\" fill=\"#ffbd39\"/><text x=\"247\" y=\"186\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"6\" font-weight=\"900\" fill=\"#252920\">BUILDFIT</text>\n      <path d=\"M113 226h79m15 0h81\" stroke=\"#a9b7bd\" stroke-opacity=\".35\" fill=\"none\"/><path d=\"M113 249h79m15 0h81\" stroke=\"#a9b7bd\" stroke-opacity=\".35\" fill=\"none\"/><path d=\"M113 272h79m15 0h81\" stroke=\"#a9b7bd\" stroke-opacity=\".35\" fill=\"none\"/><path d=\"M113 295h79m15 0h81\" stroke=\"#a9b7bd\" stroke-opacity=\".35\" fill=\"none\"/><path d=\"M113 318h79m15 0h81\" stroke=\"#a9b7bd\" stroke-opacity=\".35\" fill=\"none\"/><path d=\"M113 341h79m15 0h81\" stroke=\"#a9b7bd\" stroke-opacity=\".35\" fill=\"none\"/><path d=\"M113 364h79m15 0h81\" stroke=\"#a9b7bd\" stroke-opacity=\".35\" fill=\"none\"/></svg>"}, "chore": {"name": "TradeCraft Chore Jacket", "price": 79, "sizes": ["XS", "S", "M", "L", "XL"], "illustration": "<svg viewBox=\"0 0 400 440\" role=\"img\" aria-label=\"TradeCraft Chore Jacket illustration in Tobacco\"><defs><linearGradient id=\"fabric-chore\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop stop-color=\"#b37749\"/><stop offset=\"1\" stop-color=\"#76482f\"/></linearGradient></defs>\n        <path d=\"M142 61 174 44 224 44 257 61 307 79 326 115 372 295 328 316 292 215 290 386 Q199 406 109 386L108 213 72 316 28 295 73 115 94 80Z\" fill=\"url(#fabric-chore)\" stroke=\"#76482f\" stroke-width=\"2\"/>\n        <path d=\"m143 61 31-17 50 0 33 17-20 44-38-27-37 27Z\" fill=\"#34372f\"/><path d=\"m174 44 25 34 25-34\" fill=\"#151913\"/>\n        <path d=\"m94 80 49-19 19 44-45 15-17 72-41-12 14-65Z M257 61l50 18 19 36 15 65-42 12-16-72-46-15Z\" fill=\"#3c4035\"/>\n        <path d=\"M199 79v311\" stroke=\"#383a2d\" stroke-width=\"8\"/><path d=\"M198 90v292\" stroke=\"#cfb985\" stroke-width=\"2\" stroke-dasharray=\"2 3\"/><path d=\"M204 108v16\" stroke=\"#e0d9bc\" stroke-width=\"4\"/>\n        <path d=\"M123 146h57v64l-28 7-29-7Z M220 146h55v64l-27 7-28-7Z\" fill=\"#b37749\" stroke=\"#b37749\" stroke-width=\"1.2\"/><path d=\"M122 145h59v18h-59Z M219 145h57v18h-57Z\" fill=\"#b37749\"/>\n        <path d=\"m121 268 58-13v81l-58 12Z M219 255l57 13v80l-57-12Z\" fill=\"#3a3e32\"/><path d=\"m131 280 38-9 M229 271l37 9\" stroke=\"#171c13\" stroke-width=\"5\"/>\n        <path d=\"m37 272 43 18-8 26-44-21Z M320 290l43-18 9 23-44 21Z M109 369q90 16 181 0v17q-91 20-181 0Z\" fill=\"#34392d\"/>\n        <path d=\"M116 121v238 M283 121v238 M87 121l-38 143 M313 121l38 143\" fill=\"none\" stroke=\"#b37749\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/>\n        <rect x=\"229\" y=\"177\" width=\"36\" height=\"13\" rx=\"1\" fill=\"#ffbd39\"/><text x=\"247\" y=\"186\" text-anchor=\"middle\" font-family=\"Arial\" font-size=\"6\" font-weight=\"900\" fill=\"#252920\">BUILDFIT</text>\n      <circle cx=\"200\" cy=\"125\" r=\"4\" fill=\"#b8b3a1\"/><circle cx=\"200\" cy=\"173\" r=\"4\" fill=\"#b8b3a1\"/><circle cx=\"200\" cy=\"221\" r=\"4\" fill=\"#b8b3a1\"/><circle cx=\"200\" cy=\"269\" r=\"4\" fill=\"#b8b3a1\"/><circle cx=\"200\" cy=\"317\" r=\"4\" fill=\"#b8b3a1\"/><circle cx=\"200\" cy=\"365\" r=\"4\" fill=\"#b8b3a1\"/></svg>"}};
const money = cents => new Intl.NumberFormat('en-IE', {style:'currency', currency:'EUR'}).format(cents / 100);
let cart = [];
let storageAvailable = true;
function normalize(saved) {
  const result = [];
  if (!Array.isArray(saved)) return result;
  for (const item of saved) {
    if (!item || typeof item !== 'object' || !Object.hasOwn(catalog, item.id)) continue;
    const product = catalog[item.id];
    if (!product.sizes.includes(item.size) || !Number.isInteger(item.quantity) || item.quantity < 1 || item.quantity > 999) continue;
    const existing = result.find(row => row.id === item.id && row.size === item.size);
    if (existing) existing.quantity = Math.min(999, existing.quantity + item.quantity);
    else result.push({id:item.id, name:product.name, size:item.size, quantity:item.quantity, price:product.price});
  }
  return result;
}
function read() {
  try { cart = normalize(JSON.parse(localStorage.getItem(KEY) || '[]')); }
  catch (error) { if (error instanceof SyntaxError) cart = []; else storageAvailable = false; }
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(cart)); storageAvailable = true; }
  catch (_) { storageAvailable = false; }
}
function announce(message) {
  const target = document.querySelector('#cart-status');
  if (target) target.textContent = message + (storageAvailable ? '' : ' Browser storage is unavailable; this selection will not persist after leaving this page.');
}
function updateCounters() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('[data-cart-count]').forEach(el => el.textContent = count);
  document.querySelectorAll('.header-cart').forEach(el => el.setAttribute('aria-label', `Cart, ${count} ${count === 1 ? 'item' : 'items'}`));
}
function render() {
  updateCounters();
  const list = document.querySelector('#cart-lines');
  if (!list) return;
  document.querySelector('#storage-message').textContent = storageAvailable ? '' : 'Browser storage is unavailable. Changes cannot be saved after leaving this page.';
  document.querySelector('#empty-cart').hidden = cart.length !== 0;
  document.querySelector('#cart-layout').hidden = cart.length === 0;
  list.replaceChildren();
  let subtotal = 0;
  cart.forEach((item, index) => {
    const product = catalog[item.id];
    const total = Math.round(item.price * 100) * item.quantity;
    subtotal += total;
    const li = document.createElement('li'); li.className = 'cart-line';
    const image = document.createElement('div'); image.className = 'cart-picture';
    // Illustrations are fixed local catalog assets, never storage-provided markup.
    image.innerHTML = product.illustration.replaceAll('fabric-' + item.id, 'cart-art-' + index);
    const details = document.createElement('div');
    const title = document.createElement('h2'); title.className = 'line-title'; title.textContent = item.name;
    const meta = document.createElement('p'); meta.className = 'line-meta'; meta.textContent = `Size ${item.size} · Unit price ${money(Math.round(item.price * 100))}`;
    const controls = document.createElement('div'); controls.className = 'line-controls';
    const quantity = document.createElement('div'); quantity.className = 'quantity-control';
    const minus = document.createElement('button'); minus.type = 'button'; minus.textContent = '−'; minus.disabled = item.quantity === 1;
    const plus = document.createElement('button'); plus.type = 'button'; plus.textContent = '+'; plus.disabled = item.quantity === 999;
    const output = document.createElement('output'); output.textContent = item.quantity; output.setAttribute('aria-label', 'Quantity');
    const remove = document.createElement('button'); remove.type = 'button'; remove.className = 'remove-item'; remove.textContent = 'Remove';
    for (const [button, action, label] of [[minus,'minus','Decrease quantity of'], [plus,'plus','Increase quantity of'], [remove,'remove','Remove']]) {
      button.dataset.index = index; button.dataset.action = action;
      button.setAttribute('aria-label', `${label} ${item.name}, size ${item.size}`);
    }
    quantity.append(minus,output,plus);
    const lineTotal = document.createElement('div'); lineTotal.className = 'line-total';
    const caption = document.createElement('small'); caption.textContent = 'ITEM TOTAL';
    lineTotal.append(caption, money(total)); controls.append(quantity,remove,lineTotal);
    details.append(title,meta,controls); li.append(image,details); list.append(li);
  });
  document.querySelector('#subtotal').textContent = money(subtotal);
  document.querySelector('#delivery').textContent = money(0);
  document.querySelector('#order-total').textContent = money(subtotal);
}
function add(id, size, quantity) {
  if (!Object.hasOwn(catalog,id) || !catalog[id].sizes.includes(size) || !Number.isInteger(quantity) || quantity < 1 || quantity > 99) return;
  read();
  const existing = cart.find(item => item.id === id && item.size === size);
  if (existing && existing.quantity + quantity > 999) { announce('The maximum quantity for this size is 999.'); return; }
  if (existing) existing.quantity += quantity;
  else cart.push({id, name:catalog[id].name, size, quantity, price:catalog[id].price});
  save(); render(); announce(`${quantity} × ${catalog[id].name} · ${size} added to cart.`);
}
document.querySelector('#product-purchase')?.addEventListener('submit', event => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  add('site', document.querySelector('#product-size').value, Number(document.querySelector('#quantity').value));
});
document.querySelectorAll('.product .purchase').forEach(form => form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  add(form.closest('.product').dataset.id, form.querySelector('select').value, 1);
}));
document.querySelector('#cart-lines')?.addEventListener('click', event => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;
  const index = Number(button.dataset.index), action = button.dataset.action;
  const item = cart[index]; if (!item) return;
  const name = item.name;
  if (action === 'remove') cart.splice(index,1);
  else item.quantity = Math.max(1,Math.min(999,item.quantity + (action === 'plus' ? 1 : -1)));
  save(); render();
  announce(action === 'remove' ? `${name} removed from cart.` : `${name} quantity updated to ${item.quantity}. Order total ${document.querySelector('#order-total').textContent}.`);
  const nextIndex = Math.min(index,cart.length - 1);
  const next = document.querySelector(`[data-index="${nextIndex}"][data-action="${action}"]:not(:disabled)`)
    || document.querySelector(`[data-index="${nextIndex}"][data-action="remove"]`)
    || document.querySelector('#empty-cart a');
  next?.focus();
});
document.querySelector('#checkout')?.addEventListener('click', () => {
  document.querySelector('#checkout-message').textContent = 'Checkout is coming soon. Your cart is saved; no payment has been taken.';
});
window.addEventListener('storage', event => { if (event.key === KEY || event.key === null) { read(); render(); } });
window.addEventListener('pageshow', () => { read(); render(); });
read(); render();
})();
