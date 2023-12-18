<template>
  <div class="relative">
    <ComBanner
      src="http://btm-group.oss-cn-hangzhou.aliyuncs.com/resources/image/071fa4c9ed5f77e4b11250d5b014063e.png"
    />
    <div class="content">
      <div class="title">EB-1A | 美国杰出人才移民</div>
      <div class="advance bg p-3">
        <div class="title">项目优势</div>
        <div class="ul-content">
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              简单便捷 一步到位获永久绿卡，无语言、学历、年龄限制
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              无移民监 申请人可留在国内工作或生活，无需在美国开办企业
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              无资金风险 无需投资80-100万美元，无投资风险
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              办理速度快 无排期，最快15天即可获知申请结果
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
            美国特殊人才绿卡(EB-1A Extraordinary Ability
            Aliens)是属于美国移民法规定的第一类优先职业移民。
            凡是在科学，艺术，教育，商业或者体育竞赛中获得国家或者国际认可和赞赏的人士，都可以申请此类
            绿卡。曾获过国家或国际大奖的各类艺术家尤其青睐此种移民方式。该类申请不需要有美国雇主支持，
            无排期限制，是最快获得美国绿卡的方式之一。并且，它的适用范围非常广，几乎任何领域的杰出人士
            均可申请。一人申请，配偶及21岁以下未婚子女同时获得绿卡。
          </div>
          <div class="sub-title">
            特殊人才绿卡申请人必须用充分的文件、材料事实证明自己具备特殊才能或杰出成就，是该领域的精英
            分子，并且获得国家或国际社会的认可。申请人的才能必须具备在实质性上推进美国社会进步的潜力并
            且申请人愿意在美国继续发展该项才能。
          </div>
        </div>
        <div v-if="tabActiveIndex === 1" class="tab-container">
          <div class="advance">
            <div class="ul-content">
              <div class="ul-item">
                <div class="square-content">
                  对于此类申请，移民法规定了十条标准，申请人满足十项中的至少三项，即可提出申请。
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  申请人在本专业领域内获得过国家级或国际知名的奖项;
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  申请人是本专业领域著名组织、机构或协会的成员。
                  这种会员资格只授予取得杰出成就的专业人员;
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  有专业报刊、重要商业刊物或主流媒体对申请人
                  在本专业领域所取得的成就的报道;
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  申请人曾多次在本专业领域活动或竞赛中担任裁判或评委，
                  或担任重要学术期刊的审稿人等;
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  申请人在本领域(例如科学、艺术、商业、体育等)做出重大贡献;
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  申请人在专业学术期刊或其它主流媒体上发表过专业学术论文;
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  申请人曾多次举办或参与个人艺术作品展览、演奏会或成果展示会等;
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  申请人在享有声誉的组织、机构、协会或实验室中
                  担当重要或领导职位， 或发挥重大作用;
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  申请人领取比其他同行更高的薪水或报酬;
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  申请人在艺术表演中获得商业成功
                  (例如:高票房记录，录像带或影碟的高销售记录等);
                </div>
              </div>
              <div class="ul-item">
                <div class="square-content">
                  另外，同行专家的推荐信也是重要的证据材料。
                  如果可以得到国外专家的有力推荐信，案件成功的机率将会更高。
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
