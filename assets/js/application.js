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

        const threads = document.querySelector('.threads');

        if (this.innerText.includes('#designers')) {
            threads.className = threads.className.replace(' hidden', '');
        } else if (!threads.className.includes('hidden')) {
            threads.className += ' hidden';
        }
    });
}

const threadsNavBar = document.querySelector('.thread-header .nav-bar');
const threadsNavBarItems = threadsNavBar.getElementsByTagName('a');
for (let i = 0; i < threadsNavBarItems.length; i++) {
    threadsNavBarItems[i].addEventListener('click', function () {
        const currentActive = threadsNavBar.getElementsByClassName('active-nav-bar');
        currentActive[0].className = currentActive[0].className.replace('active-nav-bar', '');
        this.className += 'active-nav-bar';

        const threads = document.querySelector('.threads ul');

        if (this.text === 'All messages') {
            threads.className = threads.className.replace('hidden', '');
        } else if (!threads.className.includes('hidden')) {
            threads.className += 'hidden';
        }
    });
}

const threads = document.querySelectorAll('.thread');
for (let i = 0; i < threads.length; i++) {
    threads[i].addEventListener('click', function () {
        const currentActive = document.getElementsByClassName('active-thread');
        currentActive[0].className = currentActive[0].className.replace(' active-thread', '');
        this.className += ' active-thread';

        const profile = document.querySelector('.profile');

        if (this.innerText.includes('Rachel Curtis')) {
            profile.className = profile.className.replace(' hidden', '');
        } else if (!profile.className.includes('hidden')) {
            profile.className += ' hidden';
        }
    });
}
