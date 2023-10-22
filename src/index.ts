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
                const selectedNote = await joplin.workspace.selectedNote();
                await resetCheckboxesOfNote(selectedNote);
            }
        });

        async function resetCheckboxesOfNote(note: any) {
            const currentNoteBody = note.body as string;
            const replacedBody = currentNoteBody.replace(/(^[ \t]*)- \[[xX]\]/gm, '$1- [ ]');
            await joplin.commands.execute('editor.setText', replacedBody);
        }
    }
});
