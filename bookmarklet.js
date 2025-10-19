javascript:(function(){
  var s=prompt('🔍 Suchbegriff eingeben:');
  if(s)location.href='https://www.google.com/search?q='+encodeURIComponent(s)+'&udm=50';
})();
