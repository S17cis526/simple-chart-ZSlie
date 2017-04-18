$(function() {
    var peerReviewCanvas = $('#peer-review')[0];
    var peerReviewCtx = peerReviewCanvas.getContext('2d');
    var colors = [
        'yellow', 
        'purple',
        'silver',
        'green',
        'blue',
        'red',
        'orange',
        'fuschia',
        'cyan'
    ];

    // Draw peer review chart
    peerReviewCtx.strokeText("Peer Review", 82, 10);
    for (i = 0; i <= 10; i++ ) {
        peerReviewCtx.strokeText(10 - i, 10, 30 + i * 20);
        peerReviewCtx.moveTo(25, 30 + i * 20);
        peerReviewCtx.lineTo(90, 30 + i * 20);

    }
    peerReviewCtx.stroke();

    // Draw peer review bars 
    $.ajax({
        url: '/peerReview.json',
        dataType: 'json',
        success: function(data) {
            var categories = Object.keys(data);
            // Draw bars
            categories.forEach(function(category, index) {
                var value = data[category];
                var x = 30 + index * 10; 
                var y = 30 + (10-value) * 20;
                var height = value * 20;
                peerReviewCtx.fillStyle = colors[index];
                peerReviewCtx.fillRect(x, y, 5, height);
                peerReviewCtx.fillRect(100, 80 + 20 * index, 10, 10);
                peerReviewCtx.strokeText(category, 120, 89 + 20 * index);
            });
        }
    });

    $.ajax({
        url: '/pointDistribution.json',
        
    })
});
