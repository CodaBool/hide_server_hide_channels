/**
 * @name HideServersHideChannels
 * @version 1.0.0
 * @description Hotkey only way of hiding channels or hiding servers
 * @author Codabool
 * @website https://codabool.com
 * @source https://github.com/CodaBool/hide_server_hide_channels
 * @updateUrl https://raw.githubusercontent.com/Pieloaf/BetterDiscordPlugins/main/HideSidebar.plugin.js
 */
module.exports = (_ => {

  function createSelector(className) {
    return '.' + className.replace(/ /g, '.')
  }

  const sidebarSelector = createSelector(
    document.querySelector('[class^="sidebar"]').className
  );
  const guildBarSelector = createSelector(
    document.querySelector('nav[class*="guilds-"').className
  );

  const toggleView = (selectedEl) => {
    if (
      selectedEl.style.display === "" ||
      selectedEl.style.display === "flex"
    ) {
      selectedEl.style.display = "none";
    } else {
      selectedEl.style.display = "flex";
    }
  }

  document.onkeydown = function(evt) {
    let alt = evt.altKey;
    let cKey = evt.key.toLowerCase() === "c";
    let sKey = evt.key.toLowerCase() === "s";
    if (alt && cKey)
      toggleView(document.querySelector(sidebarSelector));
    if (alt && sKey)
      toggleView(document.querySelector(guildBarSelector));
  };
  return class {
    start() {}
    stop() {}
  }
})();