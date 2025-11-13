import listItem from "../../screenobjects/ios/list item";
import listScreen from "../../screenobjects/ios/list.screen";

describe('Todo list', () => {
    before(async () => {
    //Create TODO List
        await listScreen.createListBtn.click();
        await listScreen.listNameInput.addValue("Things to do today");
        await listScreen.createBtn.click();

        await expect(await listScreen.listNameField("Things to do today")).toBeExisting();
    });

    //before each it test
    beforeEach('', () => {
        console.log('[BEFORE EACH HOOK!!!');
    });
   //after all test
    after('', () => {
        console.log('AFTER HOOK!!!');
    });
    //after each it test
    afterEach('', () => {
        console.log('AFTER EACH HOOK!!!');
    });

    it('Create a to do item', async() => {
        // await listItem.toDoListTitle.click();
        // await listItem.createItem.click();
        // await listItem.itemNameField.addValue('Update Resume');
        // await listItem.itemDueField.click();
        // await listItem.itemDueSelect.click();
        // await listItem.createItemBtn.click();
        // await expect (await listItem.itemNameValue('Update Resume')).toBeExisting();
        // await expect (await listItem.itemDueValue('Due November 16, 2025')).toBeExisting();
    });

    it('test2', () => {
        
    });
    it('test3', () => {
        
    });

});