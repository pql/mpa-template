//引入路径模块
const path = require("path");
//引入文件模块
const fs = require("fs");
const nodeHtmlParser = require("node-html-parser").parse;

const pathNames = [
  path.join(__dirname, "dist/src/pages/pdfPreview/index.html"), // 预览合同页
  path.join(__dirname, "dist/src/pages/signContract/index.html"), // 签署合同页
  path.join(__dirname, "dist/src/pages/PDFViewer/index.html"), // 预览pdf

  path.join(__dirname, "dist/src/pages/immigrateProgramIntro/usa/index.html"),
  path.join(
    __dirname,
    "dist/src/pages/immigrateProgramIntro/canada/index.html"
  ),
  path.join(
    __dirname,
    "dist/src/pages/immigrateProjectDetail/CanadaBCSheng/index.html"
  ),
  path.join(
    __dirname,
    "dist/src/pages/immigrateProjectDetail/CanadaKuiSheng/index.html"
  ),
  path.join(
    __dirname,
    "dist/src/pages/immigrateProjectDetail/CanadaUnion/index.html"
  ),
  path.join(
    __dirname,
    "dist/src/pages/immigrateProjectDetail/EB1A/index.html"
  ),
  path.join(
    __dirname,
    "dist/src/pages/immigrateProjectDetail/EB2NIW/index.html"
  ),
  path.join(
    __dirname,
    "dist/src/pages/immigrateProjectDetail/OINPAnSheng/index.html"
  ),
  path.join(
    __dirname,
    "dist/src/pages/immigrateProjectDetail/SINPSaSheng/index.html"
  ),
  path.join(
    __dirname,
    "dist/src/pages/immigrateProjectDetail/SUVCanadaUnion/index.html"
  ),
];

const reWriteFile = (pathName) => {
  fs.readFile(pathName, "utf8", function (err, html) {
    if (err) {
      return console.log(`读取${pathName}文件失败` + err.message);
    }
    const root = nodeHtmlParser(html);
    const elList = root.querySelectorAll("script");

    for (let i = 0; i < elList.length; i++) {
      // 1.移除 <script type=module> 元素
      const data = elList[i].getAttribute("type");
      if (data && data === "module") {
        elList[i].remove;
      }
      // 2.移除其他 <script> 的 nomodule 属性
      const hasNoModule = elList[i].hasAttribute("nomodule");
      if (hasNoModule) {
        elList[i].removeAttribute("nomodule");
      }

      // 3.移除其他 <script> 的 crossorigin 属性
      const hasCrossOrigin = elList[i].hasAttribute("crossorigin");
      if (hasCrossOrigin) {
        elList[i].removeAttribute("crossorigin");
      }

      // 4.移除 <script id=vite-legacy-entry> 元素的内容，并把 data-src 属性名改为 src
      const hasDataSrc = elList[i].hasAttribute("data-src");
      if (hasDataSrc) {
        const legacyEle = elList[i];
        const srcData = legacyEle.getAttribute("data-src");
        legacyEle.setAttribute("src", srcData);
        legacyEle.removeAttribute("data-src");
        legacyEle.innerText = "";
      }
    }

    // 移除link标签 的 crossorigin 属性
    const linkList = root.querySelectorAll("link");

    for (let i = 0; i < linkList.length; i++) {
      // 移除 <link>  rel="modulepreload" 的 crossorigin 属性
      const data = linkList[i].getAttribute("rel");
      if (data && data === "modulepreload") {
        linkList[i].removeAttribute("crossorigin");
      }
    }

    // 将新的组合的内容写入原有index.html
    fs.writeFileSync(pathName, root.toString());
  });
};

for (let i = 0; i < pathNames.length; i++) {
  reWriteFile(pathNames[i]);
}
