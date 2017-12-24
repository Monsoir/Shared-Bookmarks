const Catelog = require('../../model/Catelog');

const Runloop = {
  title: 'RunLoop',
  catelogs: [
    new Catelog(
      'http://blog.ibireme.com/2015/05/18/runloop/',
      '深入理解RunLoop | Garan no dou',
    ),
    new Catelog(
      'http://www.cocoachina.com/ios/20160530/16498.html',
      '关于NSRunLoop和NSTimer的深入理解 - CocoaChina_让移动开发更简单',
    ),
  ],
  categories: [],
};

module.exports = Runloop;
