// Включить/выключить FLS (Full Logging System) (в работе)
//window["FLS"] = true;

// Соединение файла основного стиля
import "../scss/style.scss";

// ========================================================================================================================================================================================================================================================
// Функциональность ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsFunctions from "./files/functions.js";

/* Проверка поддержки webp, Добавление класса webp или же no-webp для HTML */
/* (i) Требуется для правильного отображения webp от css */
flsFunctions.isWebp();

/* Добавление класса touch для HTML Если браузер мобильный */
// flsFunctions.addTouchClass();

/* Добавление loaded для HTML После полной загрузки страницы */
// flsFunctions.addLoadedClass();

/* Модуль для работы с меню (Бургер) */
flsFunctions.menuInit();

// Добавление BG у хедера при скроле, добавляет к header класс showBg
//flsFunctions.addBgToHeader();

/* Учитывая плавуческую панель на мобильных устройствах при 100VH */
// flsFunctions.fullVHfix();

/*
модуль "спойлери"
Документація: https://template.fls.guru/template-docs/modul-spojlery.html
Сніппет (HTML): spollers
*/
flsFunctions.spollers();

/*
Модуль "tabi"
Документація: https://template.fls.guru/template-docs/modul-taby.html
Сніппет (HTML): tabs
*/
// flsFunctions.tabs();

/*
Модуль "покажите еще"
Документація: https://template.fls.guru/template-docs/modul-pokazat-eshhjo.html
Сніппет (HTML): showmore
*/
// flsFunctions.showMore();

/*
Модуль эффекта волны
Документация: https://template.fls.guru/template-docs/modul-ripple-effect.html
Сниппет (HTML):
*/
// flsFunctions.rippleEffect();

/*
Модуль курсора Catepto
Документация:
Сниппет (HTML):
*/
// flsFunctions.customCursor(true);

/*
Модуль Popap
Документація: https://template.fls.guru/template-docs/funkcional-popup.html
Сніппет (HTML): pl, pop
*/
// import './libs/popup.js'

/*
Модуль паралакса
Документація: https://template.fls.guru/template-docs/modul-animacii-parallaks-obektov-pri-dvizhenii-myshi.html
*/
//import "./libs/parallax-mouse.js";

// ========================================================================================================================================================================================================================================================
// Работа с формами ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
import * as flsForms from "./files/forms/forms.js";

/* Работа с полями формы */
/* Документация: https://template.fls.guru/template-docs/rabota-s-formami.html */
/*
flsForms.formFieldsInit({
	viewPass: false,
	autoHeight: false
});
*/
/* Отправка формы*/
/* Документація: https://template.fls.guru/template-docs/rabota-s-formami.html */
// flsForms.formSubmit();

/* Модуль формы «количество» */
// flsForms.formQuantity();

/* Модуль звездного рейтинга */
// flsForms.formRating();

/* Выберите рабочий модуль. */
import "./libs/select.js";

/* Календарный рабочий модуль */
// import './files/forms/datepicker.js'

/* (В работе) Маска с масками.*/
/*
Подключение и настройки выполняются в файле js/files/forms/inputmask.js
Документация на работе в шаблоне:
Документация плагина: https://github.com/RobinHerbots/inputmask
Сніппет(HTML):
*/
// import "./files/forms/inputmask.js";

/* Слайдер рабочий модуль */
/*
Подключение и настройки выполняются в файле js/files/forms/range.js
Документация на работе в шаблоне:
Документация плагина: https://refreshless.com/nouislider/
Сніппет (HTML): range
*/
// import "./files/forms/range.js";

/* Модуль работы с подсказками (tippy) */
/*
Подключение плагина Tippy.js и настройки, выполненные в файле js/files/tippy.js
Документация на работе в шаблоне:
Документация плагина: https://atomiks.github.io/tippyjs/
Сніппет (HTML): tip (добавляет атрибут с подсказкой дляhtml тега)
*/
// import "./files/tippy.js";

// ========================================================================================================================================================================================================================================================
// Работа с слайдером (Swiper) ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Настройка плагина ползунка ползунка и новые ползунки выполняется в файле js/files/sliders.js
Документация на работе в шаблоне: https://template.fls.guru/template-docs/rabota-so-slajderom-swiper.html
Документация плагина: https://swiperjs.com/
Сніппет(HTML): swiper
*/
//import "./files/sliders.js";

// ========================================================================================================================================================================================================================================================
// Модули прокрутки страниц ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/*
Изменение дизайна прокрутки
Документация по работе в шаблоне: в HTML мы добавляем в блок атрибутов data-simplebar
Документація плагіна: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
Сніппет(HTML): 
*/
//import "./files/scroll/simplebar.js";

// Ленивый (отсроченный) загрузка картин
// Документация на работе в шаблоне: https://template.fls.guru/template-docs/modul-lenivaya-podgruzka-lazy-loading.html
// Документация плагина: https://github.com/verlok/vanilla-lazyload
// Сніппет(HTML):
// import './files/scroll/lazyload.js';

// Наблюдатель на объектах атрибута data-watch
// Документация: https://template.fls.guru/template-docs/modul-nabljudatel-za-poyavleniem-elementa-pri-skrolle.html
// Сніппет(HTML):
import "./libs/watcher.js";

// модульПоекранноїПрокрутки
// Документація: https://template.fls.guru/template-docs/modul-poekrannoj-prokrutki-stranicy-fullpage.html
// Сніппет(HTML):
// import './libs/fullpage.js'

// Модуль паралакса
// Документація: https://template.fls.guru/template-docs/paralaks-pri-skroli.html
// Сніппет(HTML):
import "./libs/parallax.js";

// Функции работы с взломщиком
import * as flsScroll from "./files/scroll/scroll.js";

// Гладкая навигация на странице
// Документація: https://template.fls.guru/template-docs/modul-plavnoj-navigacii-po-stranice.html
//flsScroll.pageNavigation();

// Функциональность добавляет классы в заголовок во время прокрутки
// Документація: https://template.fls.guru/template-docs/modul-dobavleniya-klassov-k-shapke-pri-prokrutke-stranicy.html
//flsScroll.headerScroll();

// Функціонал липкого блоку
// flsScroll.stickyBlock();

// Модуль цифровой встречной анимации
// Документація: https://template.fls.guru/template-docs/modul-animacii-cifrovogo-lichilnika.html
// Сніппет(HTML):
// flsScroll.digitsCounter();

// ========================================================================================================================================================================================================================================================
// Галерея ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/*
Документация на работе в шаблоне: 
Документація плагіна: https://www.lightgalleryjs.com/docs/
Сніппет(HTML):
*/
// import "./files/gallery.js";

// ========================================================================================================================================================================================================================================================
// Другие плагины ============================================================================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================

/* Динамическая адаптивная */
// Документація: https://template.fls.guru/template-docs/dinamicheskij-adaptiv.html
import "./libs/dynamic_adapt.js";

/* Форматирование чисел */
// import './libs/wNumb.min.js';

// ========================================================================================================================================================================================================================================================
// Другой ========================================================================================================================================================================================================================================================
// ========================================================================================================================================================================================================================================================
/* Мы подключаем файлы с их кодом */
import "./files/script.js";
//============================================================================================================================================================================================================================================

// counters
import { CountUp } from "countUp.js";
const priceEl = document.querySelector(".metrics__current-num");
const priceNum = parseFloat(priceEl.dataset.price);
const volumeEl = document.querySelector(".volume-num");
const volumeNum = +volumeEl.dataset.volume;
const marketEl = document.querySelector(".market-num");
const marketNum = +marketEl.dataset.market;
const circulationEl = document.querySelector(".circulation-num");
const circulationNum = parseFloat(circulationEl.dataset.circulation);
const millionEl = document.querySelector(".million-num");
const millionNum = +millionEl.dataset.million;
const usersEl = document.querySelector(".users-num");
const usersNnum = usersEl.dataset.users;
const totalEl = document.querySelector(".total-num");
const totalNum = +totalEl.dataset.total;
const liquidityEl = document.querySelector("._liquidity-num");
const liquidityNum = liquidityEl.dataset.liquidity;
const boughtEl = document.querySelector("._bought-num");
const boughtNum = boughtEl.dataset.bought;

const firstCount = new CountUp(priceEl, priceNum, {
  decimalPlaces: 2,
  prefix: "$",
  duration: 3,
  enableScrollSpy: true,
});

const secondCount = new CountUp(volumeEl, volumeNum, {
  prefix: "$",
  duration: 3,
  enableScrollSpy: true,
});

const thirdCount = new CountUp(marketEl, marketNum, {
  prefix: "$",
  duration: 3,
  enableScrollSpy: true,
});

const fourthCount = new CountUp(circulationEl, circulationNum, {
  decimalPlaces: 2,
  duration: 3,
  enableScrollSpy: true,
});

const fivesCount = new CountUp(millionEl, millionNum, {
  prefix: "$",
  suffix: " million",
  duration: 3,
  enableScrollSpy: true,
});

const sixesCount = new CountUp(usersEl, usersNnum, {
  suffix: " users",
  duration: 3,
  enableScrollSpy: true,
});

const sevensCount = new CountUp(totalEl, totalNum, {
  duration: 3,
  enableScrollSpy: true,
});

const eightCount = new CountUp(liquidityEl, liquidityNum, {
  duration: 3,
  prefix: "$",
  enableScrollSpy: true,
});

const ninesCount = new CountUp(boughtEl, boughtNum, {
  duration: 3,
  enableScrollSpy: true,
});

//========================================================================================================================================================

//dots
const shuffle = (array) => {
  let m = array.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
};
const dots = document.querySelectorAll(".second-utility-animation__dot");
const dotsArr = Array.from(dots);
shuffle(dotsArr);
dotsArr.forEach((dot, index) => {
  dot.style.transitionDelay = `${index * 0.02}s`;
});

//========================================================================================================================================================
