import _ from 'lodash';

export function cComponent() {
  const element = document.createElement('h2');
  
  element.innerHTML = _.join(['C', 'component'], ' ');

  return element;
}
