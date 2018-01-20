//SLider 1
    var slider = new MasterSlider();

    slider.control('arrows', {
      autohide: true,
      overVideo: true
    });
    slider.setup("masterslider", {
      width: 1366,
      height: 768,
      minHeight: 0,
      space: 0,
      start: 1,
      grabCursor: true,
      swipe: true,
      mouse: true,
      keyboard: true,
      layout: "fullwidth",
      wheel: false,
      autoplay: true,
      instantStartLayers: true,
      loop: true,
      shuffle: false,
      preload: 0,
      heightLimit: true,
      autoHeight: false,
      smoothHeight: true,
      endPause: false,
      overPause: true,
      fillMode: "fill",
      centerControls: false,
      startOnAppear: false,
      layersMode: "center",
      autofillTarget: "",
      hideLayers: false,
      fullscreenMargin: 0,
      speed: 20,
      dir: "h",
      parallaxMode: 'swipe',
      view: "parallaxMask"
    });
    
    
    
    //SLider2
    var slider2 = new MasterSlider();

    slider2.control('arrows', {
      autohide: true,
      overVideo: true
    });
    slider2.control('circletimer', {
      autohide: false,
      overVideo: true,
      color: '#FFFFFF',
      radius: 4,
      stroke: 9
    });
    slider2.control('slideinfo', {
      autohide: false,
      overVideo: true,
      dir: 'h',
      align: 'bottom',
      inset: false,
      margin: 10
    });
    slider2.setup("masterslider2", {
      width: 700,
      height: 350,
      minHeight: 0,
      space: 10,
      start: 1,
      grabCursor: true,
      swipe: true,
      mouse: true,
      keyboard: false,
      layout: "partialview",
      wheel: false,
      autoplay: false,
      instantStartLayers: false,
      loop: true,
      shuffle: false,
      preload: 3,
      heightLimit: true,
      autoHeight: false,
      smoothHeight: true,
      endPause: false,
      overPause: true,
      fillMode: "fill",
      centerControls: true,
      startOnAppear: false,
      layersMode: "center",
      autofillTarget: "",
      hideLayers: false,
      fullscreenMargin: 0,
      speed: 20,
      dir: "h",
      parallaxMode: 'swipe',
      view: "partialWave"
    });