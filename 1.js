<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/vyantagc/vyantagc/popme-style.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>

<script type="text/javascript">
//<![CDATA[
    var go_current     	= window.location.href;
    var reff     		= document.referrer;
    

    function rChoice(arr) {
	    return arr[Math.floor(arr.length * Math.random())];
	}

    var direct_link_ads = rChoice([
                            "https://arousedimitateplane.com/hc47txijm?key=c5cfa389ba7de80835a0232d4edf20e5",
                            "https://arousedimitateplane.com/h4kphaus2g?key=acc1ca19b3d441426784c127b66511c2",
                        ]);

    var ars             = rChoice([
                            "https://correctly.me/",
                        ]);


    var dir_type        = "arsae"; //refresh, domain, path, arsae


    if(dir_type == 'refresh')
    {
        //REFRESH
        console.log('refresh..');
    }
    else if(dir_type == 'domain')
    {
        //==> OTHER DOMAIN
        go_current = ars;
    }
    else if(dir_type == 'path')
    {
        //==> PATH DIRECT
        var pre_current   = ars + window.location.pathname;
        go_current        = pre_current.includes("?")?pre_current+"&c=1":pre_current+"?c=1";
    }
    else if(dir_type == 'arsae')
    {
        //==> ARSAE DIRECT
        go_current            = ars + '/?arsae='+ encodeURIComponent(go_current) + '&arsae_ref='+ encodeURIComponent(reff);
    }
//]]>
</script>

<script  src="https://cdn.jsdelivr.net/gh/gebangkiidiw/Ads@main/refering.js" ></script>
