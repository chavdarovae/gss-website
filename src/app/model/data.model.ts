export class PersonelInfo {
    constructor(
        public department?: string,
        public name?: string,
        public email?: string,
        public phone?: string,
        public phoneSuffix?: string,
        public hotline?: string,
    ) { }
}

export class BranchInfo {
    constructor(
        public address?: string,
        public city?: string,
        public branchLeader?: string,
        public email?: string,
        public phone?: string,
        public fax?: string,
    ) { }
}
export class PositionInfo {
    constructor(
        public title?: string,
        public location?: string,
        public description?: string,
        public tasks?: string[],
        public requirements?: string[],
        public offer?: string,
        public other?: string,
        public partnerName?: string,
        public partnerMobile?: string,
        public partnerCity?: string,
        public partnerStreet?: string,
        public partnerPhone?: string,
        public partnerEmail?: string
    ) { }
}

export enum Language {
    EN = 'en',
    DE = 'de',
    FR = 'fr',
    IT = 'it',
    PL = 'pl'
}
