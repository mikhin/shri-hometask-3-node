declare function b(basic: string, props?: object, mods?: object): string;

declare type CallbackFunction = () => void;

declare type onChangeFunction = (prop: string) => void;

declare type onSubmitFunction = (event: React.FormEvent<HTMLFormElement>) => void;

declare type SettingsType = {
    repoName?: string,
}

declare type BuildType = {
    id: string,
    buildNumber: string,
    commitMessage: string,
    commitHash: string,
    branchName: string,
    authorName: string,
    status: string,
    start: string,
    duration: string,
}

declare type CommitType = {
    datetime?: Date,
    id?: string,
    author?: string,
    branch?: string,
    title?: string,
    hash?: string,
    url?: string,
    duration?: string,
    status?: string,
}

declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module 'react-js-loading-progress-bar';

