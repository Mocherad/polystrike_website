export interface SteamUserSummaries {
    response: {
        players: SteamUser[]
    };
}

export interface SteamUser {
    steamid: string;
    communityvisibilitystate: number;
    profilestate: number;
    personaname: string;
    profileurl: string;
    avatar: string;
    avatarmedium: string;
    avatarfull: string;
    personastate: number;
    primaryclanid: string;
    timecreated: number;
    personastateflags: number;
}
