const toggleBtn = document.querySelector('.drop_btn');
const toggleBtnIcon = document.querySelector('.drop_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.square');
      if (entry.isIntersecting) {
        square.classList.add('square-animation');
        return; // если класс добавлен, продолжать уже не надо
      }
      // перемещение завершено, теперь надо удалить класс
      square.classList.remove('square-animation');
    });
  });
  observer.observe(document.querySelector('.square-wrapper'));


  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
      change.target.classList.add('element-show');
      return;
      }
      change.target.classList.remove('element-show');
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer1 = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer1.observe(elm);
  }

  function moveToSection(sectionId) {
    let section = document.getElementById(sectionId);
    let container = document.querySelector(".sections-container");
    let newPosition = -section.offsetTop;
    container.style.transform = `translateY(${newPosition}px)`;
  }

  
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }
