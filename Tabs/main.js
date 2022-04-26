let tab;
let tabContent;

window.onload = function () { // события при загрузке страницы
  tabContent = document.getElementsByClassName('tabContent');
  tab = document.getElementsByClassName('tab');
  hideTabsContent(1);
}

function hideTabsContent(a){
  for(let i=a; i<tabContent.length; i++){
    tabContent[i].classList.remove('show'); //Свойство classList возвращает псевдомассив DOMTokenList, содержащий все классы элемента.
    tabContent[i].classList.add('hide'); // Метод add() добавляет новый элемент с заданным значением в конец объекта Set.
    tab[i].classList.remove('whiteborder'); // Метод Element.remove() удаляет элемент из DOM-дерева, в котором он находится.
  }
}

document.getElementById('tabs').onclick = function (event) { // функция обрабатывает все клики мышью по области видимости tabs
  let target = event.target; // проверяется эллемент на который был клик
  if(target.className == 'tab'){ // если кликнули на таб
    for(let i=0; i<tab.length; i++){ // выясняем индекс эллемента на который был клик
      if(target == tab[i]){
        showTabsContent(i); // отображаем нужный эллемент
        break;
      }
    }
  }
}

function showTabsContent(b){
  if(tabContent[b].classList.contains('hide')){
    hideTabsContent(0);
    tab[b].classList.add('whiteborder');
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');
  }
}