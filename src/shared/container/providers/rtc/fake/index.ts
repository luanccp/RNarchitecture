import { EventEmitter } from 'react-native';
import { IRtcProvider } from '../model/IRTCProvider';

class FakeRtcProvider implements IRtcProvider {
  requestStats(intervalMs: number) {
    return intervalMs;
  }
  cancelStatsRequest() {
    return 'nothing';
  }
  sendString(message: string, to?: string | undefined) {
    return message + to;
  }
  setRemoteAudioEnabled(participantId: string, enabled: boolean) {
    return enabled ?? participantId;
  }
  onRoomDidConnect(f: any) {
    return EventEmitter + f;
  }
  onRoomDidDisconnect(f: any) {
    return EventEmitter + f;
  }
  onRoomDidFailToConnect(f: any) {
    return EventEmitter + f;
  }
  onRoomParticipantDidConnect(f: any) {
    return EventEmitter + f;
  }
  onRoomParticipantDidDisconnect(f: any) {
    return EventEmitter + f;
  }
  onParticipantStartedPublishing(f: any) {
    return EventEmitter + f;
  }
  onParticipantStoppedPublishing(f: any) {
    return EventEmitter + f;
  }
  onParticipantAddedAudioTrack(f: any) {
    return EventEmitter + f;
  }
  onParticipantRemovedAudioTrack(f: any) {
    return EventEmitter + f;
  }
  onParticipantFailedToSubscribeToAudioTrack(f: any) {
    return EventEmitter + f;
  }
  onParticipantAddedVideoTrack(f: any) {
    return EventEmitter + f;
  }
  onParticipantRemovedVideoTrack(f: any) {
    return EventEmitter + f;
  }
  onParticipantFailedToSubscribeToVideoTrack(f: any) {
    return EventEmitter + f;
  }
  onParticipantAddedDataTrack(f: any) {
    return EventEmitter + f;
  }
  onParticipantRemovedDataTrack(f: any) {
    return EventEmitter + f;
  }
  onParticipantFailedToSubscribeToDataTrack(f: any) {
    return EventEmitter + f;
  }
  onDataTrackMessageReceived(f: any) {
    return EventEmitter + f;
  }
  onStatsReceived(f: any) {
    return EventEmitter + f;
  }
  onNetworkQualityLevelsChanged(f: any) {
    return EventEmitter + f;
  }
  onDominantSpeakerChanged(f: any) {
    return EventEmitter + f;
  }
  onRemoteAudioLevelChanged(f: any) {
    return EventEmitter + f;
  }
  onLocalAudioLevelChanged(f: any) {
    return EventEmitter + f;
  }
  private fakeAnalyticsClient = 'FakeClient';
}

export default FakeRtcProvider;
