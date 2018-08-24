declare const window: any;

/**
 * Initialize the ionic.native Angular module if we're running in ng1.
 * This iterates through the list of registered plugins and dynamically
 * creates Angular 1 services of the form $cordovaSERVICE, ex: $cordovaStatusBar.
 */
export function initAngular1(plugins: any) {
  if (window.angular) {
    const ngModule = window.angular.module('ionic.native', []);

    for (const name in plugins) {
      const serviceName = '$cordova' + name;
      const cls = plugins[name];

      (function (serviceName, cls, name) {
        ngModule.service(serviceName, [function () {
          const funcs = window.angular.copy(cls);
          funcs.__proto__['name'] = name;
          return funcs;
        }]);
      })(serviceName, cls, name);
    }
  }
}
