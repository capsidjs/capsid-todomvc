const {on, component} = $.cc;

/**
 * The toggle all button
 */
@component('toggle-all')
class ToggleAll {
	/**
	 * Toggles the all items.
	 */
	@on('click')
	toggleAll() {
		if (this.checked) {
			this.elem.trigger('todo-uncomplete-all');
		} else {
			this.elem.trigger('todo-complete-all');
		}

		this.check = !this.check;
	}

	/**
	 * Updates the button state by the given active items' condition.
	 * @param {Boolean} activeItemExists true if any active item exists, false otherwise
	 */
	updateBtnState(activeItemExists) {
		this.checked = !activeItemExists;

		if (this.checked) {
			this.elem.prop('checked', true);
		} else {
			this.elem.prop('checked', false);
		}
	}
}

module.exports = ToggleAll;
