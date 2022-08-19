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
	//larg.innerHTML = hour + ":" + minute + ":" + second;
	clock();
	larg.style.display = "block";
	larg.style.backgroundColor = "black";
};

const mode = () => {
	mm.innerHTML =
		'<ul class="menue"> <li><input type="button" value="timer" onclick="timerMode()"></li> <li><input type="button" value="Stop Watch" onclick="stopWatchMode()"></li>  <li><input type="button" value="Location" onclick="location()"></li> <li><input type="button" value="Back" onclick="location.reload()"></li> </ul >';
};
let s = 0;
let m = 0;
let ms = 0;
let h = 0;
var hh = 0;
var mi = 0;
var x;
var time12 = "00";

function timerMode() {
	clearInterval(x);
	mm.innerHTML = `<input type="button" class="date center"  value="START"><input type="button" class="date center" id="settimer" value="Set Timer"><p class="date center" >${insertZerro(
		hh
	)}:${insertZerro(mi)}</p>`;
	const tt = document.getElementById("settimer");
	tt.onclick = function () {
		setTimer();
	};
	// ts.onclick = function () {
	// 	timer();
	// };
	// function start(hh, mm, ss) {}
}
function timer() {
	let time = time12;
	hh = Number(time[0] + time[1]);
	mi = Number(time[3] + time[4]);
	mm.innerHTML = `<input type="button" class="date center"  value="START" id="starttimer"><input type="button" class="date center" id="settimer" value="Set Timer"><p class="date center" >${insertZerro(
		hh
	)}:${insertZerro(mi)}</p>`;
	const ts = document.getElementById("starttimer");
	const tt = document.getElementById("settimer");
	tt.onclick = function () {
		setTimer();
	};
	ts.onclick = function () {
		startTimer();
		x = setInterval(startTimer, 1000);
	};
}
function setTimer() {
	mm.innerHTML =
		'<input type="time" id="inputTime" class="date center"  placeholder="hh:mm" value="00:00" ><input type="button" class="date center" id="set" value="SET">';

	document.getElementById("set").onclick = function () {
		time12 = document.getElementById("inputTime").value;
		timer();
	};
}
function startTimer() {
	// tt.onclick = function () {
	// 	setTimer();
	// };
	if ((hh == 0) & (mi == 0)) {
		document.getElementById("aaa").innerHTML = "EXPIRED";
		document.getElementById("aaa").classList.toggle("show");

		mi = 1;
	} else {
		mm.innerHTML = `<input type="button" class="date center"  value="BACK" onclick="timerMode()"> <p class="date center" id="aaa">${insertZerro(
			hh
		)}:${insertZerro(mi)}</p>`;
	}
	mi = mi - 1;
	if (mi < 0) {
		hh = hh - 1;
		mi = 59;
	}
}

const stopWatchMode = () => {
	mm.innerHTML =
		'<p class="center" id="stopWatch">00:00</br><span>00</span></p><input type="button" class="date start center" id="start" value="START"><input type="button" class="date reset center" id="reset" value="RESET">';
	const ts = document.getElementById("start");
	const tr = document.getElementById("reset");
	ts.onclick = function () {
		start();
	};
	tr.onclick = function () {
		reset();
	};
	const tt = document.getElementById("stopWatch");
	function stopWatch() {
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
		x = setInterval(stopWatch, 10);
		ts.value = "STOP";
		// ts.style = "transform: translate(150%, -200%) rotate(60deg);";
		ts.onclick = function () {
			stop();
		};
	}
	function stop() {
		clearInterval(x);
		ts.value = "START";
		ts.onclick = function () {
			start();
		};
	}
	function reset() {
		clearInterval(x);
		ms = 0;
		s = 0;
		m = 0;
		ts.value = "START";
		ts.onclick = function () {
			start();
		};
		tt.innerHTML = "00:00</br><span>00</span>";
	}
};
// clock();
// clearInterval(time);
setTimeout(clock, 0);
let time = setInterval(clock, 500);
