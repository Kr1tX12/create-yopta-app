// не трогать пж, а то всё сломается
// Можно трогать если у вас опыт в js и ys больше 5 минут

require('yopta');

module.exports = function (source) {
  const tsxCode = yopta(source, 'ys');
  return tsxCode;
};
