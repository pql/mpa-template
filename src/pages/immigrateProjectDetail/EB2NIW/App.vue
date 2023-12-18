<template>
  <div class="relative">
    <ComBanner
      src="http://btm-group.oss-cn-hangzhou.aliyuncs.com/resources/image/b9d8e60f92aa052a27a0296df0aa581a.png"
    />
    <div class="content">
      <div class="title">EB2-NIW | 美国国家利益豁免</div>
      <div class="advance bg p-3">
        <div class="title">项目优势</div>
        <div class="ul-content">
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">简单便捷 和EB-1A一样申请流程简洁;</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              条件宽松
              和EB-2其他两个类别项目相比，NIW无行业领域限制、无需雇主担保、无需申请劳工卡;
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              成功率高
              要求低于EB-1A，申请人更容易满足，也可以和别的移民申请同时递交;
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">费用低廉 花钱少，项目性价比高。</div>
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
            美国国家利益豁免(NIW)移民项目英文全称为:“Employment-Based
            Immigration: Second Preference EB-2(National Interest Waiver)”。
          </div>
          <div class="sub-title">
            该项目是美国移民政策属于职业移民第二优先级别EB-2，NIW项目申请绿
            卡需要排期。
          </div>
          <div class="sub-title">
            NIW项目背景:一般情况下，EB2类的移民项目都需要有美
            国雇主的担保才能申请，但是美国政府基于国家利益的考量，对那些有能
            力为美国国家利益做出重要贡献的外籍人士，豁免他们的永久性工作的承
            诺要求及漫长繁琐的劳工证申请，使他们可以通过NIW国家利益豁免，直
            接向移民局提出移民。
          </div>
        </div>
        <div v-if="tabActiveIndex === 1" class="tab-container">
          <div class="advance">
            <div class="ul-content">
              <div class="ul-item">
                <div class="square-content" style="margin-left: 0">
                  作为NIW申请人，申请人需要证明自己具有“高等学位”
                  或者是“杰出才能”。
                </div>
              </div>
              <div class="title">高等学位</div>
              <div class="ul-item">
                <div class="square-content" style="margin-left: 0">
                  例如，拥有一个高等学位(advanced degree)或同等学历(equivalent
                  degree)。高等学位
                  指高于学士学位的美国学术或专业学位或国外同等学位。学士学位加上5年相关领域专业的
                  工作经验也满足高等学位的要求。;
                </div>
              </div>
              <div class="title">杰出才能</div>
              <div class="ul-item">
                <div class="square-content" style="margin-left: 0">
                  由于在科学、艺术、商业领域拥有杰出才能(exceptional
                  ability)，有望使美国经济、文
                  化教育、或福利实质受益。专业程度明显高于同行水平。为了证明这一点，申请人必须至
                  少满足以下6条中的3条:
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  正式的学业记录显示申请人拥有来自于申请人杰出才能领域相关的学院、大学、
                  学校或其他学习机构颁发的学位、文凭、证书、或类似的奖励;
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  证明申请人至少10年全职工作经验的信函;
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">拥有从业资格执照或证书;</div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  申请人因杰出的技能和专业所获得的薪水和其他报酬;
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">是专业协会的会员;</div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  来自同行，政府机构，专业或商业组织对申请人成就和领域内贡献的认可和肯定。
                </div>
              </div>

              <div class="ul-item">
                <div class="square-content" style="margin-left: 0">
                  除此之外，在满足“高等学位”
                  或者是“杰出才能后，还必须满足以下3条标准:
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">申请人的事业和国家级重要性;</div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  申请人的成就处于推动其领域发展的有利位置;
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  豁免对工作和劳工证的要求对美国有利。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="tabActiveIndex === 2" class="tab-container">
          <div class="title">中国境内</div>
          <div class="step-container">
            <div class="step-item">
              <div class="step-item-left">STEP 1</div>
              <div class="step-item-content">
                <div>资质评估，确定符合标准</div>
                <div>材料收集和处理备份</div>
              </div>
            </div>
            <div class="step-item">
              <div class="step-item-left">STEP 2</div>
              <div class="step-item-content">
                <div>中国境内领事馆</div>
                <div>递交I-140移民申请</div>
              </div>
            </div>
            <div class="step-item">
              <div class="step-item-left">STEP 3</div>
              <div class="step-item-content">
                <div>获批后申请转NVC</div>
              </div>
            </div>
            <div class="step-item">
              <div class="step-item-left">STEP 4</div>
              <div class="step-item-content">
                <div>面试通过后持签证</div>
                <div>登陆美国获得绿卡</div>
              </div>
            </div>
          </div>
          <div class="title">美国境内</div>
          <div class="step-container">
            <div class="step-item">
              <div class="step-item-left">STEP 1</div>
              <div class="step-item-content">
                <div>资质评估，确定符合标准</div>
                <div>材料收集和处理</div>
              </div>
            </div>
            <div class="step-item">
              <div class="step-item-left">STEP 2</div>
              <div class="step-item-content">
                <div>递交I-140移民申请</div>
              </div>
            </div>
            <div class="step-item">
              <div class="step-item-left">STEP 3</div>
              <div class="step-item-content">
                <div>排期结束后，申请人递交I-485身份调整申请</div>
              </div>
            </div>
            <div class="step-item">
              <div class="step-item-left">STEP 4</div>
              <div class="step-item-content">
                <div>面试通过后，申请人 I-485获批，获得绿卡</div>
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
const tabs = ref(["项目介绍", "申请条件", "申请流程"]);
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

.step-container {
}

.step-item {
  display: flex;
  margin-bottom: 15px;
}

.step-item-left {
  width: 90px;
  position: relative;
  background: #34416e;
  color: #ffffff;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 10px;
  font-weight: bold;
}

.step-item-left::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  bottom: -8px;
  border-top: 10px solid #34416e;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
}

.step-item-content {
  flex: 1;
  background: #eaedf6;
  color: #26364e;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 18px;
  padding-right: 18px;
}
</style>
