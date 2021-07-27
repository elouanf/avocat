function toggleMenu () {

    const navbar = document.querySelector('.navBar');
    const burger = document.querySelector('.navButton');

    const navlink = document.querySelectorAll('.navLink');
    const clickOut = document.querySelector('.out');

    burger.addEventListener('click', () => {

        navbar.classList.toggle('show');
        burger.classList.toggle('burgerShow');
        
    })

    navlink.forEach((e) => {

        e.addEventListener('click', () => {

            navbar.classList.toggle('show');
            burger.classList.toggle('burgerShow');

        })


        clickOut.addEventListener('click', () => {

            navbar.classList.remove('show');
            burger.classList.remove('burgerShow');

        })
        


    })

}

toggleMenu();

