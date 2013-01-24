define([ // -------------------------------------------------------------------
  //
  // PATHS
  //
  
  // Initializers
  'modules/application/components/initializers/registry',
  'modules/application/components/initializers/layout',
  'modules/application/components/initializers/history',

  // Routers
  'modules/application/routers/home'

], function( // ----------------------------------------------------------------
  //
  // REFERENCES
  //
  
  // Initializers
  initRegistry,
  initLayout,
  initHistory,

  // Routers
  HomeRouter

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
    routers: {
      home: HomeRouter
    }
  }
  

}}); // ------------------------------------------------------------------------