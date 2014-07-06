var getTarget = function(e){
	e = e || window.event;
	var target = e.target || e.srcElement;
	return target;
}


snack.ready(function(){
	var lbox = document.createElement('div');
	lbox.setAttribute('class','lightbox');
	lbox.setAttribute('style','display: none');
	document.body.appendChild(lbox);
	
	var pics = snack.wrap('img.nahled-portret, img.nahled-krajina');
	if (!pics) {
		return;
	}
	pics.attach('click', function(event){
		var target = getTarget(event);
		console.log(target);
		var src = target.getAttribute('src');
		var alt = target.getAttribute('alt');
		var klass = target.getAttribute('class');
		lbox.innerHTML = '<img src="' + src + '" class="' + klass + '">';
		if (alt) {
			lbox.innerHTML += '<center>' + alt + '</center>';
		}
		lbox.style.display='block';
	});
	
	snack.wrap(lbox).attach('click',function(event){
		lbox.style.display='none';
	});
});