var board = {
    name: 'Tablica Kanban',
    addColumn: function(column) {
      	this.$element.append(column.$element);
      	initSortable();
    },
    $element: $('#board .column-container')
};

function initSortable() {
    $('.column-list').sortable({
      	connectWith: '.column-list',
      	placeholder: 'card-placeholder'
    }).disableSelection();
}

$('.create-column').click(function() {
    var columnName = prompt('Wpisz nazwę kolumny');
    $.ajax({
      url: baseUrl + '/column',
      method: 'POST',
      data: {
            name: columnName
      },
      success: function(response){
        var column = new Column(response.id, columnName);
        board.createColumn(column);
      }
    });
});