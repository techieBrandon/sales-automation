angular.module('hyla-sales-automation').factory('Drawer', [function() {

    return function() {
    var self = this;

    self.activate = function() {

      $('.drawers').each(function() {

        var o = $(this),
        drawer = o.find('.drawer'),
        odds   = o.find('.drawer:odd').addClass('even');
        
        drawer.unbind();

        // Open/close drawers
        drawer.click(function(e) {

          e.preventDefault();

          var i = $(this).toggleClass('active'),
          content = i.next('.drawer-content').slideToggle().toggleClass('active');

        });

        // Correct widths for sorting headers
        var sorting = o.prev('table.sorting'),
          tableWidth = sorting.width(),
          cellWidths = [];

        drawer.first().find('table').find('td').each(function() {
          cellWidths.push($(this).width());
        });

        // Set width on cells
        var cell = 0;
        sorting.find('tr:first td > span').each(function() {
          var i = $(this),
            w = cellWidths[cell];
          i.width(w + 3);
          cell++;
        });

      });
    };
  };

}]);