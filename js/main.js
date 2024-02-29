$(document).ready(function() {
    // Function to open the fullscreen overlay when a game item is clicked
    $('.game-item').click(function() {
      $('.overlay-fullscreen').addClass('active');
    });
  
    // Function to close the fullscreen overlay when the close button is clicked
    $('.close-overlay').click(function() {
      $('.overlay-fullscreen').removeClass('active');
    });
  
    // Function to close the fullscreen overlay when clicking outside the content area
    $('.overlay-fullscreen').click(function(event) {
      if ($(event.target).hasClass('overlay-fullscreen')) {
        $('.overlay-fullscreen').removeClass('active');
      }
    });
  
    // Prevent clicks within the overlay content from closing the overlay
    $('.overlay-content').click(function(event) {
      event.stopPropagation();
    });

    $('.open-modal').click(function() {
        var targetModal = $(this).data('target');
        $(targetModal).modal('show');
      });

    $('.game-item').click(function() {
        var targetModal = $(this).data('target');
        $(targetModal).modal('show');
      });

    $('#gameModal1').on('show.bs.modal', function (e) {
        $('#youtubeVideo1').html('<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/5rnauqfwQIQ?si=47KEm4R6qMVgh45M&rel=0" allowfullscreen></iframe>');
      });
    
    $('#gameModal2').on('show.bs.modal', function (e) {
        $('#youtubeVideo2').html('<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/iRT4bUl2iFA?si=wEkYkXc83LbWLuaB&rel=0" allowfullscreen></iframe>');
      });

    $('#gameModal3').on('show.bs.modal', function (e) {
        $('#youtubeVideo3').html('<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Frazx5zxScE?si=8ZdXKqLTwW60tcIb&rel=0" allowfullscreen></iframe>');
      });
  });
  