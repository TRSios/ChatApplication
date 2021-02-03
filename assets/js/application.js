const navBar = document.querySelector('.nav-bar');
const navBarItems = navBar.getElementsByTagName('a');
for (let i = 0; i < navBarItems.length; i++) {
    navBarItems[i].addEventListener('click', function() {
        const currentActive = navBar.getElementsByClassName('active-nav-bar');
        currentActive[0].className = currentActive[0].className.replace('active-nav-bar', '');
        this.className += 'active-nav-bar';
    });
}
