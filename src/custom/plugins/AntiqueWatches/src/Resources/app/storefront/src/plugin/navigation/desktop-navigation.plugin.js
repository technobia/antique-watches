import Plugin from 'src/plugin-system/plugin.class';

export default class DesktopNavigationPlugin extends Plugin {
	init() {
		this.container = this.el.querySelector('.main-navigation-menu')
		this.scrollLeftBtn = this.el.querySelector('.scroll-left')
		this.scrollRightBtn = this.el.querySelector('.scroll-right')
		this.scrollDistance = 100; // Scroll distance in pixels

		if (!this.container) {
			return
		}

		this._updateScrollButtons()
		this._registerEvents()
	}

	_updateScrollButtons() {
		const atStart = this.container.scrollLeft === 0;
		const atEnd = this.container.scrollWidth - this.container.clientWidth - 2 <= this.container.scrollLeft;

		if (this.scrollLeftBtn) {
			this.scrollLeftBtn.style.display = atStart ? 'none' : 'flex';
		}

		if (this.scrollRightBtn) {
			this.scrollRightBtn.style.display = atEnd ? 'none' : 'flex';
		}
	}

	_scrollLeft() {
		this.container.scrollBy({ left: -this.scrollDistance, behavior: 'smooth' });
	}

	_scrollRight() {
		this.container.scrollBy({ left: this.scrollDistance, behavior: 'smooth' });
	}

	_registerEvents() {
		if (this.scrollLeftBtn) {
			this.scrollLeftBtn.addEventListener('click', this._scrollLeft.bind(this));
		}

		if (this.scrollRightBtn) {
			this.scrollRightBtn.addEventListener('click', this._scrollRight.bind(this));
		}

		if (this.container) {
			this.container.addEventListener('scroll', this._updateScrollButtons.bind(this));
		}

		window.addEventListener('resize', this._updateScrollButtons.bind(this));
	}
}
