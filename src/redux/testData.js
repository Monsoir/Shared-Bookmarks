import iOS from '../Bookmarks/iOS/iOSBookmark';

export const TreeData = {
  title: '目录',
  catelogs: [],
  categories: [
    {
      title: '百度',
      catelogs: [
        {
          favicon: '',
          address: 'https://www.baidu.com',
          name: '百度',
          remark: '百度搜索引擎',
        },
      ],
      categories: [
        {
          title: '百度2',
          catelogs: [
            {
              favicon: '',
              address: 'https://www.baidu.com',
              name: '百度',
              remark: '百度搜索引擎',
            },
          ],
          categories: [],
        },
      ],
    },
    {
      title: '谷歌2',
      catelogs: [
        {
          favicon: '',
          address: 'https://www.google.com',
          name: 'Google',
          remark: 'Google 搜索引擎',
        },
        {
          favicon: '',
          address: 'https://www.google.com',
          name: 'Google',
          remark: 'Google 搜索引擎',
        },
        {
          favicon: '',
          address: 'https://www.google.com',
          name: 'Google',
          remark: 'Google 搜索引擎',
        },
      ],
      categories: [],
    },
    iOS,
  ],
};
