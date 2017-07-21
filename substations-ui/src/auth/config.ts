'use strict';
class Config {
    constructor(public hostName: string, public clientUrl: string) {
        this.authRoot = `${this.hostName}/`;
        this.authBaseUrl = `${this.authRoot}`;
        this.authCallBackUrl = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
        this.authFrameCallBackUrl = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/silent_renew.html`

    }

    public authRoot: string;
    public authBaseUrl: string;
    public authCallBackUrl: string;
    public authFrameCallBackUrl: string;
    public clientId = 'substations-ui';
    public appName = 'substations-ui';
    public env = 'Dev';
    public build = '1.0.0.0';
}
export default new Config('http://localhost:44333', window.location.href);

