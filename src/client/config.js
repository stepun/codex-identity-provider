define([ // -------------------------------------------------------------------
  //
  // PATHS
  //
  
  // Initializers
  'modules/application/components/initializers/registry',
  'modules/application/components/initializers/layout',
  'modules/application/components/initializers/history',

  // Modules
  'modules/application/home/main',
  'modules/application/ui/main'

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

  layout: {},
  
  history: {
    pushState: true,
    routers: [
      HomeModule.Router
    ]
  }
  

}}); // ------------------------------------------------------------------------