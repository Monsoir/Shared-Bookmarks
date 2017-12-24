const Catelog = require('../../model/Catelog');

const iOS3rdParty = {
  title: '3rd Party',
  catelogs: [
    new Catelog(
      'http://www.cocoachina.com/ios/20160530/16495.html',
      '一行行看SDWebImage源码(一) - CocoaChina_让移动开发更简单',
    ),
    new Catelog(
      'http://www.cocoachina.com/ios/20160301/15459.html',
      '如何发布自己的开源框架到CocoaPods - CocoaChina_让移动开发更简单',
    ),
    new Catelog(
      'http://blog.devtang.com/2014/05/25/use-cocoapod-to-manage-ios-lib-dependency/',
      '用CocoaPods做iOS程序的依赖管理 | 唐巧的技术博客',
    ),
  ],
  categories: [],
};

module.exports = iOS3rdParty;
