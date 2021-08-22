/* Hover color change image product */
jQuery(document).ready(function($) {
  jQuery('.engoj_select_color a').each(function(){
    jQuery(this).on("mouseover",function(){
      var engoImage = jQuery(this).data('engojvariant-img');
      jQuery(this).parents('.engoj_grid_parent').find('.engoj_find_img img').attr({ src: engoImage }); 
      return false;
    });
  });
});