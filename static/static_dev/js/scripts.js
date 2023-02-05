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
      var product_price = submit_btn.data("product-price");
      var product_img = submit_btn.data("product-img");
      console.log(product_id);
      console.log(product_name);
      console.log(product_price);
      console.log(product_img);

      var data = {};
      data.product_id = product_id;
      data.nmb=nmb;
      var csrf_token = $('#form_buying_product [name="csrfmiddlewaretoken"]').val();
      data["csrfmiddlewaretoken"] = csrf_token;
      var url = form.attr("action");

   console.log(data)
      $.ajax({
         url: url,
         type: 'POST',
         data: data,
         cache: true,
         success: function (data) {
            console.log("OK");
            console.log(data.products_total_nmb);
            if (data.products_total_nmb){
               $('#basket-total-nmb').text('('+data.products_total_nmb+')');
            }
         },
         error: function (){
            console.log("error")
         }
      })


      $('.basket-item ul').append('<li>'+product_name+', '+ nmb + 'quantity '+ 'for ' + product_price +'uah    ' +
          '<a class="delete-item" href="">x</a>'+
          '</li>');
})
   
   function delclass(){
      $('.basket-item').removeClass ('invisible');
   };

   $('.basket-container').on('click ',function (e) {
      e.preventDefault();
      delclass();
   });

   $('.basket-container').on('mouseover ',function (e) {
      e.preventDefault();
      delclass();
   });

   // $('.basket-container').on('mouseout ',function (e) {
   //    e.preventDefault();
   //    delclass();
   // })

   $(document).on('click',('.delete-item'),function (e) {
      e.preventDefault();
      $(this).closest('li').remove()

   })
});
