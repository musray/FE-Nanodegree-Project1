$( document ).ready( function () {

  $( '#submitButton' ).click( function (e) {
    if($( '#inputUserName' ).val() == '') {
      e.preventDefault();
      $( '#inputNameFormGroup' ).addClass( 'has-error' );
    } 
    else if( $( '#inputPassword' ).val() == '' ) {
      e.preventDefault();
      $( '#inputPasswordGroup' ).addClass( 'has-error' );
    }
    else if( $( '#repeatPassword' ).val() == '' ) {
      e.preventDefault();
      $( '#repeatPasswordGroup' ).addClass( 'has-error' )
    }
    else if( $( '#inputPassword' ).val() != $( '#repeatPassword' ).val() ) {
      e.preventDefault();
      $( '#inputPasswordGroup' ).addClass( 'has-error' );
      $( '#repeatPasswordGroup' ).addClass( 'has-error' );
      $( '#placeForAlert' ).addClass( 'alert alert-warning alert-dismissable' );
      $( '#placeForAlert' ).html( '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">x</button> Password and Repeat Password must be the same' );
    }
    else {
      $( '#loginForm' ).submit();
    }
  });

})
