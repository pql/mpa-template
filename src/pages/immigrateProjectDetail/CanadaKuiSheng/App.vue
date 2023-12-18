<template>
  <div class="relative">
    <ComBanner
      src="http://btm-group.oss-cn-hangzhou.aliyuncs.com/resources/image/bc7714db9104cba69d0ee8945d67809e.png"
    />
    <div class="content">
      <div class="title">加拿大魁省商业移民</div>
      <div class="advance bg p-3">
        <div class="title">项目优势</div>
        <div class="ul-content">
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              申请条件简单，无年龄、学历、语言要求
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              一步到位拿枫叶卡，无需商业计划书，无需创
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">政府担保，投资安全可靠无风险</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              投资方式灵活，项目成熟稳定，已有30余年
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">无居住地的限制</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              拿到永久居民身份后方便出入美国，拿到护照
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
            安全可靠风险低，审核通过后才需要投资，且投资均有加拿大政府监管,5年当中居住3年可以加入公民；持有加国护照，可以免签自由出入加拿大、美国，各英联邦国家;德国、法国等所有欧共体国家。
          </div>
          <div class="sub-title">
            <div style="color: #26364e; font-weight: 500">
              2018年加拿大魁省投资移民项目申请要求有这些变化：
            </div>
            <div>
              1、申请人必须拥有200万加币合法获得的净资产，包括个人资产（如：银行存款、房产、股票、债券、投资性保险等）和公司资产（如：公司投资款、公司目前资产等）。这些资产的来源可以是申请人本人获得的，也可以是申请人的配偶获得的;提交申请前六个月通过捐赠获得的资金不能算在净资产里面。
            </div>
            <div>
              2、过去五年，在合法的公司（类型包括：农业，商业和工业），有至少两年的“管理工作经验”。
            </div>
            <div>
              3、支付120万加币的投资款，投资周期为五年，其间不能撤资，五年之后返还120万加币；融资只需支付35万加币的投资利息，不予退还。
            </div>
          </div>
          <div class="sub-title">
            <div style="color: #26364e; font-weight: 500">
              魁省投资于2020年5月暂停，将延长至2023年4月从新开案。
            </div>
          </div>
        </div>
        <div v-if="tabActiveIndex === 1" class="tab-container">
          <div class="advance">
            <div class="ul-content">
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  家庭净资产：主申请人和配偶名下至少有200万加币，合理合法积累；
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  管理经历：申请前五年中两年以上高级商业管理经验（高管或股东）；
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  投资35万加币（一次性支付不返还）；
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  随行子女要求：22周岁以下，全日制在读且未婚（以申请人提交全套文件后收到档案号时间为准）；
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  申请人全家符合体检和安全背景调查要求且无犯罪记录。
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
