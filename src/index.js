import join from 'lib/join';

function component() {
    let element = document.createElement('div');
    const message = ['Yeezy, yeezy', 'whats good']
    element.innerHTML = join(message, ' ');

    return element;
}

document.body.appendChild(component());