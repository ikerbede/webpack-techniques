import _ from 'lodash';

export function bComponent() {
  const element = document.createElement('h1');
  
  element.innerHTML = _.join(['B', 'component'], ' ');

  return element;
}
