$(document).ready(function () {
    // Retrieve session storage data
    const sessionData = JSON.parse(sessionStorage.getItem('cart'));

    if (sessionData) {
        // Populate order details
        let orderId = sessionData.orderId;
        if (!orderId) {
            orderId = Math.floor(100000000 + Math.random() * 900000000);
            sessionData.orderId = orderId;
            sessionStorage.setItem('cart', JSON.stringify(sessionData));
        }
        $('#orderId').text(orderId || 'N/A');
        $('#totalPrice').text(`€${sessionData.totalPrice.toFixed(2)}`);
        $('#isPaid').text(sessionData.customerInfo.isPaid ? 'Ja' : 'Nee');

        // Populate purchased items
        const itemsList = $('#itemsPurchased');
        sessionData.forEach(item => {
            itemsList.append(`<li>${item.quantity}x ${item.name} - €${item.total.toFixed(2)}</li>`);
        });

        // Populate ready time
        $('#readyTime').text(sessionData.customerInfo.pickupTime || 'N/A');

        // Populate user information
        $('#firstName').text(sessionData.customerInfo.firstName || 'N/A');
        $('#lastName').text(sessionData.customerInfo.lastName || 'N/A');
        $('#phoneNumber').text(sessionData.customerInfo.phoneNumber || 'N/A');
        $('#email').text(sessionData.customerInfo.email || 'N/A');

        // Correctly retrieve and display remarks in the textarea
        const remarks = sessionData.customerInfo.remarks || 'Geen opmerkingen';
        $('#opmerkingInfo').val(remarks); // Updated to target the correct textarea ID
    } else {
        console.error('No session data found.');
    }
});
