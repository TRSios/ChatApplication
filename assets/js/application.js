const navBar = document.querySelector('.nav-bar');
const navBarItems = navBar.getElementsByTagName('a');
for (let i = 0; i < navBarItems.length; i++) {
    navBarItems[i].addEventListener('click', function () {
        const currentActive = navBar.getElementsByClassName('active-nav-bar');
        currentActive[0].className = currentActive[0].className.replace('active-nav-bar', '');
        this.className += 'active-nav-bar';

        const container = document.querySelector('.container');

        if (this.text === 'Messages') {
            container.className = container.className.replace(' hidden', '');
        } else if (!container.className.includes('hidden')) {
            container.className += ' hidden';
        }
    });
}

const channels = document.querySelectorAll('.channel-name');
for (let i = 0; i < channels.length; i++) {
    channels[i].addEventListener('click', function () {
        const currentActive = document.getElementsByClassName('active-channel-name');
        currentActive[0].className = currentActive[0].className.replace(' active-channel-name', '');
        this.className += ' active-channel-name';
    });
}
