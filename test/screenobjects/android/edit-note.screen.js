import AddNoteScreen from "./screenobjects/add-note.screen";

class EditNoteScreen {

    get firstNote(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
        console.log("first note!!!")
    }    

    get moreTab(){
        return $('~More');
    }

    get deleteBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Delete"]');
    }

    get navTab(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]');
    }

    get trashBtn(){
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text" and @text="Trash Can"]');
    }
    
    async skipTutorial(){
        await AddNoteScreen.skipBtn.click();
        await expect(AddNoteScreen.addNoteText).toBeDisplayed();
    }

    async addAndSaveNote(noteTitle, noteBody){
        await AddNoteScreen.addNoteText.click();
        await AddNoteScreen.textBtn.click();
        await expect(AddNoteScreen.editingText).toBeDisplayed();

        //add note title
        await AddNoteScreen.noteTitle.addValue(noteTitle);

        //add note body
        await AddNoteScreen.noteBody.addValue(noteBody);
        
        //save changes
        await AddNoteScreen.saveNote();
        
        //assertion
        await expect(AddNoteScreen.editBtn).toBeDisplayed();
        await expect(AddNoteScreen.viewNote).toBeDisplayed();
    }

}

export default new EditNoteScreen();