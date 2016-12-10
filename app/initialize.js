document.addEventListener('DOMContentLoaded', () => {
  var menu_list = document.querySelector('.xbt-NavigationList');

  document.querySelector('[data-menu]').addEventListener('click', function(e) {
              e.preventDefault();
              menu_list.classList.toggle('active');
  });
})
