window.addEventListener('scroll', () => {
   let scrolling = window.pageYOffset;

   const header = document.querySelector('.header');
   if (scrolling > 150) {
   header.classList.add('header-fixed');
   } else {
   header.classList.remove('header-fixed');
   }
});


let burger = document.querySelector('.aside__burger');
let block = document.querySelector('.aside');
let wrapper = document.querySelector('.wrapper');

burger.addEventListener('click', () => {
   block.classList.toggle('bg-active');
   burger.classList.toggle('bg-active');
   wrapper.classList.toggle('aside-hidden')
});




const range = document.querySelectorAll('.range > span');
range.forEach(item => {
   let value = parseInt(item.parentNode.getAttribute('data-value'));

   value = value > 100 ? 100 : value;
   value = value < 0 ? 0 : value;

   item.style.width = `${value}%`;
});

document.querySelectorAll('#demograph > .block__item');

const calendar = document.querySelector('.overview-calendar');
const calendarItems = document.querySelectorAll('.overview-calendar li');
const valueElement = document.querySelector('.calendar-value');

calendarItems.forEach(item => {
   item.classList.remove('active');
   item.addEventListener('click', () => {
      valueElement.textContent = item.textContent;

      item.classList.add('active');
   });
});

calendar.addEventListener('click', () => {
   calendar.classList.toggle('active');

   calendarItems.forEach(item => {
      item.classList.remove('active');
   });
});


const diagrams = document.querySelectorAll('.diagram');

diagrams.forEach(diagram => {
   let value = parseInt(diagram.getAttribute('data-value'));

   let valueText = `${diagram.getAttribute('data-value')}%`;

   const gradientArr = diagram.getAttribute('data-gradient').split(',');

   value = 360 / 100 * value;

   let context = diagram.getContext('2d');

   let lingrad = context.createLinearGradient(0,0,0,150);
   lingrad.addColorStop(0, gradientArr[0]);
   lingrad.addColorStop(1, gradientArr[1]);

   let pi = Math.PI;

   context.arc(90, 90, 65, 0, 2*pi, false);

   context.lineWidth= '8';
   context.strokeStyle='rgba(239, 237, 248, 0.5)';
   context.stroke();

   context.beginPath();
   
   context.arc(90, 90, 65, 4.71, value / 100, false);

   context.lineWidth= '20';
   context.strokeStyle = lingrad;
   context.lineCap = 'round';
   
   context.stroke();

   context.beginPath();
   context.font = '25px Nunito';
   context.fillStyle = '#000';
   
   context.fillText(valueText, 70, 100);

   context.beginPath();
   context.arc(170, 20, 10, pi * 2, false);
   context.fillStyle='#30E330';
   context.fill();

   context.beginPath();
   context.arc(20, 170, 7, pi * 2, false);
   context.fillStyle='#995DEA';
   context.fill();

   context.beginPath();
   context.arc(170, 170, 5, pi * 2, false);
   context.fillStyle='#00D0FF';
   context.fill();
   
});

const cheks = document.querySelectorAll('.checkbox');

cheks.forEach(item => {
   item.addEventListener('click', () => {
      item.classList.toggle('active');
   });
});