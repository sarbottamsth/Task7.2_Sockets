
$(document).ready(function () {
    $('.modal').modal();
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    })
    addCards(cardList);
});

async function displayItems() {
    try {
        let response = await fetch("/api/items");
        let items = await response.json();

        items.forEach(item => {
            let itemToAppend = '<div class="col s4 center-align">' +
                '<div class="card"><div class="card-image"><img src="' + item.item_image_url + '">' +
                '</div><div class="card-content">' +
                '<h4 class="card-title">' + item.item_name + '</div>' +
                '<p class="card-text"><b>' + item.item_color + '</b></p>' +
                '<p class="card-text">' + item.item_description + '</p>' +
                '<div class="card-action"><a href="">Visit Page</a>' +
                '</a></div></div>';
            $("#item-collection").append(itemToAppend)
        });
    } catch (err) {
        console.error(err);
    }
}

displayItems();

let clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
}