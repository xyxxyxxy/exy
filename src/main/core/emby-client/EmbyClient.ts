import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { Interceptors } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';

import { ActivityLogServiceService } from './services.gen';
import { ArtistsServiceService } from './services.gen';
import { AudioServiceService } from './services.gen';
import { BackupApiService } from './services.gen';
import { BifServiceService } from './services.gen';
import { BrandingServiceService } from './services.gen';
import { ChannelServiceService } from './services.gen';
import { CodecParameterServiceService } from './services.gen';
import { CollectionServiceService } from './services.gen';
import { ConfigurationServiceService } from './services.gen';
import { ConnectServiceService } from './services.gen';
import { DeviceServiceService } from './services.gen';
import { DisplayPreferencesServiceService } from './services.gen';
import { DynamicHlsServiceService } from './services.gen';
import { EncodingInfoServiceService } from './services.gen';
import { EnvironmentServiceService } from './services.gen';
import { FeatureServiceService } from './services.gen';
import { FfmpegOptionsServiceService } from './services.gen';
import { GameGenresServiceService } from './services.gen';
import { GenericUiApiServiceService } from './services.gen';
import { GenresServiceService } from './services.gen';
import { HlsSegmentServiceService } from './services.gen';
import { ImageServiceService } from './services.gen';
import { InstantMixServiceService } from './services.gen';
import { ItemLookupServiceService } from './services.gen';
import { ItemRefreshServiceService } from './services.gen';
import { ItemsServiceService } from './services.gen';
import { ItemUpdateServiceService } from './services.gen';
import { LibraryServiceService } from './services.gen';
import { LibraryStructureServiceService } from './services.gen';
import { LiveStreamServiceService } from './services.gen';
import { LiveTvServiceService } from './services.gen';
import { LocalizationServiceService } from './services.gen';
import { MediaInfoServiceService } from './services.gen';
import { MoviesServiceService } from './services.gen';
import { MusicGenresServiceService } from './services.gen';
import { NotificationsServiceService } from './services.gen';
import { OfficialRatingServiceService } from './services.gen';
import { OpenApiServiceService } from './services.gen';
import { PackageServiceService } from './services.gen';
import { PersonsServiceService } from './services.gen';
import { PlaylistServiceService } from './services.gen';
import { PlaystateServiceService } from './services.gen';
import { PluginServiceService } from './services.gen';
import { RemoteImageServiceService } from './services.gen';
import { ScheduledTaskServiceService } from './services.gen';
import { SessionsServiceService } from './services.gen';
import { StudiosServiceService } from './services.gen';
import { SubtitleOptionsServiceService } from './services.gen';
import { SubtitleServiceService } from './services.gen';
import { SuggestionsServiceService } from './services.gen';
import { SyncServiceService } from './services.gen';
import { SystemServiceService } from './services.gen';
import { TagServiceService } from './services.gen';
import { ToneMapOptionsServiceService } from './services.gen';
import { TrailersServiceService } from './services.gen';
import { TvShowsServiceService } from './services.gen';
import { UniversalAudioServiceService } from './services.gen';
import { UserActivityApiService } from './services.gen';
import { UserLibraryServiceService } from './services.gen';
import { UserNotificationsServiceService } from './services.gen';
import { UserServiceService } from './services.gen';
import { UserViewsServiceService } from './services.gen';
import { VideoHlsServiceService } from './services.gen';
import { VideoServiceService } from './services.gen';
import { VideosServiceService } from './services.gen';
import { VirtualTvExportServiceService } from './services.gen';
import { WebAppServiceService } from './services.gen';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class EmbyClient {

	public readonly activityLogService: ActivityLogServiceService;
	public readonly artistsService: ArtistsServiceService;
	public readonly audioService: AudioServiceService;
	public readonly backupApi: BackupApiService;
	public readonly bifService: BifServiceService;
	public readonly brandingService: BrandingServiceService;
	public readonly channelService: ChannelServiceService;
	public readonly codecParameterService: CodecParameterServiceService;
	public readonly collectionService: CollectionServiceService;
	public readonly configurationService: ConfigurationServiceService;
	public readonly connectService: ConnectServiceService;
	public readonly deviceService: DeviceServiceService;
	public readonly displayPreferencesService: DisplayPreferencesServiceService;
	public readonly dynamicHlsService: DynamicHlsServiceService;
	public readonly encodingInfoService: EncodingInfoServiceService;
	public readonly environmentService: EnvironmentServiceService;
	public readonly featureService: FeatureServiceService;
	public readonly ffmpegOptionsService: FfmpegOptionsServiceService;
	public readonly gameGenresService: GameGenresServiceService;
	public readonly genericUiApiService: GenericUiApiServiceService;
	public readonly genresService: GenresServiceService;
	public readonly hlsSegmentService: HlsSegmentServiceService;
	public readonly imageService: ImageServiceService;
	public readonly instantMixService: InstantMixServiceService;
	public readonly itemLookupService: ItemLookupServiceService;
	public readonly itemRefreshService: ItemRefreshServiceService;
	public readonly itemsService: ItemsServiceService;
	public readonly itemUpdateService: ItemUpdateServiceService;
	public readonly libraryService: LibraryServiceService;
	public readonly libraryStructureService: LibraryStructureServiceService;
	public readonly liveStreamService: LiveStreamServiceService;
	public readonly liveTvService: LiveTvServiceService;
	public readonly localizationService: LocalizationServiceService;
	public readonly mediaInfoService: MediaInfoServiceService;
	public readonly moviesService: MoviesServiceService;
	public readonly musicGenresService: MusicGenresServiceService;
	public readonly notificationsService: NotificationsServiceService;
	public readonly officialRatingService: OfficialRatingServiceService;
	public readonly openApiService: OpenApiServiceService;
	public readonly packageService: PackageServiceService;
	public readonly personsService: PersonsServiceService;
	public readonly playlistService: PlaylistServiceService;
	public readonly playstateService: PlaystateServiceService;
	public readonly pluginService: PluginServiceService;
	public readonly remoteImageService: RemoteImageServiceService;
	public readonly scheduledTaskService: ScheduledTaskServiceService;
	public readonly sessionsService: SessionsServiceService;
	public readonly studiosService: StudiosServiceService;
	public readonly subtitleOptionsService: SubtitleOptionsServiceService;
	public readonly subtitleService: SubtitleServiceService;
	public readonly suggestionsService: SuggestionsServiceService;
	public readonly syncService: SyncServiceService;
	public readonly systemService: SystemServiceService;
	public readonly tagService: TagServiceService;
	public readonly toneMapOptionsService: ToneMapOptionsServiceService;
	public readonly trailersService: TrailersServiceService;
	public readonly tvShowsService: TvShowsServiceService;
	public readonly universalAudioService: UniversalAudioServiceService;
	public readonly userActivityApi: UserActivityApiService;
	public readonly userLibraryService: UserLibraryServiceService;
	public readonly userNotificationsService: UserNotificationsServiceService;
	public readonly userService: UserServiceService;
	public readonly userViewsService: UserViewsServiceService;
	public readonly videoHlsService: VideoHlsServiceService;
	public readonly videoService: VideoServiceService;
	public readonly videosService: VideosServiceService;
	public readonly virtualTvExportService: VirtualTvExportServiceService;
	public readonly webAppService: WebAppServiceService;

	public readonly request: BaseHttpRequest;

	constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
		this.request = new HttpRequest({
			BASE: config?.BASE ?? 'http://192.168.1.11:8096/emby',
			VERSION: config?.VERSION ?? '4.8.10.0',
			WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
			CREDENTIALS: config?.CREDENTIALS ?? 'include',
			TOKEN: config?.TOKEN,
			USERNAME: config?.USERNAME,
			PASSWORD: config?.PASSWORD,
			HEADERS: config?.HEADERS,
			ENCODE_PATH: config?.ENCODE_PATH,
			interceptors: {
				request: config?.interceptors?.request ?? new Interceptors(),
				response: config?.interceptors?.response ?? new Interceptors(),
      },
		});

		this.activityLogService = new ActivityLogServiceService(this.request);
		this.artistsService = new ArtistsServiceService(this.request);
		this.audioService = new AudioServiceService(this.request);
		this.backupApi = new BackupApiService(this.request);
		this.bifService = new BifServiceService(this.request);
		this.brandingService = new BrandingServiceService(this.request);
		this.channelService = new ChannelServiceService(this.request);
		this.codecParameterService = new CodecParameterServiceService(this.request);
		this.collectionService = new CollectionServiceService(this.request);
		this.configurationService = new ConfigurationServiceService(this.request);
		this.connectService = new ConnectServiceService(this.request);
		this.deviceService = new DeviceServiceService(this.request);
		this.displayPreferencesService = new DisplayPreferencesServiceService(this.request);
		this.dynamicHlsService = new DynamicHlsServiceService(this.request);
		this.encodingInfoService = new EncodingInfoServiceService(this.request);
		this.environmentService = new EnvironmentServiceService(this.request);
		this.featureService = new FeatureServiceService(this.request);
		this.ffmpegOptionsService = new FfmpegOptionsServiceService(this.request);
		this.gameGenresService = new GameGenresServiceService(this.request);
		this.genericUiApiService = new GenericUiApiServiceService(this.request);
		this.genresService = new GenresServiceService(this.request);
		this.hlsSegmentService = new HlsSegmentServiceService(this.request);
		this.imageService = new ImageServiceService(this.request);
		this.instantMixService = new InstantMixServiceService(this.request);
		this.itemLookupService = new ItemLookupServiceService(this.request);
		this.itemRefreshService = new ItemRefreshServiceService(this.request);
		this.itemsService = new ItemsServiceService(this.request);
		this.itemUpdateService = new ItemUpdateServiceService(this.request);
		this.libraryService = new LibraryServiceService(this.request);
		this.libraryStructureService = new LibraryStructureServiceService(this.request);
		this.liveStreamService = new LiveStreamServiceService(this.request);
		this.liveTvService = new LiveTvServiceService(this.request);
		this.localizationService = new LocalizationServiceService(this.request);
		this.mediaInfoService = new MediaInfoServiceService(this.request);
		this.moviesService = new MoviesServiceService(this.request);
		this.musicGenresService = new MusicGenresServiceService(this.request);
		this.notificationsService = new NotificationsServiceService(this.request);
		this.officialRatingService = new OfficialRatingServiceService(this.request);
		this.openApiService = new OpenApiServiceService(this.request);
		this.packageService = new PackageServiceService(this.request);
		this.personsService = new PersonsServiceService(this.request);
		this.playlistService = new PlaylistServiceService(this.request);
		this.playstateService = new PlaystateServiceService(this.request);
		this.pluginService = new PluginServiceService(this.request);
		this.remoteImageService = new RemoteImageServiceService(this.request);
		this.scheduledTaskService = new ScheduledTaskServiceService(this.request);
		this.sessionsService = new SessionsServiceService(this.request);
		this.studiosService = new StudiosServiceService(this.request);
		this.subtitleOptionsService = new SubtitleOptionsServiceService(this.request);
		this.subtitleService = new SubtitleServiceService(this.request);
		this.suggestionsService = new SuggestionsServiceService(this.request);
		this.syncService = new SyncServiceService(this.request);
		this.systemService = new SystemServiceService(this.request);
		this.tagService = new TagServiceService(this.request);
		this.toneMapOptionsService = new ToneMapOptionsServiceService(this.request);
		this.trailersService = new TrailersServiceService(this.request);
		this.tvShowsService = new TvShowsServiceService(this.request);
		this.universalAudioService = new UniversalAudioServiceService(this.request);
		this.userActivityApi = new UserActivityApiService(this.request);
		this.userLibraryService = new UserLibraryServiceService(this.request);
		this.userNotificationsService = new UserNotificationsServiceService(this.request);
		this.userService = new UserServiceService(this.request);
		this.userViewsService = new UserViewsServiceService(this.request);
		this.videoHlsService = new VideoHlsServiceService(this.request);
		this.videoService = new VideoServiceService(this.request);
		this.videosService = new VideosServiceService(this.request);
		this.virtualTvExportService = new VirtualTvExportServiceService(this.request);
		this.webAppService = new WebAppServiceService(this.request);
	}
}
