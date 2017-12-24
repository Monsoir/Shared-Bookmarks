const fs = require('fs-extra');

const iOS = require('./iOS/index');

const Cates = {
  title: '目录',
  catelogs: [],
  categories: [
    iOS,
  ],
};

fs.writeFile('./bookmarks.json', JSON.stringify(Cates), (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('bookmarks are ok');
});
