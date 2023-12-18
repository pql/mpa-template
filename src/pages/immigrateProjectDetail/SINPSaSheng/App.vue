<template>
  <div class="relative">
    <ComBanner
      src="http://btm-group.oss-cn-hangzhou.aliyuncs.com/resources/image/9b770cc416b312db3589b80ff7eec00a.png"
    />
    <div class="content">
      <div class="title">SINP萨省雇主担保移民</div>
      <div class="advance bg p-3">
        <div class="title">项目优势</div>
        <div class="ul-content">
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              6个月就可以登陆加拿大，全家可享受加拿大
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">一个月快速获批省提名</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">要求低，综合打分够60就可以</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              配偶可申请开放工签，可在加拿大合法工作
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">子女可以享受12年免费公立学校教育</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              真实的雇主和真实的雇佣：安全、可靠、成功
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
            加拿大萨斯喀彻温省(Saskatchewan) ，简称萨省，加拿大草原三省之一，
            有" 加拿大的粮仓"
            之誉，地形平坦而广阔，在萨省广大的平原上，大小河流、湖泊和沼泽星罗棋布。萨省是个能源大省，矿产资源丰富，地广人稀。
          </div>
          <div class="sub-title">
            当局大力发展经济，即便是在全球经济大萧条的大环境下，当地经济依然强劲。萨省已经有了颇具规模的华人社区，拥有华人超市，华人餐馆，华人旅店以及华人旅行社等华人企业，各政府部门也有华人工作人员。
          </div>
          <div class="sub-title">
            SINP
            计划是针对已取得萨省雇主全职聘用合同的技术工人及专业人士而设立的移民计划。对于高学历人士和低学历的技术人员，此项提名计划是帮助他们成功获得加拿大移民签证的直通车。
          </div>
        </div>
        <div v-if="tabActiveIndex === 1" class="tab-container">
          <div class="advance">
            <div class="ul-content">
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  萨省评分标准达到60分（满分100分）
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  雅思是G类的，要求要达到CLB4，2年内有效
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  过去10年内至少有1年工作经验：萨省有需求的高技能职业
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  提供定居萨省的安家资金证明和定居计划证明
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
