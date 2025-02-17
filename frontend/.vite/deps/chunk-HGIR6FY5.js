import {
  $458b0a5536c1a7cf$export$40bfa8c7b0832715
} from "./chunk-LZVAYM6A.js";
import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/@react-stately/toggle/dist/useToggleState.mjs
function $3017fa7ffdddec74$export$8042c6c013fd5226(props = {}) {
  let { isReadOnly } = props;
  let [isSelected, setSelected] = (0, $458b0a5536c1a7cf$export$40bfa8c7b0832715)(props.isSelected, props.defaultSelected || false, props.onChange);
  function updateSelected(value) {
    if (!isReadOnly) setSelected(value);
  }
  function toggleState() {
    if (!isReadOnly) setSelected(!isSelected);
  }
  return {
    isSelected,
    setSelected: updateSelected,
    toggle: toggleState
  };
}

// node_modules/@react-stately/toggle/dist/useToggleGroupState.mjs
var import_react = __toESM(require_react(), 1);

export {
  $3017fa7ffdddec74$export$8042c6c013fd5226
};
//# sourceMappingURL=chunk-HGIR6FY5.js.map
