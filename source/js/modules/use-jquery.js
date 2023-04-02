export const useJQuery = () => {

  jQuery(function ($) {
    $("#phone").mask("+7 (999) 999-9999");
    $("#userphone").mask("+7 (999) 999-9999");
  });
};

