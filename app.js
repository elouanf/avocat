function toggleMenu () {

    const navbar = document.querySelector('.navBar');
    const burger = document.querySelector('.navButton');

    const navlink = document.querySelectorAll('.navLink');

    burger.addEventListener('click', () => {

        navbar.classList.toggle('show');
        burger.classList.toggle('burgerShow');

    })

    navlink.forEach((e) => {

        e.addEventListener('click', () => {

            navbar.classList.toggle('show');
            burger.classList.toggle('burgerShow');

        })


    })

}

toggleMenu();

