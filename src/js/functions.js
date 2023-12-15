function getCurrentPageName() {
    if (!document.getElementById('page')) {
        return null;
    }

    return document.getElementById('page').value;
}

function isPage(pageName) {
    let currentPagename = getCurrentPageName();

    return pageName === currentPagename;
}

window.isPage= isPage;
window.getCurrentPageName = getCurrentPageName;
