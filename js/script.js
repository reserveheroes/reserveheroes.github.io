
biosDaddy = "It wasn't easy growing up with a single mother in the hood, especially when he was bullied for having small testicles. He was to tired and lazy to do anything against the bullies, untill one day he accidently mixed together a special mix that made him strong."
biosYamon = "He grew up in southern Jamaica and lived a good life as a fishermen untill one day his friends played a prank on him. After he was hit on the head by a giant coconut and stung by a poisonous cactus at the same time, he went a little crazy and became Yamon."

// Scrolls to the selected element.
function scrollToElement(element) {
	$('html, body').animate({
        scrollTop: $(element).offset().top
	}, 500, );
	
};

// Loads a image and opens the preview layer.
function previewImage(imageFilePath) {
	$("#screenshot-preview").attr("src", imageFilePath);
	$("#overlay-wrapper").css( "visibility", "visible" );
};
function previewRemove() {
	$("#overlay-wrapper").css( "visibility", "hidden" );
 };

// Loads the character avatar and text from the location.
function previewCharacter(characterName) {
	$("#character-portrait").attr("src", "img/" + characterName.replace(" ", "") + "/portrait.png");
	$("#character-name").text(characterName);
	if(characterName == "Yamon"){
		$("#character-bios").text(biosYamon);
	}else if(characterName == "Big Daddy"){
		$("#character-bios").text(biosDaddy);
	}
};

// Scrolls up the home meu onload.
$(document).ready(function() {
	$('html, body').animate({
        scrollTop: $("#home-wrapper").offset().top
	}, 100, );
});


// Firebase push Email function 

function saveToFirebase(email) {
	var emailObject = {
	    email: email
	};
    
	firebase.database().ref('subscription-entries').push(email).set(emailObject)
	    .then(function(snapshot) {
		success(); // some success method
	    }, function(error) {
		console.log('error' + error);
		error(); // some error method
	    });
    }
    
    