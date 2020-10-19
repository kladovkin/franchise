// based on https://github.com/scaccogatto/vue-waypoint
import 'intersection-observer';

const GOING_IN = 'in';
const GOING_OUT = 'out';

const going = isIntersecting => isIntersecting ? GOING_IN : GOING_OUT;

const DIRECTION_TOP = 'top';
const DIRECTION_RIGHT = 'right';
const DIRECTION_BOTTOM = 'bottom';
const DIRECTION_LEFT = 'left';

export default {
  // beforeMount(_el, _binding, _vnode, _prevVnode) {
  beforeMount(el, binding, vnode, _prevVnode) {
    const { active, callback, options } = binding.value;

    // if user asked for activation, activate
    if (active) {
      const waypoint = addObserver(el, callback, options);
      vnode._waypoint = waypoint;
    }
  },
  // mounted(...args) {},
  // beforeUpdate() {},
  updated(el, binding, vnode, oldVnode) {
    const { active, callback, options } = binding.value;

    // we remove the old observer anyways
    if (typeof oldVnode._waypoint !== 'undefined') {
      removeObserver(oldVnode._waypoint, el);
    }

    // if user asked for acivation, activate
    if (active) {
      const waypoint = addObserver(el, callback, options);
      vnode._waypoint = waypoint;
    }
  },
  unmounted(el, _binding, vnode) {
    if (typeof vnode._waypoint !== 'undefined') {
      removeObserver(vnode._waypoint, el);
    }
  }
};

const addObserver = (el, callback, options = {}) => {
  const observer = createObserver(
    (entries, _observer) => (observerCallback(entries, callback)),
    options
  );

  observer.observe(el);
  return observer;
};

function removeObserver(observer, el) {
  observer.unobserve(el);
}

function observerCallback(entries, callback) {
  entries.forEach(entry => entryCallback(entry, callback));
}

function entryCallback(entry, callback) {
  callback(mapEntry(entry));
}

function createObserver(callback, options) {
  return new IntersectionObserver(callback, options);
}

function mapEntry(entry) {
  const { boundingClientRect, isIntersecting, target } = entry;
  const oldBoundingClientRect = target._waypointData ?? boundingClientRect;

  // save current rect
  target._waypointData = boundingClientRect;

  return {
    el: target,
    going: going(isIntersecting),
    direction: direction(boundingClientRect, oldBoundingClientRect),
    j_entry: entry
  };
}

function direction(boundingClientRect, oldBoundingClientRect) {
  if (boundingClientRect.top < oldBoundingClientRect.top)
    return DIRECTION_TOP;

  if (boundingClientRect.left > oldBoundingClientRect.left)
    return DIRECTION_RIGHT;

  if (boundingClientRect.top > oldBoundingClientRect.top)
    return DIRECTION_BOTTOM;

  if (boundingClientRect.left < oldBoundingClientRect.left)
    return DIRECTION_LEFT;
}
