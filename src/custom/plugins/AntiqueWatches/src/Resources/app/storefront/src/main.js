// data-drop-down-menu
const PluginManager = window.PluginManager;
PluginManager.register('DropdownMenu', () => import('./plugin/dropdown-menu/dropdown-menu.plugin.js'), '[data-drop-down-menu]');
