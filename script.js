const nav = document.querySelector('.nav');
	const navBtn = document.querySelector('.burger-btn');
	const allNavItems = document.querySelectorAll('.nav__item');
	const navBtnBars = document.querySelector('.burger-btn__bars');
	const imgs = document.querySelectorAll('.img');
	const pHeader = document.querySelector('.p-header');
	const pHeader2 = document.querySelector('.p-header2');
	const traningImgElements = document.querySelectorAll('.traning-shadow-img');
	const body = document.querySelector('.offers-container');
	const cards = document.querySelectorAll('.card-offers');




    const handleNav = () => {
		nav.classList.toggle('nav--active');

		navBtnBars.classList.remove('black-bars-color');

		allNavItems.forEach((item) => {
			item.addEventListener('click', () => {
				nav.classList.remove('nav--active');
			});
		});

		handleNavItemsAnimation();
	};

	const handleNavItemsAnimation = () => {
		let delayTime = 0;

		allNavItems.forEach((item) => {
			item.classList.toggle('nav-items-animation');
			item.style.animationDelay = '.' + delayTime + 's';
			delayTime++;
		});
	};
	navBtn.addEventListener('click', handleNav);



    let timeout; let indexx = 1



    let inputValue2 = 
    ` Jak wygląda współpraca???    To zależy czego oczekujesz. Na początku przeprowadzimy rozmowę na temat Twojego celu i doświadczenia, które już posiadasz. Następnie pokażę Ci jak wykonywać wszystkie ćwiczenia, które dopasujemy do Twoich preferencji i czasu. Wytłumacze Ci niezbędne aspekty kształtowania sylwetki i podejścia do diety i od czego zależy Twój postęp. Dopasujemy plan żywieniowy pod Twoje preferencje. Jeśli jesteś zainteresowany/a zobacz ofertę i skontaktuj się ze mną. `



    const textAnimation2 = () => {
    let speed = 30;

    pHeader2.innerHTML = inputValue2.slice(0,indexx)
    indexx++;
    if (indexx > inputValue2.length) {
        indexx = 0;
        clearTimeout(timeoutt);
        setTimeout(() => {
            timeout = setTimeout(textAnimation2, speed);
        }, 8000);
    } else {
        clearTimeout(timeoutt);
        timeoutt = setTimeout(textAnimation2, speed);
    }
};

if(pHeader2){
setTimeout(textAnimation2, 3500);}









    