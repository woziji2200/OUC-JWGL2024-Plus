function injectScriptFile(filePath) {
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL(filePath);
    script.onload = () => script.remove();
    (document.head || document.documentElement).appendChild(script);
}
injectScriptFile('js/xkTable.js');