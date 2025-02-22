"use strict";
{
    const C3 = globalThis.C3;
    globalThis.C3.Plugins.Globals.Instance = class GlobalsInstance extends globalThis.ISDKInstanceBase {
        constructor() {
            super();

            const properties = this._getInitProperties();
        }
        _release() {
            super._release();
        }
    };
}