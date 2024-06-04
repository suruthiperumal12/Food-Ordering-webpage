
        //select overlay div tag
        var overlay=document.querySelector('.overlay')
        //select popup div tag
        var popup=document.querySelector('.popup')
        var orderbtn=document.querySelectorAll('.order-btn')
        //opening popup and overlay through click the order now button
        orderbtn.forEach(function(btn){
            btn.addEventListener('click',function(event){
            event.preventDefault()
            overlay.style.display='block';
            popup.style.display='block';
             // Get the food type associated with the clicked button
             var foodType = btn.previousElementSibling.previousElementSibling.innerText;
              // Update the input field with the food type
            document.getElementById('foodtype').value = foodType;
        });

        });
        //closing the popup and overlay to click submit button
        function closepopup(event){
             event.preventDefault();
             overlay.style.display='none';
             popup.style.display='none';
             var foodtype=document.getElementById('foodtype').value
             var quantity=document.getElementById('quantity').value
             alert('you Order of'+' '+quantity+' '+foodtype +' '+'has been Ordered successfully ')
             if(!foodType)
             //clearing the form
             document.getElementById('quantity').value = ''

        }
        
    