/*
 * @Author: tangrenjie
 * @Date: 2020-08-27 10:48:29
 * @LastEditors: tangrenjie
 * @LastEditTime: 2020-08-27 12:35:18
 * @Descripttion: 公共下载app的方法
 */

var imgBase64 =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAuwAAAU2CAMAAAD5/BMJAAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMACgP6Xzhk9rtHPM/J5RaDrVgnxCPTDouVbwajeu2QE+DYnvJEtzAa6U2odVHcmjQev2orfbJAiEvXeBYgAAAgdElEQVR42uzBgQAAAACAoP2pF6kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGD24EAAAAAAAMj/tRFUVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVYW9e9lKHAqiMLyTCCjIXWgEEZDm4gXaFlH3+79YR2m8AA57kNP/N0vGtbJSp6pOAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Avt89Lj5EVA6KbLglN9AUHr1pveWAgI2H117q2lgGD9rCVONQt+xT87QtU+HznV/zFt2sOFC5GAEK06Y6dK+Whwai9WiScCwtOt/3Yq6eWkSskezer2g4DQzKplp4aPFUmVlt2qqGffCwjL003i1PFdrNRsZJcGiucuCQhJ9NByatxp6M39wj5tSzm7KiAcf5PS1kOkjbOh3WxLerZzAgIR322S0tqTthpl+zhSquV5LCAIlceyU+XqTO9Wc3sSKXVvXwkIQXGTlDbrXX2Y9u315sWDfScg86J8yanCcqrPcn271tWbiZO2gIxrXI6dGp239UVxbPdivYkKPhaQafH1sV+tT7TjaWxfxdq4s88FZFjlYujU/Pleu04KdkdbS/tMQGblegWnTo8i7blO7Eu9K7slIKO2SenVLx1QT+xnvfv1+gRk0tmPvlPD24G+i/WqPlTtooDsiV8mfjW5jnVQ3vaFPim5T/kU2TO4XTjVvzzTNx68c/Yys3sC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';

var u = navigator.userAgent;

function isWeixin() {
	return u.indexOf('MicroMessenger') > -1;
}

function isAndroid() {
	return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
}

function isIOS() {
	return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

//是否是其他app的扫描
function isOthesAppScan() {
	return u.indexOf('weibo') > 0 || u.indexOf('zhihu') > 0 || u.indexOf('NewsApp') > 0;
}

// 校验是否为链接地址

function isLink(link) {
	let reg = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\/])+$/;
	return reg.test(link);
}

function checkDownloadLink(params) {
	if (typeof params !== 'object') {
		alert('参数必填');
		return false;
	}
	if (!isLink(params.android) || !isLink(params.android)) {
		alert('下载链接地址不合法');
		return false;
	}
	return true;
}

// js字符串转为转为真实DOM
function parseDom(arg) {
	var objE = document.createElement('div');
	objE.innerHTML = arg;
	return objE.childNodes;
}

var TipMask = (function () {
	function message() {
		//合并默认参数
		this.messageContainer = null;
		this.init();
	}
	/*
	 用于添加相应的dom到body标签中
	 * */
	message.prototype.init = function () {
		const domStr = `<div id="tipmask" style="position:absolute;top:0;left:0;width:100%;min-height:100%;background-color:rgba(0,0,0,0.8);display:none;z-index:9999">
            <img src=${imgBase64} style="width:80%;margin-left:15%;position:relative;top:-70px"/>
        </div>`;
		const realDom = parseDom(domStr);
		console.log('realDom', realDom[0]);
		this.messageContainer = realDom[0];
		this.messageContainer.addEventListener(
			'click',
			() => {
				this._hide();
			},
			false
		);
		document.body.appendChild(realDom[0]);
	};
	/**
	 * 隐藏消息
	 * $domStr：该消息的jq对象
	 * */
	message.prototype._hide = function () {
		console.log('hidden messageContainer', this.messageContainer);
		this.messageContainer.style.display = 'none';
	};
	message.prototype.show = function () {
		console.log('block  messageContainer', this.messageContainer);
		this.messageContainer.style.display = 'block';
	};
	return {
		message: message /*对外提供的接口*/,
	};
})();

var tipInstance = new TipMask.message();

console.log('isWeixin', isWeixin());

/**
 * @name: appDownload
 * @description:下载公共方法
 * @param  {object}  示例 ：  {android:"https://file.lilchain.com/app/xiaolian.apk",ios:'https://apps.apple.com/cn/app/%E5%B0%8F%E9%93%BE%E8%B4%A2%E7%BB%8F/id1490792036'}
 * @return
 */
function appDownload(config) {
	console.log('config', config);
	if (!checkDownloadLink(config)) return;
	if (isOthesAppScan()) {
		tipInstance.show();
	} else if (isWeixin()) {
		tipInstance.show();
	} else if (isAndroid()) {
		location.href = config.android;
	} else if (isIOS()) {
		location.href = config.ios;
	} else {
		// 其他
		console.log('其他');
		// alert('其他');
	}
}
