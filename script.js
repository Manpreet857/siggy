let item = document.getElementById("item")
let km = document.getElementById("km")
let gst = document.getElementById("gst")
let next = document.getElementById("Next")
let reset = document.getElementById("reset");
const maincal = document.getElementsByClassName("maincal")[0];
const ibox = document.getElementsByClassName("ibox")[0];
const bt1 = document.getElementsByClassName("bt")[0];
const bt2 = document.getElementsByClassName("bt")[1];
const calpart = document.querySelector(".calpart center h6");

const calpart1 = document.querySelector(".calpart");
const imagepart = document.querySelector(".imagepart center h6");
const impart = document.querySelector(".imagepart");
const mymain = document.querySelector("main")
const impartdiv = document.querySelector(".imagepart div");
impartdiv.style.width = "100px"

let price;
let price2;
let prices = [];
let amount =[];
mymain.style.borderBottom = "0px solid white"
next.addEventListener('click', () => {
    let itemv = Number(item.value) || 0;
    let kmv = Number(km.value) || 0;
    let gstv = Number(gst.value) || 0;
    if (itemv === 0 || kmv === 0 || gstv === 0) {
        showErrorPopup("Enter corract details");

    }
    else {
        if (kmv > 7 || itemv < 199) {
            if (kmv > 7) {
                showErrorPopup("Free delivery availiable under 7km ");

            }
            else if (itemv < 199) showErrorPopup("Need to do item +199rs min");

        }
        else if (kmv <= 7 && itemv >= 199) {
            if (itemv < 299) {
                price = (itemv + gstv) - 100;
                prices.push(price)
                newpage();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
            else {
                price = (itemv + gstv) - 100
                prices.push(price)
                price2 = (itemv + gstv) - 125;
                prices.push(price2)
                newpage();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        }
    }

    console.log(prices[0], prices[1]);
})
reset.addEventListener("click", () => {
    location.reload();
})
function showErrorPopup(message) {
    let popup = document.createElement("div");
    popup.style.width = "300px";
    popup.style.height = "60px";
    popup.style.background = "#75f216";
    popup.style.color = "red";
    popup.style.border = "1px solid red";
    popup.style.fontSize = "50px";
    popup.style.display = "flex";
    popup.style.alignItems = "center";
    popup.style.justifyContent = "center";
    popup.style.position = "relative";
    popup.style.top = "-180px";
    popup.style.left = "5vw";
    popup.style.fontSize = "18px";
    popup.style.fontWeight = "bold";
    popup.style.borderRadius = "20px"
    popup.innerText = message;
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 2000);
}

function newpage() {

    bt1.remove();
    bt2.remove();
    calpart.remove();
    ibox.remove();
    imagepart.remove();
    calpart1.remove();

    lpb("Here user according to 100off last price =" + prices[0] + " ");
    lastprice("Seller 1,click on me name Mohan", `https://t.me/AlwaysHappyYou?,text=Hello,i am sending cart of siggy. My last price ${prices[0]} or ${prices[1]}`);
    lastprice("Seller 2,click on me name vibhu", `https://t.me/Vibhu665?text=Hello,i am sending cart of siggy. My last price ${prices[0]} or ${prices[1]}`);
    lastprice("Seller 3,click on me name Linchan", `https://t.me/L_A_H_S_I_V?text=Hello,i am sending cart of siggy. My last price ${prices[0]} or ${prices[1]}`);
    lastprice("Seller 4,click on me name rhaul", `https://t.me/rrrrrrahul_7?text=Hello,i am sending cart of siggy. My last price ${prices[0]} or ${prices[1]}`);
    if (prices[1] > 1) {
        lpb("Here user according to 125off last price =" + prices[1] + " ");
        lastprice("Seller 1,click on  name Rahul", `https://t.me/rrrrrrahul_7?text=Hello,i am sending cart of siggy. My last price ${prices[0]} or ${prices[1]}`);
        lastprice("Seller 2,click on me pp", `https://t.me/PrathP_1?text=Hello,i am sending cart of siggy. My last price ${prices[0]} or ${prices[1]}`);


    }
}




function lastprice(name, tglink) {
    let fullbox = document.createElement("div");
    let tgbox = document.createElement("div");
    let textbox = document.createElement("div");
    fullbox.appendChild(textbox);
    fullbox.appendChild(tgbox);
    impart.appendChild(fullbox)
    tb = textbox.style
    fbs = fullbox.style;
    tgb = tgbox.style;
  let tgimage=`https://i.ibb.co/q3gsmH04/tg5.jpg`
    fbs.width = "30vh"
    fbs.margin = "30px 0px 0px -2px "
    fbs.height = "87px"
    tb.fontSize = "20px"
    
    fbs.background = "rgb(255,69,0)"
    fbs.borderRadius = "50px"
    fbs.background = "radialGradient(circle, rgba(255,69,0,1) 50%, rgba(255,165,0,1) 50%);"
    fbs.padding = "7px 0px 0px 33px "
    fbs.display = "flex"
    
    textbox.innerText = name;
    tb.border = "1px"
    tb.display = "grid"
    tb.margin = "0px"
    tb.width="67vh"
    
    
    
    tgb.width = "52vh"
    tgb.backgroundColor = "blue"
    tgb.height = "110px"
    tgb.border = "5px solid white"
    tgb.borderRadius = "100px"
    tgb.margin = "-15px 0px 0px 30px"
    tgb.backgroundImage = tgimage;
    tgb.backgroundSize = "cover";

    fullbox.addEventListener('click', () => {
        window.open(tglink, "_blank");

    })


}
function lpb(text) {
    let div = document.createElement("div");
    impart.appendChild(div);
    div.className = "banner"
    DIV = div.style;
  
    DIV.width = "28vh"
    DIV.height = "7vh"
    DIV.margin = "0vw 0px 0px 8vw";

    div.innerText = text;
    DIV.color = "black"
    DIV.padding = "10px 0px 5px 20px"
    DIV.borderRadius = "1px solid black";
    DIV.backgroundColor = "orangered"
    DIV.color = "black"
    DIV.fontSize = "20px"
    DIV.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"
}

function showThankYouPopup() {
    // Create popup div
    let popup = document.createElement("div");
    popup.innerText = "Thank Youx";
    popup.style.left = "700px";
    popup.style.top = "500px";
    popup.style.width = "220px";
    popup.style.height = "200px";
    popup.style.display = "flex";
    popup.style.alignItems = "center";
    popup.style.justifyContent = "center";
    popup.style.background = "#66eb28";
    popup.style.color = "white";
    popup.style.fontSize = "30px";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
    popup.style.zIndex = "1000";
    popup.style.margin = "30px"

    // Append popup to body
    calpart1.appendChild(popup);


}
window.addEventListener('DOMContentLoaded', updateMenuVisibility);

// Run function when resizing the window
window.addEventListener('resize', updateMenuVisibility);
function updateMenuVisibility() {

    if (innerWidth < 500 && innerWidth > 370) {
        impart.style.width = "83vw"
        mymain.style.border = "1px solid black"
        mymain.style.height = "230vh"
        maincal.style.width = "90vw"
        calpart1.style.width = "83vw"
    }
    else if (innerWidth < 370 && innerWidth > 100) {

        impart.style.width = "83vw"
        mymain.style.border = "1px solid black"
        mymain.style.height = "230vh"
        maincal.style.width = "90vw"
        calpart1.style.width = "83vw"
    }

}
console.log(window.innerWidth);