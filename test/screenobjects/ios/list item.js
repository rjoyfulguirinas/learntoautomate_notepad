class ListItemScreen {
    get toDoListTitle() {
        return $('~Things to do today');
    }

    get createItem() {
        return $('//*[@name="Create item"]');
    }

    get itemNameField() {
        return $('//*[@value="Title"]');
    }

    get itemDueField() {
        return $('//*[@value="Due"]');
    }

    get itemDueSelect() {
        return $('~16');
    }

    get createItemBtn() {
        return $('~Create');
    }

    itemNameValue(name) {
        return $(`~${name}`);
    }

    itemDueValue(name) {
        return $(`~${name}`);
    }
}

export default new ListItemScreen(); //ESM support/ES module