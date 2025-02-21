(function() {
  function createPageContent() {
    return `<div id="page"><a href="http://www.sinovac.com.cn/" class="logo-link"></a><div class="icp"><a href="https://beian.miit.gov.cn" target="_blank" class="icp-link">京ICP备20007634-1号</a><a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802031387" target="_blank" class="icp-link"><img src="police.png" alt="Police logo">京公网安备 11010802031387号</a><br><p>地址：中国·北京 大兴区中关村科技园大兴生物医药产业基地天富街21号（102601）</p><p>联系我们：sinovac@sinovac.com</p></div></div>`;
  }

  function injectContent(targetElementId) {
    const targetElement = document.getElementById(targetElementId);
    if (targetElement) {
      targetElement.innerHTML = createPageContent();
    } else {
      console.error("Target element not found.");
    }
  }

  window.injectPageContent = injectContent;
})();
