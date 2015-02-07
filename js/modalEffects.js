var ModalEffects = (function() {

	function init() {

		var overlay = document.querySelector( '.md-overlay' );

		[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
				close = modal.querySelector( '.md-close' );

			function removeModal( hasPerspective ) {
				$(modal).removeClass("md-show");

				if( hasPerspective ) {
					$(document.documentElement).removeClass("md-perspective");
				}
			}

			function removeModalHandler() {
				removeModal( $(el).hasClass("md-setperspective") ); 
			}

			el.addEventListener( 'click', function( ev ) {
				
				$(modal).addClass("md-show" );
				overlay.removeEventListener( 'click', removeModalHandler );
				overlay.addEventListener( 'click', removeModalHandler );

				if( $(el).hasClass("md-setperspective") ) {
					setTimeout( function() {
						$(document.documentElement).addClass("md-perspective");
					}, 25 );
				}
			});

			close.addEventListener( 'click', function( ev ) {
				ev.stopPropagation();
				removeModalHandler();
			});

		} );

	}

	init();

})();