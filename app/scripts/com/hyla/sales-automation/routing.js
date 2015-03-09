angular.module('hyla-sales-automation').config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/welcome");
  //
  // Now set up the states
  $stateProvider
    .state('welcome', {
      url: "/welcome",
      templateUrl: "templates/com/hyla/sales-automation/welcome.html"
    }).
    state('bids', {
      url: "/bids",
      controller: 'BidPageController',
      templateUrl: "templates/com/hyla/sales-automation/bids.html"
    }).
    state('tracking', {
      url: "/tracking",
      controller: 'TrackingPageController',
      templateUrl: "templates/com/hyla/sales-automation/tracking.html"
    }).
    state('customers', {
      url: "/customers",
      // controller: 'CustomersPageController',
      templateUrl: "templates/com/hyla/sales-automation/customers.html"
    }).
    state('bid-summary', {
      url: "/bid-summary",
      // controller: 'CustomersPageController',
      templateUrl: "templates/com/hyla/sales-automation/bid-summary.html"
    }).
    state('design-styles', {
      url: "/design-styles",
      // controller: 'CustomersPageController',
      templateUrl: "templates/com/hyla/sales-automation/design-styles.html"
    }).
    state('grid', {
      url: "/grid",
      // controller: 'CustomersPageController',
      templateUrl: "templates/com/hyla/sales-automation/grid.html"
    }).
    state('template', {
      url: "/template",
      // controller: 'CustomersPageController',
      templateUrl: "templates/com/hyla/sales-automation/template.html"
    }).
    state('login', {
      url: "/login",
      // controller: 'CustomersPageController',
      templateUrl: "templates/com/hyla/sales-automation/account/login.html"
    }).
    state('upload-bids', {
      url: "/upload-bids",
      // controller: 'CustomersPageController',
      templateUrl: "templates/com/hyla/sales-automation/upload-bids.html"
    }).
    state('account', {
      url: "/account",
      controller: 'AccountPageController',
      templateUrl: "templates/com/hyla/sales-automation/account.html"
    })
    // .state('dashboard', {
    //   url: "/dashboard",
    //   controller: 'DashboardPageController',
    //   templateUrl: "templates/com/hyla/sales-automation/dashboard.html"
    // })
    // .state('disposition', {
    //   url: "/disposition",
    //   controller: 'DispositionPageController',
    //   templateUrl: "templates/com/hyla/sales-automation/disposition.html"
    // })
    // .state('agreements', {
    //   url: "/agreements",
    //   controller: 'AgreementsPageController',
    //   templateUrl: "templates/com/hyla/sales-automation/agreements.html"
    // })
    // .state('inventory', {
    //   url: "/inventory",
    //   controller: 'InventoryPageController',
    //   templateUrl: "templates/com/hyla/sales-automation/inventory.html"
    // })
    .state('logout', {
      url: "/logout",
      templateUrl: "templates/com/hyla/sales-automation/welcome.html"
    });
});