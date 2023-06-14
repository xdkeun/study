const clock = document.querySelector("h2#clock");

function getClock() {
	const date = new Date();
    //getHours, getMinutes, getSeconds는 string이 아닌 number이기때문에 padStart를 쓸 수 없다
    //그래서 String으로 형변환해주고 padStart 사용
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 윈도우가 실행되자마자 시계를 출력 후
setInterval(getClock, 1000); // 1000ms : 1초마다 getClock 함수가 실행됨

//setTimeout 사용법
// setTimeout(getClock, 5000); // 5000ms : 5초 후에 getClock 함수가 실행됨