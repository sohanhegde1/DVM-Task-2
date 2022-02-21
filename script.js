var expectedDeliveryDate = document.getElementById('exp-delivery-date');
var receivedDate = document.getElementById('received-date');
var quantityDemanded =document.getElementById('qty-demanded');
var quantityReturned =document.getElementById('qty-returned');
var quantityReceived =document.getElementById('qty-received');
var submitButton = document.getElementById('submit-btn');
var clearButton = document.getElementById('clear-btn');
var orderContainer = document.getElementById('order-container');

submitButton.addEventListener("click", submitFunction);


function submitFunction() {
    var paragraph = document.createElement('p');
    paragraph.innerText = "Expected Delivery Date: " + expectedDeliveryDate.value + "\n" + "Received Date: " + receivedDate.value + "\n" + "Quantity Demanded: " + quantityDemanded.value + "\n" + "Quantity Received: " + quantityReceived.value + "\n" + "Quantity Returned: " + quantityReturned.value + "\n";
    orderContainer.appendChild(paragraph);

    //clearing all values after input
    expectedDeliveryDate.value = "";
    receivedDate.value = "";
    quantityDemanded.value = "";
    quantityReceived.value = "";
    quantityReturned.value = "";

    var deleteButton = document.createElement('button');
    deleteButton.value = "Delete";
    deleteButton.style.color = 'white';
    deleteButton.style.backgroundColor = 'red';
    deleteButton.style.minWidth = '40px';
    deleteButton.style.minHeight = '20px'
    deleteButton.style.cursor = 'pointer'
    deleteButton.style.margin = '5px'
    deleteButton.innerText = "Delete";
    orderContainer.appendChild(deleteButton);

    deleteButton.addEventListener("click", deleteFunction);


    function deleteFunction(){
        //console.log("Deleted");
        orderContainer.removeChild(paragraph);
        orderContainer.removeChild(deleteButton);
    }

} 






