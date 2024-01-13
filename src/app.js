export class App {
    configureRouter(config, router) {
        config.title = 'Aurelia';
        config.map([
            {
                route: ['', 'fuel-calc'],
                name: 'fuel-calc',
                moduleId: PLATFORM.moduleName('./fuel-calc'),
                nav: true,
                title: 'Fuel Calc'
            },
            {route: 'trips', name: 'trips', moduleId: PLATFORM.moduleName('./trips'), nav: true, title: 'Trips'}
        ]);

        this.router = router;
    }
}
