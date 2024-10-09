export default class AnimationHandler {
    burgerMenu: HTMLElement | null;
    burgerMenuOpenClass: string;
    openBurgerMenuBtn: HTMLElement | null;
    closeBurgerMenuBtn: HTMLElement | null;



    constructor() {
        // Burger Menu
        this.burgerMenu = document.querySelector(".header__nav");
        this.openBurgerMenuBtn = document.querySelector('.header__popup-close');
        this.closeBurgerMenuBtn = document.querySelector('.header__popup-open');
        this.burgerMenuOpenClass = 'header__nav--open';
    }

    init() {
        this.toggleBurgerMenu();
    }

    toggleBurgerMenu() {
        if (!this.openBurgerMenuBtn || !this.closeBurgerMenuBtn) return;

        this.openBurgerMenuBtn.addEventListener("click", () => {
            if (!this.burgerMenu) return;

            this.burgerMenu.classList.remove(this.burgerMenuOpenClass);
            this.openBurgerMenuBtn?.setAttribute("aria-expanded", "false");
            this.closeBurgerMenuBtn?.setAttribute("aria-expanded", "false");
        });

        this.closeBurgerMenuBtn.addEventListener("click", () => {
            if (!this.burgerMenu) return;

            this.burgerMenu.classList.add(this.burgerMenuOpenClass);
            this.openBurgerMenuBtn?.setAttribute("aria-expanded", "true");
            this.closeBurgerMenuBtn?.setAttribute("aria-expanded", "true");
        });
    }

}
