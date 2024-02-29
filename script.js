//your JS code here. If required.
let angle = 0;
const line = document.getElementById('line');

setInterval(() => {
    angle += 2;
	if(angle===360){
		angle = 0;
	}
    line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
}, 20);