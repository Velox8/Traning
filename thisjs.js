document.addEventListener('DOMContentLoaded', function () {
	const height = document.querySelector('#height');
	const weight = document.querySelector('#weight');
	const fat = document.querySelector('#fat');
	const ffmi = document.querySelector('#ffmi');
	const btn = document.querySelector('.send');
	const btnclear = document.querySelector('.clear');
	const pffmi = document.querySelector('.ffmi1');
	const btn2 = document.querySelector('.close');
	const mWeight = document.querySelector('#mWeight');
	const reps = document.querySelector('#reps');
	const maxWeight = document.querySelector('.ffmi2');
	const btnclear2 = document.querySelector('.clear2');

	const btnsend2 = document.querySelector('.send2');
	const count00 = document.querySelector('.count00');

	const hCalories = document.querySelector('#hCalories');
	const wCalories = document.querySelector('#wCalories');
	const aCalories = document.querySelector('#aCalories');
	const faPersonDress = document.querySelector('.fa-person-dress');
	const faPerson = document.querySelector('.fa-person');
	const optionA = document.querySelector('#optionA');
	const optionT = document.querySelector('#optionT');
	const resultB = document.querySelector('.resultB');

	const resultC = document.querySelector('.resultC');
	const options = document.querySelectorAll('option');
	const boxP = document.querySelector('.boxP');
	const resultb1 = document.querySelector('.resultb1');
	const resultE = document.querySelector('.resultE');

	const nav = document.querySelector('.nav');
	const navBtn = document.querySelector('.burger-btn');
	const allNavItems = document.querySelectorAll('.nav__item');
	const navBtnBars = document.querySelector('.burger-btn__bars');
	// liczenie
	const imgs = document.querySelectorAll('.img');
	const pHeader = document.querySelector('.p-header');

	const pHeader2 = document.querySelector('.p-header2');
	const pHeader3 = document.querySelector('.p-header3');
	const traningImgElements = document.querySelectorAll('.traning-shadow-img');
	const body = document.querySelector('.offers-container');
	const cards = document.querySelectorAll('.card-offers');
	const parallaxImages = document.querySelector('.traning-img2');

	const movePictureUp = () => {
		const scrollValue = window.scrollY;

		const scrollSpeed = 0.03; // Dostosuj prędkość przesuwania zdjęć
		const imgTop = parallaxImages.getBoundingClientRect().top;
		const offset = (scrollValue - imgTop) * scrollSpeed;
		parallaxImages.style.top = -offset + 'px';
	};

	if (parallaxImages) {
		window.addEventListener('scroll', movePictureUp);
	}

	function showCard() {
		cards.forEach((card) => {
			card.classList.remove('activeT');
			this.classList.add('activeT');
		});
		handleBgColor(this);
	}
	const handleBgColor = (card) => {
		const season = card.getAttribute('data-season');
		body.setAttribute('data-bg', season);
	};

	cards.forEach((card) => card.addEventListener('click', showCard));

	const aboutUsImg = document.querySelectorAll('.about-us-img');
	const shadowImgAbout = document.querySelector('.shadow-img-about-us');
	const scaleOn = () => {
		aboutUsImg.forEach((img) => {
			const imageTop = img.getBoundingClientRect().top;
			const windowHeight = window.innerHeight;

			// Oblicz stosunek przewinięcia strony do pozycji zdjęcia
			const scrollRatio = (windowHeight - imageTop) / windowHeight;

			// Minimalna i maksymalna skala, jaką chcemy osiągnąć
			const minScale = 1;
			const maxScale = 2.4;
			// Interpolacja liniowa, aby obliczyć skalę w zakresie od minScale do maxScale
			let scale = minScale + scrollRatio * (maxScale - minScale);
			scale = Math.max(scale, 1);

			// Zastosuj skalę dla obrazu
			img.style.transform = `scale(${scale})`;
			shadowImgAbout.style.transform = `scale(${scale})`;
		});
	};

	window.addEventListener('scroll', scaleOn);
	const traning = document.querySelector('.traning');
	const shadowAboutUs = document.querySelector('.shadow-img-about-us');
	const brightShadow = () => {
		const windowPosition = window.innerHeight;
		const blogHeaderImgTop = traning.getBoundingClientRect().top + 100;
		const shadowAboutUsTop = shadowAboutUs.getBoundingClientRect().top + 500;
		const shadowRatio = (windowPosition - blogHeaderImgTop) / windowPosition;
		const brightStart = 0.1; // Początkowa wartość rozjaśnienia
		const brightEnd = 0.8; // Końcowa wartość rozjaśnienia
		const brightStart2 = 0.6; // Początkowa wartość rozjaśnienia
		const brightEnd2 = 0.9; // Końcowa wartość rozjaśnienia

		// Obliczamy aktualną wartość rozjaśnienia na podstawie shadowRatio
		const currentBright = brightStart + shadowRatio * (brightEnd - brightStart);
		const shadowRatioAboutUs =
			(windowPosition - shadowAboutUsTop) / windowPosition;

		const shadowAboutUsCurrentBright =
			brightStart2 + shadowRatioAboutUs * (brightEnd2 - brightStart2);
		// Ustawiamy odpowiednią wartość opacity na podstawie obliczonej wartości rozjaśnienia
		// traning.style.backgroundColor = `rgba(0,0,0,${currentBright})`;
		shadowAboutUs.style.backgroundColor = `rgba(0,0,0,${shadowAboutUsCurrentBright})`;
	};
	if (traning && shadowAboutUs) {
		window.addEventListener('scroll', brightShadow);
	}

	const addTraningP = (event) => {
		const parentBox = event.currentTarget.closest('.traning-box');
		const traningPElement = parentBox.querySelector('.traning-p');
		const traningImg = parentBox.querySelector('.traning-img');

		traningPElement.classList.add('traning-p-hover');
		traningImg.classList.add('traning-img-hover');
	};

	const removeTraningP = (event) => {
		const parentBox = event.currentTarget.closest('.traning-box');
		const traningPElement = parentBox.querySelector('.traning-p');
		const traningImg = parentBox.querySelector('.traning-img');
		traningPElement.classList.remove('traning-p-hover');
		traningImg.classList.remove('traning-img-hover');
	};

	traningImgElements.forEach((img) => {
		img.addEventListener('mouseenter', addTraningP);
		img.addEventListener('mouseleave', removeTraningP);
	});

	const scaleImagesOnScroll1 = () => {
		imgs.forEach((img) => {
			const imageTop = img.getBoundingClientRect().top;
			const windowHeight = window.innerHeight;

			// Oblicz stosunek przewinięcia strony do pozycji zdjęcia
			const scrollRatio = (windowHeight - imageTop) / windowHeight;

			// Minimalna i maksymalna skala, jaką chcemy osiągnąć
			const minScale = 1;
			const maxScale = 1.08;
			// Interpolacja liniowa, aby obliczyć skalę w zakresie od minScale do maxScale
			let scale = minScale + scrollRatio * (maxScale - minScale);
			scale = Math.max(scale, 1);

			// Zastosuj skalę dla obrazu
			img.style.transform = `scale(${scale})`;
			// shadowImgAbout.style.transform = `scale(${scale})`;
		});
	};
	window.addEventListener('scroll', scaleImagesOnScroll1);
	// Zmień swoją sylwetkę! Mogę Cię przeprowadzić przez cały proces od ułożenia planu
	// treningowego, wspólny trening przez dietę do wspaniałych efektów. Wszystko zależy od Twojej
	// determinacji!

	if (pHeader) {
		let indexx = 1;
		let timeoutt;
		let inputValue = ` Cześć! Mam na imę Maksymilian. Sport towarzyszy mi przez całe życie. Trening na siłowni jest moją ogromną pasją. Przygodę zaczynałem marnując wiele czasu na nieskuteczne metody
		i drogie suplementy. Mijały miesiące, a ja bładziłem nie robiąc wiekszych postępów. Zacząłem sam zdobywać wiedzę i się rozwijać. Zajeło mi to kilka lat. Teraz chcialbym Ci, pomóc, żebyś Ty zaoszczędził swój czas i pieniądze, skupił się na rzeczach, które na prawdę działają. Pomogłem już wielu osobom zmienić sylwetkę, a przede wszystkim nabrać wiele zdrowych nawyków i umiejętności kontroli swojej wagi i kompozycji ciała. `;

		const textAnimation = () => {
			let speed = 50;
			pHeader.innerHTML = inputValue.slice(0, indexx);

			indexx++;
			if (indexx > inputValue.length) {
				indexx = 0;
				clearTimeout(timeoutt);
				setTimeout(() => {
					timeout = setTimeout(textAnimation, speed);
				}, 15000);
			} else {
				clearTimeout(timeoutt);
				timeoutt = setTimeout(textAnimation, speed);
			}
		};
		setTimeout(textAnimation, 3500);
	}
	// let indexxx = 1;
	// let timeouttt;

	if (pHeader2) {
		let indexx = 1;
		let timeoutt;
		const textAnimation2 = () => {
			let inputValue2 = ` Jak wygląda współpraca???    To zależy czego oczekujesz. Na początku przeprowadzimy rozmowę na temat Twojego celu i doświadczenia, które już posiadasz. Następnie pokażę Ci jak wykonywać wszystkie ćwiczenia, które dopasujemy do Twoich preferencji i czasu. Wytłumaczę Ci niezbędne aspekty kształtowania sylwetki i podejścia do diety i od czego zależy Twój postęp. Dopasujemy plan żywieniowy pod Twoje preferencje. Jeśli jesteś zainteresowany/a zobacz ofertę i skontaktuj się ze mną. `;

			let speed = 50;

			pHeader2.innerHTML = inputValue2.slice(0, indexx);
			indexx++;
			if (indexx > inputValue2.length) {
				indexx = 0;
				clearTimeout(timeoutt);
				setTimeout(() => {
					timeout = setTimeout(textAnimation2, speed);
				}, 15000);
			} else {
				clearTimeout(timeoutt);
				timeoutt = setTimeout(textAnimation2, speed);
			}
		};

		setTimeout(textAnimation2, 3500);
	}

	if (pHeader3) {
		let indexx = 1;
		let timeoutt;

		let inputValue3 = ` Zapoznaj się z artykułami, które pomogą Ci ugruntować wiedzę i przyczynią się do większej świadomości w procesie kształtowania sylwetki. `;
		const textAnimation3 = () => {
			let speed = 50;

			pHeader3.innerHTML = inputValue3.slice(0, indexx);
			indexx++;
			if (indexx > inputValue3.length) {
				indexx = 0;
				clearTimeout(timeoutt);
				setTimeout(() => {
					timeout = setTimeout(textAnimation3, speed);
				}, 15000);
			} else {
				clearTimeout(timeoutt);
				timeoutt = setTimeout(textAnimation3, speed);
			}
		};
		{
			setTimeout(textAnimation3, 3500);
		}
	}
	// const btn = document.querySelector('.btn');
	let textCard = 1;

	// let speed = 120;
	// let index = 0;

	let textValues = Array.from(imgs).map((img) => img.textContent);

	const changeTextCard = () => {
		textCard++;
		if (textCard >= 6) {
			textCard = 1;
		}
		imgs.forEach((img) => {
			if (textCard == img.dataset.number) {
				img.classList.add('active-img');
				clearTimeout();
				//   textAnimation();
			} else {
				img.classList.remove('active-img');
			}
		});
	};

	setInterval(changeTextCard, 6000);
	// textAnimation();
	const values = {
		opcja2: 1.2,
		opcja3: 1.375,
		opcja4: 1.45,
		opcja5: 1.65,
		opcja6: 1.9,
		opcja8: 0.8,
		opcja9: 1,
		opcja10: 1.2,
		opcja11: 0.9,
		opcja12: 1.05,
	};
	window.addEventListener('load', function () {
		setTimeout(function () {
			document.getElementById('preloader').style.opacity = 0;
			setTimeout(function () {
				document.getElementById('preloader').style.display = 'none';
				// document.getElementById('content').style.visibility = 'visible';
			}, 100); // Opóźnienie przed ukryciem preloadera
		}, 1500); // Czas w milisekundach - w tym przykładzie 1.5 s
	});
	const loader = document.querySelector('.loader');

	let pvalue = loader.textContent;

	let index = 0;
	let speed = 60;
	let timeout;

	const writingAnimation = () => {
		loader.innerHTML = pvalue.slice(0, index);
		index++;

		if (index > pvalue) return;

		timeout = setTimeout(writingAnimation, speed);
	};

	writingAnimation();

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
	// funkcja active ====================================

	const resultStyle = () => {
		resultb1.style.display = 'none';
	};

	const activeMen = () => {
		faPerson.classList.toggle('active');
		faPersonDress.classList.remove('active');
		resultB.classList.toggle('resua');
		resultb1.classList.remove('resua');
		resultE.classList.toggle('e', faPerson.classList.contains('active'));

		// resultStyle()
	};

	// boxP.classList.toggle('box-p-n')

	const activeWoman = () => {
		faPersonDress.classList.toggle('active');
		faPerson.classList.remove('active');
		resultb1.classList.toggle('resua');
		resultB.classList.remove('resua');
		resultE.classList.toggle('e', faPersonDress.classList.contains('active'));

		// boxP.classList.toggle('box-p-n')
	};
	// funkcja active ====================================

	const textPsexW = () => {
		if (!faPersonDress.classList.contains('active')) {
			boxP.textContent = 'Kobieta';
		} else {
			boxP.textContent = 'Wybierz płeć';
			resultE.classList.remove('e');
		}
	};
	const textPsexM = () => {
		if (!faPerson.classList.contains('active')) {
			boxP.textContent = 'Mężczyzna';
		} else {
			boxP.textContent = 'Wybierz płeć';
			resultE.classList.remove('e');
		}
	};
	if (faPersonDress && faPerson) {
		faPersonDress.addEventListener('click', textPsexW);
		faPerson.addEventListener('click', textPsexM);
	}

	const countBMRM = () => {
		if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja2' &&
			optionT.value === 'opcja8' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja2'] *
				values['opcja8']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja3' &&
			optionT.value === 'opcja8' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja3'] *
				values['opcja8']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja4' &&
			optionT.value === 'opcja8' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja4'] *
				values['opcja8']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja5' &&
			optionT.value === 'opcja8' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja5'] *
				values['opcja8']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja6' &&
			optionT.value === 'opcja8' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja6'] *
				values['opcja8']
			);
		}
		// opcja 9
		else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja2' &&
			optionT.value === 'opcja9' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja2'] *
				values['opcja9']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja3' &&
			optionT.value === 'opcja9' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja3'] *
				values['opcja9']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja4' &&
			optionT.value === 'opcja9' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja4'] *
				values['opcja9']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja5' &&
			optionT.value === 'opcja9' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja5'] *
				values['opcja9']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja6' &&
			optionT.value === 'opcja9' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja6'] *
				values['opcja9']
			);
		}
		// opcja 10
		else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja2' &&
			optionT.value === 'opcja10' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja2'] *
				values['opcja10']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja3' &&
			optionT.value === 'opcja10' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja3'] *
				values['opcja10']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja4' &&
			optionT.value === 'opcja10' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja4'] *
				values['opcja10']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja5' &&
			optionT.value === 'opcja10' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja5'] *
				values['opcja10']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja6' &&
			optionT.value === 'opcja10' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja6'] *
				values['opcja10']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja2' &&
			optionT.value === 'opcja11' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja2'] *
				values['opcja11']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja3' &&
			optionT.value === 'opcja11' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja3'] *
				values['opcja11']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja4' &&
			optionT.value === 'opcja11' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja4'] *
				values['opcja11']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja5' &&
			optionT.value === 'opcja11' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja5'] *
				values['opcja11']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja6' &&
			optionT.value === 'opcja11' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja6'] *
				values['opcja11']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja2' &&
			optionT.value === 'opcja12' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja2'] *
				values['opcja12']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja3' &&
			optionT.value === 'opcja12' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja3'] *
				values['opcja12']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja4' &&
			optionT.value === 'opcja12' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja4'] *
				values['opcja12']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja5' &&
			optionT.value === 'opcja12' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja5'] *
				values['opcja12']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja6' &&
			optionT.value === 'opcja12' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					66) *
				values['opcja6'] *
				values['opcja12']
			);
		}
	};
	const countBMRW = () => {
		if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja2' &&
			optionT.value === 'opcja8' &&
			faPersonDress.classList.contains('active')
		) {
			return (
				(9.6 * wCalories.value +
					1.8 * hCalories.value -
					4.7 * aCalories.value +
					655) *
				values['opcja2'] *
				values['opcja8']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja3' &&
			optionT.value === 'opcja8' &&
			faPersonDress.classList.contains('active')
		) {
			return (
				(9.6 * wCalories.value +
					1.8 * hCalories.value -
					4.7 * aCalories.value +
					655) *
				values['opcja3'] *
				values['opcja8']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja4' &&
			optionT.value === 'opcja8' &&
			faPersonDress.classList.contains('active')
		) {
			return (
				(9.6 * wCalories.value +
					1.8 * hCalories.value -
					4.7 * aCalories.value +
					655) *
				values['opcja4'] *
				values['opcja8']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja5' &&
			optionT.value === 'opcja8' &&
			faPersonDress.classList.contains('active')
		) {
			return (
				(9.6 * wCalories.value +
					1.8 * hCalories.value -
					4.7 * aCalories.value +
					655) *
				values['opcja5'] *
				values['opcja8']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja6' &&
			optionT.value === 'opcja8' &&
			faPersonDress.classList.contains('active')
		) {
			return (
				(9.6 * wCalories.value +
					1.8 * hCalories.value -
					4.7 * aCalories.value +
					655) *
				values['opcja6'] *
				values['opcja8']
			);
		}
		// opcja 9
		else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja2' &&
			optionT.value === 'opcja9' &&
			faPersonDress.classList.contains('active')
		) {
			return (
				(9.6 * wCalories.value +
					1.8 * hCalories.value -
					4.7 * aCalories.value +
					655) *
				values['opcja2'] *
				values['opcja9']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja3' &&
			optionT.value === 'opcja9' &&
			faPersonDress.classList.contains('active')
		) {
			return (
				(9.6 * wCalories.value +
					1.8 * hCalories.value -
					4.7 * aCalories.value +
					655) *
				values['opcja3'] *
				values['opcja9']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja4' &&
			optionT.value === 'opcja9' &&
			faPersonDress.classList.contains('active')
		) {
			return (
				(9.6 * wCalories.value +
					1.8 * hCalories.value -
					4.7 * aCalories.value +
					655) *
				values['opcja4'] *
				values['opcja9']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja5' &&
			optionT.value === 'opcja9' &&
			faPersonDress.classList.contains('active')
		) {
			return (
				(9.6 * wCalories.value +
					1.8 * hCalories.value -
					4.7 * aCalories.value +
					655) *
				values['opcja5'] *
				values['opcja9']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja6' &&
			optionT.value === 'opcja9' &&
			faPersonDress.classList.contains('active')
		) {
			return (
				(9.6 * wCalories.value +
					1.8 * hCalories.value -
					4.7 * aCalories.value +
					655) *
				values['opcja6'] *
				values['opcja9']
			);
		}
		// opcja 10
		else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja2' &&
			optionT.value === 'opcja10' &&
			faPersonDress.classList.contains('active')
		) {
			return (
				(9.6 * wCalories.value +
					1.8 * hCalories.value -
					4.7 * aCalories.value +
					655) *
				values['opcja2'] *
				values['opcja10']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja3' &&
			optionT.value === 'opcja10' &&
			faPersonDress.classList.contains('active')
		) {
			return (
				(9.6 * wCalories.value +
					1.8 * hCalories.value -
					4.7 * aCalories.value +
					655) *
				values['opcja3'] *
				values['opcja10']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja4' &&
			optionT.value === 'opcja10' &&
			faPersonDress.classList.contains('active')
		) {
			return (
				(9.6 * wCalories.value +
					1.8 * hCalories.value -
					4.7 * aCalories.value +
					655) *
				values['opcja4'] *
				values['opcja10']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja5' &&
			optionT.value === 'opcja10' &&
			faPersonDress.classList.contains('active')
		) {
			return (
				(9.6 * wCalories.value +
					1.8 * hCalories.value -
					4.7 * aCalories.value +
					655) *
				values['opcja5'] *
				values['opcja10']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja6' &&
			optionT.value === 'opcja10' &&
			faPersonDress.classList.contains('active')
		) {
			return (
				(9.6 * wCalories.value +
					1.8 * hCalories.value -
					4.7 * aCalories.value +
					655) *
				values['opcja6'] *
				values['opcja10']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja2' &&
			optionT.value === 'opcja11' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					655) *
				values['opcja2'] *
				values['opcja11']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja3' &&
			optionT.value === 'opcja11' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					655) *
				values['opcja3'] *
				values['opcja11']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja4' &&
			optionT.value === 'opcja11' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					655) *
				values['opcja4'] *
				values['opcja11']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja5' &&
			optionT.value === 'opcja11' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					655) *
				values['opcja5'] *
				values['opcja11']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja6' &&
			optionT.value === 'opcja11' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					655) *
				values['opcja6'] *
				values['opcja11']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja2' &&
			optionT.value === 'opcja12' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					655) *
				values['opcja2'] *
				values['opcja12']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja3' &&
			optionT.value === 'opcja12' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					655) *
				values['opcja3'] *
				values['opcja12']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja4' &&
			optionT.value === 'opcja12' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					655) *
				values['opcja4'] *
				values['opcja12']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja5' &&
			optionT.value === 'opcja12' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					655) *
				values['opcja5'] *
				values['opcja12']
			);
		} else if (
			wCalories.value !== '' &&
			hCalories.value !== '' &&
			aCalories.value !== '' &&
			parseFloat(wCalories.value) !== 0 &&
			parseFloat(hCalories.value) !== 0 &&
			parseFloat(aCalories.value) !== 0 &&
			optionA.value === 'opcja6' &&
			optionT.value === 'opcja12' &&
			faPerson.classList.contains('active')
		) {
			return (
				(13.7 * wCalories.value +
					5 * hCalories.value -
					6.8 * aCalories.value +
					655) *
				values['opcja6'] *
				values['opcja12']
			);
		}
	};

	const printCountBMRM = () => {
		const result = countBMRM();
		const roundedResult = Math.floor(result).toFixed(0);
		if (isNaN(roundedResult)) {
			resultC.textContent = 'Wpisz tylko liczby';
		} else {
			resultC.textContent = 'Potrzebujesz ' + roundedResult + ' Kcal';
		}
	};

	const printCountBMRW = () => {
		const result = countBMRW();
		const roundedResult = Math.floor(result).toFixed(0);
		if (isNaN(result)) {
			resultC.textContent = 'Wprowadź tylko liczby';
		} else {
			resultC.textContent = 'Potrzebujesz ' + roundedResult + ' Kcal';
		}
	};
	if (resultB && resultb1) {
		resultB.addEventListener('click', printCountBMRM);
		resultb1.addEventListener('click', printCountBMRW);
	}

	// Dla kobiet:

	// BMR = 655 + (9,6 × waga w kg) + (1,8 × wysokość w cm) - (4,7 × wiek w latach),

	// Dla mężczyzn:

	// BMR = 66 + (13,7 × waga w kg) + (5 × wysokość w cm) - (6,8 × wiek w latach).

	const countHeight = () => {
		const heightValue = parseFloat(height.value) / 100;
		const weightValue = parseFloat(weight.value);
		const fatValue = parseFloat(fat.value) / 100;
		return (weightValue - weightValue * fatValue) / (heightValue * heightValue);
	};

	// const result = (76 - (76 - 0.15 * 76) / (1.82 * 1.82)) / 3.3124;
	// console.log(result.toFixed(2));
	// const countFFMI = () =>
	// {const fa = parseFloat(countHeight)
	// return fa / 3,3124}
	// const inputElement = document.getElementById('wCalories');
	// const errorTextElement = document.getElementById('errorText');

	// inputElement.addEventListener('input', function() {
	//   const inputValue = this.value;
	//   const isValidNumber = !isNaN(inputValue) && inputValue !== '';

	//   if (isValidNumber) {
	//     errorTextElement.style.display = 'none';
	//   } else {
	//     errorTextElement.style.display = 'block';
	//   }
	// });

	const printW = (event) => {
		event.preventDefault();
		const result = countHeight();
		const resultToF = result.toFixed(2);
		if (isNaN(resultToF)) {
			pffmi.textContent = 'wpisz tylko liczby';
		} else {
			pffmi.textContent = resultToF + ' FFMI';
			return false;
		}
	};

	const clear = () => {
		pffmi.textContent = 'Wpisz tylko liczby';
	};
	const clear2 = () => {
		maxWeight.textContent = 'Wpisz tylko liczby';
	};
	const maxRep = () => {
		const eW = parseFloat(mWeight.value);
		const rep = parseFloat(reps.value);
		if (rep !== 0) {
			return eW * rep * 0.0338 + eW;
		} else {
			// Wartość rep wynosi zero, zwracamy zero lub inny odpowiedni wynik
			return 0;
		}
	};

	const printMaxrep = (event) => {
		event.preventDefault();
		const result2 = maxRep();
		const roundedResult2 = Math.floor(result2).toFixed(2);
		if (!isNaN(result2) && result2 !== 0) {
			maxWeight.textContent = roundedResult2 + ' kg to Twój maksymalny ciężar';
		} else {
			maxWeight.textContent = 'Wpisz tylko liczby';
		}
	};
	let progressBar = document.querySelector('.progress-bar');
	let progressBarContainer = document.querySelector('.progress-bar-container');
	let progressBarLabel = document.querySelector('.progress-bar-label');
	let isMouseDown = false;

	if (progressBarContainer) {
		progressBarContainer.addEventListener('mousedown', function (event) {
			isMouseDown = true;
			updateProgressBar(event);
			calculateBMI();
		});
	}

	document.addEventListener('mousemove', function (event) {
		if (isMouseDown) {
			updateProgressBar(event);
			calculateBMI();
		}
	});

	document.addEventListener('mouseup', function (event) {
		isMouseDown = false;
	});

	if (progressBarContainer) {
		progressBarContainer.addEventListener('touchstart', function (event) {
			isMouseDown = true;
			updateProgressBar(event);
			calculateBMI();
		});
	}

	document.addEventListener('touchmove', function (event) {
		if (isMouseDown) {
			updateProgressBar(event);
			calculateBMI();
		}
	});

	document.addEventListener('touchend', function (event) {
		isMouseDown = false;
	});

	// Kod dla drugiego paska postępu (progressBar2)

	let progressBar2 = document.querySelector('.progress-bar2');
	let progressBarContainer2 = document.querySelector(
		'.progress-bar-container2'
	);
	let progressBarLabel2 = document.querySelector('.progress-bar-label2');
	let isMouseDown2 = false;

	if (progressBarContainer2) {
		progressBarContainer2.addEventListener('mousedown', function (event) {
			isMouseDown2 = true;
			updateProgressBar2(event);
			calculateBMI();
		});
	}

	document.addEventListener('mousemove', function (event) {
		if (isMouseDown2) {
			updateProgressBar2(event);
			calculateBMI();
		}
	});

	document.addEventListener('mouseup', function (event) {
		isMouseDown2 = false;
	});

	if (progressBarContainer2) {
		progressBarContainer2.addEventListener('touchstart', function (event) {
			isMouseDown2 = true;
			updateProgressBar2(event);
			calculateBMI();
		});
	}

	document.addEventListener('touchmove', function (event) {
		if (isMouseDown2) {
			updateProgressBar2(event);
			calculateBMI();
		}
	});

	document.addEventListener('touchend', function (event) {
		isMouseDown2 = false;
	});

	function updateProgressBar(event) {
		let containerWidth = progressBarContainer.offsetWidth;
		let clickX = event.clientX;
		if (event.touches && event.touches.length > 0) {
			clickX = event.touches[0].clientX;
		}
		clickX -= progressBarContainer.getBoundingClientRect().left;

		let width = (clickX / containerWidth) * 100;
		width = Math.max(Math.min(width, 100), 0);

		progressBar.style.width = width + '%';
		progressBarLabel.value = Math.round((width / 100) * 240);

		calculateBMI();
	}
	progressBarLabel.addEventListener('input', function () {
		let width2 = progressBarLabel.value;
		width2 = Math.max(Math.min(width2, 260), 0);

		progressBar.style.width = (width2 / 260) * 100 + '%';
		progressBarLabel.value = progressBarLabel.value.replace(/[^0-9]/g, '');
		calculateBMI();
	});

	function updateProgressBar2(event) {
		let containerWidth = progressBarContainer2.offsetWidth;
		let clickX = event.clientX;
		if (event.touches && event.touches.length > 0) {
			clickX = event.touches[0].clientX;
		}
		clickX -= progressBarContainer2.getBoundingClientRect().left;

		let width = (clickX / containerWidth) * 100;
		width = Math.max(Math.min(width, 100), 0);

		progressBar2.style.width = width + '%';
		progressBarLabel2.value = Math.round((width / 100) * 260);

		calculateBMI();
	}

	progressBarLabel2.addEventListener('input', function () {
		let width2 = progressBarLabel2.value;
		width2 = Math.max(Math.min(width2, 260), 0);

		progressBar2.style.width = (width2 / 260) * 100 + '%';
		progressBarLabel2.value = progressBarLabel2.value.replace(/[^0-9]/g, '');
		calculateBMI();
	});

	function calculateBMI() {
		const weight = parseFloat(progressBarLabel2.value);
		const height = parseFloat(progressBarLabel.value) / 100;
		if (isNaN(weight) || isNaN(height)) {
			count00.textContent = 'Uzupełnij dwie wartości';
			return;
		}

		const bmi = weight / (height * height);
		if (bmi >= 30) {
			count00.textContent = 'BMI: ' + bmi.toFixed(2) + ' - Masz otyłość';
		} else if (bmi >= 25) {
			count00.textContent = 'BMI: ' + bmi.toFixed(2) + ' - Masz nadwagę';
		} else if (bmi >= 18.5) {
			count00.textContent =
				'BMI: ' + bmi.toFixed(2) + ' - Masz prawidłową wagę';
		} else {
			count00.textContent = 'BMI: ' + bmi.toFixed(2) + ' - Masz niedowagę';
		}
	}
	progressBarLabel.addEventListener('input', function () {
		calculateBMI();
	});

	progressBarLabel2.addEventListener('input', function () {
		calculateBMI();
	});
	const hoverElements = document.querySelectorAll('.hover-element');

	function handleTapHover(event) {
		event.target.classList.toggle('active');
	}

	hoverElements.forEach(function (element) {
		element.addEventListener('touchstart', handleTapHover);
		element.addEventListener('touchend', handleTapHover);
	});

	// const links = document.querySelectorAll('.aNav');

	// links.forEach((link) => {
	// 	link.addEventListener('mouseover', () => {
	// 		link.parentNode.classList.add('hover');
	// 	});

	// 	link.addEventListener('mouseout', () => {
	// 		link.parentNode.classList.remove('hover');
	// 	});
	// });

	// console.log(countHeight)
	// const hew = (event) => {
	//     event.preventDefault()
	//     const heightValue = height.value

	//         pffmi.textContent = heightValue

	//         return false
	// }

	if (btn && btnclear && btnclear2 && btnsend2 && faPerson) {
		btn.addEventListener('click', printW);
		btnclear.addEventListener('click', clear);
		btnsend2.addEventListener('click', printMaxrep);
		btnclear2.addEventListener('click', clear2);
		faPerson.addEventListener('click', activeMen);
		faPersonDress.addEventListener('click', activeWoman);
	}

	// resultB.addEventListener('click', printCountBMRM);
	// resultB.addEventListener('click', printCountBMRW);
});
