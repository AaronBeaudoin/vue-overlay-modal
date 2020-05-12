# vue-overlay-modal

`vue-overlay-modal` is a Vue plugin for managing nested overlay modals. It exists to solve two main issues.

1. Clicking anywhere outside of a modal should close it, except on buttons which are supposed to open the modal.
2. The wait time for all modal close transitions should be known so wait times can be calculated for animations which should only happen after certains modals are closed.

Install with `npm install vue-overlay-modal`.

## Additions to Vue Instance

When installed, `vue-overlay-modal` adds the following global features to your Vue instance:

- An `<overlay-modal>` Vue component to wrap the contents of your modals with.
- A object at `Vue.prototype.$modal` for easily manipulating all defined modals.
- A `v-open` Vue directive for easily opening the modals.

## Documentation

- [`<overlay-modal>` Component](#overlay-modal-component)
- [`Vue.prototype.$modal` Object](#vueprototypemodal-object)
- [`v-open` Directive](#v-open-directive)
- [Modal Configuration](#modal-configuration)

## `<overlay-modal>` Component

### Component Props

| Name | Type | Description |
| --- | --- | --- |
| name | _String_ | The name given to the overlay modal at plugin installation or by calling `VueOverlayModal.config`. |
| transition | _String?_ | The name of the transition for this modal. This is the value for the `name` prop of the overlay modal's inner `<transition>` component. |

## `Vue.prototype.$modal` Object

The `Vue.prototype.$modal` object has one static property, but otherwise is dynamically created based on the overlay modals defined at plugin installation or by calling `VueOverlayModal.config`.

### `$modal.$closeDelay => Number`

The length of time in milliseconds it will take for all of the currently active overlay modals to close, taking into account outer modals waiting for their nested inner modals to close before they do.

### Dynamically Created Properties

One property is created in the `Vue.prototype.$modal` object for each overlay modal defined at plugin installation or by calling `VueOverlayModal.config`. The key for each dynamically created property is the same as the key for each modal config defined. The value of each property is an object representing an overlay modal containing 2 properties and 4 methods which can be used to inspect and manipulate said overlay modal.

#### `$modal.<overlay-modal>.isActive => Boolean`

Whether or not the overlay modal is currently opened.

#### `$modal.<overlay-modal>.closeSpeed => Number`

The length of time in milliseconds it will take for the overlay modal to close.

#### `$modal.<overlay-modal>.keepActive() => Void`

Forces the overlay modal to remain active for the next click regardless of where it occurs.

#### `$modal.<overlay-modal>.clickOpen() => Void`

Opens the overlay modal and forces it to remain active for the next click regardless of where it occurs. Use this method to open the overlay modal in response to a click. If the `$modal.<overlay-modal>.open()` method is used instead, the modal will be opened but the click will instantly close it because it occured outside the modal.

#### `$modal.<overlay-modal>.open() => Void`

Opens the overlay modal. Use this method to open the overlay modal in response to anything other than a click.

#### `$modal.<overlay-modal>.close() => Void`

Closes the overlay modal.

## `v-open` Directive

When added to an element, causes `click` events on that element to run `$modal.<overlay-modal>.clickOpen()` for the overlay modal passed as a value to the directive. This effectively makes it a shorthand to simply writing `@click="$modal.<overlay-modal>.clickOpen"`. Instead you would simply write `v-open="$modal.<overlay-modal>"`.

## Overlay Modal Configuration

All overlay modals handled by `vue-overlay-modal` must be defined at plugin installation in the second argument to `Vue.use` or by calling `VueOverlayModal.config`. Overlay modals are defined as properties of the config object. The key of the property is the name of the overlay modal and the value is a config object specific to the overlay modal. Overlay modal config objects can have 3 possible properties.

### `parent => String`

The name of the overlay modal's parent, if it is nested within another overlay modal.

### `initActive => Boolean`

Whether or not the overlay modal should be active initially. Defaults to `false`.

### `closeSpeed => Number`

The length of time in milliseconds it will take for the overlay modal to close. This should correspond to the duration of the modal's closing transition, if it has one. If the modal has no closing transition then this property can be left blank, in which case it will internally default to `0`.

### Example Configuration

```js
Vue.use(VueOverlayModal, {
  login: {
    initActive: true,
    closeSpeed: 500
  },
  passwordReset: {
    parent: "login",
    closeSpeed: 200
  }
});
```

## Author Information

Designed and implemented by Aaron Beaudoin  
Written while working as a student at Union College, NE
