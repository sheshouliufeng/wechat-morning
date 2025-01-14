/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx43a77ea6540fa5a7',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '807c82b5fbdbd42a44a80d1fcf680c76',

  PROVINCE: '重庆',
  CITY: '江津',

  USERS: [
    {
      // 想要发送的人的名字
      name: '崽崽',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o50C86c6xxzVtleAqZvP7riXZn_o',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'DP0_KjgmiXXWWCzciNk7-AP0ulLdUrDlj7qt-ciz5mU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '崽崽', year: '1998', date: '06-11',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 恋爱纪念日
        { keyword: 'love_day', date: '2022-07-09' },
      ],
    },
  ],

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o50C86c6xxzVtleAqZvP7riXZn_o',
    }
  ],

}

module.exports = USER_CONFIG

