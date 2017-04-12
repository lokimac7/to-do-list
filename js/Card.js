function Card(id, name) {
	var self = this;

	this.id = id;
	this.name = name || 'Nie podano nazwy';
	this.$element = createCard(); 

  function createCard() {
  	var $card = $('<li>').addClass('card'),
  		$cardDescription = $('<p>').addClass('card-description').text(self.name),
  		$cardDelete = $('<button>').addClass('btn-delete1').text('x');

  $cardDelete.click(function(){
      self.removeCard();
  });

  $card.append($cardDelete)
    .append($cardDescription);
    return $card;
  }
}

Card.prototype = {
	removeCard: function() {
    var self = this;
    $.ajax({
      url: baseUrl + '/card/' + self.id,
      method: 'DELETE',
      success: function(){
        self.$element.remove();
      }
    });
}};


/* function Card(description) {
  var self = this;

  this.id = randomString();
  this.description = description;
  this.$element = createCard(); //

  function createCard() {
    // TWORZENIE KLOCKÓW
    var $card = $('<li>').addClass('card'),
      $cardDescription = $('<p>').addClass('card-description').text(self.description),
      $cardDelete = $('<button>').addClass('btn-delete1').text('x');

  // PRZYPIĘCIE ZDARZENIA
  $cardDelete.click(function(){
      self.removeCard();
  });

  // SKŁADANIE I ZWRACANIE KARTY
  $card.append($cardDelete)
      .append($cardDescription);

    return $card;
  }
}

Card.prototype = {
  removeCard: function() {
    this.$element.remove();
  }
}; */