function Card(id, name) {
	var self = this;

	this.id = id;
	this.name = name;
	this.$element = createCard(); //

function createCard() {
	// TWORZENIE KLOCKÓW
	var $card = $('<li>').addClass('card'),
		$cardDescription = $('<p>').addClass('card-description').text(self.name),
		$card_ok = $('<button>').addClass('btn-ok').text('v'),
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
	    var self = this;
	    $.ajax({
	      url: baseUrl + '/card/' + self.id,
	      method: 'DELETE',
	      success: function(){
	        self.element.remove();
	      }
	    });
	}
};