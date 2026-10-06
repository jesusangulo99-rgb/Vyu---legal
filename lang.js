(function(){
  var saved=null;try{saved=localStorage.getItem('vyu-lang')}catch(e){}
  var nav=(navigator.language||'en').slice(0,2).toLowerCase();
  var hash=location.hash.replace('#','');
  var lang=(hash==='es'||hash==='en')?hash:(saved||(nav==='es'?'es':'en'));
  function apply(l){
    document.documentElement.lang=l;
    document.querySelectorAll('[data-l]').forEach(function(el){el.hidden=el.getAttribute('data-l')!==l});
    document.querySelectorAll('.lang button').forEach(function(b){b.setAttribute('aria-pressed',b.getAttribute('data-set')===l?'true':'false')});
    try{localStorage.setItem('vyu-lang',l)}catch(e){}
  }
  document.querySelectorAll('.lang button').forEach(function(b){b.addEventListener('click',function(){apply(b.getAttribute('data-set'))})});
  apply(lang);
})();
