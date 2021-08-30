
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  var calendar = new Calendar(calendarEl, {
    plugins: [ dayGridPlugin, interactionPlugin ],
    // 日本語化
    locale: 'ja',
    // 時間軸を日本
    timeZone: 'Asia/Tokyo',
    // 日曜始まり
    firstDay: 0,
    // 土日の色表示
    businessHours: true,
    // ボタン表示
    buttonText: {
        prevYear: '前年',
        nextYear: '翌年',
        today: '今日',
        month: '月',
        week: '週',
        day: '日'
    },
    selectable: true,
    // 日付の’日’部分を非表示
    dayCellContent: function(e) {
      e.dayNumberText = e.dayNumberText.replace('日', '');
    },
    // イベント
    events:[
      { 
        title: '筋トレ',
        start: '2021-08-25T09:00:00', 
        end: '2021-08-25T12:00:00' 
      },
      { 
        title: '読書',
        start: '2021-08-25T13:00:00', 
        end: '2021-08-25T17:00:00' 
      },
      { 
        title: '外食',
        start: '2021-08-25T18:00:00', 
        end: '2021-08-25T20:00:00' 
      }
    ],
    eventTimeFormat: { hour: 'numeric', minute: '2-digit' },
    // イベントの終了時刻未設定の場合の設定時間
    defaultTimedEventDuration: '03:00:00',
    // イベントの色を変える
    eventColor: '#63ceef',
    // イベントの文字色を変える
    eventTextColor: '#000000',
  });

  calendar.render();
});
