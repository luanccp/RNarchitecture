export default interface INotificationProvider {
  openNotification(): Promise<any>;
  getNotificationData(): Promise<any>;
  watchNotificationAppKilled(): Promise<any>;
  watchNotificationAppBackground(): Promise<any>;
  watchNotificationAppForeground(): Promise<any>;
}
