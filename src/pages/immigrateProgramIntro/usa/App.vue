<template>
  <div class="relative">
    <ComBanner
      src="http://btm-group.oss-cn-hangzhou.aliyuncs.com/resources/image/22e54a8d35cbc3e6b3102de2c222caa6.png"
    />
    <div class="content">
      <div class="title">美利坚合众国</div>
      <div class="sub-title">
        美利坚合众国(The United States of
        America)，简称美国，首都华盛顿。位于北美洲中部，北与加拿大接壤，南靠墨西哥湾，西临太平洋，东濒大西洋。自然资源丰富，矿产资源总探明储量居世界首位。
        总面积937万平方千米，美国共分50个州和1个特区(哥伦比亚特区)，有
        3143个县。截至2021年8月15日，美国总人口约3.33亿。
      </div>
      <div class="sub-title">
        美国是高度发达的资本主义国家，其国内生产总值居世界首位，拥有高度发达的现代市场经济，工业生产保持稳定，信息、生物等高科技
        产业发展迅速。美国是联合国安理会常任理事国，也是北约、世贸组织、亚太经济合作组织等国际组织成员国，其经济、文化、工业等领
        域对世界均有较强影响力。
      </div>
      <div class="image-box">
        <img
          src="http://btm-group.oss-cn-hangzhou.aliyuncs.com/resources/image/fa0bb064fa2ac0fb86e89b8388bc001c.png"
          width="100%"
          height="auto"
          style="display: block"
        />
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
            <div class="square-content">美国QS世界高等教育质量排行榜第一</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              <div>
                <span style="display: inline-block; width: 200px"
                  >麻省理工学院世界排名</span
                >
                第一
              </div>
              <div>
                <span style="display: inline-block; width: 200px"
                  >斯坦福大学世界排名</span
                >
                第三
              </div>
              <div>
                <span style="display: inline-block; width: 200px"
                  >哈佛大学世界排名</span
                >
                第五
              </div>
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">公立中、小学学费全免</div>
          </div>
        </div>
        <div class="ul-title">
          <div>医疗</div>
          <div class="ul-bg">MEDICAL TREATMENT</div>
        </div>
        <div class="ul-content">
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">全民享受世界级医疗资源</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">严格医疗教育体系催生高水准医疗水平</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">高度发达医疗产业带动医疗技术创新</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">标准规范的操作流程和人性化的服务</div>
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
              失业后在劳动局核实批准后，最长可领取12个月失业金补助
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">美国特色“带薪假日”尽享假日欢乐</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">退休享社保退休福利</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">医疗方面的福利</div>
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
              美国义务教育为期十三年 从幼儿园到高中毕业均享受免费教育
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              在美国累计纳税满十年，可领取退休金，
              退休后还可入住保障性老年公寓。
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              大约有186个国家和地区给予普通美国护照
              持有人免签证和落地签证待遇，畅游全球。
            </div>
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
