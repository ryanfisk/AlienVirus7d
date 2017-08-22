Red Eagle LXIX's Custom HUD : v0.19 : A16.1(b1)

To use in Multi-player, the files need to be installed on the server/host of the game.

-----
INSTALL INSTRUCTIONS:
 1. Extract the contents of this zip into your 7 Days To Die Config folder 
    Default path is 
    "C:\Program Files (x86)\Steam\SteamApps\common\7 Days To Die\Data\Config"
 2. You should be prompted to replace SteamApps\common\7 Days To Die\Data\Config\xui.xml - say yes (if not, manually extract the file and overwrite)
 3. You should be prompted to replace SteamApps\common\7 Days To Die\Data\Config\XUi\windows.xml - say yes (if not, manually extract the file and overwrite)
 4. You should be prompted to replace SteamApps\common\7 Days To Die\Data\Config\XUi\controls.xml - say yes (if not, manually extract the file and overwrite)
 5. You should be prompted to replace SteamApps\common\7 Days To Die\Data\Config\XUi\styles.xml - say yes (if not, manually extract the file and overwrite)
 7. You should be prompted to replace SteamApps\common\7 Days To Die\Data\Config\XUI_Menu\xui.xml - say yes (if not, manually extract the file and overwrite)
 8. You should be prompted to replace SteamApps\common\7 Days To Die\Data\Config\XUI_Menu\windows.xml - say yes (if not, manually extract the file and overwrite)
 9. You should be prompted to replace SteamApps\common\7 Days To Die\Data\Config\XUI_Menu\controls.xml - say yes (if not, manually extract the file and overwrite)
 10. You should be prompted to replace SteamApps\common\7 Days To Die\Data\Config\XUI_Menu\styles.xml - say yes (if not, manually extract the file and overwrite)

-----
UNINSTALL INSTRUCTIONS
 1. Verify Integrity of Game Cache in Steam client.

-----
Tweaking Instructions:

	Adjust UI size (FILE = xui.xml (Config\xui.xml && Config\XUI_Menu\xui.xml):
    1. Get a good text editor (not notepad) (Recommended: UltraEdit or Notepad+).
    2. Open xui.xml
    3. Search for "<ruleset name="default" scale="1.255" stackpanel_scale="1.05">" without quotes (this is the default)
    4. Change the scale and/or stackpanel_scale to your preference.  Stackpanels are the floater notifications.
    5. Save the file.

	Basic removing of added windows (FILE = Config\xui.xml):
    1. Get a good text editor (not notepad) (Recommended: UltraEdit or Notepad+).
    2. Open xui.xml
    3. Search for "Delete this line to remove these items -->" without quotes.
    4. Find the line with the description that matches what you want to remove (example: "Window that displays Numbers on the tool belt for each slot").
    5. Delete the entire line.
    6. Save the file.

  Picking Zombie Kills, PKills, Deaths or Zombie Kills, Deaths HUD display with dynamic or static colored icons or removing completely (FILE = Config\xui.xml):
    1. Get a good text editor (not notepad) (Recommended: UltraEdit or Notepad+).
    2. Open xui.xml
    3. Search for "playerZKPKDIcoChngHUD" without quotes.
    4. a. Replace "playerZKPKDIcoChngHUD" with one of the following: playerZKPKDIcoChngHUD, playerZKDIcoChngHUD, playerZKPKDHUD, or playerZKDHUD -- ZK = Zombie Kills, PK = PKills, D = Deaths, IcoChng means the icons change color from black to white
       b. Delete the entire line to remove the window completely and the display of Kill and Death info

  Picking position for SkillPointsAvailable display or removing completely (FILE = Config\xui.xml):
    1. Get a good text editor (not notepad) (Recommended: UltraEdit or Notepad+).
    2. Open xui.xml
    3. Search for "playerSkillPoints" without quotes.
    4. a. Replace "playerSkillPointsHUDBar" with "playerSkillPointsHUDRight" To move to the right side of the belt.
       b. Delete the entire line to remove the window completely and the display of Skill Points Available

	Removing of added mapTimeHUD windows (FILE = Config\xui.xml):
    1. Get a good text editor (not notepad) (Recommended: UltraEdit or Notepad+).
    2. Open xui.xml
    3. Search for "mapTimeHUD" without quotes.
    4. Find all occurrances.
    5. Delete all occurance of the entire line that contains text mapTimeHUD.
    6. Save the file.

  Restoring the 7DTD Default Compass and Date/Time (FILE = Config\xui.xml):
    1. Get a good text editor (not notepad) (Recommended: UltraEdit or Notepad+).
    2. Open xui.xml
    3. Search for "windowCompassRELXIX" without quotes.
    4. Replace "windowCompassRELXIX" with "windowCompass".
    5. RECOMMENDED To delete the "mapStatsHUD" lines right below (and labelled as such) when using default compass

  Restoring the 7DTD Default RWG Preview (FILE = Config\XUI_Menu\xui.xml):
    1. Get a good text editor (not notepad) (Recommended: UltraEdit or Notepad+).
    2. Open xui.xml
    3. Search for "windowRWGPreviewer" without quotes.
    4. Replace "windowRWGPreviewer" with "windowRWGPreview".

-----
Added:
  Requested: Window with Skill Points Available with optional display position (with 2 options for position) (playerSkillPointsHUDBar or playerSkillPointsHUDRight) -- Default: playerSkillPointsHUDBar enabled
  Requested: Window that displays Zombie Kills, PKills, and Deaths with option to not show PKills (with dynamic or static colored icon versions[black to white])
             (playerZKPKDIcoChngHUD, playerZKDIcoChngHUD, playerZKPKDHUD, or playerZKDHUD) -- Default: playerZKPKDIcoChngHUD enabled
  mapTimeHUD Window to display time in many areas of the GUI where the date/time does not display as the Compass is hidden.
  mapTimeHUD Window to many window groups in the xui.xml files to have the time displayed on a lot of stations/menus/etc
    Postion of mapTimweHUD window may or may not change as I am unsure where I want it.  It is where it is at to be compatible with most menus.
    NOTE: if you find a window/screen that should not have time displayed, or time missing from one where it should display let me know.  Screenshot would be great.

Fixed: 
  Minor positional mistakes
Changed:
  Adjusted Font sizes slightly under compass and for level
  Near entire layout for Editing Tools RWG Previewer
  consolidated playerStatsHUD and playerStatsBarsHUD into single window of playerStatsHUD (don't think anyone was using food/water without the fill bars)

Removed:
  Old mapCoordsHUD window as it is not coming back anytime soon.  
     As of Alpha 16 this option could not be enabled due to a Stack Overflow error that occurs which potentially can completely crash 7DTD or cause other errors and bugs.

Known Issues:
  The Skill Points Available is not real-time updated.  It updates based on a few GUI events.  The most common one to work is going to inventory.
       Hack alert:  By putting the Skill Point window in the window_group toolbelt it will mostly/only update when pausing/hitting ESC.
       By having the Skill Point window in the compass group it allows the window to update when going into the crafting menus, looting,
       and many other commonly accessed GUI areas.  To avoid issues the toolbelt controller is used to hide it at the right times (example on the minibike) 

-----

-----
Reminder:
All changes in the XML files are tagged at the start and end of all changes with "Red Eagle LXIX's Custom HUD" or on the lines changed with that text.

-----
Credit to The Fun Pimps for 7 Days To Die
Credit to Sirillion's HUD mod for early inspiration: http://steamcommunity.com/app/251570/discussions/5/494631967664775812
-----
-----
Thanks For the bug reports.  :)
-----
-----
Terms Of Use:  
  All original values and layouts are property of The Fun Pimps.  The Fun Pimps own all of the original source data for this modification.
  All modifications and changes done by myself are hereby released for use in other modifications of 7 Days To Die or the core game itself (7 Days To Die).
  Credit for any modification I have done is not necessary but is appreciated if you re-use my changes or build on them.
  Notifcation of re-use of any modification I have done is not necessary but is appreciated (after all I want to check out what others do).
-----
-----
Thanks to The Fun Pimps for this great game.  
I bought it once and have had so many new and different versions and experiences it feels like I've bought many games.
-----
--
