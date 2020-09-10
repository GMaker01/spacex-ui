export interface IResponse {
    mission_name: string;
    flight_number: boolean;
    links: {
        mission_patch_small: string,
        mission_patch: string
    };
    mission_id: Array<string>;
    launch_success: boolean;
    rocket: {
        first_stage: {
            cores: Array<{ land_success: boolean }>
        }
    };
}
