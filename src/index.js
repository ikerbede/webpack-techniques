function title() {
  const element = document.createElement('h1');

  element.innerHTML = 'Webpack techniques';

  return element;
}

function menuItem(name) {
  const element = document.createElement('li');
  const btn = document.createElement('button');

  btn.innerHTML = name;
  btn.addEventListener("click", (event) => {
    const content = document.querySelector('#content');
    switch (name) {
      case 'A':
        import('./a/a.js').then(({ aComponent }) => content.replaceChildren(aComponent()));
        break;
      case 'B':
        import('./b/b.js').then(({ bComponent }) => content.replaceChildren(bComponent()));
        break;
      case 'C':
        import('./c/c.js').then(({ cComponent }) => content.replaceChildren(cComponent()));
        break;
    }
  });

  element.appendChild(btn);

  return element;
}

function menu() {
  const list = document.createElement('ul');
  const items = [
    menuItem('A'),
    menuItem('B'),
    menuItem('C'),
  ];

  list.append(...items);

  return list;
}

function content() {
  const element = document.createElement('div');
  element.id = 'content';

  return element;
}

document.body.appendChild(title());
document.body.appendChild(menu());
document.body.appendChild(content());
