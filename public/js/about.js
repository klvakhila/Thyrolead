const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM to be fully loaded before attaching the event listener
    var commentForm = document.querySelector('.comment-form');

    if (commentForm) {
        commentForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevents the default form submission behavior
            alert("Thank you for your feedback! :)");
        });
    }
});
