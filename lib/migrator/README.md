## Migrator

**WARNING** Running the migrator function will OVERWRITE AND DESTROY the operating system running on this computer!

Sets up a UEFI based computer running Windows to switch to balenaOS, and then reboots to execute the switch.

This feature is experimental, and should not be used in production. It has these limitations:

* Works only with a UEFI based Windows computer
* Does not support re-running the migration in the event of failure
* A failure may occur while executing the migration, after reboot out of Windows. In this case, the computer should reboot back into Windows.