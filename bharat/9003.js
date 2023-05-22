// script-2 start
var testID = "9003",
	testClass = "spz_t" + testID,
	testCookies = "spz-" + testID;

// PG Cookies Add
var cookieName = testCookies;
var cookieValue = "1";
var myDate = new Date();
myDate.setDate(myDate.getDate() + 30);
document.cookie = cookieName + "=" + cookieValue + ";expires=" + myDate;
// END PG Cookies Add

if (typeof $ == "undefined") {
	// DOM: Create the script element
	var jsElm = document.createElement("script");
	jsElm.type = "application/javascript";
	jsElm.integrity = "sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=";
	jsElm.crossOrigin = "anonymous";
	// make the script element load file
	jsElm.src = "https://code.jquery.com/jquery-3.4.1.min.js";
	// finally insert the element to the body element in order to load the script
	document.body.appendChild(jsElm);
}

if (!document.body.classList.contains(testClass)) {
	document.body.classList.add(testClass);
	// Variation code
	var jqueryInterval = setInterval(function () {
		if (typeof $ != "undefined") {
			clearInterval(jqueryInterval);
			initVar();
		}
	});
}
function initVar() {
	(function ($) {
		if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
			$("body.spz_t9003").addClass("safari");
		}

		// header
		$(".spz_t9003 .main.inview .logo").append(
			'<div class=""><img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/nTopology_logo.svg" alt="nTopology-logo"></div>',
		);
		$(".spz_t9003 nav.main .menu-item-9863").after(
			'<li class="menu-item community menu-item-has-children"><a href="https://ntopology.com/education/">Community</a><ul class="sub-menu"></ul></li>',
		);
		$(".spz_t9003 nav.main .menu-item-1841").after(
			$(".spz_t9003 nav.main .menu-item-8519"),
		);
		$(".spz_t9003 nav.main .menu-item-11257").after(
			'<li class="menu-item community menu-item-has-children"><a href="https://ntopology.com/ntopology-software/">Solutions</a><ul class="sub-menu"></ul></li>',
		);
		$(".spz_t9003 .main.inview .logo").append(
			'<img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/nTopology_logo.svg" alt="nTopology_logo">',
		);
		$(".spz_t9003 nav.main .login").before(
			'<li class="button-tab request-a-demo"><a href="https://ntopology.com/request-a-demo/" target="_blank">Get a demo</a></li>',
		);
		$(".spz_t9003 header.main  .container .logo").append(
			'<div class="nTopology-logo-wrapper"><img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/nTopology_logo.svg" alt="nTopology_logo"><div>',
		);
		$(".spz_t9003 nav #menu-item-9863").after(
			'<li class="menu-item community"><a href="https://ntopology.com/education/">Community</a><ul class="sub-menu"></ul></li>',
		);
		$(".spz_t9003 nav #menu-item-1841").after(
			$(".spz_t9003 nav #menu-item-8519"),
		);
		$(".spz_t9003 nav #menu-item-11257").after(
			'<li class="menu-item community"><a href="https://ntopology.com/ntopology-software/">Solutions</a><ul class="sub-menu"></ul></li>',
		);
		$(".spz_t9003 header .logo").append(
			'<div class="nTopology-logo-wrapper-mobile"><img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/nTopology_logo_white.png" alt="nTopology_logo"></div>',
		);
		$(".spz_t9003 #mobile-menu header").append(
			'<div class="reqdemo-signIn-wrapper"></div>',
		);
		$(
			".spz_t9003 header.main nav>ul>li:nth-of-type(6) .sub-menu li:last-child,.spz_t9003 #mobile-menu nav>ul>li:nth-of-type(6) .sub-menu li:last-child",
		).before('<li><a href="https://ntopology.com/partners/">Partners</a></li>');
		$(
			".spz_t9003 .container .mobile-menu-toggle,.spz_t9003 #mobile-menu .mobile-menu-toggle",
		).html("");
		$(
			".spz_t9003 header.main nav>ul>li:nth-of-type(4)>ul > li:last-child a",
		).text(
			$(".spz_t9003 header.main nav>ul>li:nth-of-type(4)>ul > li:last-child a")
				.text()
				.replace("Edu", "EDU"),
		);
		$(
			".spz_t9003 #mobile-menu nav>ul>li:nth-of-type(4)>ul > li:last-child a",
		).text(
			$(".spz_t9003 #mobile-menu nav>ul>li:nth-of-type(4)>ul > li:last-child a")
				.text()
				.replace("Edu", "EDU"),
		);
		var reqDemo = $(".spz_t9003 .button-tab.request-a-demo").clone();
		var signIn = $(".spz_t9003 .button-tab.login").clone();
		$(".spz_t9003 #mobile-menu header .reqdemo-signIn-wrapper").append(reqDemo);
		$(".spz_t9003 #mobile-menu header .reqdemo-signIn-wrapper").append(signIn);
		$(
			'.spz_t9003 #mobile-menu footer ul.social-links a[href="https://www.instagram.com/ntopology/"]',
		).html(
			'<img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/instagram-icon.svg" alt="instagram">',
		);
		$(
			'.spz_t9003 #mobile-menu footer ul.social-links a[href="https://twitter.com/ntopology"]',
		).html(
			'<img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/twitter-icon.svg" alt="twitter">',
		);
		$(
			'.spz_t9003 #mobile-menu footer ul.social-links a[href="https://www.linkedin.com/company/ntopology/"]',
		).html(
			'<img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/2003-home-page-major-redesign-features/linkedin-icon.svg" alt="linked-in">',
		);
		$(
			'.spz_t9003 #mobile-menu footer ul.social-links a[href="https://www.youtube.com/c/ntopology"]',
		).html(
			'<img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/2003-home-page-major-redesign-features/youtube-icon.svg" alt="youtube">',
		);
		$(".spz_t9003 header")
			.find(
				".menu-item-14708, .menu-item-9673, .menu-item-20241, .menu-item-13379, .menu-item-13183",
			)
			.addClass("list-one");
		$(".spz_t9003 header .list-one").wrapAll('<div class="list-one"></div>');
		$(".spz_t9003 header")
			.find(
				".menu-item-8319, .menu-item-13184, .menu-item-17267, .menu-item-19426, .menu-item-19849",
			)
			.addClass("list-two");
		$(".spz_t9003 header .list-two").wrapAll('<div class="list-two"></div>');
		$(
			".spz_t9003 header ul > li.menu-item-has-children:not(.button-tab)",
		).hover(
			function () {
				$(this).find("a").css("opacity", "100%");
				$(this)
					.prevAll("li.menu-item-has-children:not(.button-tab)")
					.children("a")
					.css("opacity", "50%");
				$(this)
					.nextAll("li.menu-item-has-children:not(.button-tab)")
					.children("a")
					.css("opacity", "50%");
			},
			function () {
				$(
					".spz_t9003 header li.menu-item-has-children:not(.button-tab) a",
				).removeAttr("style");
			},
		);

		// Banner Section
		$(".spz_t9003 section.v3-flex-layout.light-theme")
			.first()
			.addClass("hero-section");
		$(".spz_t9003 header.main .container .logo").html(
			'<img alt= "logo" src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/logo-nTopology-White.svg">',
		);
		$(
			".spz_t9003 section.v3-flex-layout article.v3-flex-layout.image_and_text_block .container .grid-col-small-1-1n",
		)
			.first()
			.addClass("hero-right");
		$(
			".spz_t9003 section.v3-flex-layout article.v3-flex-layout.image_and_text_block .container .grid-col-small-1-1",
		)
			.first()
			.addClass("hero-left");
		$(
			".spz_t9003 section.v3-flex-layout article.v3-flex-layout.image_and_text_block .container .hero-right .inner",
		).html(`<p class="sub-heading">Lattice generation software</p>
	        <h2 class = "heading">Generate complex lattices in seconds. Decrease design time by 83%.</h2>
	        <ul class="list">
	            <li class="list-item"><h3 class="list-heading">Performance-driven lattices</h3><p class="list-data">Generate lattices in a few clicks based on heat, pressure, stress, and other simulation data. </p></li>
	            <li class="list-item"><h3 class="list-heading">Real-time generation</h3><p class="list-data">Drag-and-drop lattices. Adjust lattice type, size, density, and other parameters. The render changes instantly.</p></li>
	            <li class="list-item"><h3 class="list-heading">Design automation</h3><p class="list-data">Save lattice design steps as workflows. Automatically apply steps to other parts. Share workflows across teams. </p></li>
	        </ul>`);
		var formload = setInterval(function () {
			if ($(".spz_t9003 .Form").length > 0) {
				clearInterval(formload);
				$(".spz_t9003 .Form").append(
					'<div class="trust_Badges">\
                    <div class="badge">\
                        <div class="image-wrapper">\
                            <img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/G2.svg" class="image lazyloaded" alt="G2">\
                        </div>\
                        <div class="star">\
                            <img alt="Star Rating" data-src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/5Stars.svg" class=" lazyloaded" src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/5Stars.svg">\
                        </div>\
                        <p>5.0 / 5</p>\
                    </div>\
                    <div class="badgeBorder"></div>\
                    <div class="badge">\
                        <div class="image-wrapper">\
                            <img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/Google.svg" class="image lazyloaded" alt="Google">\
                        </div>\
                        <div class="star">\
                            <img alt="Star Rating" data-src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/5Stars.svg" class=" lazyloaded" src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/5Stars.svg">\
                        </div>\
                        <p>5.0 / 5</p>\
                    </div>\
                    <div class="badgeBorder"></div>\
                    <div class="badge">\
                        <div class="image-wrapper">\
                            <img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/Capterra.svg" class="image lazyloaded" alt="Capterra">\
                        </div>\
                        <div class="star">\
                            <img alt="Star Rating" data-src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/4Stars.svg" class=" lazyloaded" src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/4Stars.svg">\
                        </div>\
                        <p>4.8 / 5</p>\
                    </div>\
                </div>',
				);
			}
		});
		$(
			".spz_t9003 .hero-section .wysiwyg_content_block-layout .container",
		).html(`\
		<div class="picWrap">\
			<h3>Join industry leaders using next-gen generative design software</h3>
			<div class="banner__Logos">
			<picture>
              <source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/Lockheed_Martin-Tablet.svg">
              <img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/Lockheed_Martin.svg" alt="Lockheed Martin Logo"/>
            </picture>
            <picture>
              <source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/Ford-Tablet.svg">
              <img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/Ford.svg" alt="Ford Logo"/>
            </picture>
            <picture>
              <source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/Nexxt_Spine-Tablet.svg">
              <img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/Nexxt_Spine.svg" alt="Nexxt Spine Logo"/>
            </picture>
            <picture>
              <source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/Yamaha-Tablet.svg">
              <img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/Yamaha.svg" alt="Yamaha Logo"/>
            </picture>
            <picture>
              <source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/Aerojet-Tablet.svg">
              <img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/Aerojet.svg" alt="Aerojet Logo"/>
            </picture>
			</div>
		</div>`);
		$(".spz_t9003 #main-content .hero-section").prepend(
			'\
	<div class="hero-bg">\
		<video autoplay muted loop playsinline class="myVideo" preload="auto">\
			<source src="//res.cloudinary.com/spiralyze/video/upload/nTopology/7003_nTopology_Thermal_Management_Redesign/Hero-BG-video.mp4" type="video/mp4">\
		</video>\
	</div>\
	',
		);

		// Form script
		$(".spz_t9003 .hero-left").html(
			'<div class="Form"><h2 class="heading">Get a demo</h2><form id="mktoForm_2414"></form></div>',
		);
		function formchange() {
			MktoForms2.whenReady(function (form) {
				//placeholder or Label text chnage
				$(".spz_t9003 form #FirstName").attr("placeholder", "");
				$(".spz_t9003 form #LastName").attr("placeholder", "");
				$(".spz_t9003 form #Email").attr("placeholder", "");
				$(".spz_t9003 form #Phone").attr("placeholder", "");
				$(".spz_t9003 form #Company").attr("placeholder", "");
				$(".spz_t9003 form #Contact_Us_Notes__c").attr(
					"placeholder",
					"Comments",
				);
				$(".spz_t9003 form #Contact_Us_Notes__c").attr("placeholder", "");
				$(".spz_t9003 form .mktoButtonRow button").text("Get a demo");
				$(".spz_t9003 form .mktoHtmlText")
					.closest(".mktoFormRow")
					.addClass("Privacy-Policy");
				$(".spz_t9003 form #Contact_Us_Notes__c")
					.closest(".mktoFormRow")
					.addClass("comment-box");
				$(".spz_t9003 form .mktoPlaceholderOpted_In__c")
					.closest(".mktoFormRow")
					.addClass("mktoPlaceholderOpted_In__c-a");
				$(".spz_t9003 form #LblContact_Us_Notes__c").text("Comments");
				$(".spz_t9003 form #Country")
					.closest(".mktoFieldWrap")
					.addClass("select-row");
				$(".spz_t9003 form #LblFirstName").html("First Name <span>*</span>");
				$(".spz_t9003 form #LblLastName").html("Last Name <span>*</span>");
				$(".spz_t9003 form #LblEmail").html("Email <span>*</span>");
				$(".spz_t9003 form #LblPhone").text("Phone");
				$(".spz_t9003 form #LblCompany").html("Company <span>*</span>");
				$(".spz_t9003 form #LblCountry").html("Country <span>*</span>");
				$(".spz_t9003 form .mktoFormRow input[type='hidden']")
					.parent(".mktoFormRow")
					.css("display", "none");
				$(".spz_t9003 .Privacy-Policy .mktoHtmlText").html(
					'By completing the form and submitting your information above, you are agreeing to our <a href="https://ntopology.com/privacy-policy/" target="_blank">Privacy Policy</a>.',
				);
				$(".spz_t9003 form #Email")
					.closest(".mktoFormRow")
					.addClass("email-box");
				$("#Company").closest(".mktoFieldDescriptor").prependTo(".email-box");
				$("#Phone")
					.closest(".mktoFieldDescriptor")
					.prependTo($("#Country").closest(".mktoFormRow"));
				$(".spz_t9003 .trust_Badges").after($(".spz_t9003 .Privacy-Policy"));

				$(".spz_t9003 #Country").attr({
					placeholder: "Start typing...",
					autocomplete: "off",
				});
				$('.spz_t9003 option[value=""]').remove();
				$('.spz_t9003 option[value="United States"]').attr(
					"selected",
					"selected",
				);

				//Country name changes
				$('.spz_t9003 option[value="Viet Nam"]').text("Vietnam");
				$('.spz_t9003 option[value="Timor-leste"]').text("Timor-Leste");
				$('.spz_t9003 option[value="Taiwan"]').text("Taiwan");
				$('.spz_t9003 option[value="Libyan Arab Jamahiriya"]').text("Libya");
				$(
					'.spz_t9003 option[value="Macedonia, The Former Yugoslav Republic of"]',
				).text("North Macedonia");

				var refreshInterval = setInterval(function () {
					if ($(".spz_t9003 form .comment-box").length > 0) {
						clearInterval(refreshInterval);
						if ($(".spz_t9003 form .comment").length == 0) {
							$('<div class="comment">+ Add a comment</div>').insertBefore(
								".spz_t9003 form .comment-box",
							);
							$(".spz_t9003 form .comment").click(function () {
								$(".spz_t9003 form .comment-box").slideDown();
								$(
									".spz_t9003 .mktoForm textarea#Contact_Us_Notes__c",
								).slideDown();
								$(this).hide();
							});
						}
					}
				}, 200);

				// tracking cookie Marketing_Test_Info__c
				$(".spz_t9003 #mktoForm_2414").on("change", function () {
					if (
						$(
							'.spz_t9003 .mktoFormRow input[name="Marketing_Test_Info__c"]',
						).val().length < 1
					) {
						$(
							'.spz_t9003 .mktoFormRow input[name="Marketing_Test_Info__c"]',
						).val("control_1006_graphics_form");
					} else {
						$(
							'.spz_t9003 .mktoFormRow input[name="Marketing_Test_Info__c"]',
						).val("");
					}
				});

				var inputSelector =
					".spz_t9003 form input.mktoField, .spz_t9003 form textarea, .spz_t9003 .ts-control > input";
				var selectSelector = ".spz_t9003 form select.mktoField:not(#Country)";
				var selector = inputSelector + ", " + selectSelector;

				// for does not allow start typing with space in the input
				$(document).on("keydown", inputSelector, function (e) {
					if ($(this).val().trim().length == 0) {
						return e.which !== 32;
					}
				});
				// Initial Class Added
				$(document).on("focus", selector, function () {
					$(this).closest(".mktoFieldWrap").addClass("active typing");
				});

				$(document).on("change blur input", selector, function (e) {
					if ($(this).attr("id") == "Country-ts-control") {
						if (
							$(this).closest(".ts-control").find(".item").length == 0 &&
							!$(this).closest(".ts-wrapper").hasClass("input-active")
						) {
							$(this).closest(".mktoFieldWrap").removeClass("active");
						} else {
							$(this).closest(".mktoFieldWrap").addClass("active");
						}
						$(".ts-control > input").each(function (i, el) {
							if (!el.value || el.value == "") {
								el.placeholder = "Start typing...";
							}
						});
					}
					if (e.type == "focusout") {
						if ($(this).closest(".mktoFieldWrap").find("#Email").length > 0) {
							validateMarketoEmail();
						}
						if ($(this).val() == null || $(this).val() == "") {
							$(this).closest(".mktoFieldWrap").removeClass("active");
							if (
								$(
									".spz_t9003 form#mktoForm_2414 .mktoFormRow:nth-child(4) .mktoField .ts-control div:nth-child(1)",
								).length > 0
							) {
								$(".spz_t9003 .ts-control > input")
									.closest(".mktoFieldWrap")
									.addClass("active");
							}
						}
						$(this).closest(".mktoFieldWrap").removeClass("typing");
					}
				});

				// Checkbox
				$(".spz_t9003 .Form .mktoFieldWrap select#Country").on(
					"change",
					function () {
						$(
							".spz_t9003 .Form .mktoPlaceholderOpted_In__c-a label#LblOpted_In__c",
						).on("click", function () {
							if (
								$(
									".spz_t9003 .Form .mktoPlaceholderOpted_In__c-a .mktoFieldWrap",
								).hasClass("active")
							) {
								setTimeout(function () {
									$(
										".spz_t9003 .Form .mktoPlaceholderOpted_In__c-a .mktoFieldWrap",
									).removeClass("active");
								}, 100);
							} else {
								setTimeout(function () {
									$(
										".spz_t9003 .Form .mktoPlaceholderOpted_In__c-a .mktoFieldWrap",
									).addClass("active");
								}, 100);
							}
						});
					},
				);

				$(selector).each(function () {
					if ($(this).val() == null || $(this).val() == "") {
						$(this).closest(".mktoFieldWrap").removeClass("active");
					} else {
						$(this).closest(".mktoFieldWrap").addClass("active");
					}
				});

				$(selectSelector).change(function () {
					if ($(this).val() == null || $(this).val() == "") {
						$(this).closest(".mktoFieldWrap").removeClass("active");
						$(this).closest(".mktoFieldWrap").removeClass("filled");
					} else {
						$(this).closest(".mktoFieldWrap").addClass("active");
						if ($(this).is("select")) {
							$(this).closest(".mktoFieldWrap").addClass("filled");
						}
					}
				});

				//filled select
				$(selectSelector).each(function () {
					if (
						$(this).is("select") &&
						$(this).val() != "" &&
						$(this).val() != null
					) {
						$(this).closest(".mktoFieldWrap").addClass("filled");
					} else {
						$(this).closest(".mktoFieldWrap").removeClass("filled");
					}
				});

				function reCheckValidation() {
					setTimeout(function () {
						var errorShownFound = false;
						$(".mktoForm .mktoFieldWrap").each(function () {
							if (!$(this).find("#Country").length) {
								if (
									$(this).find(".mktoError").length > 0 &&
									$(this).find(".mktoError").css("display") != "none" &&
									errorShownFound == false
								) {
									$(this).addClass("error");
									errorShownFound = true;
								} else {
									$(this).removeClass("error");
								}
							}
						});
					}, 100);
					if ($(".spz_t9003 form .hide-row").length > 0) {
						var showedFileds = $("#FirstName,#LastName,#Email,#Company");
						var isnotNull = 0;
						showedFileds.each(function () {
							if (
								$(this).val() != "" &&
								$(this).val() != null &&
								!$(this).hasClass("mktoInvalid")
							) {
								isnotNull++;
							}
						});
						if (
							isnotNull == 3 &&
							showedFileds.closest(".mktoFieldWrap.active").length > 2
						) {
							$(".spz_t9003 form .mktoFormRow:nth-child(4)").slideDown("fast");
							$(".spz_t9003 form .hide-row").slideDown("fast");
						}
					}
				}

				$(".spz_t9003 .mktoForm").on("DOMSubtreeModified", function () {
					reCheckValidation();
				});

				// Marketo Form Validation
				var invalidDomains = [
					"@Aol.",
					"@seat.",
					"@Aussiemailmail.",
					"@merseymail.",
					"@muchomail.",
					"@pop.safe-mail.",
					"@vfemail.",
					"@click2mail.",
					"@e4ward.",
					"@gishpuppy.",
					"@guerrillamail.",
					"@mailinator .",
					"@spamgourmet.",
					"@spamex.",
					"@store.juno.",
					"@lycos.",
					"@TheFreeSite.",
					"@my.topicaplus.",
					"@findlaw.",
					"@keepandbeararms.",
					"@techemail.",
					"@incredimail.",
					"@en.speedy-mail-software.",
					"@mailpride.",
					"@mollymail.",
					"@pandaemail.sourceforge.",
					"@33MAIL.",
					"@freeola.",
					"@protonmail.",
					"@opera.",
					"@NoPeddlers.",
					"@nz11.",
					"@yandex.",
					"@zoho.",
					"@gmx.",
					"@tempr.email.",
					"@www.one.",
					"@tempinbox.",
					"@emailsensei.",
					"@emz.",
					"@fakeinbox.",
					"@filzmail.",
					"@greensloth.",
					"@hidemail.",
					"@trashmail.",
					"@jmail.ovh.",
					"@mail.ovh.",
					"@mailcatch.",
					"@mail-temporaire.",
					"@qip.ru.",
					"@maildrop.cc.",
					"@Lortemail.dk.",
					"@mytrashmail.",
					"@mailnesia.",
					"@mailnull.",
					"@no-spam.ws.",
					"@nervtmich.",
					"@notsharingmy.info.",
					"@nowmymail.",
					"@trashmail.",
					"@onewaymail.",
					"@otherinbox.",
					"@Safe-mail.",
					"@safersignup.",
					"@safersignup.",
					"@sharklasers.",
					"@shitmail.me.",
					"@sibmail.",
					"@sharpmail.co.uk.",
					"@spam4.me.",
					"@soodonims.",
					"@spamex.",
					"@temp-mail.",
					"@tempemail.",
					"@mytrashmail.",
					"@instantemailaddress.",
					"@trashmail.",
					"@yopmail.",
					"@yopmail.",
					"@wegwerfemail.",
					"@yopmail.",
					"@gmail.",
					"@hotmail.",
					"@yahoo.",
					"@outlook.",
					"@live.",
					"@ecologyfund.",
					"@Computermail.",
					"@.emailaccount.",
					"@emailchoice.",
					"@inbox.",
					"@swissmail.",
					"@mail.rediff.",
					"@i.aol.",
					"@UltimateEmail.",
					"@soltecsis.",
					"@meowmail.",
					"@apple.",
					"@aussiemail.au.",
					"@bigstring.",
					"@canada.",
					"@icqmail.",
					"@zilladog.",
					"@l8r.",
					"@futureme.",
					"@12free.co.",
					"@animail.",
					"@care2.",
					"@lavabit.",
					"@lpemail.",
					"@macgui.",
					"@webmail.co.",
					"@AsianAve.",
					"@burntmail.",
					"@fanmail.",
					"@thedoghousemail.",
					"@Address.",
					"@excite.",
					"@e-mol.",
					"@mail2web.",
					"@everyone.",
					"@About.",
					"@nativestar.",
					"@speedy-mail-software.",
					"@icloud.",
					"@me.",
					"@mac.",
					"@mail.",
					"@mochamail.",
					"@go.",
					"@prontomail.",
					"@hushmail.",
				];

				// Email Validation
				function validateEmail(email) {
					var re =
						/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					return re.test(String(email).toLowerCase());
				}
				function isEmailGood(email) {
					for (var i = 0; i < invalidDomains.length; i++) {
						var domain = invalidDomains[i];
						if (email.indexOf(domain) != -1) {
							return false;
						}
					}
					return true;
				}
				var validateMarketoEmail = function () {
					var email = form.vals().Email;
					var emailElem = form.getFormElem().find("#Email");
					if (!validateEmail(email)) {
						form.submitable(false);
						form.showErrorMessage(
							'Must be valid email. <span class="mktoerrordetail">example@yourdomain.com</span>',
							emailElem,
						);
						setTimeout(function () {
							emailElem.addClass("mktoInvalid");
							emailElem.removeClass("mktoValid");
						}, 50);
						return false;
					} else if (!isEmailGood(email)) {
						form.submitable(false);
						form.showErrorMessage("Please use your work email.", emailElem);
						setTimeout(function () {
							emailElem.addClass("mktoInvalid");
							emailElem.removeClass("mktoValid");
						}, 50);
						return false;
					} else {
						form.submitable(true);
						setTimeout(function () {
							emailElem.addClass("mktoValid");
							emailElem.removeClass("mktoInvalid");
						}, 50);
					}
				};
				form.getFormElem().find("#Email").keyup(validateMarketoEmail);
				form.getFormElem().find("#Email").focus(validateMarketoEmail);
				form.onValidate(function () {
					validateMarketoEmail();
					if (
						$("#FirstName").hasClass("mktoValid") &&
						$("#LastName").hasClass("mktoValid") &&
						$("#Company").hasClass("mktoValid") &&
						$("#Email").hasClass("mktoValid")
					) {
						$("#Email").focus();
					}
				});

				// Custom country search
				$.getScript(
					"tom-select.min.js",
					function (e) {
						console.log(TomSelect);
						$('.spz_t9003 form select option:contains("United States")').prop(
							"selected",
							true,
						);
						$('#Country option[value="United States"]').attr(
							"selected",
							"selected",
						);
						new TomSelect("#Country", {
							respect_word_boundaries: true,
							maxOptions: null,
							create: false,
							allowEmptyOption: true,
							onInitialize: function () {
								tsActiveSet();
							},
							onChange: function (value) {
								setTimeout(function () {
									if (value != "null" && value != "") {
										$("#Country")
											.closest(".mktoFieldWrap")
											.removeClass("error");
									} else {
										$("#Country").closest(".mktoFieldWrap").addClass("error");
									}
								}, 50);
							},
							onBlur: function () {
								tsActiveSet();
							},
						});

						//move States
						var set_first_country_intrl = undefined;
						$(document).on(
							"focus keyup change",
							"input#Country-ts-control",
							function () {
								set_first_country_intrl = setInterval(function () {
									if (
										$(
											'.ts-dropdown #Country-ts-dropdown .option[data-value="United States"]',
										).index() >= 5
									) {
										$(
											'.ts-dropdown #Country-ts-dropdown .option[data-value="United States"]',
										).insertBefore(
											jQuery(
												'.ts-dropdown #Country-ts-dropdown .option[data-value="---"]',
											),
										);
									}
									if (
										$(
											'.ts-dropdown #Country-ts-dropdown .option[data-value="Canada"]',
										).index() >= 5
									) {
										$(
											'.ts-dropdown #Country-ts-dropdown .option[data-value="Canada"]',
										).insertBefore(
											jQuery(
												'.ts-dropdown #Country-ts-dropdown .option[data-value="---"]',
											),
										);
									}
								});
							},
						);
					},
				);

				// select empty error first select
				$(document).on("blur", "#Country-ts-control", function (e) {
					var selectVal =
						".ts-dropdown #" + $(this).attr("aria-activedescendant");
					$(selectVal).click();
				});

				function tsActiveSet() {
					var tsInput = $(".spz_t9003 .ts-control > input");
					if (
						tsInput.closest(".ts-control").find(".item").length == 0 &&
						!tsInput.closest(".ts-wrapper").hasClass("input-active")
					) {
						tsInput.closest(".mktoFieldWrap").removeClass("active");
					} else {
						tsInput.closest(".mktoFieldWrap").addClass("active");
					}
				}

				form.onSubmit(function (form) {
					var finalCheckboxValue = jQuery(
						".unstyled .styled-checkbox:checkbox:checked",
					).map(function () {
						return jQuery(this).next().text();
					});
					finalCheckboxValue = finalCheckboxValue.get();
					finalCheckboxValue = finalCheckboxValue.toString();
					form.addHiddenFields({
						Application_Description__c: finalCheckboxValue,
					});
				});
			});
		}
		function loadScript(url) {
			return new Promise(function (resolve, reject) {
				let script = document.createElement("script");
				script.src = url;
				script.async = false;
				script.onload = function () {
					resolve(url);
				};
				script.onerror = function () {
					reject(url);
				};
				document.body.appendChild(script);
			});
		}
		let scripts = [
			"//Design-with.ntopology.com/js/forms2/js/forms2.min.js",
			"https://Design-with.ntopology.com/rs/341-JSR-605/images/edu-domains.js",
			"https://design-with.ntopology.com/rs/341-JSR-605/images/freemail.js",
			"https://assets.codepen.io/250687/teknkl-formsplus-emailpattern-1.0.3.js",
		];
		let promises = [];
		scripts.forEach(function (url) {
			promises.push(loadScript(url));
		});
		Promise.all(promises)
			.then(function () {
				var MktoForms2Interval = setInterval(function () {
					if (typeof MktoForms2 != "undefined") {
						clearInterval(MktoForms2Interval);
						MktoForms2.loadForm(
							"//Design-with.ntopology.com",
							"341-JSR-605",
							2414,
						);
						formchange();
					}
				});
			})
			.catch(function (script) {
				console.log(script + " failed to load");
			});

		// Structure Type (Section 2)
		$(".spz_t9003 #main-content .hero-section").after(`<section class="lattice__Types">
		<div class="container">
		<h2>Lattice structure types</h2>
		<div class="types__content">
		<ul class="accordion">
		  <li>
		    <p class="toggle iconChange accrd1" href=#>Beam</p>
		    <p class="inner show" style="display: block;">Create high stiffness-to-weight beams that meet stress conditions while reducing overall weight. Choose from 14+ beam unit cell types.</p>
		  </li>
		  
		  <li>
		    <p class="toggle accrd2" href=#>Honeycombs</p>
		    <p class="inner">Fill volumes with honeycombs to increase stiffness, load-bearing capacity, and impact resistance.</p>
		  </li>
		  
		  <li>
		    <p class="toggle accrd3" href=#>Stochastic</p>
		    <p class="inner">Replace solid elements with porous lattice structures that behave like foam, bone, or other materials.</p>
		  </li>
		  
		  <li>
		    <p class="toggle accrd4" href=#>TPMS</p>
		    <p class="inner">Design products with increased surface area, higher stiffness, and fewer parts by using TPMS structures.</p>
		  </li>
		</ul>
		<div class="accordionDisplay">
			<picture>
    		  <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/accordionDisplayMobile.jpg">
              <source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/accordionDisplayTablet.jpg">
              <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/accordionDisplayDesktop.jpg" alt="Lattice Types">
            </picture>
		</div>
		</div>
		</div>
		</section>`);

		// Accordion Logic
		$(".spz_t9003 .lattice__Types .toggle").click(function (e) {
			e.preventDefault();
			let $this = $(this);
			if ($this.next().hasClass("show")) {
				$this.next().removeClass("show");
				$this.removeClass("iconChange");
				$this.next().slideUp(350);
			} else {
				$this.parent().parent().find("li .inner").removeClass("show");
				$this.parent().parent().find("li .toggle").removeClass("iconChange");
				$this.parent().parent().find("li .inner").slideUp(350);
				$this.next().toggleClass("show");
				$this.addClass("iconChange");
				$this.next().slideToggle(350);
			}
		});

		// Benefits Section
		$(".spz_t9003 .lattice__Types").after(`<div class="lattice__benefits">
		<div class="container">
		<h3>Benefits of lattice structures</h3>
		<div class="counter__Container">
		<div class="counter__Boxes">
		<h3>Benefits of lattice structures</h3>
		<button class="demoBlue">Get a demo</button>
		</div>
		
		<div class="counter__Boxes">
		<p class="counter">01</p>
		<div><h3>Generate lattices in seconds</h3><p>Generate lattice structures with 50,000+ unit cells in seconds.</p></div>
		</div>
		
		<div class="counter__Boxes">
		<p class="counter">02</p>
		<div><h3>Complete design control</h3><p>Adjust lattice parameters including type, size, density, and other parameters.</p></div>
		</div>
		
		<div class="counter__Boxes">
		<p class="counter">03</p>
		<div><h3>Reusable design processes</h3><p>Create design workflows to automate and scale latticing across projects.</p></div>
		</div>
		</div>
		
		<a href="#" class="demoBlue mediumDemo">Get a demo</a>
		</div>
		</div>`);

		// Stats Section
		$(".spz_t9003 .lattice__benefits").after(`<div class="lattice__stats">
		<div class="container">
		<div class="column mediumStats"><img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/stats.gif" alt="Lattice Stats"/></div>
		<div class="column_Container">
		<div class="column">
		<ul class="stats">
		<li><h3>66%</h3><p>Reduced cost</p></li>
		<li><h3>38%</h3><p>Reduced pressure drops</p></li>
		</ul>
		</div>
		<div class="column"><img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/stats.gif" alt="Lattice Stats"/></div>
		<div class="column">
		<ul class="stats rtlStats">
		<li><h3>44%</h3><p>Decrease in weight</p></li>
		<li><h3>60%</h3><p>Decrease in components</p></li>
		</ul>
		</div>
		</div>
		</div>
		</div>`);

		// Trusted Slider
		$(".spz_t9003 .lattice__stats").after(`<div class="trusted__slider">
	    <div class="container">
	    <h3>Trusted by <br class="mobileSpace">world-class teams</h3>
	    <div class="slider__container">
		    <div class="slider__content">
				<div class="content__container firstSlide"><div class="content__content"><p>â€œWith nTopology, we created a powerful and unique additive design. It wouldnâ€™t be possible to create such a component with a traditional CAD system.â€</p><div class="author__team"><p>Martin Blanke</p><p>Project Engineer, DMG MORI</p></div></div></div>
				<div class="content__container"><div class="content__content"><p>â€œThis product has been hugely successful for us, and this is definitely in part due to the lattice structure that was created by nTopology.â€</p><div class="author__team"><p>Beth Stuart</p><p>Senior Design Engineer, SI-BONE</p></div></div></div>
				<div class="content__container"><div class="content__content"><p>â€œnTopology is different from any other design tools Iâ€™ve used before. It remapped the way I think about 3D printing. Becoming more familiar with the software has increased my Additive Design IQ.â€</p><div class="author__team"><p>Ross Brown</p><p>AM Engineer, Marrotta Controls</p></div></div></div>
				<div class="content__container"><div class="content__content"><p>â€œnTopology was already a very robust and first-of-its-kind tool. The new latticing technology is a major upgrade compared to anything else Iâ€™ve seen in the past.â€</p><div class="author__team"><p>Chelsea Cummings</p><p>Application Engineer, The Barnes Group Advisors</p></div></div></div>
			</div>
		</div>
	    
	    </div>
	    </div>`);

		// Application Section
		$(".spz_t9003 .trusted__slider").after(`<div class="lattice__application">
	    <div class="container">
	    <h3>Applications of lattice structures</h3>
	    <div class="tabs__container">
	    <ul class="application__tabs">
	    <li class="active" tabIndex="1">Lightweighting</li>
	    <li tabIndex="2">Heat exchangers</li>
	    <li tabIndex="3">Energy absorption</li>
	    <li tabIndex="4">Osseointegration</li>
	    <li tabIndex="5">Architected materials</li>
	    <li tabIndex="6">Textures</li>
		<li tabIndex="7" class="hiddenTab"></li>
	    </ul>
	    </div>
	    <div class="application__content">
		    <div class="app__content__container active">
		    	<picture>
	    		  <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/lightweight-mobile.jpg">
                  <source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/lightweight-tablet.jpg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/lightweight.jpg" alt="Lightweighting">
                </picture>
                <p>Minimize weight and material usage to optimize aerospace, automotive, or medical parts. Fill the volume of a part with lattices to replace unneeded materials while maintaining structural integrity.</p>
		    </div>
		    <div class="app__content__container">
		    	<picture>
	    		  <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/heat-exhangers-mobile.jpg">
                  <source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/heat-exhangers-tablet.jpg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/heat-exhangers.jpg" alt="Heat Exchangers">
                </picture>
                <p>Build TPMS lattices that guide heat flow and increase surface area. Maximize heat transfer in cores. Adjust lattice type, thickness, orientation, length, and angles to meet performance requirements. </p>
		    </div>
		    <div class="app__content__container">
		    	<picture>
	    		  <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/lightweight-mobile.jpg">
                  <source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/lightweight-tablet.jpg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/lightweight.jpg" alt="Lightweighting">
                </picture>
                <p>Replace materials with lattice structures that absorb vibration, sound, and shock. Simulate stress performance and adjust lattices. Improve sports equipment and industrial product performance.</p>
		    </div>
		    <div class="app__content__container">
		    	<picture>
	    		  <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/lightweight-mobile.jpg">
                  <source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/lightweight-tablet.jpg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/lightweight.jpg" alt="Lightweighting">
                </picture>
                <p>Design implants with bone-like lattice structures to promote bone growth. Increase osseointegration and decrease post-surgery rehabilitation times.</p>
		    </div>
		    <div class="app__content__container">
		    	<picture>
	    		  <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/architected-materials-mobile.jpg">
                  <source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/architected-materials-tablet.jpg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/architected-materials.jpg" alt="Architected Materials">
                </picture>
                <p>Create complex geometries that behave like wood, foam, bone, injected rubber, hard plastic, and more. Replace solid elements to reduce weight and improve performance.</p>
		    </div>
		    <div class="app__content__container">
		    	<picture>
	    		  <source media="(max-width:767px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/lightweight-mobile.jpg">
                  <source media="(max-width:1023px)" srcset="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/lightweight-tablet.jpg">
                  <img src="//res.cloudinary.com/spiralyze/image/upload/f_auto/nTopology/9003/lightweight.jpg" alt="Lightweighting">
                </picture>
                <p>Create textures using custom lattices that improve aesthetics and performanceâ€”medical devices, electronics, and consumer wearables.</p>
		    </div>
	    </div>
	    </div>
	    </div>`);

		// Tab Click Logic
		$(".spz_t9003 .application__tabs li").on("click", function () {
			var index = $(this).attr("tabIndex");
			$(".spz_t9003 .lattice__application ul li").removeClass("active");
			$(`.spz_t9003 .lattice__application ul li:nth-child(${index})`).addClass(
				"active",
			);
			$(
				".spz_t9003 .application__content .app__content__container",
			).removeClass("active");
			$(
				`.spz_t9003 .application__content .app__content__container:nth-child(${index})`,
			).addClass("active");
		});

		// Get Demo Section
		$(".spz_t9003 .lattice__application").after(
			`<div class="demoSection"><div class="container"><div class="demoContainer"><h3>Get nTopology demo</h3><p>See how engineers generate complex lattices in seconds.</p><button>Get a demo</button></div></div></div>`,
		);

		// Footer
		$(".spz_t9003 .demoSection").after(`<div class="footer_section"><div class="container"><div class="footer_t9001"><a href="https://ntopology.com/"><img class="footerLogo" src="//res.cloudinary.com/spiralyze/image/upload/nTopology/9003/logo-nTopology.svg" alt="nTopology Logo"></a>
	    <div class="FooterSocial">
	    <p>Â© 2023 nTopology, Inc. All Rights Reserved.</p>
	    <ul class="footerSocials">
	    	<li>
	    	<a href="https://www.instagram.com/ntopology/" target="_self">
	    	<img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/2003-home-page-major-redesign-features/instagram.svg" alt="instagram">
	    	</a>
	    	</li>
	    	<li>
	    	<a href="https://twitter.com/ntopology" target="_self">
	    	<img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/2003-home-page-major-redesign-features/twitter.svg" alt="twitter">
	    	</a>
	    	</li>
	    	<li>
			<a href="https://www.linkedin.com/company/ntopology/" target="_self">
			<img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/2003-home-page-major-redesign-features/linked-in.svg" alt="linked-in">
			</a>
			</li>
			<li>
			<a href="https://www.youtube.com/c/ntopology" target="_self">
			<img src="//res.cloudinary.com/spiralyze/image/upload/nTopology/2003-home-page-major-redesign-features/Youtube.svg" alt="youtube">
			</a>
			</li>
	    </ul>
	    </div>
	    </div></div></div>`);

		$(".spz_t9003 ul.footerSocials li").hover(
			function () {
				$(this).find("a").css("opacity", "100%");
				$(this).prevAll("li").children("a").css("opacity", "50%");
				$(this).nextAll("li").children("a").css("opacity", "50%");
			},
			function () {
				$(".spz_t9003 ul.footerSocials a").removeAttr("style");
			},
		);

		// Other section CTA interaction
		$(".spz_t9003 .demoBlue, .spz_t9003 .demoContainer button").click(
			function () {
				$("html, body").animate(
					{
						scrollTop: $(".spz_t9003 .Form").offset().top - 20,
					},
					"slow",
				);
				return false;
			},
		);

		$.getScript(
			"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js",
			function () {
				var rev = $(".slider__content");
				rev
					.on("init", function (event, slick, currentSlide) {
						var cur = $(slick.$slides[slick.currentSlide]),
							next = cur.next(),
							afternext = cur.next().next(),
							afternextNext = cur.next().next().next(),
							prev = cur.prev();
						beforeprev = cur.prev().prev();
						beforeprevPrev = cur.prev().prev().prev();

						prev.addClass("slick-sprev");
						beforeprev.addClass("slick-beforeprev");
						beforeprevPrev.addClass("slick-beforeprev");
						next.addClass("slick-snext");
						afternext.addClass("slick-afternext");
						afternextNext.addClass("slick-afternextNext");
						cur
							.removeClass("slick-snext")
							.removeClass("slick-sprev")
							.removeClass("slick-beforeprev")
							.removeClass("slick-afternext")
							.removeClass("slick-afternextNext");

						slick.$prev = prev;
						slick.$beforeprev = beforeprev;
						slick.$beforeprevPrev = beforeprevPrev;
						slick.$next = next;
						slick.$afterNext = afternext;
						slick.$afternextNext = afternextNext;
					})
					.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
						var cur = $(slick.$slides[nextSlide]);

						slick.$beforeprevPrev.removeClass("slick-beforeprev");
						slick.$beforeprev.removeClass("slick-beforeprev");
						slick.$prev.removeClass("slick-sprev");
						slick.$next.removeClass("slick-snext");
						slick.$afterNext.removeClass("slick-afternext");
						slick.$afternextNext.removeClass("slick-afternextNext");

						(next = cur.next()),
							(afternext = cur.next().next()),
							(afternextNext = cur.next().next().next()),
							(prev = cur.prev());
						beforeprev = cur.prev().prev();
						beforeprevPrev = cur.prev().prev().prev();

						beforeprevPrev.prev().prev().prev();
						beforeprev.prev().prev();
						prev.prev();
						prev.next();
						afternext.next().next();
						afternextNext.next().next().next();

						prev.addClass("slick-sprev");
						beforeprev.addClass("slick-beforeprev");
						beforeprevPrev.addClass("slick-beforeprev");
						next.addClass("slick-snext");
						afternext.addClass("slick-afternext");
						afternextNext.addClass("slick-afternextNext");

						slick.$prev = prev;
						slick.$beforeprev = beforeprev;
						slick.$beforeprevPrev = beforeprevPrev;
						slick.$next = next;
						slick.$afterNext = afternext;
						slick.$afternextNext = afternextNext;

						cur
							.removeClass("slick-snext")
							.removeClass("slick-sprev")
							.removeClass("slick-beforeprev")
							.removeClass("slick-afternext");

						// For Arrow Left
						if (nextSlide > 0) {
							$(".spz_t9003 .trusted__slider .slick-arrow.arrow-left").addClass(
								"active",
							);
						} else {
							$(
								".spz_t9003 .trusted__slider .slick-arrow.arrow-left",
							).removeClass("active");
						}

						// For Arrow Right
						if (nextSlide < 3) {
							$(
								".spz_t9003 .trusted__slider .slick-arrow.arrow-right",
							).addClass("active");
						} else {
							$(
								".spz_t9003 .trusted__slider .slick-arrow.arrow-right",
							).removeClass("active");
						}
					});
				rev.slick({
					speed: 1000,
					arrows: true,
					dots: true,
					focusOnSelect: true,
					prevArrow:
						'<button class="arrow-left"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.707 8.99992L7.12124 8.99992L10.4141 5.70703L8.99993 4.29282L3.29282 9.99992L8.99992 15.707L10.4141 14.2928L7.12124 10.9999L16.707 10.9999L16.707 8.99992Z" fill="black"/></svg></button>',
					nextArrow:
						'<button class="arrow-right active"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.29297 8.99992L12.8788 8.99992L9.58586 5.70703L11.0001 4.29282L16.7072 9.99992L11.0001 15.707L9.58586 14.2928L12.8788 10.9999L3.29297 10.9999L3.29297 8.99992Z" fill="black"/></svg></button>',
					infinite: false,
					accessibility: false,
					centerMode: true,
					slidesPerRow: 1,
					slidesToShow: 1,
					slidesToScroll: 1,
					centerPadding: "0",
					waitForAnimate: false,
					swipe: true,
					customPaging: function (slider, i) {
						return "";
					},
				});

				// Keyboard Control when in view
				$.fn.isInViewport = function () {
					var elementTop = $(this).offset().top;
					var elementBottom = elementTop + $(this).outerHeight();

					var viewportTop = $(window).scrollTop();
					var viewportBottom = viewportTop + $(window).height();

					return elementBottom > viewportTop && elementTop < viewportBottom;
				};
				$(document).on("keydown", function (e) {
					if ($(".spz_t9003 .trusted__slider").isInViewport()) {
						if (e.keyCode == 37) {
							rev.slick("slickPrev");
						}
						if (e.keyCode == 39) {
							rev.slick("slickNext");
						}
					}
				});

				// Header Logo Slider
				$(window)
					.on("resize", function () {
						if (window.innerWidth < 768) {
							if (
								!$(".spz_t9003 .picWrap .banner__Logos").hasClass(
									"slick-initialized",
								)
							) {
								$(".spz_t9003 .picWrap .banner__Logos").slick({
									speed: 12000,
									autoplay: true,
									autoplaySpeed: 0,
									focusOnSelect: false,
									cssEase: "linear",
									variableWidth: true,
									infinite: true,
									arrows: false,
									swipe: false,
									draggable: false,
									buttons: false,
									slidesToShow: 4,
									slidesToScroll: 1,
								});
							}
						} else {
							$(".spz_t9003 .picWrap .banner__Logos").each(function () {
								if ($(this).hasClass("slick-initialized")) {
									$(this).slick("unslick");
								}
							});
						}
					})
					.resize();

				// Application Tabs Slider
				// Using Mouse
				const slider = document.querySelector(".spz_t9003 .application__tabs");
				let isDown = false;
				let startX;
				let scrollLeft;
				let rightBackup = slider.scrollLeft;

				slider.addEventListener("mousedown", (e) => {
					isDown = true;
					slider.classList.add("active");
					startX = e.pageX - slider.offsetLeft;
					scrollLeft = slider.scrollLeft;
				});

				slider.addEventListener("mouseleave", () => {
					isDown = false;
					slider.classList.remove("active");
				});

				slider.addEventListener("mouseup", () => {
					isDown = false;
					slider.classList.remove("active");
				});

				slider.addEventListener("mousemove", (e) => {
					if (!isDown) return; // stop the fn from running
					e.preventDefault();
					const x = e.pageX - slider.offsetLeft;
					const walk = (x - startX) * 2;
					slider.scrollLeft = scrollLeft - walk;
					gradientSetup();
				});

				//touchEvents
				slider.addEventListener("touchstart", (e) => {
					isDown = true;
					slider.classList.add("active");
					var touch = e.touches[0];
					startX = touch.pageX - slider.offsetLeft;
					scrollLeft = slider.scrollLeft;
				});
				slider.addEventListener("touchend", () => {
					isDown = false;
					slider.classList.remove("active");
				});
				slider.addEventListener("touchcancel", () => {
					isDown = false;
					slider.classList.remove("active");
				});
				slider.addEventListener("touchmove", (e) => {
					if (!isDown) return; // stop the fn from running
					e.preventDefault();
					var touch = e.touches[0];
					const x = touch.pageX - slider.offsetLeft;
					const walk = (x - startX) * 1;
					slider.scrollLeft = scrollLeft - walk;
					gradientSetup();
				});

				// Horizontal Scroll
				slider.addEventListener("wheel", (evt) => {
					// evt.preventDefault();
					slider.scrollLeft += evt.deltaX;
					gradientSetup();
				});

				// For Tabs Corner Gradient
				function gradientSetup() {
					if (slider.scrollLeft == 0) {
						$(".spz_t9003 .lattice__application .tabs__container").addClass(
							"LeftEnd",
						);
					} else {
						$(".spz_t9003 .lattice__application .tabs__container").removeClass(
							"LeftEnd",
						);
					}

					var rect = document
						.querySelector(".spz_t9003 .lattice__application li:last-child")
						.getBoundingClientRect();
					var containerWidth =
						$(".spz_t9003 .lattice__application .tabs__container").width() - 40;
					if (rect.right <= containerWidth + 2) {
						$(".spz_t9003 .lattice__application .tabs__container").addClass(
							"RightEnd",
						);
					} else {
						$(".spz_t9003 .lattice__application .tabs__container").removeClass(
							"RightEnd",
						);
					}
				}
				$(window).on("resize", function () {
					gradientSetup();
				});
				gradientSetup();

				// Auto Scroll Tabs
				var tabCount = 1;
				function autoLogic() {
					if (tabCount == 1) {
						$(".spz_t9003 .lattice__application ul").animate(
							{ scrollLeft: "0" },
							1000,
						);
						$(".spz_t9003 .lattice__application .tabs__container").addClass(
							"LeftEnd",
						);
						$(".spz_t9003 .lattice__application .tabs__container").removeClass(
							"RightEnd",
						);
					}
					$(".spz_t9003 .lattice__application ul li").removeClass("active");
					$(
						`.spz_t9003 .lattice__application ul li:nth-child(${tabCount})`,
					).addClass("active");
					$(
						".spz_t9003 .application__content .app__content__container",
					).removeClass("active");
					$(
						`.spz_t9003 .application__content .app__content__container:nth-child(${tabCount})`,
					).addClass("active");

					function adjustTabs() {
						if ($(window).width() < 1024 && $(window).width() >= 768) {
							if (tabCount == 2) {
								if (
									$(".spz_t9003 .lattice__application ul").scrollLeft() < 300
								) {
									$(".spz_t9003 .lattice__application ul").animate(
										{ scrollLeft: "0" },
										1000,
									);
								} else if (
									$(".spz_t9003 .lattice__application ul").scrollLeft() > 300
								) {
									$(".spz_t9003 .lattice__application ul").animate(
										{ scrollLeft: "0" },
										1000,
									);
									$(
										".spz_t9003 .lattice__application .tabs__container",
									).addClass("LeftEnd");
								}
							} else if (tabCount > 2 && tabCount < 4) {
								if (
									$(".spz_t9003 .lattice__application ul").scrollLeft() < 300
								) {
									$(".spz_t9003 .lattice__application ul").animate(
										{ scrollLeft: "+=300" },
										1000,
									);
									$(
										".spz_t9003 .lattice__application .tabs__container",
									).removeClass("LeftEnd");
								} else if (
									$(".spz_t9003 .lattice__application ul").scrollLeft() > 300
								) {
									$(".spz_t9003 .lattice__application ul").animate(
										{ scrollLeft: "-=300" },
										1000,
									);
									$(
										".spz_t9003 .lattice__application .tabs__container",
									).removeClass("LeftEnd");
								}
							} else if (tabCount >= 4) {
								if (
									$(".spz_t9003 .lattice__application ul").scrollLeft() < 900
								) {
									$(".spz_t9003 .lattice__application ul").animate(
										{ scrollLeft: "+=600" },
										1000,
									);
									$(
										".spz_t9003 .lattice__application .tabs__container",
									).removeClass("LeftEnd");
									$(
										".spz_t9003 .lattice__application .tabs__container",
									).addClass("RightEnd");
								} else if (
									$(".spz_t9003 .lattice__application ul").scrollLeft() > 900
								) {
									$(".spz_t9003 .lattice__application ul").animate(
										{ scrollLeft: "-=600" },
										1000,
									);
									$(
										".spz_t9003 .lattice__application .tabs__container",
									).removeClass("LeftEnd");
									$(
										".spz_t9003 .lattice__application .tabs__container",
									).addClass("RightEnd");
								}
							}
						} else if ($(window).width() < 768) {
							if (tabCount == 2) {
								if (
									$(".spz_t9003 .lattice__application ul").scrollLeft() < 300
								) {
									$(".spz_t9003 .lattice__application ul").animate(
										{ scrollLeft: "0" },
										1000,
									);
								} else if (
									$(".spz_t9003 .lattice__application ul").scrollLeft() > 300
								) {
									$(".spz_t9003 .lattice__application ul").animate(
										{ scrollLeft: "0" },
										1000,
									);
									$(
										".spz_t9003 .lattice__application .tabs__container",
									).addClass("LeftEnd");
								}
							} else if (tabCount == 3) {
								if (
									$(".spz_t9003 .lattice__application ul").scrollLeft() < 300
								) {
									$(".spz_t9003 .lattice__application ul").animate(
										{ scrollLeft: "+=300" },
										1000,
									);
									$(
										".spz_t9003 .lattice__application .tabs__container",
									).removeClass("LeftEnd");
								} else if (
									$(".spz_t9003 .lattice__application ul").scrollLeft() > 300
								) {
									$(".spz_t9003 .lattice__application ul").animate(
										{ scrollLeft: "-=350" },
										1000,
									);
									$(
										".spz_t9003 .lattice__application .tabs__container",
									).removeClass("LeftEnd");
								}
							} else if (tabCount == 4) {
								if (
									$(".spz_t9003 .lattice__application ul").scrollLeft() < 350
								) {
									$(".spz_t9003 .lattice__application ul").animate(
										{ scrollLeft: "+=50" },
										1000,
									);
									$(
										".spz_t9003 .lattice__application .tabs__container",
									).removeClass("LeftEnd");
									$(
										".spz_t9003 .lattice__application .tabs__container",
									).removeClass("RightEnd");
								} else if (
									$(".spz_t9003 .lattice__application ul").scrollLeft() > 350
								) {
									$(".spz_t9003 .lattice__application ul").animate(
										{ scrollLeft: "-=200" },
										1000,
									);
									$(
										".spz_t9003 .lattice__application .tabs__container",
									).removeClass("LeftEnd");
									$(
										".spz_t9003 .lattice__application .tabs__container",
									).removeClass("RightEnd");
								}
							} else if (tabCount > 4) {
								$(".spz_t9003 .lattice__application ul").animate(
									{ scrollLeft: "+=250" },
									1000,
								);
								$(
									".spz_t9003 .lattice__application .tabs__container",
								).removeClass("LeftEnd");
								$(".spz_t9003 .lattice__application .tabs__container").addClass(
									"RightEnd",
								);
							}
						}
					}
					adjustTabs();

					tabCount++;
					if (tabCount > 6) {
						tabCount = 1;
					}
				}
				var autoTabs = setInterval(function () {
					autoLogic();
				}, 5000);
				$(`.spz_t9003 .lattice__application li`).on("click", function () {
					var index = $(this).attr("tabIndex");
					tabCount = index;
				});
			},
		);
	})(jQuery);
}
