enum MemberShip {
	Simple,
	Standard,
	Premium,
}

const membership = MemberShip.Standard;
const membershipReverse = MemberShip[2];

console.log(membership);
console.log(membershipReverse);

enum SocialMedia {
	VK = 'VK',
	FACEBOOK = 'FACEBOOK',
	INSTAGRAM = 'INSTAGRAM',
}

const social = SocialMedia.INSTAGRAM;

console.log(social);
