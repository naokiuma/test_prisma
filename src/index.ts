import { PrismaClient } from "@prisma/client";

//yarn run ts-node-dev src/index.ts で実行
//なお、パラメータでlogを渡せば実行時にsqlも出力できる。
const prisma = new PrismaClient({
	log: [
	  {
		emit: 'event',
		level: 'query',
	  },
	]
});

prisma.$on('query', (e) => {
	console.log('Query: ' + e.query)
})

async function main() {
	//ここに実行クエリを書く

	//1レコード作る場合はcreate
	// const user = await prisma.user.create({
	// 	data:{
	// 		name:'Alice',
	// 	},
	// });
	// console.log(user);


	//複数レコード作る場合はcreateMany
	// const user2 = await prisma.user.createMany({
	// 	data:[
	// 		{
	// 			name:'carol2',
	// 		},
	// 		{
	// 			name:'dave2',
	// 		},
	// 	]
	// });
	// console.log(user2);



	//ユニークな値を探す
	let user = await prisma.user.findUnique({
		where: {
		  id: 3,
		},
	});
	console.log(user);

	//この場合、nameはユニークではないのでエラー。何気にすごい！
	// user = await prisma.user.findUnique({
	// 	where: {
	// 	  name: "Alice", // 型エラー
	// 	},
	// });

	// let user = await prisma.user.findMany({
	// 	orderBy: {
	// 	  id: 'desc',
	// 	},
	// });
	// console.log(user);
	
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async() =>{
		await prisma.$disconnect;
	})