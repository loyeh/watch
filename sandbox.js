const insertZerro = (a) => {
	if (a < 10) {
		a = "0" + a;
	}
	return a;
};
const pp = document.getElementById("clock");
const dd = document.getElementById("date1");
const mm = document.getElementById("main");
const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const clock = () => {
	const date1 = new Date();
	let day = weekDay[date1.getDay()];
	let date = date1.getDate();
	let month = date1.getMonth();
	let hour = insertZerro(date1.getHours());
	let minute = insertZerro(date1.getMinutes());
	let second = insertZerro(date1.getSeconds());
	dd.innerHTML = day + " " + month + "/" + date;
	pp.innerHTML = hour + ":" + minute + "</br>" + second;
	larg.innerHTML = hour + ":" + minute + ":" + second;
};
const largeClock = () => {
	let page1 = document.getElementById("page1");
	page1.innerHTML = '<div id="larg"></div> <a href="index.html">WATCH</a>';
	const larg = document.getElementById("larg");
	clock();
	larg.style.display = "block";
	larg.style.backgroundColor = "black";
};

const mode = () => {
	mm.innerHTML =
		'<ul class="menue"> <li><input type="button" value="Timer" onclick="timermode()"></li> <li><input type="button" value="Stop Watch" onclick="stopwatch()"></li>  <li><input type="button" value="Location" onclick="location()"></li> <li><input type="button" value="Back" onclick="location.reload()"></li> </ul >';
};
let s = 0;
let m = 0;
let ms = 0;
var x;

const timermode = () => {
	mm.innerHTML =
		'<p class="center" id="timer">00:00</br><span>00</span></p><input type="button" class="date center" id="start" value="start">';
	const ts = document.getElementById("start");
	ts.onclick = function () {
		start();
	};
	const tt = document.getElementById("timer");
	function timer() {
		if (ms > 99) {
			s++;
			ms = 0;
		}
		if (s > 59) {
			m++;
			s = 0;
		}

		let ms1 = insertZerro(ms);
		let s1 = insertZerro(s);
		let m1 = insertZerro(m);
		tt.innerHTML = `${m1}:${s1}</br><span>${ms1}</span>`;
		ms = ++ms;
	}
	function start() {
		clearInterval(x);
		x = setInterval(timer, 10);
		ts.value = "stop";
		ts.onclick = function () {
			stop();
		};
	}
	function stop() {
		clearInterval(x);
		ts.value = "start";
		ts.onclick = function () {
			start();
		};
	}
};
let time = setInterval(clock, 500);
