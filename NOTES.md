When closing modals due to a click, here is what should happen:

The plugin needs to determine which modals should be closed as a result of the click. To do this the component instances will need something in their global click handler that tracks if the instance should be destroyed as a result of a click. When all of these global click handlers have finished running, the plugin will need to look at the instances which need to be closed and based on the parent child relationships of their associated modal configs deactivate all of them inside `setTimeout` calls with appropriate delays based on the `collapseSpeed` values of each modal.

In order to determine when all the global click handlers have finished running, the plugin will need to keep a counter of how many `<overlay-modal>` instances exist and increment another counter of how many global click handlers have run inside of each global click handler. With `Vue.watch` I should be able to run a function whenever the second counter is equal to the first counter.

Additionally a property needs to added to the public data object that reports the current total collapse timeout for all modals to close.


What's left as of Oct. 17, 2019 @ 4:50 PM:

In the end of the `handleGlobalClick` method, modals still need to be closed with `setTimeout`. In order to do this correctly, for each modal that is closing check if the modal has any active children recursively and get the longest possible wait time. [DONE]

Don't forgot to test this in the simple browser test. A strong test should have two "level 1" modals open and one of them should have two children open inside of it. All open modals should have different closing speeds to make sure everything works right. Also the closing speeds should be a bit slower in order to see things working right. [DONE]

Also I still need to add the globally accessible property for getting the total wait time for all modals to close. To calculate this the longest possible wait time should be calculated just like above for each root modal and the longest wait time needs to be used. If no modals are open this property should of course be zero.
