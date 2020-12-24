$(document).ready(function () {
    $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
        if ((e.target.hash) == '#yearly') {
            $('#pricing-tab-switch').prop('checked', 'checked');
        } else {
            $('#pricing-tab-switch').prop('checked', '');
        }
    });

    $('#pricing-tab-switch').on('change', function (e) {
        if ( this.checked ) {
            $('#yearly-tab').tab('show');
        }else {
            $('#monthly-tab').tab('show');
        }
    });
});

