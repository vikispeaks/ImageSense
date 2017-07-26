angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('philipsImageSense.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('philipsImageSense.reports', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reports.html',
        controller: 'reportsCtrl'
      }
    }
  })

  .state('philipsImageSense.consultations', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/consultations.html',
        controller: 'consultationsCtrl'
      }
    }
  })

  .state('philipsImageSense', {
    url: '/side-menu21',
    templateUrl: 'templates/philipsImageSense.html',
    controller: 'philipsImageSenseCtrl'
  })

  .state('philipsImageSense.healthWellbeing', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/healthWellbeing.html',
        controller: 'healthWellbeingCtrl'
      }
    }
  })

  .state('philipsImageSense.login', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('philipsImageSense.signup', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('philipsImageSense.additionalDetails', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/additionalDetails.html',
        controller: 'additionalDetailsCtrl'
      }
    }
  })

  .state('philipsImageSense.cameraGalleryLandingPage', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cameraGalleryLandingPage.html',
        controller: 'cameraGalleryLandingPageCtrl'
      }
    }
  })

  .state('philipsImageSense.reportDetail', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reportDetail.html',
        controller: 'reportDetailCtrl'
      }
    }
  })

  .state('philipsImageSense.consultantList', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/consultantList.html',
        controller: 'consultantListCtrl'
      }
    }
  })

  .state('philipsImageSense.bookAppointment', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bookAppointment.html',
        controller: 'bookAppointmentCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page5')


});