import IAnalyticsProvider from '../model/IAnalyticsProvider';

class FakeAnalyticsProvider implements IAnalyticsProvider {
  private fakeAnalyticsClient = 'FakeClient';
  sendEvent(params: string): Promise<string> {
    return new Promise(resolve => {
      return resolve + this.fakeAnalyticsClient + params;
    });
  }
}

export default FakeAnalyticsProvider;
