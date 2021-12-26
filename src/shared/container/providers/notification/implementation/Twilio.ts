import INotificationProvider from '../model/INotificationProvider';

class TwilioProvider implements INotificationProvider {
  twilioClient = 'Twilio';
  openNotification(): Promise<any> {
    return new Promise(resolve => {
      return this.twilioClient + resolve;
    });
  }
  getNotificationData(): Promise<any> {
    return new Promise(resolve => {
      return this.twilioClient + resolve;
    });
  }
  watchNotificationAppKilled(): Promise<any> {
    return new Promise(resolve => {
      return this.twilioClient + resolve;
    });
  }
  watchNotificationAppBackground(): Promise<any> {
    return new Promise(resolve => {
      return this.twilioClient + resolve;
    });
  }
  watchNotificationAppForeground(): Promise<any> {
    return new Promise(resolve => {
      return this.twilioClient + resolve;
    });
  }
}

export default TwilioProvider;
