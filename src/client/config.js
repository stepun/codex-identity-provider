define([ // -------------------------------------------------------------------
  //
  // PATHS
  //
  
  // Initializers
  'modules/app/library/initializers/registry',
  'modules/app/library/initializers/layout',
  'modules/app/library/initializers/history',

  // Modules
  'modules/home/main',
  'modules/ui/main'

], function( // ----------------------------------------------------------------
  //
  // REFERENCES
  //
  
  // Initializers
  initRegistry,
  initLayout,
  initHistory,

  // Modules
  HomeModule,
  UIModule

) { return { // ----------------------------------------------------------------
  //
  // CONFIGURATION
  // 
  
  bootstrap: {
    debug: true,
    initializers: [
      initRegistry({

      }),
      initLayout({
        viewClass: HomeModule.StandardLayout
      }),
      initHistory({
        pushState: true,
        routers: [
          HomeModule.IndexRouter
        ]
      })
    ]
  },
  modules: {
    Home: {
      debug: true
    },
    UI: {
      debug: true
    }
  }
  
  
}}); // ------------------------------------------------------------------------