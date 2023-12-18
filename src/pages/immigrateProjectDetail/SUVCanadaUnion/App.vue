<template>
  <div class="relative">
    <ComBanner
      src="http://btm-group.oss-cn-hangzhou.aliyuncs.com/resources/image/91e40c1218aae442895f35d62304504b.png"
    />
    <div class="content">
      <div class="title">SUV 加拿大联邦创业投资移民</div>
      <div class="advance bg p-3">
        <div class="title">项目优势</div>
        <div class="ul-content">
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              申请门槛低：对申请人无年龄要求、无资产要求
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              申请速度快：申请周期3个月、12个月获枫叶卡
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">申请风险低：先审批后投资</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              移民前景好的真实新型企业，未来可上市
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
            加拿大联邦创业移民（Start-up Visa
            )是加拿大移民部于2013年3月31曰启动的为期五年的试点项目，主要目的是吸引创新企业家移民加拿大，创办公司创造就业，从而刺激经济增长。2017年7月28日，加拿大移民部公布联邦创业
            投资移民成为永久性项目。
          </div>
          <div class="sub-title">
            联邦创业投资移民项目，无资产、税收、管理经验和相关工作经验的要求，一步到位获得枫叶卡。申请移民无拒签风险。
            加拿大的创业签证计划是针对在加拿大具有建立企业的技能和潜力的移民企业家而设立：
          </div>
          <div class="sub-title">
            <div style="color: #26364e; font-weight: 500">*具有创新性</div>
            <div style="color: #26364e; font-weight: 500">
              *可以为加拿大人创造就业机会
            </div>
            <div style="color: #26364e; font-weight: 500">
              *可以在全球范围内竞争
            </div>
          </div>
          <div class="sub-title">
            <div style="color: #26364e; font-weight: 500">初创企业定义：</div>
            <div>必须是一项只在加拿大运营的新业务。</div>
          </div>
          <div class="sub-title">
            <div style="color: #26364e; font-weight: 500">投资定义：</div>
            <div>
              为“在申请人的业务中购买股票或其他形式的股权”，因此，不允许使用可转换债券。
            </div>
          </div>
          <div class="sub-title">
            <div style="color: #26364e; font-weight: 500">商业认可和支持：</div>
            <div>风险投资基金、天使投资团体、企业孵化器。</div>
          </div>
          <div class="advance">
            <div class="title">项目核心</div>
            <div style="color: #26364e">
              申请人须获得加拿大联邦政府指定机构的支持
            </div>
            <div class="ul-content">
              <div class="ul-item">
                <span class="square"></span>
                <div class="square-content">
                  使投资集团不少于7.5万加元投资的承诺
                </div>
              </div>
              <div class="ul-item">
                <span class="square"></span>
                <div class="square-content">
                  风险投资基金不少于20万加元投资的承诺
                </div>
              </div>
              <div class="ul-item">
                <span class="square"></span>
                <div class="square-content">
                  企业孵化器项目机构录取接受申请人进入其项
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="tabActiveIndex === 1" class="tab-container">
          <div class="advance">
            <div class="title">主申请人</div>
            <div class="ul-content">
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  英语雅思达到加拿大语言基准的CLB5（雅
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  建议全日制大学专科及以上学历，无硬性要求
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">创业资金（依据商业计划）</div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  安家资金（依据政府要求：12475加币，
                </div>
              </div>
            </div>
          </div>
          <div class="advance">
            <div class="title">附属申请人</div>
            <div class="ul-content">
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  申请人、配偶及18岁以上的随行子女无任何
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">申请人及随行家庭成员身体健康</div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  申请人有合格的生意：即 Qualifying Business，须满足以下要求。
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  a. 获得加拿大政府指定机构的承诺函时,申请人必须至少持有10%
                  的公司股权
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  b. 加拿大政府指定机构和所有申请人必须共同持有超过50%
                  的公司股权：非酒店、餐厅、咖啡厅及便利店等的创新型生意
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  c.
                  获得加拿大永久居留权时，申请人的公司须在加拿大注册成立，且须在加拿大境内开展业务
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  d. 申请人在加拿大境内对其公司业务进行积极、持续的管理
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  e.
                  申请人须获得加拿大联邦政府指定机构（风险投资基金、天使投资集团、企业孵化器项目之一）的支持信
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
