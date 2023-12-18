<template>
  <div class="relative">
    <ComBanner
      src="http://btm-group.oss-cn-hangzhou.aliyuncs.com/resources/image/985413303b4d0166a88f64085928d648.png"
    />
    <div class="content">
      <div class="title">加拿大BC省雇主担保移民</div>
      <div class="advance bg p-3">
        <div class="title">项目优势</div>
        <div class="ul-content">
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              办理周期快:6个月登陆加拿大,全家可享受加拿大当地福利、免费医疗、牛奶金等
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              可以直接提交省提名，可通过EE系统快速处理
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              配偶可申请Open Work Permit,可在加拿大合法工作
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">子女可以享受12年免费公立学校教育</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              真实的雇主和Job Offer:安全、可靠、成功率高
            </div>
          </div>
        </div>
      </div>
      <div class="tab-wrapper bg-white">
        <ComTab
          :active-index="tabActiveIndex"
          :list="tabs"
          @select="onSelectTab"
        />
        <div v-if="tabActiveIndex === 0" class="tab-container">
          <div class="sub-title">
            BC省提名技术移民项目（PNP）是由BC省政府和联邦移民部协议共同运作的移民项目，旨在帮助BC省的雇主雇用并保留拥有所需技能的合资格的外国技术工人。
          </div>
          <div class="sub-title">
            该项目须首先由企业筛选合格的申请人，并同意通过省提名计划支持申请人申请永久居留；然后由雇主和申请人向PNP联合提出申请；如申请得到PNP的批准，则得到省提名证书，并可向联邦提出移民申请。联邦移民部对于省提名技术移民的申请将优先处理。
          </div>
          <div class="sub-title">
            雇主无需向联邦人力资源部申请批文，雇主的企业只要符合一定的要求，同意聘用并担保申请人，即可直接向省政府申请提名移民。
          </div>
        </div>
        <div v-if="tabActiveIndex === 1" class="tab-container">
          <div class="advance">
            <div class="ul-content">
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  英语：官方要求CLB4及以上，建议雅思CLB6以上
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">学历：建议大专及以上学历</div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  至少五年内有两年的相关全职工作经验
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  24-50周岁之间，身体健康，无犯罪记录
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  综合打分够筛选分数，详细打分表请咨询顾问
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import ComBanner from "../components/Banner/index.vue";
import ComTab from "../components/Tab/index.vue";
import useWebviewSDK from "../../../hooks/useWebviewSDK";
import useService from "./service";
useWebviewSDK();
const service = useService();
const tabActiveIndex = ref(0);
const tabs = ref(["项目介绍", "申请条件"]);
onMounted(async () => {
  document.addEventListener("UniAppJSBridgeReady", function () {
    const w: any = window;
    const uni = w.uni;
    uni.getEnv(function (res: any) {
      console.log("当前环境：" + JSON.stringify(res));
    });
  });
});

const onSelectTab = (index: number) => {
  tabActiveIndex.value = index;
};
</script>

<style>
body {
  margin: 0;
}
</style>

<style scoped>
.content {
  padding: 20px 16px;
}
.title {
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #26364e;
  margin-bottom: 13px;
}
.sub-title {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #26364e;
  line-height: 22px;
  margin-bottom: 20px;
}
.image-box {
  margin: 15px 0;
}

.advance {
  position: relative;
}

.bg {
  background: rgba(149, 164, 217, 0.1);
}

.tab-wrapper {
  margin-top: 10px;
}

.tab-container {
  margin-top: 20px;
}

.advance .ul-title {
  text-indent: 10px;
  position: relative;
  font-size: 16px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  display: flex;
  align-items: center;
}

.advance .ul-title::before {
  content: "";
  width: 8px;
  height: 17px;
  background-color: #5672ba;
  transform: skewX(-20deg);
}

.advance .ul-bg {
  position: relative;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #dae2ee;
  line-height: 45px;
}

.square {
  display: inline-block;
  position: relative;
  top: 5px;
  min-width: 5px;
  width: 5px;
  min-height: 5px;
  height: 5px;
  background: #26364e;
}

.circle {
  display: inline-block;
  position: relative;
  top: 5px;
  min-width: 5px;
  width: 5px;
  min-height: 5px;
  height: 5px;
  background: #26364e;
  border-radius: 50%;
}

.advance .ul-content {
  margin-top: 4px;
}

.advance .ul-content .ul-item {
  font-family: PingFangSC-Regular, PingFang SC;
  display: flex;
  font-size: 14px;
  font-weight: 400;
  color: #26364e;
  margin-bottom: 6px;
}

.advance .ul-content .ul-item .square-content {
  margin-left: 12px;
}

.submit {
  margin: 60px 0;
}

.submit .submit-button {
  background-color: #1d429f;
  color: #ffffff;
  outline: none;
  display: block;
  border: none;
  width: 100%;
  padding: 7px 0;
  font-size: 15px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
}
</style>
