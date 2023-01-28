$(document).ready(function(){
   var form = $('#form_buying_product');
   console.log(form);
   console.log('123');
   $("#submit-btn-product").click(function(e){
      e.preventDefault();
      console.log('14');
      var nmb = $ ('#quanty').val();
      console.log(nmb);
      var submit_btn = $('#submit-btn-product');
      var product_id = submit_btn.data("product-id");
      var product_name = submit_btn.data("product-name");
      console.log(product_id);
      console.log(product_name);
})});
