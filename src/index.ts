import joplin from 'api';
import {MenuItemLocation} from "../api/types";

joplin.plugins.register({
    onStart: async function () {
        await joplin.views.menuItems.create(
            'ToolsResetCheckboxes',
            'resetCheckboxes',
            MenuItemLocation.Tools
        );

        await joplin.commands.register({
            name: 'resetCheckboxes',
            label: 'Reset Checkboxes',
            execute: async () => {
                const selectedText = await joplin.commands.execute('selectedText');
                if (selectedText) {
                    await resetCheckboxesOfSelectedText(selectedText);
                } else {
                    const selectedNote = await joplin.workspace.selectedNote();
                    await resetCheckboxesOfNote(selectedNote);
                }
            }
        });

        async function resetCheckboxesOfSelectedText(text: string){
            const replacedText = await replaceCheckboxes(text);
            await joplin.commands.execute('replaceSelection', replacedText);
        }

        async function resetCheckboxesOfNote(note: any) {
            const currentNoteBody = note.body as string;
            const replacedBody = await replaceCheckboxes(currentNoteBody);
            await joplin.commands.execute('editor.setText', replacedBody);

            await joplin.data.put(["notes", note.id], null, { body: replacedBody });
        }

        async function replaceCheckboxes(text: string) {
            return text.replace(/(^[ \t]*)- \[[xX]\]/gm, '$1- [ ]');
        }
    }
});
