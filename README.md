# H5_app_downloadPage

h5 的 APP 下载页面,里面主要是包含识别操作系统，浏览器类型，和 app 内嵌 webkit 环境

#### 方法

```
appDownload(params);
/**
 * @name: appDownload
 * @description:下载公共方法
 * @param  {object}  示例 ：  {android:"https://file.lilchain.com/app/xiaolian.apk",ios:'https://apps.apple.com/cn/app/%E5%B0%8F%E9%93%BE%E8%B4%A2%E7%BB%8F/id1490792036'}
 * @return
 */
```

#### 结构示例

```
<div class="content">
	<div class="btn" id="download">立即下载</div>
</div>

document.getElementById('download').addEventListener('click',
	function () {
		appDownload({
			android: 'https://file.lilchain.com/app/xiaolian.apk',
			ios:'https://apps.apple.com/cn/app/%E5%B0%8F%E9%93%BE%E8%B4%A2%E7%BB%8F/id1490792036',
		});
	},
	false
);
```
