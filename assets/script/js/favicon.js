var favicon_images = [
'/assets/media/visual/assorted/frame_0_delay-0.27s.gif',
'/assets/media/visual/assorted/frame_1_delay-0.27s.gif',
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
