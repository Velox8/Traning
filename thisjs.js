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
const allNavItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
// liczenie

const values = {
	opcja2: 1.2,
	opcja3: 1.375,
	opcja4: 1.41,
	opcja5: 1.725,
	opcja6: 1.9,
	opcja8: 0.8,
	opcja9: 1,
	opcja10: 1.2,
	opcja11: 0.9,
	opcja12: 1.05,



};
//  nav nav 
const handleNav = () => {
    nav.classList.toggle('nav--active')

    navBtnBars.classList.remove('black-bars-color');

    allNavItems.forEach(item => { 
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })

    handleNavItemsAnimation();
}

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}
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
faPersonDress.addEventListener('click', textPsexW);
faPerson.addEventListener('click', textPsexM);

const countBMRM = () => {
	if (
         wCalories.value !== '' &&
         hCalories.value !== '' &&
	     aCalories.value !== '' && 
	     parseFloat(wCalories.value) !== 0 &&
         parseFloat(hCalories.value) !== 0 &&
	     parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
         hCalories.value !== '' &&
	     aCalories.value !== '' && 
	     parseFloat(wCalories.value) !== 0 &&
         parseFloat(hCalories.value) !== 0 &&
	     parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	 else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	 else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	 else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	 else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	 else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	 else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	 else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	 else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	
	 else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	 else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	} else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	 else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	 else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	 else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	 else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	 else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	 else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	 else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	
	 else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	}
	 else if ( wCalories.value !== '' &&
    hCalories.value !== '' &&
    aCalories.value !== '' && 
    parseFloat(wCalories.value) !== 0 &&
    parseFloat(hCalories.value) !== 0 &&
    parseFloat(aCalories.value) !== 0&& 
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
	const roundedResult = Math.floor(result).toFixed(0); if (isNaN(roundedResult)) {
        resultC.textContent = "Wpisz tylko liczby"
        
    }else
	{
		resultC.textContent = 'Potrzebujesz ' + roundedResult + ' Kcal';
	}
};

const printCountBMRW = () => {
	const result = countBMRW();
	const roundedResult = Math.floor(result).toFixed(0);
	if (isNaN(result)) {
		resultC.textContent = 'Wprowadź tylko liczby';
	} else {
		resultC.textContent = roundedResult + ' Kcal';
	}
};
resultB.addEventListener('click', printCountBMRM);
resultb1.addEventListener('click', printCountBMRW);

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
    const roundedResult2 = Math.floor(result2).toFixed(2)
	if (!isNaN(result2) && result2 !== 0) {
		maxWeight.textContent = roundedResult2 + ' kg to Twój maksymalny ciężar';
	} else  {
		maxWeight.textContent = 'Wpisz tylko liczby';
	}
};
let progressBar = document.querySelector('.progress-bar');
let progressBarContainer = document.querySelector('.progress-bar-container');
let progressBarLabel = document.querySelector('.progress-bar-label');
let isMouseDown = false;

progressBarContainer.addEventListener('mousedown', function (event) {
	isMouseDown = true;
	updateProgressBar(event);
	calculateBMI();
});

document.addEventListener('mousemove', function (event) {
	if (isMouseDown) {
		updateProgressBar(event);
		calculateBMI();
	}
});

document.addEventListener('mouseup', function (event) {
	isMouseDown = false;
});

// Kod dla drugiego paska postępu (progressBar2)

let progressBar2 = document.querySelector('.progress-bar2');
let progressBarContainer2 = document.querySelector('.progress-bar-container2');
let progressBarLabel2 = document.querySelector('.progress-bar-label2');
let isMouseDown2 = false;

progressBarContainer2.addEventListener('mousedown', function (event) {
	isMouseDown2 = true;
	updateProgressBar2(event);
	calculateBMI();
});

document.addEventListener('mousemove', function (event) {
	if (isMouseDown2) {
		updateProgressBar2(event);
		calculateBMI();
	}
});

document.addEventListener('mouseup', function (event) {
	isMouseDown2 = false;
});

function updateProgressBar(event) {
	let containerWidth = progressBarContainer.offsetWidth;
	let clickX = event.clientX - progressBarContainer.offsetLeft;
	let width = (clickX / containerWidth) * 100;
	width = Math.max(Math.min(width, 100), 0);

	progressBar.style.width = width + '%';
	progressBarLabel.textContent = Math.round((width / 100) * 240) + 'cm';
}

function updateProgressBar2(event) {
	let containerWidth = progressBarContainer2.offsetWidth;
	let clickX = event.clientX - progressBarContainer2.offsetLeft;
	let width = (clickX / containerWidth) * 100;
	width = Math.max(Math.min(width, 100), 0);

	progressBar2.style.width = width + '%';

	progressBarLabel2.textContent = Math.round((width / 100) * 260) + 'kg';
}

function calculateBMI() {
	const weight = parseFloat(progressBarLabel2.textContent);
	const height = parseFloat(progressBarLabel.textContent) / 100;
	if (isNaN(weight) || isNaN(height)) {
		count00.textContent = 'Uzupełnij dwie wartości';
		return;
	}

	const bmi = weight / (height * height);
	if (bmi >= 30) {
		count00.textContent =
			'BMI: ' + bmi.toFixed(2) + ' - Masz otyłość';
	} else if (bmi >= 25) {
		count00.textContent =
			'BMI: ' + bmi.toFixed(2) + ' - Masz nadwagę';
	} else if (bmi >= 18.5) {
		count00.textContent =
			'BMI: ' +
			bmi.toFixed(2) +
			' - Masz prawidłową wagę';
	} else {
		count00.textContent = 'BMI: ' + bmi.toFixed(2) + ' - Masz niedowagę';
	}
}


const hoverElements = document.querySelectorAll('.hover-element');

function handleTapHover(event) {
  event.target.classList.toggle('active');
}

hoverElements.forEach(function(element) {
  element.addEventListener('touchstart', handleTapHover);
  element.addEventListener('touchend', handleTapHover);
});

const links = document.querySelectorAll('.aNav');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.parentNode.classList.add('hover');
  });

  link.addEventListener('mouseout', () => {
    link.parentNode.classList.remove('hover');
  });
});

// console.log(countHeight)
// const hew = (event) => {
//     event.preventDefault()
//     const heightValue = height.value

//         pffmi.textContent = heightValue

//         return false
// }

btn.addEventListener('click', printW);
btnclear.addEventListener('click', clear);
btnsend2.addEventListener('click', printMaxrep);
btnclear2.addEventListener('click', clear2);
faPerson.addEventListener('click', activeMen);

faPersonDress.addEventListener('click', activeWoman);

// resultB.addEventListener('click', printCountBMRM);
// resultB.addEventListener('click', printCountBMRW);





})