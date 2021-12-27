export default interface IAnalyticsProvider {
  sendEvent(params: string): Promise<string>;
}
