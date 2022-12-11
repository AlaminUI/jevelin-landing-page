var tpj = jQuery;

						var revapi17;

						if (window.RS_MODULES === undefined) window.RS_MODULES = {};
						if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
						RS_MODULES.modules["revslider171"] = {
							init: function () {
								window.revapi17 = window.revapi17 === undefined || window.revapi17 === null || window.revapi17
									.length === 0 ? document.getElementById("rev_slider_17_1") : window.revapi17;
								if (window.revapi17 === null || window.revapi17 === undefined || window.revapi17.length == 0) {
									window.revapi17initTry = window.revapi17initTry === undefined ? 0 : window.revapi17initTry +
									1;
									if (window.revapi17initTry < 20) requestAnimationFrame(function () {
										RS_MODULES.modules["revslider171"].init()
									});
									return;
								}
								window.revapi17 = jQuery(window.revapi17);
								if (window.revapi17.revolution == undefined) {
									revslider_showDoubleJqueryError("rev_slider_17_1");
									return;
								}
								revapi17.revolutionInit({
									revapi: "revapi17",
									sliderType: "hero",
									sliderLayout: "fullscreen",
									visibilityLevels: "1240,1024,768,480",
									gridwidth: 1240,
									gridheight: 868,
									lazyType: "smart",
									perspectiveType: "local",
									responsiveLevels: "1240,1024,768,480",
									progressBar: {
										disableProgressBar: true
									},
									navigation: {
										onHoverStop: false
									},
									viewPort: {
										global: true,
										globalDist: "-200px",
										enable: false,
										visible_area: "20%"
									},
									fallbacks: {
										allowHTML5AutoPlayOnAndroid: true
									},
								});

							}
						} // End of RevInitScript

						if (window.RS_MODULES.checkMinimal !== undefined) {
							window.RS_MODULES.checkMinimal();
						};
				 
					 
				 