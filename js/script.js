document.addEventListener("DOMContentLoaded", function () {
// Переключение классов при работе бургер-кнопки
		const topBurgerBtn = document.querySelector(".header-top");
		topBurgerBtn.onclick = function () {
			topBurgerBtn.classList.toggle("header-top_active");
		};
// Слайдер в Заголовке
		const swiper = new Swiper('.swiper1', {
		loop: true,
		grabCursor: true,
		speed: 800,
		pagination: {
			el: '.swiper-pagination',
			clickable:true,
		},
	});
// Карусель с выбором продуктов
		const swiper2 = new Swiper('.swiper2', {
		loop: true,
		grabCursor: true,
		speed:500,
		breakpoints: {
			320: {
				slidesPerGroup: 1,
				slidesPerView: 2,
				spaceBetween: 25,
			},
			576: {
				slidesPerGroup: 1,
				slidesPerView: 4,
				spaceBetween: 50,
			},
			768: {
				slidesPerGroup: 1,
				slidesPerView: 6,
				spaceBetween: 20,
			},
			992: {
				slidesPerGroup: 1,
				slidesPerView: 8,
				spaceBetween: 20,
			},
			1199: {
				spaceBetween: 30,
				slidesPerView: 8,
			}
		},
		navigation: {
			nextEl: '.swiper-button-right',
			prevEl: '.swiper-button-left',
		},
	})
// Карусель лучшие продажи
	const swiper3 = new Swiper('.swiper3', {
		loop:true,
		grabCursor: true,
		speed: 1200,
		navigation: {
			nextEl: '.swiper-button-right',
			prevEl: '.swiper-button-left',
		},

		breakpoints: {
			320: {
				slidesPerView: 1,
				slidesPerGroup:1,
				spaceBetween: 80,
			},
			576: {
				slidesPerGroup: 1,
				slidesPerView: 2,
				spaceBetween: 55,
			},
			768: {
				slidesPerGroup: 4,
				slidesPerView: 4,
				spaceBetween: 30,
			},
			992: {
				slidesPerGroup: 4,
				slidesPerView: 4,
				spaceBetween: 30,
			},
			
		},
		pagination: {
			el: '.swiper-pagination',
			clickable:true,
		},
		
	})
// Карусель горячее промо
		const swiper4 = new Swiper('.swiper4', {
		loop: true,
		grabCursor: true,
		slidesPerGroup: 2,
		slidesPerView: 2,
		spaceBetween: 30,
		speed: 800,
		navigation: {
			nextEl: '.swiper-button-right',
			prevEl: '.swiper-button-left',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable:true,
		},
		breakpoints: {
			320: {
				slidesPerGroup: 1,
				slidesPerView: 1,
				spaceBetween: 30,
				
			},
			576: {
				slidesPerGroup: 1,
				slidesPerView: 1,
				spaceBetween: 100,
			},
			768: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 30,
			},
			992: {
				speed: 1200,
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 30,
			}
		}

	})
// Перестраиваемый блок популярные продукты в слайдер
		const swiper5 = new Swiper ('.swiper5', {
		pagination: {
			el: '.swiper-pagination',
			clickable:true,
		},
			breakpoints: {
			320: {
				loop:true,
				enabled: true,
				grid: {
					rows: 1,
				},
				slidesPerView: 1,
				slidesPerGroup: 1,
				spaceBetween: 80,
			},
			576: {
				loop:true,
				enabled: true,
				grid: {
					rows: 1,
				},
				slidesPerView: 2,
				spaceBetween: 55,
			},
			768: {
				enabled: false,
				grid: {
					rows: 2,
				},
				slidesPerView: 4,
				spaceBetween: 30,
			},
			992: {
				enabled: false,
				grid: {
					rows: 2,
				},
				slidesPerView: 4,
				spaceBetween: 30,
			},
			1199: {
				enabled: false,
				grid: {
					rows: 2,
				},
				slidesPerView: 4,
				spaceBetween: 30,
			}
		},
})
  // Таймер обратного отсчета
  const timer = document.querySelectorAll(".timer");
  const days = document.querySelectorAll(".timer__days");
  const hours = document.querySelectorAll(".timer__hours");
  const minutes = document.querySelectorAll(".timer__minutes");
  const seconds = document.querySelectorAll(".timer__seconds");

  let countDownDate = new Date("Sep 1, 2023 00:00:00").getTime();
  let updateTimer = setInterval(function () {
    let now = new Date().getTime();
    let difference = countDownDate - now;

    let daysDif = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hoursDif = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutesDif = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let secondsDif = Math.floor((difference % (1000 * 60)) / 1000);

    days.forEach(function (element) {
      element.innerHTML = daysDif;
    });
    hours.forEach(function (element) {
      element.innerHTML = hoursDif;
    });
    minutes.forEach(function (element) {
      element.innerHTML = minutesDif;
    });
    seconds.forEach(function (element) {
      element.innerHTML = secondsDif;
    });

    if (difference < 0) {
      clearInterval(updateTimer);
      timer.innerHTML = "End";
    }
  }, 1000);
});

