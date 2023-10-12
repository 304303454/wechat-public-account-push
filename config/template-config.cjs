/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '乖乖, 早上好',
    desc: `
      **{{tian_api_weather_date_0.DATA}}{{tian_api_weather_week_0.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}

---

      城市：{{city.DATA}}
      
      天气：{{tian_api_weather_weather_0.DATA}}   气温：{{tian_api_weather_real_0.DATA}}
      
      气温(最高/最低):{{tian_api_weather_highest_0.DATA}} / {{tian_api_weather_lowest_0.DATA}}
      
      风向: {{tian_api_weather_wind_0.DATA}}   风级: {{tian_api_weather_windsc_0.DATA}}
      
      湿度：{{tian_api_weather_humidity_0.DATA}}   紫外线强度：{{tian_api_weather_uv_index_0.DATA}}
      
      降雨概率：{{tian_api_weather_pop_0.DATA}}   降雨量：{{tian_api_weather_pcpn_0.DATA}}   空气质量：{{aqi.DATA}}
      
      预防感冒提醒：{{ganmao.DATA}}
      
      生活指数提示：{{tian_api_weather_tips_0.DATA}}

---

      **课表：**
      
      第一节.{{wx_course_schedule_0.DATA}}
      
      第二节.{{wx_course_schedule_1.DATA}}
      
      第三节.{{wx_course_schedule_2.DATA}}
      
      第四节.{{wx_course_schedule_3.DATA}}
      
      第五节.{{wx_course_schedule_4.DATA}}

---

      今天是我们在一起的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}

---

      {{earthy_love_words.DATA}}
      
      今天又是爱你的一天！
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}

---

      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
