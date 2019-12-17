var favicon_images = [
'./favicon/frame_00_delay-0.04s.png',
'./favicon/frame_01_delay-0.04s.png',
'./favicon/frame_02_delay-0.04s.png',
'./favicon/frame_03_delay-0.04s.png',
'./favicon/frame_04_delay-0.04s.png',
'./favicon/frame_05_delay-0.04s.png',
'./favicon/frame_06_delay-0.04s.png',
'./favicon/frame_07_delay-0.04s.png',
'./favicon/frame_08_delay-0.04s.png',
'./favicon/frame_09_delay-0.04s.png', 
'./favicon/frame_10_delay-0.04s.png',
'./favicon/frame_11_delay-0.04s.png',
'./favicon/frame_12_delay-0.04s.png',
'./favicon/frame_13_delay-0.04s.png',
'./favicon/frame_14_delay-0.04s.png',
'./favicon/frame_15_delay-0.04s.png',
'./favicon/frame_16_delay-0.04s.png',
'./favicon/frame_17_delay-0.04s.png',
'./favicon/frame_18_delay-0.04s.png',
'./favicon/frame_19_delay-0.04s.png', 
'./favicon/frame_20_delay-0.04s.png',
'./favicon/frame_21_delay-0.04s.png',
'./favicon/frame_22_delay-0.04s.png',
'./favicon/frame_23_delay-0.04s.png',
'./favicon/frame_24_delay-0.04s.png',
'./favicon/frame_25_delay-0.04s.png',
'./favicon/frame_26_delay-0.04s.png',
'./favicon/frame_27_delay-0.04s.png',
'./favicon/frame_28_delay-0.04s.png',
'./favicon/frame_29_delay-0.04s.png'
],
image_counter = 0; // To keep track of the current image

setInterval(function() {
    $("link[rel='icon']").remove();
    $("link[rel='shortcut icon']").remove();
    $("head").append('<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');
    
	if(image_counter == favicon_images.length -1)
        image_counter = 0;
    else
        image_counter++;
}, 200);
