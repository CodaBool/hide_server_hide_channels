/**
 * @name HideServersHideChannels
 * @version 1.0.0
 * @description Hotkey only way of hiding channels or hiding servers
 * @author Codabool
 * @website https://codabool.com
 * @source https://github.com/CodaBool/hide_server_hide_channels/blob/main/HideServersHideChannels.plugin.js
 * @updateUrl https://raw.githubusercontent.com/CodaBool/hide_server_hide_channels/main/HideServersHideChannels.plugin.js
 */

const sidebarSelector = createSelector(
  document.querySelector('[class^="sidebar"]').className
)
const guildBarSelector = createSelector(
  document.querySelector('nav[class*="guilds-"').className
)

function createSelector(className) {
  return '.' + className.replace(/ /g, '.')
}

function toggleView(el) {
  if (el.style.display === "" || el.style.display === "flex") {
    el.style.display = "none"
  } else {
    el.style.display = "flex"
  }
}

function handler(event) {
  if (event.altKey && event.key.toLowerCase() === "s") {
    toggleView(document.querySelector(guildBarSelector))
  } else if (event.altKey && event.key.toLowerCase() === "c") {
    toggleView(document.querySelector(sidebarSelector))
  }
}

module.exports = () => ({
  start() {
    document.addEventListener("keydown", handler)
  },
  stop() {
    document.removeEventListener("keydown", handler)
  }
})