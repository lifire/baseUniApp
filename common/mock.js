const Mock = require('mockjs')

const homeData = Mock.mock({
    'bannerList|5': [{
        'bannerUuid|+1': 1,
		'bannerImgPath': Mock.Random.image('720x344', '#ffcc33', '#FFF', 'jpg'),
		'colorCode': '#000',
		'isOutLink': [0,1,2],
		'appLinkType': '',
		'bannerLinkUrl': '',
		'bannerThumbnail':'',
		'bannerSynopsis':'',
		'bannerTitle':''
    }],
	'courseList|10':[{
		'cover': Mock.Random.image('144x192', Mock.Random.color(), '#FFF', 'jpg'),
		'title': Mock.Random.ctitle(),
		'author_name': Mock.Random.cname(),
		'published_at': Mock.mock('@datetime("yyyy/MM/dd-HH:mm")'),
		'teacher': Mock.Random.cname(),
		'userNum|1-100': 1,
		'term|1-30': 1,
		'price': 199.0
	}],
	'courseList2|10':[{
		'cover': Mock.Random.image('144x192', Mock.Random.color(), '#FFF', 'jpg'),
		'title': Mock.Random.ctitle(),
		'author_name': Mock.Random.cname(),
		'published_at': Mock.mock('@datetime("yyyy/MM/dd-HH:mm")'),
		'teacher': Mock.Random.cname(),
		'userNum|1-100': 1,
		'term|1-30': 1,
		'price': 199.0
	}]
})

// module.exports = {
// 	MockData: homeData
// }

export default {
	homeData
}