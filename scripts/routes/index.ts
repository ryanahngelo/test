import { NativeRouter, NativeStackRouter, Route } from '@smartface/router';
import Application from '@smartface/native/application';

import System from '@smartface/native/device/system';
import MyBottomTabBarRouter from './tabbar';

const bottomTabBarRouter = new MyBottomTabBarRouter();

Application.on('backButtonPressed', () => {
    NativeRouter.getActiveRouter() ?.goBack();
});

const router = NativeRouter.of({
    path: '/',
    isRoot: true,
    routes: [
        bottomTabBarRouter.getRouter()
    ]
});

let listenerCounter = 0;
router.listen((location, action) => {
    if (System.isEmulator) {
        console.log(`[ROUTER] Counter: ${listenerCounter++} | location url: ${location.url}`);
    }
});

export default router;