import IAnalyticsProvider from '../model/IAnalyticsProvider';

class AdjustProvider implements IAnalyticsProvider {
  private adjustClient = 'AdjustClient';
  sendEvent(params: string): Promise<string> {
    return new Promise(resolve => {
      return resolve + this.adjustClient + params;
    });
  }
}

export default AdjustProvider;
