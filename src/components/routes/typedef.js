// @flow

export type StatItem = {
    clientHeight: number,
    clientWidth: number,
    devicePixelRation: number,
    screenHeight: number,
    screenWidth: number,
    sessionEndDate: string,
    sessionStartDate: string,
    userAgent: string,
    windowHeight: number,
    windowWidth: number,
    _id: {
        $oid: string
    }
};

export type UsageStatisticsState = {
    pending: boolean,
    loaded: boolean,
    data: Array<StatItem>
};