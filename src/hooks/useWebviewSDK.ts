import useCreateScript from "./useCreateScript";

export default async function useWebviewSDK() {
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf("AlipayClient") > -1) {
    // 支付宝小程序的 JS-SDK 防止 404 需要动态加载，如果不需要兼容支付宝小程序，则无需引用此 JS 文件。
    await useCreateScript("https://appx/web-view.min.js").createScriptPromise;
  } else if (/QQ/i.test(userAgent) && /miniProgram/i.test(userAgent)) {
    // QQ 小程序
    await useCreateScript(
      "https://qqq.gtimg.cn/miniprogram/webview_jssdk/qqjssdk-1.0.0.js"
    ).createScriptPromise;
  } else if (
    /miniProgram/i.test(userAgent) &&
    /micromessenger/i.test(userAgent)
  ) {
    // 微信小程序 JS-SDK 如果不需要兼容微信小程序，则无需引用此 JS 文件。
    await useCreateScript("https://res.wx.qq.com/open/js/jweixin-1.4.0.js")
      .createScriptPromise;
  } else if (/toutiaomicroapp/i.test(userAgent)) {
    // 头条小程序 JS-SDK 如果不需要兼容头条小程序，则无需引用此 JS 文件。
    await useCreateScript(
      "https://s3.pstatp.com/toutiao/tmajssdk/jssdk-1.0.1.js"
    ).createScriptPromise;
  } else if (/swan/i.test(userAgent)) {
    // 百度小程序 JS-SDK 如果不需要兼容百度小程序，则无需引用此 JS 文件。
    await useCreateScript(
      "https://b.bdstatic.com/searchbox/icms/searchbox/js/swan-2.0.18.js"
    ).createScriptPromise;
  } else if (/quickapp/i.test(userAgent)) {
    // quickapp
    await useCreateScript("https://quickapp/jssdk.webview.min.js")
      .createScriptPromise;
  }
}
