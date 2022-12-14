const { Composer } = require('telegraf');
const Markup = require('telegraf/markup');

require('dotenv').config();
const adminId = process.env.ADMIN_ID;

const composer = new Composer();

composer.command('start', async (ctx) => {
	try {
		if (ctx.update.message.from.id == adminId) {
			await ctx.replyWithHTML(
				`
			 <b> Foydalanuvchilar haqida ma'lumot </b> 
		 `,
				Markup.keyboard([
					[
						{
							text: "๐ฅ Foydalanuvchilar ro'yxati",
						},
						{
							text: 'โ๏ธ Maxsus savollar',
						},
					],
					[
						{
							text: "๐ Foydalanuvchilarni qidirish"
						},
						{
							text: "๐ Savollarni qidirish",
						}
						
					]
				])
					.oneTime()
					.resize()
					.extra(),
			);
		} else {
			await ctx.replyWithHTML(
				`
			 <b> Tilni tanlang ๐บ๐ฟ </b>  <b> Choose language ๐ฌ๐ง </b>  <b> ะัะฑะตัะธัะต ัะทัะบ ๐ท๐บ </b>
		 `,
				Markup.inlineKeyboard([
					Markup.callbackButton("๐บ๐ฟ O'zbekcha", 'uz'),
					Markup.callbackButton('๐ฌ๐ง English', 'en'),
					Markup.callbackButton('๐ท๐บ ะ ัััะบะธะน', 'ru'),
				]).extra(),
			);
		}
	} catch (e) {
		console.error('cant handle start command', e);
	}
});

module.exports = composer;
