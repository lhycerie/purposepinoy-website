document.addEventListener('DOMContentLoaded', function() {
    const envelopes = document.querySelectorAll('.envelope-card');
    envelopes.forEach(envelope => {
        envelope.addEventListener('click', function() {
            this.classList.toggle('active');
            envelopes.forEach(other => {
                if (other !== this) {
                    other.classList.remove('active');
                }
            });
        });
    });
});
       