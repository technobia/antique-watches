import Plugin from 'src/plugin-system/plugin.class';

export default class MobileSearchTrigger extends Plugin {
	init() {
		this._registerEvents();
	}

	_registerEvents() {
		this.el.addEventListener('click', this._toggleSearchActive.bind(this));
		document.addEventListener('click', this._handleOutsideClick.bind(this));
	}

	_toggleSearchActive(event) {
		event.stopPropagation();
		const searchEntryParent = this.el.closest('.entry--search');
		if (searchEntryParent) {
			searchEntryParent.classList.toggle('is--active');
		}
	}

	_handleOutsideClick(event) {
		const searchEntryParent = this.el.closest('.entry--search');
		if (
			searchEntryParent &&
			!searchEntryParent.contains(event.target)
		) {
			searchEntryParent.classList.remove('is--active');
		}
	}
}
