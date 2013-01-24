define([ // -------------------------------------------------------------------
  //
  // PATHS
  //
  
  // Initializers
  'modules/application/components/initializers/registry',
  'modules/application/components/initializers/layout',
  'modules/application/components/initializers/history',

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