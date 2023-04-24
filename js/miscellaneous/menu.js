const menuToggle = document.querySelector('.menu-toggle-open');
const menuToggleClose = document.querySelector('.menu-toggle-close');
const menu = document.querySelector('.menu');
const menuTypeClassList = menu.classList;

menuToggle.addEventListener('click', function () {
  if (menuTypeClassList.contains('menu-left')) {
    menu.style.left = '0';
  }
  if (menuTypeClassList.contains('menu-right')) {
    menu.style.right = '0';
  }
  if (menuTypeClassList.contains('menu-top')) {
    menu.style.top = '0';
  }
  if (menuTypeClassList.contains('menu-bottom')) {
    document.querySelector('.menu-bottom').style.bottom = '0';
  }
});

menuToggleClose.addEventListener('click', function () {
  const parent = menu.parentElement;
  const parentClasses = parent.classList;
  let distance = 0;

  if (menuTypeClassList.contains('menu-left')) {
    parentClasses.forEach(cssClass => {
      if (cssClass.startsWith('w')) {
        distance = Number(cssClass.slice(1));
        menu.style.left = `-${distance}%`;
      }
    });
  }
  if (menuTypeClassList.contains('menu-right')) {
    parentClasses.forEach(cssClass => {
      if (cssClass.startsWith('w')) {
        distance = Number(cssClass.slice(1));
        menu.style.right = `-${distance}%`;
      }
    });
  }
  if (menuTypeClassList.contains('menu-top')) {
    parentClasses.forEach(cssClass => {
      if (cssClass.startsWith('h')) {
        distance = Number(cssClass.slice(1));
        menu.style.top = `-${distance}%`;
      }
    });
  }
  if (menuTypeClassList.contains('menu-bottom')) {
    document.querySelector('.menu-bottom').style.bottom = '-100%';
  }
});
