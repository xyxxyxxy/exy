/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { EmbyClient } from './EmbyClient';

export { ApiError } from './core/ApiError';
export { BaseHttpRequest } from './core/BaseHttpRequest';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export { ActivityLogEntry } from './models/ActivityLogEntry';
export type { AllThemeMediaResult } from './models/AllThemeMediaResult';
export type { AuthenticateUser } from './models/AuthenticateUser';
export type { AuthenticateUserByName } from './models/AuthenticateUserByName';
export type { Authentication_AuthenticationResult } from './models/Authentication_AuthenticationResult';
export { BaseItemDto } from './models/BaseItemDto';
export { BaseItemPerson } from './models/BaseItemPerson';
export type { Branding_BrandingOptions } from './models/Branding_BrandingOptions';
export type { ChapterInfo } from './models/ChapterInfo';
export type { ClientCapabilities } from './models/ClientCapabilities';
export type { Collections_CollectionCreationResult } from './models/Collections_CollectionCreationResult';
export { Configuration_AccessSchedule } from './models/Configuration_AccessSchedule';
export type { Configuration_CodecConfiguration } from './models/Configuration_CodecConfiguration';
export { Configuration_ImageOption } from './models/Configuration_ImageOption';
export type { Configuration_LibraryOptions } from './models/Configuration_LibraryOptions';
export type { Configuration_MediaPathInfo } from './models/Configuration_MediaPathInfo';
export type { Configuration_PathSubstitution } from './models/Configuration_PathSubstitution';
export { Configuration_ServerConfiguration } from './models/Configuration_ServerConfiguration';
export type { Configuration_TypeOptions } from './models/Configuration_TypeOptions';
export { Configuration_UserConfiguration } from './models/Configuration_UserConfiguration';
export type { Connect_ConnectAuthenticationExchangeResult } from './models/Connect_ConnectAuthenticationExchangeResult';
export type { Connect_UserLinkResult } from './models/Connect_UserLinkResult';
export type { CreateUserByName } from './models/CreateUserByName';
export type { DefaultDirectoryBrowserInfo } from './models/DefaultDirectoryBrowserInfo';
export type { Devices_ContentUploadHistory } from './models/Devices_ContentUploadHistory';
export type { Devices_DeviceInfo } from './models/Devices_DeviceInfo';
export type { Devices_DeviceOptions } from './models/Devices_DeviceOptions';
export type { Devices_LocalFileInfo } from './models/Devices_LocalFileInfo';
export { DisplayPreferences } from './models/DisplayPreferences';
export { Dlna_CodecProfile } from './models/Dlna_CodecProfile';
export { Dlna_ContainerProfile } from './models/Dlna_ContainerProfile';
export type { Dlna_DeviceIdentification } from './models/Dlna_DeviceIdentification';
export type { Dlna_DeviceProfile } from './models/Dlna_DeviceProfile';
export { Dlna_DeviceProfileInfo } from './models/Dlna_DeviceProfileInfo';
export { Dlna_DirectPlayProfile } from './models/Dlna_DirectPlayProfile';
export { Dlna_HttpHeaderInfo } from './models/Dlna_HttpHeaderInfo';
export { Dlna_ProfileCondition } from './models/Dlna_ProfileCondition';
export { Dlna_ResponseProfile } from './models/Dlna_ResponseProfile';
export { Dlna_SubtitleProfile } from './models/Dlna_SubtitleProfile';
export { Dlna_TranscodingProfile } from './models/Dlna_TranscodingProfile';
export type { Dlna_XmlAttribute } from './models/Dlna_XmlAttribute';
export { Emby_Notifications_Api_Notification } from './models/Emby_Notifications_Api_Notification';
export type { Emby_Notifications_Api_NotificationResult } from './models/Emby_Notifications_Api_NotificationResult';
export { Emby_Notifications_Api_NotificationsSummary } from './models/Emby_Notifications_Api_NotificationsSummary';
export type { EmbyReports_Api_Model_ReportGroup } from './models/EmbyReports_Api_Model_ReportGroup';
export { EmbyReports_Api_Model_ReportHeader } from './models/EmbyReports_Api_Model_ReportHeader';
export type { EmbyReports_Api_Model_ReportItem } from './models/EmbyReports_Api_Model_ReportItem';
export type { EmbyReports_Api_Model_ReportResult } from './models/EmbyReports_Api_Model_ReportResult';
export { EmbyReports_Api_Model_ReportRow } from './models/EmbyReports_Api_Model_ReportRow';
export type { ExternalIdInfo } from './models/ExternalIdInfo';
export type { ExternalUrl } from './models/ExternalUrl';
export type { ForgotPassword } from './models/ForgotPassword';
export type { ForgotPasswordPin } from './models/ForgotPasswordPin';
export type { GameSystemSummary } from './models/GameSystemSummary';
export type { GeneralCommand } from './models/GeneralCommand';
export type { Globalization_CountryInfo } from './models/Globalization_CountryInfo';
export type { Globalization_CultureDto } from './models/Globalization_CultureDto';
export type { Globalization_LocalizatonOption } from './models/Globalization_LocalizatonOption';
export type { ImageByNameInfo } from './models/ImageByNameInfo';
export { ImageInfo } from './models/ImageInfo';
export type { ImageProviderInfo } from './models/ImageProviderInfo';
export { IO_FileSystemEntryInfo } from './models/IO_FileSystemEntryInfo';
export type { ItemCounts } from './models/ItemCounts';
export type { Library_AddMediaPath } from './models/Library_AddMediaPath';
export type { Library_AddVirtualFolder } from './models/Library_AddVirtualFolder';
export type { Library_DeleteInfo } from './models/Library_DeleteInfo';
export type { Library_LibraryOptionInfo } from './models/Library_LibraryOptionInfo';
export type { Library_LibraryOptionsResult } from './models/Library_LibraryOptionsResult';
export type { Library_LibraryTypeOptions } from './models/Library_LibraryTypeOptions';
export type { Library_MediaFolder } from './models/Library_MediaFolder';
export type { Library_MediaUpdateInfo } from './models/Library_MediaUpdateInfo';
export type { Library_PostUpdatedMedia } from './models/Library_PostUpdatedMedia';
export type { Library_RenameVirtualFolder } from './models/Library_RenameVirtualFolder';
export type { Library_SubFolder } from './models/Library_SubFolder';
export type { Library_UpdateLibraryOptions } from './models/Library_UpdateLibraryOptions';
export type { Library_UpdateMediaPath } from './models/Library_UpdateMediaPath';
export type { LiveTv_GetPrograms } from './models/LiveTv_GetPrograms';
export type { LiveTv_GuideInfo } from './models/LiveTv_GuideInfo';
export type { LiveTv_ListingProviderTypeInfo } from './models/LiveTv_ListingProviderTypeInfo';
export type { LiveTv_ListingsProviderInfo } from './models/LiveTv_ListingsProviderInfo';
export type { LiveTv_LiveTvInfo } from './models/LiveTv_LiveTvInfo';
export { LiveTv_LiveTvServiceInfo } from './models/LiveTv_LiveTvServiceInfo';
export { LiveTv_SeriesTimerInfoDto } from './models/LiveTv_SeriesTimerInfoDto';
export type { LiveTv_SetChannelMapping } from './models/LiveTv_SetChannelMapping';
export { LiveTv_TimerInfoDto } from './models/LiveTv_TimerInfoDto';
export type { LiveTv_TunerHostInfo } from './models/LiveTv_TunerHostInfo';
export type { LogFile } from './models/LogFile';
export type { MediaEncoding_Codecs_Common_Types_BitRate } from './models/MediaEncoding_Codecs_Common_Types_BitRate';
export type { MediaEncoding_Codecs_Common_Types_LevelInformation } from './models/MediaEncoding_Codecs_Common_Types_LevelInformation';
export type { MediaEncoding_Codecs_Common_Types_ProfileInformation } from './models/MediaEncoding_Codecs_Common_Types_ProfileInformation';
export type { MediaEncoding_Codecs_Common_Types_ProfileLevelInformation } from './models/MediaEncoding_Codecs_Common_Types_ProfileLevelInformation';
export type { MediaEncoding_Codecs_Common_Types_Resolution } from './models/MediaEncoding_Codecs_Common_Types_Resolution';
export type { MediaEncoding_Codecs_Common_Types_ResolutionWithRate } from './models/MediaEncoding_Codecs_Common_Types_ResolutionWithRate';
export { MediaEncoding_Codecs_VideoCodecs_VideoCodecBase } from './models/MediaEncoding_Codecs_VideoCodecs_VideoCodecBase';
export type { MediaInfo_LiveStreamRequest } from './models/MediaInfo_LiveStreamRequest';
export type { MediaInfo_LiveStreamResponse } from './models/MediaInfo_LiveStreamResponse';
export type { MediaInfo_PlaybackInfoRequest } from './models/MediaInfo_PlaybackInfoRequest';
export { MediaInfo_PlaybackInfoResponse } from './models/MediaInfo_PlaybackInfoResponse';
export { MediaSourceInfo } from './models/MediaSourceInfo';
export { MediaStream } from './models/MediaStream';
export type { MediaUrl } from './models/MediaUrl';
export type { MetadataEditorInfo } from './models/MetadataEditorInfo';
export type { NameIdPair } from './models/NameIdPair';
export type { NameLongIdPair } from './models/NameLongIdPair';
export type { NameValuePair } from './models/NameValuePair';
export type { Net_EndPointInfo } from './models/Net_EndPointInfo';
export type { News_NewsItem } from './models/News_NewsItem';
export type { Notifications_NotificationTypeInfo } from './models/Notifications_NotificationTypeInfo';
export type { ParentalRating } from './models/ParentalRating';
export type { playback_reporting_Api_CustomQuery } from './models/playback_reporting_Api_CustomQuery';
export { PlaybackProgressInfo } from './models/PlaybackProgressInfo';
export { PlaybackStartInfo } from './models/PlaybackStartInfo';
export type { PlaybackStopInfo } from './models/PlaybackStopInfo';
export { PlayerStateInfo } from './models/PlayerStateInfo';
export type { Playlists_PlaylistCreationResult } from './models/Playlists_PlaylistCreationResult';
export type { PlayRequest } from './models/PlayRequest';
export { PlaystateRequest } from './models/PlaystateRequest';
export type { Plugins_PluginInfo } from './models/Plugins_PluginInfo';
export type { Providers_AlbumInfo } from './models/Providers_AlbumInfo';
export type { Providers_ArtistInfo } from './models/Providers_ArtistInfo';
export type { Providers_BookInfo } from './models/Providers_BookInfo';
export type { Providers_BoxSetInfo } from './models/Providers_BoxSetInfo';
export type { Providers_GameInfo } from './models/Providers_GameInfo';
export type { Providers_MovieInfo } from './models/Providers_MovieInfo';
export type { Providers_MusicVideoInfo } from './models/Providers_MusicVideoInfo';
export type { Providers_PersonLookupInfo } from './models/Providers_PersonLookupInfo';
export type { Providers_RemoteSearchQuery_Providers_AlbumInfo } from './models/Providers_RemoteSearchQuery_Providers_AlbumInfo';
export type { Providers_RemoteSearchQuery_Providers_ArtistInfo } from './models/Providers_RemoteSearchQuery_Providers_ArtistInfo';
export type { Providers_RemoteSearchQuery_Providers_BookInfo } from './models/Providers_RemoteSearchQuery_Providers_BookInfo';
export type { Providers_RemoteSearchQuery_Providers_BoxSetInfo } from './models/Providers_RemoteSearchQuery_Providers_BoxSetInfo';
export type { Providers_RemoteSearchQuery_Providers_GameInfo } from './models/Providers_RemoteSearchQuery_Providers_GameInfo';
export type { Providers_RemoteSearchQuery_Providers_MovieInfo } from './models/Providers_RemoteSearchQuery_Providers_MovieInfo';
export type { Providers_RemoteSearchQuery_Providers_MusicVideoInfo } from './models/Providers_RemoteSearchQuery_Providers_MusicVideoInfo';
export type { Providers_RemoteSearchQuery_Providers_PersonLookupInfo } from './models/Providers_RemoteSearchQuery_Providers_PersonLookupInfo';
export type { Providers_RemoteSearchQuery_Providers_SeriesInfo } from './models/Providers_RemoteSearchQuery_Providers_SeriesInfo';
export type { Providers_RemoteSearchQuery_Providers_TrailerInfo } from './models/Providers_RemoteSearchQuery_Providers_TrailerInfo';
export type { Providers_SeriesInfo } from './models/Providers_SeriesInfo';
export type { Providers_SongInfo } from './models/Providers_SongInfo';
export type { Providers_TrailerInfo } from './models/Providers_TrailerInfo';
export type { PublicSystemInfo } from './models/PublicSystemInfo';
export type { QueryFilters } from './models/QueryFilters';
export type { QueryFiltersLegacy } from './models/QueryFiltersLegacy';
export type { QueryResult_ActivityLogEntry } from './models/QueryResult_ActivityLogEntry';
export type { QueryResult_BaseItemDto } from './models/QueryResult_BaseItemDto';
export type { QueryResult_Devices_DeviceInfo } from './models/QueryResult_Devices_DeviceInfo';
export type { QueryResult_LiveTv_SeriesTimerInfoDto } from './models/QueryResult_LiveTv_SeriesTimerInfoDto';
export type { QueryResult_LiveTv_TimerInfoDto } from './models/QueryResult_LiveTv_TimerInfoDto';
export type { QueryResult_News_NewsItem } from './models/QueryResult_News_NewsItem';
export type { QueryResult_Sync_Model_SyncJobItem } from './models/QueryResult_Sync_Model_SyncJobItem';
export type { QueryResult_Sync_SyncJob } from './models/QueryResult_Sync_SyncJob';
export type { QueryResult_UserLibrary_OfficialRatingItem } from './models/QueryResult_UserLibrary_OfficialRatingItem';
export type { QueryResult_UserLibrary_TagItem } from './models/QueryResult_UserLibrary_TagItem';
export type { QueueItem } from './models/QueueItem';
export { RecommendationDto } from './models/RecommendationDto';
export { RemoteImageInfo } from './models/RemoteImageInfo';
export type { RemoteImageResult } from './models/RemoteImageResult';
export type { RemoteSearchResult } from './models/RemoteSearchResult';
export type { RemoteSubtitleInfo } from './models/RemoteSubtitleInfo';
export type { RokuMetadata_Api_ThumbnailInfo } from './models/RokuMetadata_Api_ThumbnailInfo';
export type { RokuMetadata_Api_ThumbnailSetInfo } from './models/RokuMetadata_Api_ThumbnailSetInfo';
export type { Search_SearchHint } from './models/Search_SearchHint';
export type { Search_SearchHintResult } from './models/Search_SearchHintResult';
export type { Session_SessionInfo } from './models/Session_SessionInfo';
export type { SessionUserInfo } from './models/SessionUserInfo';
export { Sync_Model_ItemFileInfo } from './models/Sync_Model_ItemFileInfo';
export type { Sync_Model_SyncDataRequest } from './models/Sync_Model_SyncDataRequest';
export type { Sync_Model_SyncDataResponse } from './models/Sync_Model_SyncDataResponse';
export type { Sync_Model_SyncDialogOptions } from './models/Sync_Model_SyncDialogOptions';
export type { Sync_Model_SyncedItem } from './models/Sync_Model_SyncedItem';
export { Sync_Model_SyncedItemProgress } from './models/Sync_Model_SyncedItemProgress';
export type { Sync_Model_SyncJobCreationResult } from './models/Sync_Model_SyncJobCreationResult';
export { Sync_Model_SyncJobItem } from './models/Sync_Model_SyncJobItem';
export { Sync_Model_SyncJobRequest } from './models/Sync_Model_SyncJobRequest';
export type { Sync_Model_SyncProfileOption } from './models/Sync_Model_SyncProfileOption';
export type { Sync_Model_SyncQualityOption } from './models/Sync_Model_SyncQualityOption';
export { Sync_SyncJob } from './models/Sync_SyncJob';
export type { Sync_SyncTarget } from './models/Sync_SyncTarget';
export { SystemInfo } from './models/SystemInfo';
export { Tasks_TaskInfo } from './models/Tasks_TaskInfo';
export { Tasks_TaskResult } from './models/Tasks_TaskResult';
export { Tasks_TaskTriggerInfo } from './models/Tasks_TaskTriggerInfo';
export type { ThemeMediaResult } from './models/ThemeMediaResult';
export type { TranscodingInfo } from './models/TranscodingInfo';
export type { Tuple_Double_Double } from './models/Tuple_Double_Double';
export { Updates_InstallationInfo } from './models/Updates_InstallationInfo';
export { Updates_PackageInfo } from './models/Updates_PackageInfo';
export { Updates_PackageVersionInfo } from './models/Updates_PackageVersionInfo';
export type { UpdateUserEasyPassword } from './models/UpdateUserEasyPassword';
export type { UpdateUserPassword } from './models/UpdateUserPassword';
export { UserDto } from './models/UserDto';
export type { UserItemDataDto } from './models/UserItemDataDto';
export type { UserLibrary_OfficialRatingItem } from './models/UserLibrary_OfficialRatingItem';
export type { UserLibrary_TagItem } from './models/UserLibrary_TagItem';
export { Users_ForgotPasswordResult } from './models/Users_ForgotPasswordResult';
export type { Users_PinRedeemResult } from './models/Users_PinRedeemResult';
export { Users_UserAction } from './models/Users_UserAction';
export type { Users_UserPolicy } from './models/Users_UserPolicy';
export type { ValidatePath } from './models/ValidatePath';
export type { VirtualFolderInfo } from './models/VirtualFolderInfo';
export type { WakeOnLanInfo } from './models/WakeOnLanInfo';
export { WebDashboard_Api_ConfigurationPageInfo } from './models/WebDashboard_Api_ConfigurationPageInfo';

export { ActivityLogServiceService } from './services/ActivityLogServiceService';
export { ArtistsServiceService } from './services/ArtistsServiceService';
export { AudioServiceService } from './services/AudioServiceService';
export { BifServiceService } from './services/BifServiceService';
export { BrandingServiceService } from './services/BrandingServiceService';
export { ChannelServiceService } from './services/ChannelServiceService';
export { CollectionServiceService } from './services/CollectionServiceService';
export { ConfigurationServiceService } from './services/ConfigurationServiceService';
export { ConnectServiceService } from './services/ConnectServiceService';
export { DashboardServiceService } from './services/DashboardServiceService';
export { DeviceServiceService } from './services/DeviceServiceService';
export { DisplayPreferencesServiceService } from './services/DisplayPreferencesServiceService';
export { DlnaServerServiceService } from './services/DlnaServerServiceService';
export { DlnaServiceService } from './services/DlnaServiceService';
export { DynamicHlsServiceService } from './services/DynamicHlsServiceService';
export { EncodingInfoServiceService } from './services/EncodingInfoServiceService';
export { EnvironmentServiceService } from './services/EnvironmentServiceService';
export { FilterServiceService } from './services/FilterServiceService';
export { GameGenresServiceService } from './services/GameGenresServiceService';
export { GamesServiceService } from './services/GamesServiceService';
export { GenresServiceService } from './services/GenresServiceService';
export { HlsSegmentServiceService } from './services/HlsSegmentServiceService';
export { ImageByNameServiceService } from './services/ImageByNameServiceService';
export { ImageServiceService } from './services/ImageServiceService';
export { InstantMixServiceService } from './services/InstantMixServiceService';
export { ItemLookupServiceService } from './services/ItemLookupServiceService';
export { ItemRefreshServiceService } from './services/ItemRefreshServiceService';
export { ItemsServiceService } from './services/ItemsServiceService';
export { ItemUpdateServiceService } from './services/ItemUpdateServiceService';
export { LibraryServiceService } from './services/LibraryServiceService';
export { LibraryStructureServiceService } from './services/LibraryStructureServiceService';
export { LiveTvServiceService } from './services/LiveTvServiceService';
export { LocalizationServiceService } from './services/LocalizationServiceService';
export { MediaInfoServiceService } from './services/MediaInfoServiceService';
export { MoviesServiceService } from './services/MoviesServiceService';
export { MusicGenresServiceService } from './services/MusicGenresServiceService';
export { NewsServiceService } from './services/NewsServiceService';
export { NotificationsServiceService } from './services/NotificationsServiceService';
export { OfficialRatingServiceService } from './services/OfficialRatingServiceService';
export { OpenApiServiceService } from './services/OpenApiServiceService';
export { PackageServiceService } from './services/PackageServiceService';
export { PersonsServiceService } from './services/PersonsServiceService';
export { PlaylistServiceService } from './services/PlaylistServiceService';
export { PlaystateServiceService } from './services/PlaystateServiceService';
export { PluginServiceService } from './services/PluginServiceService';
export { RemoteImageServiceService } from './services/RemoteImageServiceService';
export { ReportsServiceService } from './services/ReportsServiceService';
export { ScheduledTaskServiceService } from './services/ScheduledTaskServiceService';
export { SearchServiceService } from './services/SearchServiceService';
export { ServerApiEndpointsService } from './services/ServerApiEndpointsService';
export { SessionsServiceService } from './services/SessionsServiceService';
export { StudiosServiceService } from './services/StudiosServiceService';
export { SubtitleServiceService } from './services/SubtitleServiceService';
export { SuggestionsServiceService } from './services/SuggestionsServiceService';
export { SyncServiceService } from './services/SyncServiceService';
export { SystemServiceService } from './services/SystemServiceService';
export { TagServiceService } from './services/TagServiceService';
export { TrailersServiceService } from './services/TrailersServiceService';
export { TvShowsServiceService } from './services/TvShowsServiceService';
export { UniversalAudioServiceService } from './services/UniversalAudioServiceService';
export { UserActivityApiService } from './services/UserActivityApiService';
export { UserLibraryServiceService } from './services/UserLibraryServiceService';
export { UserServiceService } from './services/UserServiceService';
export { UserViewsServiceService } from './services/UserViewsServiceService';
export { VideoHlsServiceService } from './services/VideoHlsServiceService';
export { VideoServiceService } from './services/VideoServiceService';
export { VideosServiceService } from './services/VideosServiceService';
