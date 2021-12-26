import IAnalyticsProvider from '../model/IAnalyticsProvider';

class GoogleAnalyticsProvider implements IAnalyticsProvider {
  private googleAnalyticsClient = 'GoogleAnalyticsClient';
  sendEvent(params: string): Promise<string> {
    return new Promise(resolve => {
      return resolve + this.googleAnalyticsClient + params;
    });
  }
}

export default GoogleAnalyticsProvider;
