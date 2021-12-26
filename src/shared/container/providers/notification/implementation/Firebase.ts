import INotificationProvider from '../model/INotificationProvider';

class FirebaseProvider implements INotificationProvider {
  firebaseClient = 'FirebaseAdmin';
  openNotification(): Promise<any> {
    return new Promise(resolve => {
      return this.firebaseClient + resolve;
    });
  }
  getNotificationData(): Promise<any> {
    return new Promise(resolve => {
      return this.firebaseClient + resolve;
    });
  }
  watchNotificationAppKilled(): Promise<any> {
    return new Promise(resolve => {
      return this.firebaseClient + resolve;
    });
  }
  watchNotificationAppBackground(): Promise<any> {
    return new Promise(resolve => {
      return this.firebaseClient + resolve;
    });
  }
  watchNotificationAppForeground(): Promise<any> {
    return new Promise(resolve => {
      return this.firebaseClient + resolve;
    });
  }
}

export default FirebaseProvider;
