// // function defaultTask(cb) {
// //     // place code for your default task here
// //     cb();
// //   }
  
// //   exports.default = defaultTask
// //加载gulp模块
// let {src,dest,watch,pipe,series,parallel} = require("gulp");


// //制定任务（task）
//  let task1 = (fa) =>{
//      console.log("task1");
//      fa();
     
//  }

//  let task2 =(fn) =>{
//      console.log("task2");
//      fn();
//  }

//  let task3 = (fn) =>{
//      console.log("task3");
//      fn();
//  }

//  //3导出任务
//  //在终端中输入命令行：gulp task1 那么gulp就回来执行task1这个任务
//  //单个任务
//  exports.task1 = task1;
//  exports.task2 = task2;
//  exports.task3 = task3;


//  //多个任务
//  exports.task4 =series(task1,task2,task3);//按顺序同步执行三个任务
// exports.task5 = parallel(task1,task2,series(task1,task2),parallel(task1,task2,task3))//(多个任务一起执行（异步执行）)


 //加载gulp模块
//  let {src,dest,watch,pipe,series,parallel} = require("gulp");

// //任务1 把src路劲下js文件夹的a.js文件拷贝到build文件下js文件夹中
//   let copyfilewitha = () => {
//       return src("./src/js/a.js").pipe(dest("./build/js"))
//   }
 
//   /*任务2:把a.js 和 b.js这两个文件都拷贝过去？ */
//  let copyFileWithAB = () => {
//  return src(["./src/js/a.js", "./src/js/b.js"]).pipe(dest("./build/js"));
//     //  return src("./src/js/*.js").pipe(dest("./build/js"));
//  }


//  /* 任务3:把a.js 和 b.js c.ts 这三个文件都拷贝过去 */
// let copyFileWithAB2 = () => {
//     return src("./src/js/*").pipe(dest("./build/js"));
// }


// /* 任务4：监听src文件夹的变化，只要这个文件夹中任何一个地方发生了修改就执行拷贝的操作(同步两个文件夹)。 */
// let watchFile = () => {
//     return watch("./src", () => {
//         return src("./src/*/*").pipe(dest("./build"));
//    })
//  }


//  /* 导出之后：就可以在终端中执行 gulp copyFileWithATask */
// exports.copyFileWithATask = copyfilewitha;
// exports.copyFileWithABTask = copyFileWithAB2;
//  exports.watchFileTask = watchFile;


//加载gulp模块
//  let {src,dest,watch,pipe,series,parallel} = require("gulp");

//  //1命令行安装
//  /* $ npm install gulp-htmlmin --save-dev */

//  //引入插件
//  let htmlmin = require("gulp-htmlmin")

//  //3适应插件
// let htmlmintask = () => {
//     var options = {
//         removeComments: true, //清除HTML注释
//         collapseWhitespace: true, //压缩HTML
//         collapseBooleanAttributes: false, //省略布尔属性的值 <input checked="true"/> ==> <input />
//         removeEmptyAttributes: false, //删除所有空格作属性值 <input id="" /> ==> <input />
//         removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
//         removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
//         minifyJS: true, //压缩页面JS
//         minifyCSS: true //压缩页面CSS 
//     };
//     return src("./src/html/a.html").pipe(htmlmin(options)).pipe(dest("./build"))
// }
// exports.htmlminTask = htmlmintask;


/* css压缩 */
/* (1) 通过命令行来安装 */
/* $ npm install gulp-cssmin --save-dev */

// /* (2) 加载插件 */
// let cssmin = require("gulp-cssmin")
// const { src } = require("gulp")

// /* (3) 定制任务*/
// let cssmintask = () => {
//     return src("./src/css/1.css").pipe(cssmin()).pipe(dest("./build/css"));
// }
// exports.csstask = cssmintask;

/* 把js文件合并、压缩、重命名 */
/* (1) 安装模块 */
/* $ npm install gulp-concat gulp-rename gulp-uglify --save-dev */
/* (2) 加载模块 */
let rename = require("gulp-rename");
let concat = require("gulp-concat");
let uglify = require("gulp-uglify");


/* (3) 指定任务 */
let task = () => {
    return src(["./src/js/a.js", "./src/js/b.js"])
        .pipe(concat("c.js"))
        .pipe(dest("./build/js"))
        .pipe(uglify())
        .pipe(rename("index.min.js"))
        .pipe(dest("./build/js"))
}

exports.task = task;
exports.taskAll = series(htmlminTask, csstask, task);