<template>
  <div class="relative">
    <ComBanner
      src="http://btm-group.oss-cn-hangzhou.aliyuncs.com/resources/image/dddf65a83e806b049ba31261ba9b4d6b.png"
    />
    <div class="content">
      <div class="title">加拿大</div>
      <div class="sub-title">
        加拿大（英语/法语：Canada），首都渥太华，位于北美洲北部。东临大西洋，西濒太平洋，西北部邻美国阿拉斯加州，南接美国本土，北靠北冰洋。气候大部分为亚寒带针叶林气候和湿润大陆性气候，北部极地区域为极地长寒气候。全国地貌西高东低，矿产资源丰富，金属矿和非金属矿产储量都位居世界前列。总面积
        9980000平方千米，其中海岸线长约240000千米，全国分10个省3个地区。截至2022年7月，加拿大总人口为3892万人，主要为英、法等欧洲后裔，英语和法语同为官方语言。
      </div>
      <div class="image-box">
        <img
          src="http://btm-group.oss-cn-hangzhou.aliyuncs.com/resources/image/2dd71593dd9cbd9e77e664193ddbfedd.png"
          width="100%"
          height="auto"
          style="display: block"
        />
      </div>
      <div class="sub-title">
        加拿大是全球最发达的经济体之一，制造业、高科技产业、服务业发达，资源工业、初级制造业和农业是国民经济的主要支柱，经济持续稳定增长。加拿大是联合国（UN）、国际货币基金组织（IMF）、世界银行（WBG）、世贸组织（WTO）、七国集团（G7）、20国集团（G20）和亚太经合组织（APEC）成员国。2021年，加拿大国内生产总值为20900亿加元。
      </div>
      <div class="advance">
        <div class="title">福利优势</div>
        <div class="ul-title">
          <div>教育</div>
          <div class="ul-bg">EDUCATION</div>
        </div>
        <div class="ul-content">
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">加拿大教育世界排名第一</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">UBC、多伦多大学世界排名前20</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">公立中、小学学费全免</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              政府提供托儿补助金、 助学金与无息贷款、教育基金
            </div>
          </div>
        </div>
        <div class="ul-title">
          <div>医疗</div>
          <div class="ul-bg">MEDICAL TREATMENT</div>
        </div>
        <div class="ul-content">
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">全民拥有基本医疗保险</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">看病、做手术全部免费</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">住院期间，伙食、药费等全部免费</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">怀孕津贴最多可领取15个星期</div>
          </div>
        </div>
        <div class="ul-title">
          <div>就业及退休</div>
          <div class="ul-bg">EMPLOYMENT & RETIREMENT</div>
        </div>
        <div class="ul-content">
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              享受一年两周(工作满五年享受三周) 的带薪假期
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">100万个工作机会</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">失业、生小孩政府发放工资长达13个月</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">退休享受政府补助</div>
          </div>
        </div>
        <div class="ul-title">
          <div>育儿养老</div>
          <div class="ul-bg">CHILDCARE & OLD-AGE CARE</div>
        </div>
        <div class="ul-content">
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              每个孩子可获得牛奶金，每月最 多可获上千加币(约5000人民币)
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              养老金根据居住年数计算 全额养老金达600加元
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">政府房最低每月租金按月 收入25%缴纳</div>
          </div>
        </div>
      </div>

      <div class="submit">
        <button class="submit-button" @click="onContactConsultantForDetail">
          联系顾问咨询详情
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import ComBanner from "../components/Banner/index.vue";
import useWebviewSDK from "../../../hooks/useWebviewSDK";
import useService from "./service";
useWebviewSDK();
const service = useService();
onMounted(async () => {
  document.addEventListener("UniAppJSBridgeReady", function () {
    const w: any = window;
    const uni = w.uni;
    uni.getEnv(function (res: any) {
      console.log("当前环境：" + JSON.stringify(res));
    });
  });
});

const onContactConsultantForDetail = (e: any) => {
  const w: any = window;
  const uni = w.uni;
  const wx = w.wx;
  if (wx) {
    // 小程序环境
    // wx.miniProgram.postMessage 向小程序发送消息，会在特定时机（小程序后退、组件销毁、分享）触发组件的message事件
    wx.miniProgram.postMessage({
      data: {
        action: "onContactConsultantForDetail",
      },
    });
    wx.miniProgram.reLaunch({
      url: "/pages/tabbar/index/index?showContactConsultantPopup=1",
    });
  }
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
  margin-bottom: 7px;
}
.sub-title {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #26364e;
  line-height: 22px;
}
.image-box {
  margin: 15px 0;
}

.advance {
  position: relative;
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
  background: rgba(86, 114, 186, 0.5);
}

.advance .ul-content {
  margin-top: 4px;
  margin-left: 20px;
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
