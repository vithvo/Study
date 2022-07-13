// Modules

const weekDay = (function () {
  const names = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];
  return {
    name(number) {
      return names[number];
    },
    number(name) {
      return names.indexOf(name) + 1;
    },
  };
})();

console.log(weekDay.number("Четверг"));

require.cache = Object.create(null);
function require(name) {
  if (!(name in require.cache)) {
    let code = readFile(name);
    let module = { exports: {} };
    equire.cache[name] = module;

    let wrapper = Function("require, exports, module", code);
    wrapper(require, module.exports, module);
  }
  return require.cache[name].exports;
}
