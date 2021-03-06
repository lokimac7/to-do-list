function Column(id, name) {
  var self = this; 

  this.id = id;
  this.name = name || 'Nie podano nazwy';
  this.$element = createColumn();

  function createColumn() {
  var $column = $('<div>').addClass('column'),
    $columnTitle = $('<h2>').addClass('column-title').text(self.name),
    $columnCardList = $('<ul>').addClass('column-list'),
    $columnDelete = $('<button>').addClass('btn-delete').text('x'),
    $columnAddCard = $('<button>').addClass('add-card').text('Dodaj kartę');

  $columnDelete.click(function() {
    self.removeColumn();
  });
  $columnAddCard.click(function(event) {
    var cardName = prompt("Wpisz nazwę karty");
    event.preventDefault();
      $.ajax({
        url: baseUrl + '/card',
        method: 'POST',
        data: {
        name: cardName,
        bootcamp_kanban_column_id: self.id
        },
        success: function(response) {
            var card = new Card(response.id, cardName);
            self.createCard(card);
        }
      });
  });

  $column.append($columnTitle)
    .append($columnDelete)
    .append($columnAddCard)
    .append($columnCardList);
    return $column;
  }
}

Column.prototype = {
  createCard: function(card) {
    this.$element.children('ul').append(card.$element);
  },
  removeColumn: function() {
    var self = this;
      $.ajax({
        url: baseUrl + '/column/' + self.id,
        method: 'DELETE',
        success: function(response){
          self.$element.remove();
        }
      });
  }
};

/* function Column(name) {
    var self = this; // przyda się dla funkcji zagnieżdżonych

    this.id = randomString();
    this.name = name;
    this.$element = createColumn();

    function createColumn() {
// TWORZENIE ELEMENTÓW SKŁADOWYCH KOLUMNY
    var $column = $('<div>').addClass('column'),
      $columnTitle = $('<h2>').addClass('column-title').text(self.name),
      $columnCardList = $('<ul>').addClass('column-list'),
      $columnDelete = $('<button>').addClass('btn-delete').text('x'),
      $columnAddCard = $('<button>').addClass('add-card').text('Dodaj kartę');

// PODPINANIE ODPOWIEDNICH ZDARZEŃ
  $columnDelete.click(function() {
      self.removeColumn();
  });
    $columnAddCard.click(function(event) {
      self.addCard(new Card(prompt("Wpisz nazwę karty")));
    });

// KONSTRUOWANIE ELEMENTU KOLUMNY
    $column.append($columnTitle)
      .append($columnDelete)
      .append($columnAddCard)
      .append($columnCardList);

// ZWRACANIE STWORZONEJ  KOLUMNY
    return $column;
  }

}

Column.prototype = {
    addCard: function(card) {
        this.$element.children('ul').append(card.$element);
    },
    removeColumn: function() {
        this.$element.remove();
    }
}; */