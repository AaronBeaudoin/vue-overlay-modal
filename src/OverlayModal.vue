<template>
<transition :name="transition">
  <div v-show="$modal[name].isActive" class="overlay-modal">
    <slot></slot>
  </div>
</transition>
</template>

<script>
import { forEach, map } from "lodash";

export default {
  name: "overlay-modal",
  props: {
    name: { type: String, required: true },
    transition: { type: String }
  },
  created() {
    this.$plugin = this.$options.pluginData;
  },
  mounted() {
    this.$el.addEventListener("click", this.$modal[this.name].keepActive);
    document.addEventListener("click", this.handleGlobalClick);
    this.$plugin.instances += 1;
  },
  destroyed() {
    document.removeEventListener("click", this.handleGlobalClick);
    this.$plugin.instances -= 1;
  },
  methods: {
    handleGlobalClick(event) {
      let modals = this.$plugin.modals;
      let pluginModal = modals[this.name];

      if (pluginModal.cancelClose) pluginModal.cancelClose = false;
      else if (pluginModal.isActive) this.$plugin.closing.push(this.name);

      this.$plugin.completed += 1;
      if (this.$plugin.completed === this.$plugin.instances) {

        forEach(this.$plugin.timeouts, _ => clearTimeout(_.id));
        this.$plugin.timeouts = [];

        if (this.$plugin.closing.length > 0) this.handleClosingClick(event);
        this.$plugin.completed = 0;
      }

    },
    handleClosingClick(event) {
      let modals = this.$plugin.modals;
      let calculateTimeout = this.$plugin.calculateTimeout;
      let timeouts = map(this.$plugin.closing, calculateTimeout);
      let adjustTimeout = (_, __) => timeouts[__] -= modals[_].closeSpeed;

      forEach(this.$plugin.closing, adjustTimeout);
      forEach(this.$plugin.closing, this.handleClosingTimeout(timeouts));
      this.$plugin.closing = [];
    },
    handleClosingTimeout(timeouts) {
      return (name, index) => {
        let close = _ => this.$plugin.modals[name].isActive = false;
        let timeoutId = setTimeout(close, timeouts[index]);
        this.$plugin.timeouts.push({ id: timeoutId, modalName: name });
      };
    }
  }
};
</script>
