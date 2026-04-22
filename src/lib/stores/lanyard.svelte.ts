import { writable } from 'svelte/store';

export type Profile = {
	active_on_discord_mobile: boolean;
	active_on_discord_desktop: boolean;
	active_on_discord_web: boolean;
	listening_to_spotify: boolean;
	kv: KV;
	spotify: Spotify | null;
	discord_user: DiscordUser;
	discord_status: DiscordStatus;
	activities: Activity[];
};

export type Activity = {
	type: number;
	timestamps?: {
		start?: number;
		end?: number;
	};
	sync_id?: string;
	state?: string;
	session_id?: string;
	party?: {
		id: string;
	};
	name?: string;
	id: string;
	flags?: number;
	details?: string;
	created_at?: number;
	assets?: {
		large_text?: string;
		large_image?: string;
		small_text?: string;
		small_image?: string;
	};
	application_id?: string;
};

export type DiscordUser = {
	username: string;
	public_flags: number;
	id: string;
	discriminator: string;
	avatar: string;
	avatar_decoration: string | null;
	bot: boolean;
	display_name: string | null;
};

export type Spotify = {
	track_id: string;
	timestamps: {
		start: number;
		end: number;
	};
	song: string;
	artist: string;
	album_art_url: string;
	album: string;
};

export type DiscordStatus = 'online' | 'idle' | 'dnd' | 'offline';

export type KV = {
	[key: string]: string;
};

export const lanyard = writable<Profile>();

let heartbeat: NodeJS.Timeout;
const socket = new WebSocket('wss://api.lanyard.rest/socket');

socket.onopen = () => {
	console.log('WebSocket has been opened!');
	socket.send(
		JSON.stringify({
			op: 2,
			d: {
				subscribe_to_id: '1200883342527180830'
			}
		})
	);

	heartbeat = setInterval(() => {
		socket.send(
			JSON.stringify({
				op: 3
			})
		);
	}, 1000 * 30);
};

socket.onmessage = ({ data }) => {
	const { t, d } = JSON.parse(data);

	if (t === 'INIT_STATE' || t === 'PRESENCE_UPDATE') lanyard.set(d);
};

socket.onclose = () => {
	console.log('WebSocket has been closed!');
	clearInterval(heartbeat);
};
