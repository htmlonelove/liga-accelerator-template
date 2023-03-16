export const useJQuery = () => {

  jQuery(function ($) {
    $("#phone").mask("+7 (999) 999-9999");
    $("#user-phone").mask("+7 (999) 999-9999");
  });
};
