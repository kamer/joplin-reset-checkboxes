# Joplin Reset Checkboxes

A plugin to reset checkboxes in notes.

![](reset-checkboxes.gif "Plugin Example Gif")

<!-- TOC -->
* [Joplin Git Sync Plugin](#joplin-git-sync-plugin)
    * [Installation](#installation)
    * [Usage](#usage)
<!-- TOC -->

## Installation
### Recommended
- Open Joplin desktop application
- Go to Tools > Options > Plugins.
- Search Reset Checkboxes and you'll see the plugin.
### Manual
- Clone project
- `npm run dist`
- Copy created jpl file from dist/ directory to plugins directory in your profile.

## Usage
- Open a file with checkboxes.
- Click Tools > Reset Checkboxes and see your checkboxes reset. If text is selected, reset only applies to the selected text.
- Although it's tested, there may be unexpected consequences on the off chance. If it happens, open Note Properties on
  the upper right of the editor go to history.
