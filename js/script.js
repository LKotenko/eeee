'use script';


const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	ios: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.ios() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	}
};

// Плавная прокрутка

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});


	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}


// Меню бургер 
const menuBody = document.querySelector('.menu__body');
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
};

// Табы

const tabsBtn = document.querySelectorAll('.btn');
const tabsItems = document.querySelectorAll('.international__wrapper2');

tabsBtn.forEach(onTabClick);


function onTabClick(item) {
	item.addEventListener('click', function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute('data-tab');
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('active')) {
			tabsBtn.forEach(function (item) {
				item.classList.remove('active');
			});

			tabsItems.forEach(function (item) {
				item.classList.remove('active');
			});

			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}
		console.log(tabId);


	});
}

document.querySelector('.btn:nth-child(2)').click(); //.item__item:nth-child(2)


// "Табы"
const arrow = document.querySelector('.international__select-item');
const selectWrapper = document.querySelector('.international__select-wrapper');
const arrows = document.querySelector('.international__select-item-arrow');
const pole = document.querySelector('.international__select-items');
const text = document.querySelector('.international__sub-text2');

	if (arrow) {
	arrow.addEventListener('click', function (e) {
		arrow.classList.toggle('bbb');
		selectWrapper.classList.toggle('bbb');
		arrows.classList.toggle('bbb');
		text.classList.toggle('bbb');
		pole.classList.toggle('bbb');
	});
};



const ap1 = document.querySelector('.ap-1');
const ap2 = document.querySelector('.ap-2');
const ap3 = document.querySelector('.ap-3');
const ap4 = document.querySelector('.ap-4');
const ap5 = document.querySelector('.ap-5');

	if (ap3) {
	ap3.addEventListener('click', function (e) {
		ap1.classList.toggle('active');
		ap2.classList.toggle('active');
		ap3.classList.toggle('active');
		ap4.classList.toggle('active');
		ap5.classList.toggle('active');
	});
};



const ab1 = document.querySelector('.ab-1');
const ab2 = document.querySelector('.ab-2');
const ab3 = document.querySelector('.ab-3');
const ab4 = document.querySelector('.ab-4');
const ab5 = document.querySelector('.ab-5');

	if (ab3) {
	ab3.addEventListener('click', function (e) {
		ab1.classList.toggle('active');
		ab2.classList.toggle('active');
		ab3.classList.toggle('active');
		ab4.classList.toggle('active');
		ab5.classList.toggle('active');
	});
};


const ad1 = document.querySelector('.ad-1');
const ad2 = document.querySelector('.ad-2');
const ad3 = document.querySelector('.ad-3');
const ad4 = document.querySelector('.ad-4');
const ad5 = document.querySelector('.ad-5');

	if (ad3) {
	ad3.addEventListener('click', function (e) {
		ad1.classList.toggle('active');
		ad2.classList.toggle('active');
		ad3.classList.toggle('active');
		ad4.classList.toggle('active');
		ad5.classList.toggle('active');
	});
};

