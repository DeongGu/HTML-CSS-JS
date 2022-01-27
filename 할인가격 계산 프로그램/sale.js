function showPrice() {
    var price = document.querySelector('#orginPrice').value;
    var rate = document.querySelector('#rate').value;
    var result = price * (rate/100);
    var lastResult = price - result;

    document.querySelector('#showResult').innerHTML = "상품의 원래가격은 " + price + "원이고, 할인율은 " + rate + "% 입니다. " + result +"원을 절약한 "+ lastResult +"원에 살 수 있습니다."
}