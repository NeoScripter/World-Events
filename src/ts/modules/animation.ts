export default class AnimationHandler {
    burgerMenu: HTMLElement | null;
    burgerMenuOpenClass: string;
    openBurgerMenuBtn: HTMLElement | null;
    closeBurgerMenuBtn: HTMLElement | null;

    carouselParent: NodeListOf<HTMLElement> | null;
    carouselViewportSelector: string;
    carouselControlsSelector: string;
    carouselBtnSelector: string;
    carouselCurrentBtnClass: string;

    constructor() {
        // Burger Menu
        this.burgerMenu = document.querySelector(".header__nav");
        this.openBurgerMenuBtn = document.querySelector('.header__popup-close');
        this.closeBurgerMenuBtn = document.querySelector('.header__popup-open');
        this.burgerMenuOpenClass = 'header__nav--open';

        // Carousels
        this.carouselParent = document.querySelectorAll('.carousel-parent');
        this.carouselViewportSelector = '.carousel-viewport';
        this.carouselControlsSelector = '.carousel-controls';
        this.carouselBtnSelector = '.slide';
        this.carouselCurrentBtnClass = 'slide--selected';
    }

    init() {
        this.toggleBurgerMenu();
        this.initCarousel();
    }

    initCarousel() {
        this.carouselParent?.forEach(parent => {
            this.setupCarousel(parent);
        })
    }

    setupCarousel(parent: HTMLElement | null) {
        if (!parent) return

        const viewport: HTMLElement | null = parent.querySelector(this.carouselViewportSelector);
        const controls: HTMLElement | null = parent.querySelector(this.carouselControlsSelector);
        if (!controls) return
        const btns: NodeListOf<HTMLElement> | null = controls.querySelectorAll(this.carouselBtnSelector);

        if (!btns) return

        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const currentOrder = btn.getAttribute('data-item');

                if (currentOrder) {
                    const offset = Number(currentOrder) - 1;

                    if (!viewport) return
                    const firstChildRect = (viewport.firstElementChild as HTMLElement).getBoundingClientRect();
                    const styles = window.getComputedStyle(viewport);
                    const gapValue = parseFloat(styles.gap || styles.columnGap) || 0; 
                    const totalWidth = firstChildRect.width + gapValue;
                    viewport.style.transform = `translateX(-${totalWidth * offset}px)`;
                    
                    this.reassignCurrentClass(btns, btn);

                }
            })
        })

    }

    reassignCurrentClass(btns: NodeListOf<HTMLElement> | null, currentBtn: HTMLElement | null) {
        if (!btns) return

        btns.forEach(btn => {
            if (btn !== currentBtn) {
                btn.classList.remove(this.carouselCurrentBtnClass);
            }
            currentBtn?.classList.add(this.carouselCurrentBtnClass);
        })
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
