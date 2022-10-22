import { NativeStackRouter, Route } from '@smartface/router';
import GeneratedBottomTabbar from 'generated/router/BottomTabbar';

import Page1 from 'pages/page1';
import Page2 from 'pages/page2';
import Page3 from 'pages/page3';

class $BottomTabBar extends GeneratedBottomTabbar {

    getRouter() {
        return this.bottomTabbarRouter;
    }

    constructor() {
        super({
            path: '/btb',
            to: '/btb/tab1/page1',
            routes: [
                // tab1
                NativeStackRouter.of({
                    path: '/btb/tab1',
                    to: '/btb/tab1/page1',
                    routes: [
                        Route.of<Page1>({
                            path: `/btb/tab1/page1`,
                            build(router, route) {
                                return new Page1(router, route);
                            },
                            headerBarParams: () => ({
                                visible: true
                            })
                        })
                    ]
                }),
                NativeStackRouter.of({
                    path: '/btb/tab2',
                    to: '/btb/tab2/page2',
                    routes: [
                        Route.of<Page2>({
                            path: `/btb/tab2/page2`,
                            build(router, route) {
                                return new Page2(router, route);
                            },
                            headerBarParams: () => ({
                                visible: true
                            })
                        })
                    ]
                }),
                NativeStackRouter.of({
                    path: '/btb/tab3',
                    to: '/btb/tab3/page3',
                    routes: [
                        Route.of<Page3>({
                            path: `/btb/tab3/page3`,
                            build(router, route) {
                                return new Page3(router, route);
                            },
                            headerBarParams: () => ({
                                visible: true
                            })
                        })
                    ]
                }),
                
                NativeStackRouter.of({
                    path: '/btb/tab4',
                    to: '/btb/tab4/page3',
                    routes: [
                        Route.of<Page3>({
                            path: `/btb/tab4/page3`,
                            build(router, route) {
                                return new Page3(router, route);
                            },
                            headerBarParams: () => ({
                                visible: true
                            })
                        })
                    ]
                })
            ]
        })
    }
}

export default $BottomTabBar;