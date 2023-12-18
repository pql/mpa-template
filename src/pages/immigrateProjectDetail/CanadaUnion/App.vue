<template>
  <div class="relative">
    <ComBanner
      src="http://btm-group.oss-cn-hangzhou.aliyuncs.com/resources/image/861d956129228423fcad4d04e1dc43f5.png"
    />
    <div class="content">
      <div class="title">加拿大联邦自雇移民</div>
      <div class="advance bg p-3">
        <div class="title">项目优势</div>
        <div class="ul-content">
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">无需投资要求、无需解释资金来源</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">无需语言要求、无需高教育背景要求</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">无需为他人创造就业机会</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">无年龄限制，一人成功，全家移民</div>
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
            加拿大联邦自雇移民项目旨在吸引有意向且有能力在加拿大进行自雇的申请人,
            该申请人未来对加拿大的特定经济文化领域做出贡献的外国人士给予永久居留权的待遇。
          </div>
          <div class="sub-title">
            满足以下要求中其中一项的人员即可申请：在文体领域有相关经验,有意向和能力对加拿大的文化和体育做出贡献;
            或者有农场管理经验,有意向及能力在加拿大购买并经营农场；
          </div>
          <div class="sub-title">
            <div style="color: #26364e; font-weight: 500">工作经验解释</div>
            <div>
              至少两年的相关工作经验(从申请之日起往前五年的时间到审批结束的这段时间)。相关工作经验包括
            </div>
          </div>
          <div class="sub-title">
            <div style="color: #26364e; font-weight: 500">1.文化活动方面</div>
            <div>a) 有两段为期一年的在文化活动方面的自雇经历;或者</div>
            <div>
              b) 有两段为期一年的参与国家或者世界级的文化活动的经历;或者
            </div>
            <div>
              c)
              一年在文化活动方面的自雇经历,以及一年参与国家或世界级文化活动的经历
            </div>
          </div>
          <div class="sub-title">
            <div style="color: #26364e; font-weight: 500">2.体育活动方面</div>
            <div>a) 有两段为期一年的在体育活动方面的自雇经历;或者</div>
            <div>b) 有两段为期一年的参与国家世界级的体育活动的经历;或者</div>
            <div>
              c) 一年在体育活动方面的自雇经历,以及一年参与世界级体育活动的经历
            </div>
          </div>
        </div>
        <div v-if="tabActiveIndex === 1" class="tab-container">
          <div class="advance">
            <div class="ul-content">
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  有两年的相关自雇工作经验(文体类),有意向及能力在加拿大进行自雇
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  依据申请人的工作经历,教育背景,年龄,语言
                  能力,适应力做出评估，总分100分，需达到35分,即可申请（具体要求参见评分表）
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  申请人还需证明拥有足够的资金来支持其家庭登陆加拿大以后的生活
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  申请人和申请人的家庭成员要通过体检,并出具无犯罪证明
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
