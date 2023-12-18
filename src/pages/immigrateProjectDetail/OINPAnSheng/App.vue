<template>
  <div class="relative">
    <ComBanner
      src="http://btm-group.oss-cn-hangzhou.aliyuncs.com/resources/image/d34439878bce48c1372f7e2b5a59a58a.png"
    />
    <div class="content">
      <div class="title">OINP 安省雇主担保移民</div>
      <div class="advance bg p-3">
        <div class="title">项目优势</div>
        <div class="ul-content">
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">安全、可靠、成功率高</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">办理周期快</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">申请条件门槛低，无年龄限制</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">资产要求低</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">项目发展和政策稳定</div>
          </div>
        </div>
      </div>
      <div class="advance p-3">
        <div class="title">雇主条件</div>
        <div class="ul-content">
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">雇主需在安省经营3年以上</div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              雇主为大多伦多GTA地区，营业额100万加币、最少雇有5个全职员工；大多伦多GTA以外营业额50万加币及最少3个全职员工。
            </div>
          </div>
          <div class="ul-item">
            <span class="square"></span>
            <div class="square-content">
              雇主提供的职位要求：全职，工资水平符合安省要求的工资水平
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
            安省雇主担保移民（即Ontario Immigrant Nominee
            Program，简称OINP）是安大略省为国际学生和已获得安省企业聘用的海外员工的移民项目，以便其能在安大略省长久地安居乐业。此项目与之前的雇主担保类项目有所不同，不再要求申请者在申请之前就已获得职位和雇主审核。
          </div>
          <div class="sub-title">
            ONIP项目可以帮助具备合格工作经验的海外员工成功地融入安大略省的职场和社区生活。如申请人所从事的职业符合要求，其在得到安大略省企业提供的永久全职工作机会以及未来的雇主所完成的雇主表格之后，即可申请移民。
            <br />
            请参考加拿大移民局官网公布的移民条例：
            <a
              href="http://www.ontarioimmigration.ca/en/pnp/index.htm"
              style="color: #3277d1"
              >http://www.ontarioimmigration.ca/en/pnp/index.htm</a
            >
          </div>
        </div>
        <div v-if="tabActiveIndex === 1" class="tab-container">
          <div class="advance">
            <div class="ul-content">
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  申请人获得一份符合职业类别的永久性全职工备份
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  申请人的工资符合安大略省该职业中的普遍工备份
                </div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">安省EOI打分获得邀请备份</div>
              </div>
              <div class="ul-item">
                <span class="circle"></span>
                <div class="square-content">
                  在提交申请之日前五年内有两年从事目标职业的工作经验。工作经验可以是累积的，并且必须与目标职业的NOC类别相同。
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
