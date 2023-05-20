// Author: @DELETiD

const authorWebsiteUrl = 'https://twitter.com/DELETiD';
const buttonsDiv = document.getElementById('div_buttons');
const btFullscreen = document.getElementById('bt-fullscreen');
const btToggleFooter = document.getElementById('bt-footer');
const btLeftSidebar = document.getElementById('bt-left-sidebar');
const btChat = document.getElementById('bt-chat');
const authorWebsiteLink = document.getElementById('author_website');
const killChatLink = document.getElementById('bt-kill-chat');

authorWebsiteLink.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'window.location.href = "' + authorWebsiteUrl + '";'});
    });
  };

btFullscreen.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'js/fullscreen.js'});
    });
  };

btToggleFooter.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'js/messageFooter.js'});
    });
  };

  killChatLink.onclick = function(el) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'js/killChat.js'});
    });
  };

/*btLeftSidebar.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'js/leftSidebar.js'});
    });
  };

btChat.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {file: 'js/chat.js'});
    });
  };*/
