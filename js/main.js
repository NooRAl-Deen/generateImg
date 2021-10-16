function generateImg()
{
    let parent = document.querySelector(".parent");
    let template = document.createElement("div");
    let img = document.createElement("img");
    template.className = "item";
    img.className = "img";
    let arr = ["imgs/work1.webp", "imgs/work2.webp", "imgs/work3.webp",
               "imgs/work4.webp", "imgs/work5.webp", "imgs/work6.webp"];
    let index = parseInt(Math.random() * arr.length);
    img.src = arr[index];
    template.appendChild(img);
    parent.appendChild(template);
}



