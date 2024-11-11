import Plugin from 'src/plugin-system/plugin.class';

export default class DropdownMenuPlugin extends Plugin {
	init() {
		this._registerEvents();
	}

	_registerEvents() {
		this.el.addEventListener('click', this._toggleDropdown.bind(this));

		document.addEventListener('click', this._handleOutsideClick.bind(this));
	}

	_toggleDropdown(event) {
		event.stopPropagation();

		this.el.classList.toggle('js--is--dropdown-active');
	}

	_handleOutsideClick(event) {
		if (!this.el.contains(event.target)) {
			this.el.classList.remove('js--is--dropdown-active');
		}
	}

	destroy() {
		this.el.removeEventListener('click', this._toggleDropdown.bind(this));
		document.removeEventListener('click', this._handleOutsideClick.bind(this));
	}
}
