import { customRef } from "vue";

// 用于防抖的自定义 ref
export function debounceRef(value, delay = 300) {
  let timeout;
  return customRef((track, trigger) => ({
    get() {
      track();
      return value;
    },
    set(newValue) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        value = newValue;
        trigger();
      }, delay);
    },
  }));
}
