var favicon_images = [
'./favicon/frame_00_delay-0.04s.gif',
'./favicon/frame_01_delay-0.04s.gif',
'./favicon/frame_02_delay-0.04s.gif',
'./favicon/frame_03_delay-0.04s.gif',
'./favicon/frame_04_delay-0.04s.gif',
'./favicon/frame_05_delay-0.04s.gif',
'./favicon/frame_06_delay-0.04s.gif',
'./favicon/frame_08_delay-0.04s.gif',
'./favicon/frame_09_delay-0.04s.gif', 
'./favicon/frame_10_delay-0.04s.gif',
'./favicon/frame_11_delay-0.04s.gif',
'./favicon/frame_12_delay-0.04s.gif',
'./favicon/frame_13_delay-0.04s.gif',
'./favicon/frame_14_delay-0.04s.gif'
],
image_counter = 0;

setInterval(function() {
    $("link[rel='icon']").remove();
    $("link[rel='shortcut icon']").remove();
    $("head").append('<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');
	if(image_counter == favicon_images.length -1)
        image_counter = 0;
    else
        image_counter++;
}, 200);
