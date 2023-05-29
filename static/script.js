$(document).ready(function(){
    console.log('Ready')

    let date_time = new Date()
    let current_date = date_time.toLocaleDateString()

    $('#date').text("Date : " + current_date)



    $('#button').click(function(){
        



        //  get the text value from the textarea using the 'val()' method
        let review = $('#text').val()
        console.log(review)

        //  Convert it to JS object.
        //  Provide a 'key' here and in write the same in app.py file as well to extract data
        let input_text = {'customer_review' : review}
        console.log(input_text)

        

        //  ajax request
        $.ajax({


            //  type of web request
            url : "/predict",
            type : "POST",
            data : JSON.stringify(input_text),
            dataType : 'json',
            contentType : 'application/json',

            //  if everything is successful, run this function
            success : function(result){

                // extract prediction and emoticon url from result
                let prediction = result.prediction
                let emoji_url = result.url
                console.log(emoji_url)



                //  update the DOM elements


                //  show them
               

                
                // Display Result Using JavaScript----->HTML
                $('#sentiment').text(prediction)
                $('#sentiment').show()

                $('#emoji').attr('src' , emoji_url)
                $('#emoji').show()

                

            },

            //  if any error, run this function
            error : function(result){

                console.log(result)
            }
        })


        //  clearing the textbox after every button push
        $('#text').val("")
    })
})
        
