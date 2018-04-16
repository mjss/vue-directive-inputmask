const defaultMaskChar = '_';

const rulesRegex = {
  '0': /[0-9]/,
  'a': /[a-zA-Z]/,
  '*': /[a-zA-Z0-9]/,
};

const validateChar = (char, rule) =>
  rulesRegex[rule]
  ? rulesRegex[rule].test(char)
  : char === rule;

function paresMask(mask, maskChar) {
  const onInput = evt => {
    const nextValue = evt.target.value;
    console.log('input', nextValue);
  };

  const onChange = evt => {
    const nextValue = evt.target.value;
    console.log('change', nextValue);
  };

  return {
    onInput,
    onChange,
  };
}

export default {
  bind(el, { value }) {
    const mask = typeof value === 'string'
      ? value
      : value.mask;
    const maskChar = value.maskChar || defaultMaskChar;
    
    const { onInput, onChange } = parseMask(mask, maskChar);

    el.onchange = onChange;
    el.oninput = onInput;
  }
}
