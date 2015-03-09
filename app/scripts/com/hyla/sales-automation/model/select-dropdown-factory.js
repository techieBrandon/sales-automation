angular.module('hyla-sales-automation').factory('SelectDropdown', [function() {

    return function() {
    var self = this;

    self.activate = function(element) {
      element.find('.select-dropdown').each(function() {

        var dropdown = $(this),
          selected = dropdown.find('.selected'),
          display  = selected.find('.value'),
          value    = dropdown.find('input.select-value'),
          list     = dropdown.find('ul'),
          options  = list.children('li');

        // Show/hide the options
        selected.click(function(e) {
          e.stopPropagation();
          e.preventDefault();
          list.slideToggle('fast');

          // Hide dropdown if user clicks anywhere else
          $('body').on('click.selectDropdown', function() {
            list.slideUp('fast');
            $('body').off('click.selectDropdown');
          });
        });

        // When an option is selected
        options.click(function(e) {
          e.stopPropagation();
          e.preventDefault();

          var clicked     = $(this),
            optionValue = clicked.attr('data-value');

          hideAllDropdowns();

          // Reset states
          if (!clicked.hasClass('active'))
          {
            options.removeClass('active');
            clicked.addClass('active');
          }
          else
          {
            // Close the dropdown
            list.slideUp('fast');
            return false;
          }

          // Update values
          display.text(clicked.text());
          value.val(optionValue);

          // Close the dropdown
          list.slideUp('fast');
        });

      });
    };
  };
}]);