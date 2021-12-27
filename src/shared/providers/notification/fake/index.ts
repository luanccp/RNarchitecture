import INotificationProvider from '../model/INotificationProvider';

export default class FakeNotificationProvider implements INotificationProvider {
  openNotification(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getNotificationData(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  watchNotificationAppKilled(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  watchNotificationAppBackground(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  watchNotificationAppForeground(): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
