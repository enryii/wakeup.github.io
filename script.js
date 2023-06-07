document.getElementById('wolForm').addEventListener('submit', function(event) {
	event.preventDefault();
	const macAddress = document.getElementById('macAddress').value;

	// Send an HTTP request to the server with the MAC address
	fetch('/wake-on-lan', {
		method: 'POST',
		headers: {
		'Content-Type': 'application/json'
		},
		body: JSON.stringify({ macAddress })
	})
	.then(response => {
		if (response.ok) {
		alert('Wake-on-LAN packet sent successfully!');
		} else {
		alert('Failed to send Wake-on-LAN packet.');
		}
	})
	.catch(error => {
		alert('An error occurred while sending the Wake-on-LAN packet.');
		console.error(error);
	});
});