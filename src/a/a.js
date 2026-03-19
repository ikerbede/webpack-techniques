import _ from 'lodash';

export function aComponent() {
  const element = document.createElement('h1');

  element.innerHTML = _.join(['A', 'component'], ' ');

  return element;
}
