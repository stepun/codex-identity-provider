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
    initializers: [
      initRegistry,
      initLayout,
      initHistory
    ]
  },

  registry: {},

  layout: {
    viewClass: HomeModule.StandardLayout
  },
  
  history: {
    pushState: true,
    routers: [
      HomeModule.IndexRouter
    ]
  }
  

}}); // ------------------------------------------------------------------------