
setInterval(() => {
	d= new Date();
	htime= d.getHours();
	mtime= d.getMinutes();
	stime=d.getSeconds();
	hrotate=30*htime + 0.5*mtime;
	mrotate=6*mtime;
	srotate=6*stime;
	console.log("aditya");
	hour.style.transform=`rotate(${hrotate}deg)`;
	minute.style.transform=`rotate(${mrotate}deg)`;
	second.style.transform=`rotate(${srotate}deg)`;

},1000);