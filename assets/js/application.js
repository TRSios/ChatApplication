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
        const profile = document.querySelector('.profile');
        const chat = document.querySelector('.chat');

        if (this.innerText.includes('#designers')) {
            threads.className = threads.className.replace(' hidden', '');
            profile.className = profile.className.replace(' hidden', '');
            chat.className = chat.className.replace(' hidden', '');
        } else if (!threads.className.includes('hidden')) {
            threads.className += ' hidden';
            profile.className += ' hidden';
            chat.className += ' hidden';
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
        const profile = document.querySelector('.profile');
        const chat = document.querySelector('.chat');

        if (this.text === 'All messages') {
            threads.className = threads.className.replace('hidden', '');
            profile.className = profile.className.replace(' hidden', '');
            chat.className = chat.className.replace(' hidden', '');
        } else if (!threads.className.includes('hidden')) {
            threads.className += 'hidden';
            profile.className += ' hidden';
            chat.className += ' hidden';
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
        const chat = document.querySelector('.chat');

        if (this.innerText.includes('Rachel Curtis')) {
            profile.className = profile.className.replace(' hidden', '');
            chat.className = chat.className.replace(' hidden', '');
        } else if (!profile.className.includes('hidden')) {
            profile.className += ' hidden';
            chat.className += ' hidden';
        }
    });
}

const input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', function (e) {
    if (
        e.key === 'Enter'
        || e.keyCode === 13
    ) {
        send(
            input.value,
            'TEXT',
            true
        );
    }
});

function send(
    messageToSend,
    messageType,
    isSender
) {
    if (messageToSend.trim()) {
        const message = document.createElement('div');
        const divElement = document.createElement('div');
        const text = document.createElement('span');
        const time = document.createElement('span');

        const imgLeft = document.createElement('img');
        const imgRight = document.createElement('img');

        imgLeft.src = 'assets/img/avatar-woman.png';
        imgRight.src = 'assets/img/avatar-man.png';

        message.className += 'message';
        text.className += 'text';
        time.className += 'time';
        imgLeft.className += 'img-left';
        imgRight.className += 'img-right';

        if (isSender) {
            message.className += ' message-right';
            text.className += ' text-right tri-right';
        } else {
            message.className += ' message-left';
            text.className += ' text-left tri-left';
        }

        text.append(messageToSend);
        time.append(new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }));
        divElement.append(text);
        divElement.append(time);
        message.append(imgLeft);
        message.append(divElement);
        message.append(imgRight);

        if (messageType === 'FILE') {
            const downloadDiv = document.createElement('div');
            const fileOptions = document.createElement('div');
            const file = document.createElement('img');
            const fileName = document.createElement('span');
            const fileDownload = document.createElement('span');

            file.src = 'assets/img/UI resources.png';

            downloadDiv.className += 'download';
            fileOptions.className += 'options';
            file.className += 'file';
            fileName.className += 'file-name';
            fileDownload.className += 'file-download';

            if (isSender) {
                downloadDiv.className += ' download-right';

                fileDownload.append('');
            } else {
                fileDownload.append('Download');
            }

            divElement.removeChild(text);
            fileName.append(messageToSend);
            // fileDownload.append('Download');
            fileOptions.append(fileName);
            fileOptions.append(fileDownload);
            downloadDiv.append(file);
            downloadDiv.append(fileOptions);
            divElement.prepend(downloadDiv);
        }

        const messages = document.getElementsByClassName('messages')[0];
        messages.prepend(message);

        input.value = '';
        messages.scrollTop = messages.scrollHeight;
    }
}

function sendFile(event) {
    send(
        event.target.files[0].name,
        'FILE',
        true
    );
}

// Set Up Mock Data
send(
    'We are just writing up the user stories now so will have requirements for you next week.',
    'TEXT',
    false
);
send(
    'Essentially the brief is for you guys to build an iOS and android app. We will do backend and web app. We have a version one mockup of the UI, please see it attached. As mentioned before, we would simply hand you all the assets for the UI and you guys code. If you have any early questions please do send them on to myself. Ill be in touch in coming days when we have requirements prepared.',
    'TEXT',
    false
);
send(
    'UI resources.png',
    'FILE',
    false
);
