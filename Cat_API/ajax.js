 async function getCat() {
    const httpResponse = await fetch(`https://api.thecatapi.com/v1/images/search`);
    const body = await httpResponse.json();
    console.log(body);
    const html = '<img src="' + body[0].url + '">';
    document.getElementById("image").innerHTML = html;
}

getCat();