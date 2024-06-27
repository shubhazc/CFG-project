document.addEventListener('DOMContentLoaded', function() {
    var acc = document.getElementsByClassName('accordion');

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function() {
            // Collapse all panels
            for (var j = 0; j < acc.length; j++) {
                var panel = acc[j].nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                    acc[j].classList.remove('active');
                }
            }

            // Toggle the clicked panel
            this.classList.toggle('active');
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    }
});

function buttonClicked() {
    alert('Button clicked!');
}
