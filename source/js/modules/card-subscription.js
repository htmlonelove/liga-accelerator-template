const cardPrice = () => {
  const dataNameCoach = 'data-price-with-coach';
  const dataNameDaytime = 'data-price-daytime';
  const dataNameAllDay = 'data-price-all-day';

  const cards = document.querySelector('[data-cards]');
  const priceCoach = cards.querySelector(`[${dataNameCoach}]`);
  const priceDaytime = cards.querySelector(`[${dataNameDaytime}]`);
  const priceAllDay = cards.querySelector(`[${dataNameAllDay}]`);

  const tabsList = document.querySelector('[data-tabs]');
  const tabs = tabsList.querySelectorAll('[data-tab]');
  const tabsArray = [...tabs];

  // Объект с ценами абонементов
  const priceObj = {
    sixMonth: {
      priceCoach: '30 000',
      priceDaytime: '10 200',
      priceAllDay: '16 200',
    },
    twelveMonth: {
      priceCoach: '60 000',
      priceDaytime: '20 400',
      priceAllDay: '32 400',
    },
    oneMonth: {
      priceCoach: '5000',
      priceDaytime: '1700',
      priceAllDay: '2700',
    },
  };

  // Присваивает цены абонементов и дублирует их в data-атрибут
  const setPrice = (month) => {
    priceCoach.textContent = priceObj[month].priceCoach;
    priceDaytime.textContent = priceObj[month].priceDaytime;
    priceAllDay.textContent = priceObj[month].priceAllDay;
    priceCoach.setAttribute(dataNameCoach, priceObj[month].priceCoach);
    priceDaytime.setAttribute(dataNameDaytime, priceObj[month].priceDaytime);
    priceAllDay.setAttribute(dataNameAllDay, priceObj[month].priceAllDay);
  };

  // Меняет цены абонементов в зависимости от нажатого таба
  const priceChange = (tab) => {
    const tabName = tab.dataset.tab;

    switch (tabName) {
      case '6-month':
        setPrice('sixMonth');
        break;

      case '12-month':
        setPrice('twelveMonth');
        break;

      default:
        setPrice('oneMonth');
        break;
    }
  };

  const onTabClick = (event) => {
    // Удаляет у всех табов класс active
    tabsArray.forEach((tab) => {
      tab.classList.remove('subscription__btn--active');
    });

    // Добавляет табу, на который был совершен клик, класс
    event.target.classList.add('subscription__btn--active');

    priceChange(event.target);
  };

  setPrice('oneMonth');

  tabsArray.forEach((tab) => {
    tab.addEventListener('click', onTabClick);
  });
};

export {cardPrice};
