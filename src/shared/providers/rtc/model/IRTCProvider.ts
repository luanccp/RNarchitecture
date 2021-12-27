import { EmitterSubscription } from 'react-native';

export interface IRtcProvider {
  requestStats: (intervalMs: number) => void;

  cancelStatsRequest: () => void;

  sendString: (message: string, to?: string) => void;

  setRemoteAudioEnabled: (participantId: string, enabled: boolean) => void;

  onRoomDidConnect: (f: any) => EmitterSubscription;

  onRoomDidDisconnect: (f: any) => EmitterSubscription;

  onRoomDidFailToConnect: (f: any) => EmitterSubscription;

  onRoomParticipantDidConnect: (f: any) => EmitterSubscription;

  onRoomParticipantDidDisconnect: (f: any) => EmitterSubscription;

  onParticipantStartedPublishing: (f: any) => EmitterSubscription;

  onParticipantStoppedPublishing: (f: any) => EmitterSubscription;

  onParticipantAddedAudioTrack: (f: any) => EmitterSubscription;

  onParticipantRemovedAudioTrack: (f: any) => EmitterSubscription;

  onParticipantFailedToSubscribeToAudioTrack: (f: any) => EmitterSubscription;

  onParticipantAddedVideoTrack: (f: any) => EmitterSubscription;

  onParticipantRemovedVideoTrack: (f: any) => EmitterSubscription;

  onParticipantFailedToSubscribeToVideoTrack: (f: any) => EmitterSubscription;

  onParticipantAddedDataTrack: (f: any) => EmitterSubscription;

  onParticipantRemovedDataTrack: (f: any) => EmitterSubscription;

  onParticipantFailedToSubscribeToDataTrack: (f: any) => EmitterSubscription;

  onDataTrackMessageReceived: (f: any) => EmitterSubscription;

  onStatsReceived: (f: any) => EmitterSubscription;

  onNetworkQualityLevelsChanged: (f: any) => EmitterSubscription;

  onDominantSpeakerChanged: (f: any) => EmitterSubscription;

  onRemoteAudioLevelChanged: (f: any) => EmitterSubscription;

  onLocalAudioLevelChanged: (f: any) => EmitterSubscription;
}
