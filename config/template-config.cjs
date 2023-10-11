/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '乖乖, 早上好',
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市：{{city.DATA}}
      天气：{{weather.DATA}}
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      风向: {{wind_direction.DATA}}
      风级: {{wind_scale.DATA}}
      湿度：{{shidu.DATA}}
      空气质量：{{aqi.DATA}}
      预防感冒提醒：{{ganmao.DATA}}
      天气温馨语：{{notice.DATA}}
      ---
      课表：
      1.{{wx_course_schedule_0.DATA}} 
      2.{{wx_course_schedule_1.DATA}} 
      3.{{wx_course_schedule_2.DATA}} 
      4.{{wx_course_schedule_3.DATA}} 
      5.{{wx_course_schedule_4.DATA}}
      
      ---
      
      今天是我们相识的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      ---
      
      {{moment_copyrighting.DATA}}
      
      {{poetry_title.DATA}} {{poetry_content.DATA}}
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
