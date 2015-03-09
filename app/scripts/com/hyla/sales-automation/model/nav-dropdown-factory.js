angular.module('hyla-sales-automation').factory('NavDropdown', [function() {

    return function() {

    var self = this;

    self.activate = function() {
      var navDropdown = $('nav.dropdown');

      navDropdown.each(function() {

        var nav      = $(this),
          trigger  = nav.children('.current'),
          dropdown = nav.children('ul');

        trigger.unbind();

        // Show dropdown
        trigger.on('click.navDropdown', function(e) {
          e.preventDefault();
          e.stopPropagation();

          // Hide any other dropdowns that are showing
          if (!dropdown.is(':visible'))
            hideAllDropdowns();

          dropdown.fadeToggle(250);

          // Hide dropdown if user clicks anywhere else
          $('body').on('click.navDropdown', function() {
            dropdown.fadeOut(250);
            $('body').off('click.navDropdown');
          });
        });

      });
    };

  }

}]);