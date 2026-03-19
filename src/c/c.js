import _ from 'lodash';

export function cComponent() {
  const element = document.createElement('h1');
  
  element.innerHTML = _.join(['C', 'component'], ' ');

  return element;
}
