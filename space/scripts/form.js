const newsletter = document.querySelector(".newsletter");

getSubscription = () => JSON.parse(localStorage.getItem("novaNewsletter"));
subscribe = (subscriptionInfo = {}) => localStorage.setItem("novaNewsletter",   JSON.stringify(subscriptionInfo));
unsubscribe = () => localStorage.removeItem("novaNewsletter");
subscribed = () => localStorage.getItem("novaNewsletter") !== null


if(subscribed()) {
    let subscription = getSubscription();
        console.log("YO", subscribed(), subscription);

    const unsubButton = document.createElement("button");
    unsubButton.textContent = "Unsubscribe from Nova News";

    newsletter.innerHTML = `<h2>Subscribed</h2><h3>Thank you ${subscription.userName || subscription.email} for subscribing to Nova News!</h3>`
    newsletter.appendChild(unsubButton);

    unsubButton.addEventListener('click', event => {
        unsubscribe();
        location.reload();
    })
} else {

    const form = document.querySelector('form');

    form.addEventListener('submit', event => {
        event.preventDefault(); // Stop page reload

        let email = document.querySelector("#email").value;
        let name = document.querySelector("#userName").value;

        let newsletterSubcription = {
            email: email,
            userName: name
        };


        localStorage.setItem("novaNewsletter", JSON.stringify(newsletterSubcription));

        form.submit();
    });
}