

// const myCookie = document.cookie

// document.cookie = 'LodchongCourse=INT201;expires=max-age=300'


// document.cookie = `credits=3;expires=${new Date(Date.now()+60*60*24*1000)}`  // 1 วัน

// document.cookie = `student=Lodchong;expires=${new Date(2023 , 11 , 25)}`

import {CookieUtil} from './lib/cookieUtil.js'

CookieUtil.set('course' , 'INT201' ,new Date(2023 , 11 , 25))
CookieUtil.set('subject' , 'INT201' ,new Date(2023 , 11 , 25))

document.cookie = `lecturer=Baimon;expires=${new Date(2023,11,25)};HTTPonly;`  //ไม่เขียน cookie client ให้

console.log(CookieUtil.get('course'));
CookieUtil.unset('course')  //ให้ cookie หมดอายุ => ไม่มี value 