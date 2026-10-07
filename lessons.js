/* Research notes shown on the Lessons tab. Gathered Oct 7, 2026 from couples' own accounts,
   forums, buyer reviews and official pages (no ads or paid posts). Tags: c = 3+ independent
   sources, s = 2 sources, 1 = a single account, o = official rule. */
window.LESSONS = {
  updated: '2026-10-07',
  intro: {
    en: 'What real couples, buyers and travelers reported, in English and Chinese sources. Vendor marketing, paid posts and SEO listicles were left out. Each finding is tagged by how many independent sources back it.',
    zh: '这里汇总了真实新人、买家和旅客的经验，中英文来源各占相当比例。商家广告、软文和营销清单一律不用。每条结论都标明有多少独立来源支持。'
  },
  tags: {
    c: { en: 'Consensus', zh: '多方印证' },
    s: { en: 'Two sources', zh: '两个来源' },
    1: { en: 'One account', zh: '个例' },
    o: { en: 'Official', zh: '官方规定' }
  },
  actions: {
    title: { en: 'What this changes', zh: '对我们计划的影响' },
    note: { en: 'Each of these is already a task in the plan.', zh: '以下每一条都已加进计划。' },
    items: [
      { urgent: true, h: { en: "Start relatives' visa applications now, not in November", zh: '亲属签证现在就开始办，别等到11月' }, p: { en: 'Beijing interviews are about 4.5 months out. Forms and booking are online, so relatives can start now with help over WeChat. Use the November trip for mock interviews and their document folder.', zh: '北京面签要排约4.5个月。表格和预约都在网上，现在就可以通过微信帮他们办。11月回国时再当面模拟面签、整理材料。' } },
      { urgent: true, h: { en: 'Buy the dress off the rack in Suzhou, and carry it home', zh: '在苏州买现货婚纱，自己带回来' }, p: { en: 'Full custom takes 1 to 1.5 months. The top complaint at Huqiu is getting a different dress from the one you tried on. Deposit only, pay after the final try-on, film it, never have it posted.', zh: '全定制要1到1.5个月。虎丘最常见的投诉是到手的和试穿的不是同一件。只付定金，最后试穿满意再付尾款，穿上录视频，千万别邮寄。' } },
      { urgent: true, h: { en: 'Have the suit made in Shanghai, not Suzhou', zh: '西装去上海做，不在苏州' }, p: { en: 'South Bund fabric market tailors make a suit in 5 to 10 days. Suzhou workshops quote about a month.', zh: '上海南外滩轻纺面料市场5到10天能做好；苏州的作坊一般要一个月左右。' } },
      { h: { en: 'Bring everything back in your luggage', zh: '东西都放行李带回来' }, p: { en: 'Two of you filing together get $1,600 duty-free, and the new 12.5% China tariff does not apply to personal baggage. Anything shipped later pays full duty plus 12.5%.', zh: '两人合并申报共 $1,600 免税，个人行李也不收新的12.5%对华关税。事后邮寄则要交全额关税再加12.5%。' } },
      { h: { en: 'Agree the tea ceremony order and gift money rules with both families now', zh: '现在就和双方家庭说好敬茶顺序和礼金归属' }, p: { en: 'In couples’ accounts, late surprises over who is served first and who keeps which red envelopes caused the most friction.', zh: '在过来人的经历里，最容易闹矛盾的就是临时才发现敬茶顺序、礼金归属上有分歧。' } },
      { h: { en: 'Keep the outfit change under 15 minutes', zh: '换装控制在15分钟以内' }, p: { en: 'Chinese couples’ most common regret is guests leaving while the couple is out of the room. A widely shared May 2026 case took 46 minutes and the table toasts were cancelled.', zh: '中国新人最常见的遗憾，是新人离场太久、宾客先走了。2026年5月一则广泛流传的例子，换装46分钟，敬酒环节直接取消。' } },
      { h: { en: 'Give elders a Chinese course or station', zh: '给长辈准备一个中式餐台或一道中菜' }, p: { en: 'Elders raised on banquets tend to find a plated Western dinner too small. The Peking duck station is already on the menu.', zh: '习惯中式宴席的长辈往往觉得西式分餐不够吃。菜单上已经有北京烤鸭台。' } },
      { h: { en: 'Plan for the Rose Garden gravel', zh: '提前解决 Rose Garden 的碎石路' }, p: { en: 'An accessibility review describes it as deep and hard to walk on. Front rows for elders, escorts, and ask about a runner.', zh: '无障碍评测说那里碎石很深，不好走。前排留给长辈，安排专人搀扶，问问能否铺地毯。' } }
    ]
  },
  sections: [
    {
      id: 'visa', title: { en: "Relatives' visas", zh: '亲属赴美签证' },
      table: {
        head: [{ en: 'Consulate', zh: '领事馆' }, { en: 'B1/B2 interview wait, Oct 2026', zh: 'B1/B2 面签排期（2026年10月）' }],
        rows: [
          [{ en: 'Beijing', zh: '北京' }, { en: 'about 4.5 months', zh: '约4.5个月' }],
          [{ en: 'Shanghai', zh: '上海' }, { en: 'about 3.5 months', zh: '约3.5个月' }],
          [{ en: 'Guangzhou', zh: '广州' }, { en: 'about 2 months', zh: '约2个月' }],
          [{ en: 'Shenyang', zh: '沈阳' }, { en: 'about 0.5 months', zh: '约半个月' }]
        ],
        note: { en: 'From a site that mirrors the State Department wait-time tool. Released and cancelled slots often appear sooner.', zh: '数据来自同步美国国务院排期工具的网站。经常会有人放号、退号，实际可能更快约到。' }
      },
      items: [
        { t: 'o', h: { en: 'People over 79 now interview too', zh: '79岁以上老人现在也要面签' }, p: { en: 'Since September 2, 2025, only renewals within 12 months of a full-validity visa’s expiry can skip the interview. Relatives must also apply in China, not a third country.', zh: '2025年9月2日起，只有原签证到期12个月内续签才能免面谈。而且必须在中国申请，不能去第三国办。' }, src: '<a href="https://www.stonybrook.edu/visa-new/resources/news-and-events/government-updates/upcoming-changes-to-visa-interview-waiver-policy.html">Stony Brook</a> · <a href="https://cilawgroup.com/news/2025/09/09/us-department-of-state-ends-third-country-nonimmigrant-stamping-visa-applicants-must-interview-in-country-of-residence-effective-september-6-2025/">CI Law Group</a>' },
        { t: 'o', h: { en: 'Age and health are weighed for visitors since November 2025', zh: '2025年11月起，访客签证也会考虑年龄和健康' }, p: { en: 'A State Department cable tells officers to consider age, chronic illness and ability to pay for care. Older relatives should be ready for those questions.', zh: '国务院内部指引要求签证官考虑年龄、慢性病，以及能否负担医疗费用。年长的亲属要准备好回答这类问题。' }, src: '<a href="https://www.npr.org/2025/11/12/nx-s1-5606348/immigrants-visas-health-conditions-trump-guidance">NPR</a>' },
        { t: 'c', h: { en: 'The interview matters more than the documents', zh: '面谈本身比材料更重要' }, p: { en: 'Officers asked about purpose, where the child lives and works, career and retirement history. The invitation letter is officially not reviewed, but bring it. Strong ties to China (retired, a home, a spouse staying behind, clean travel history) are what approvals had in common.', zh: '签证官会问来美目的、子女在哪里生活工作、本人的工作和退休情况。官方说不审邀请函，但还是要带上。获批的人共同点是在国内牵挂多：已退休、有房、配偶留在国内、出入境记录良好。' }, src: 'US Card Forum <a href="https://www.uscardforum.com/t/topic/385509?page=6">1</a> <a href="https://www.uscardforum.com/t/topic/385509?page=5">2</a> <a href="https://www.uscardforum.com/t/topic/515989">3</a>' },
        { t: 's', h: { en: 'Retired medical workers get specific questions', zh: '退休医护人员会被问特定问题' }, p: { en: 'Two retired medical workers were moved from drop-off to an interview and asked about family-planning procedures, then approved.', zh: '有两位退休医护人员递签被转面签，被问到计划生育相关的手术经历，最后都获批。' }, src: 'US Card Forum' },
        { t: 'o', h: { en: 'Insurance and EVUS', zh: '保险和 EVUS' }, p: { en: 'Chinese domestic insurance does not work in the US: buy visitor insurance that covers acute onset of pre-existing conditions. Holders of 10-year visas need EVUS (about $30) before each trip. Elders should land 5 to 7 days early to get over jet lag.', zh: '国内医保在美国用不了，要买覆盖既往病症急性发作的访美医疗险。持十年签证的人每次入境前都要登记 EVUS（约 $30）。长辈最好提前5到7天到，倒好时差。' } }
      ]
    },
    {
      id: 'suzhou', title: { en: 'Buying in Suzhou and Shanghai', zh: '在苏州、上海采购' },
      table: {
        head: [{ en: 'Item', zh: '物品' }, { en: 'What online buyers paid (reference, not a recommendation)', zh: '网上买家实际成交价（参考，不是建议）' }, { en: 'When', zh: '时间' }],
        rows: [
          [{ en: 'Wedding dress, budget end', zh: '婚纱（平价）' }, { en: 'Hard to find under ¥1,500; many shops ¥2,000+ and won’t bargain', zh: '¥1,500 以下很难找；很多店 ¥2,000 起且不讲价' }, { en: '2024', zh: '2024年' }],
          [{ en: 'Simple or short-train dress', zh: '简约或短拖尾婚纱' }, { en: 'Often bargained under ¥1,000', zh: '常能谈到 ¥1,000 以下' }, { en: '2022', zh: '2022年' }],
          [{ en: 'Designer zone (C区)', zh: 'C区设计师款' }, { en: 'Several thousand to over ¥10,000', zh: '几千到一万多元' }, { en: '2022 to 2025', zh: '2022至2025年' }],
          [{ en: '秀禾服', zh: '秀禾服' }, { en: 'Asked ¥1,200, paid ¥600', zh: '开价 ¥1,200，成交 ¥600' }, { en: 'undated', zh: '时间不详' }],
          [{ en: '龙凤褂', zh: '龙凤褂' }, { en: 'About ¥800', zh: '约 ¥800' }, { en: '2020', zh: '2020年' }],
          [{ en: 'Dress and groom’s suit together', zh: '婚纱加新郎西装' }, { en: '¥3,080', zh: '¥3,080' }, { en: '2023', zh: '2023年' }],
          [{ en: 'Shanghai bespoke wool suit', zh: '上海定制羊毛西装' }, { en: '¥800 to 2,500, 5 to 10 days', zh: '¥800 至 2,500，5到10天' }, { en: '2026', zh: '2026年' }]
        ]
      },
      items: [
        { t: 'c', h: { en: 'The dress delivered is not the one you tried on', zh: '到手的婚纱和试穿的不是同一件' }, p: { en: 'The most reported problem. Shops without their own factory send orders to small workshops, and the result is only "similar". The Huqiu market regulator handled 614 wedding-wear complaints in 2023. Buyers who got refunds had chat records and photos.', zh: '这是被提到最多的问题。没有自家工厂的店会把订单发给小作坊，做出来只是「差不多」。2023年虎丘市监部门处理了614起婚纱礼服投诉。拿回退款的买家都留有聊天记录和照片。' }, src: '<a href="https://www.huxiu.com/article/4634987.html">虎嗅 2025</a> · <a href="https://www.douban.com/group/topic/169442493/">豆瓣 2020</a> · <a href="https://www.gusu.gov.cn/gsq/fhgs/202401/4fc7e2ac88c947df9803f1f63579bc6b.shtml">姑苏区政府 2023</a>' },
        { t: 'c', h: { en: 'Custom takes 1 to 1.5 months; hand-embroidered 裙褂 takes 2 to 3+', zh: '定制要1到1.5个月，手工刺绣裙褂要2到3个月以上' }, p: { en: 'Within two weeks: buy a sample or stock dress and have it altered (hours to a few days), and buy machine-embroidered 秀禾服 or 龙凤褂 ready-made.', zh: '两周内能做的：买样衣或现货改尺寸（几小时到几天），秀禾服、龙凤褂买机绣现货。' }, src: '<a href="https://www.hunliji.com/bai_ke/detail_46143">婚礼纪</a> · <a href="http://www.news.cn/gangao/2022-11/06/c_1129105383.htm">新华网</a>' },
        { t: 'c', h: { en: 'Bargaining has mostly stopped, and try-on fees exist', zh: '基本不讲价了，还有试穿费' }, p: { en: 'Since about 2024 many shops say they don’t bargain, and in-store prices run 2 to 3 times online. Try-on fees from ¥30 to ¥300 per dress, often waived if you buy or book through Dianping.', zh: '大约2024年起很多店表示不讲价，店里价格是网上的2到3倍。试穿费每件 ¥30 到 ¥300 不等，买了或通过大众点评预约通常可免。' }, src: '<a href="https://www.v2ex.com/t/1217253">V2EX 2024</a> · <a href="https://www.huxiu.com/article/4634987.html">虎嗅 2025</a>' },
        { t: '1', h: { en: 'Ask them to leave seam allowance', zh: '请店家留出放量' }, p: { en: 'A bride’s China-made dress arrived small. Her US alterations shop could let it out only because extra seam allowance had been left. Heavy beading pushed alterations to about $1,000.', zh: '有位新娘在国内做的婚纱到手偏小，美国的裁缝能放大，全靠当初留了缝份。珠绣多，修改费涨到约 $1,000。' }, src: '<a href="https://medium.com/@joannachao/how-to-order-a-custom-wedding-dress-from-china-f0616e0262e6">Medium</a>' },
        { t: 's', h: { en: 'Shanghai suits are fast but uneven', zh: '上海做西装快，但质量参差' }, p: { en: 'South Bund reviews mention fabric that differed from what was chosen and baggy fits that needed redoing. Check the cloth and insist on a second fitting.', zh: '南外滩的评价里有面料和选的不一样、版型太松要返工的情况。看清面料，坚持至少再试一次身。' }, src: '<a href="https://news.qq.com/rain/a/20260804A08M3L00">腾讯新闻 2026</a> · TripAdvisor' }
      ],
      box: {
        h: { en: 'A good order for two weeks', zh: '两周行程建议顺序' },
        li: [
          { en: 'Days 1 to 3, a weekday at Huqiu: buy the dress and the 秀禾服 or 褂; order alterations only.', zh: '第1到3天，工作日去虎丘：买婚纱和秀禾服或褂，只做修改。' },
          { en: 'Days 2 to 4: groom measured in Shanghai.', zh: '第2到4天：新郎去上海量体。' },
          { en: 'Days 8 to 12: second fittings for both.', zh: '第8到12天：两人都再试一次。' },
          { en: 'Last two days: final try-on, film it, pay the balance, collect.', zh: '最后两天：最终试穿、录视频、付尾款、取货。' },
          { en: 'Bring: wedding shoes or heel height, the right undergarments, reference photos, a written list of must-haves.', zh: '要带：婚鞋或记好鞋跟高度、合适的内衣、参考图、写好的必备要求清单。' }
        ]
      }
    },
    {
      id: 'home', title: { en: 'Getting it all home', zh: '把东西带回美国' },
      items: [
        { t: 'o', h: { en: '$1,600 duty-free for a couple', zh: '两人共 $1,600 免税' }, p: { en: 'Each returning resident gets $800; a couple traveling together can file one declaration and pool it. The next $1,000 pays a flat 3%.', zh: '每位回美居民有 $800 免税额，一起旅行的两人可以合并申报。超出部分的下一个 $1,000 按3%统一计税。' }, src: '<a href="https://www.cbp.gov/travel/us-citizens/know-before-you-go/what-expect-when-you-return">CBP</a> · <a href="https://www.cbp.gov/travel/clearing-customs/cbp-expand-filing-joint-customs-declarations">CBP</a>' },
        { t: 'o', h: { en: 'The 12.5% China tariff skips your suitcases', zh: '12.5%的对华关税不针对随身行李' }, p: { en: 'In force since July 24, 2026, but the Federal Register text exempts personal items in accompanied baggage. Earlier emergency tariffs were struck down by the Supreme Court in February 2026.', zh: '2026年7月24日起生效，但联邦公报原文豁免随身行李中的个人物品。此前的紧急关税已在2026年2月被最高法院裁定无效。' }, src: '<a href="https://www.federalregister.gov/documents/2026/07/28/2026-15181/">Federal Register</a> · <a href="https://www.dlapiper.com/en/insights/publications/2026/02/us-supreme-court-holds-ieepa-does-not-authorize-tariffs">DLA Piper</a>' },
        { t: 'o', h: { en: 'Shipping later costs much more', zh: '事后邮寄贵很多' }, p: { en: 'Duty-free small packages ended for China in May 2025. Something you bought and had shipped pays full duty plus 12.5%: roughly $125 to $200 on a $500 suit, plus brokerage fees. Only a genuine gift under $100 from a relative is exempt.', zh: '中国小包免税在2025年5月取消。自己买了再寄过来要交全额关税再加12.5%：一套 $500 的西装约 $125 到 $200，另加清关费。只有亲友真正赠送、价值 $100 以下的礼物免税。' }, src: '<a href="https://www.cbp.gov/sites/default/files/2025-08/factsheet_suspension_of_duty-free_de_minimis_treatment.pdf">CBP</a> · <a href="https://www.federalregister.gov/documents/2026/06/24/2026-12670/">Federal Register</a>' },
        { t: 'o', h: { en: 'Declare all food', zh: '所有食品都要申报' }, p: { en: 'Sealed pure tea is generally fine; tea with dried citrus peel (陈皮) is not. No meat mooncakes. Declare candy. Travelers report sealed tea passing when declared.', zh: '密封的纯茶叶一般没问题，含陈皮的茶不行。肉馅月饼不能带。糖果要申报。旅客反馈申报后密封茶叶都能顺利通过。' }, src: '<a href="https://www.cbp.gov/travel/clearing-cbp/bringing-agricultural-products-united-states">CBP</a> · <a href="https://www.uscardforum.com/t/topic/472260">US Card Forum 2026</a>' },
        { t: 's', h: { en: 'The dress counts as your carry-on', zh: '婚纱算手提行李' }, p: { en: 'No airline has a wedding-dress policy and the coat closet isn’t guaranteed. China Eastern economy to the US: two 23 kg checked bags. Spread paper goods across bags and wrap the tea set in clothes.', zh: '航空公司没有专门的婚纱规定，也不保证能挂衣柜。东航经济舱飞美国可托运两件、每件23公斤。纸品分装在几个箱子里，茶具用衣服包好。' }, src: '<a href="https://www.ceair.com/global/en_USD/Announcement/BaggageService/FreeBaggageAllowanceandSpecifications/">China Eastern</a> · <a href="https://www.theknot.com/content/wedding-dress-travel-by-airline">The Knot</a>' }
      ],
      note: { en: 'Tariff rules changed in February, July and August 2026. Check cbp.gov again in early November.', zh: '2026年2月、7月、8月关税规定都改过，11月初出发前再查一次 cbp.gov。' }
    },
    {
      id: 'venue', title: { en: 'Hempstead House reviews', zh: 'Hempstead House 的真实评价' },
      items: [
        { t: 'c', h: { en: 'Staff and food get the praise', zh: '服务团队和餐饮口碑最好' }, p: { en: 'The venue and catering managers are named in nearly every review since about 2014. Guests remembered the food months later. Several couples said they didn’t need an outside planner.', zh: '大约2014年以来，几乎每条评价都点名表扬场地和餐饮经理。宾客几个月后还记得菜好吃。好几对新人说不需要另请策划。' }, src: '<a href="https://www.weddingwire.com/reviews/sands-point-preserve-port-washington/afc249ff372027f9.html">WeddingWire</a> · <a href="https://www.zola.com/wedding-vendors/wedding-catering/philip-stone-caterers">Zola</a>' },
        { t: 'c', h: { en: 'It costs more than people expect', zh: '花费比预想的多' }, p: { en: 'Rentals, lighting, silverware and linens are all separate. That’s where budgets grew.', zh: '租赁、灯光、餐具、桌布都要另付，预算多半超在这里。' } },
        { t: '1', h: { en: 'Deep gravel in the Rose Garden', zh: 'Rose Garden 碎石很深' }, p: { en: 'An accessibility reviewer found it hard going. Parking is packed dirt, cobblestone and grass with no marked accessible spaces; cars can drop off at the house.', zh: '无障碍评测觉得很难走。停车场是土路、石板和草地，没有残障车位；车可以开到主楼门口下客。' }, src: '<a href="https://destinationaccessible.org/sands-point-preserve/">Destination Accessible</a>' },
        { t: 's', h: { en: 'Rain plans worked, but nobody says where the ceremony moved', zh: '雨天方案都顺利，但没人说仪式挪到了哪' }, p: { en: 'Photographers name the Morning Room, Winter Garden and Palm Court as indoor options. One listing still says the lawn can be tented, which conflicts with what the venue told us. Get the room and decision time in writing.', zh: '摄影师提到的室内备选有 Morning Room、Winter Garden 和 Palm Court。有个平台还写着草坪可以搭帐篷，和场地告诉我们的不一样。具体房间和决定时间要拿到书面确认。' } },
        { t: 'o', h: { en: 'The exterior needs repair, with no timeline', zh: '外立面需要修缮，没有时间表' }, p: { en: 'The Conservancy’s own fundraising page describes roof, lintel and stone damage. It says the interior is safe.', zh: '保护协会自己的募捐页面写明屋顶、门窗过梁和石材有损坏，但室内是安全的。' }, src: '<a href="https://www.sandspointpreserveconservancy.org/support/campaign-to-save-hempstead-house/">Sands Point Preserve Conservancy</a>' }
      ],
      note: { en: 'All 31 WeddingWire reviews are 4.4 to 5 stars, which suggests many were requested by the venue. No reviewer described a 200+ guest wedding, heat inside the mansion, or the tent ban.', zh: 'WeddingWire 上31条评价全是4.4到5星，可能不少是场地邀请写的。没有一条提到200人以上的婚礼、室内炎热或帐篷禁令。' }
    },
    {
      id: 'bicultural', title: { en: 'Chinese-American weddings', zh: '中美结合的婚礼' },
      items: [
        { t: 'c', h: { en: 'The tea ceremony takes as long as your relative list', zh: '敬茶时间取决于亲戚名单的长短' }, p: { en: 'Parents only: about 15 minutes. One guest watched about 50 blessings take two hours, partly from shouting for relatives in the crowd. Fixes: one coordinator with a printed order, pour before people sit, cups a third full, two cups per person, one person collecting envelopes.', zh: '只敬父母约15分钟。有宾客看到敬50位亲戚用了两个小时，部分时间花在人群里喊人。办法：一位统筹拿着打印好的顺序表，先倒好茶再请人入座，茶倒三分满，每人备两杯，一个人专门收红包。' }, src: '<a href="https://boards.weddingbee.com/topic/dw-fitting-chinese-tea-ceremony-wedding-ceremony-and-reception-in-1-day/">WeddingBee</a> · <a href="https://eastmeetsdress.com/blogs/blog/5-lessons-learned-running-a-tea-ceremony-as-the-maid-of-honor">East Meets Dress</a>' },
        { t: 'c', h: { en: 'Ask both families about order and timing early', zh: '尽早问清两家的顺序和时间习惯' }, p: { en: 'One bride learned late that her Hong Kong in-laws wanted tea served only after the vows, because she hadn’t "left her parents’ house" until then. Very traditional parents may want an auspicious hour too.', zh: '有位新娘很晚才知道，香港的公婆要求宣誓之后才敬茶，因为在那之前她还没「出门」。很传统的父母可能还会要求吉时。' }, src: '<a href="https://boards.weddingbee.com/topic/chinese-tea-ceremony-2/">WeddingBee</a> · <a href="https://www.douban.com/note/755512878/">豆瓣 2020</a>' },
        { t: 's', h: { en: 'Elders find plated dinners too small', zh: '长辈觉得西式分餐不够吃' }, p: { en: 'An NYC bride said her mother always complains at plated weddings. She used stations, one with a traditional Chinese menu, at about the cost of a banquet table.', zh: '一位纽约新娘说，她妈妈每次吃西式分餐婚宴都抱怨。她改成自助餐台，其中一个是传统中餐，费用和中式宴席差不多。' }, src: '<a href="https://boards.weddingbee.com/topic/chinese-american-caucasian-reception-or-banquet-in-sf/">WeddingBee</a>' },
        { t: 's', h: { en: 'Bilingual hosting: alternate lines, don’t hand out translations', zh: '双语主持：一句中一句英，别发译文' }, p: { en: 'One host speaking both languages in short turns worked. Printed translations of speeches failed because people read ahead. Print the order of events in both languages instead.', zh: '一位主持人中英文短句交替效果好。把致辞译文印出来发效果差，大家会提前读完。改成印中英双语的流程单。' }, src: '<a href="https://boards.weddingbee.com/topic/two-languages-one-wedding/">WeddingBee</a>' },
        { t: 's', h: { en: 'Give parents their own event instead of growing the guest list', zh: '父母想请的人多，就单独办一场' }, p: { en: 'When parents wanted 90 hometown friends added, couples offered a separate party the parents host. A Chinese banquet as the rehearsal dinner was another fix.', zh: '父母想加90位老家朋友时，有新人提议由父母另办一场。也有人把彩排晚宴办成中式宴席。' }, src: '<a href="https://boards.weddingbee.com/topic/how-to-you-compromise-with-your-parents-about-wedding-and-wedding-reception/">WeddingBee</a>' },
        { t: '1', h: { en: 'Introduce guests to each other during dinner', zh: '晚宴时帮宾客互相介绍' }, p: { en: 'At a 2016 wedding in New York, family members acting as hosts introduced guests from China and the West Coast to each other. Strangers stopped feeling like strangers.', zh: '2016年纽约的一场婚礼上，家人充当东道主，把从中国和西海岸来的宾客互相介绍，陌生人很快就熟了。' }, src: '<a href="https://www.wenxuecity.com/blog/202304/79556/24041.html">文学城</a>' },
        { t: '1', h: { en: 'Ask guests to put phones away for the ceremony', zh: '仪式时请宾客收起手机' }, p: { en: 'A bride called it her best decision: people watched instead of filming.', zh: '有新娘说这是她最正确的决定：大家用眼睛看，而不是举着手机拍。' }, src: '<a href="https://www.douban.com/note/541408857/">豆瓣 2016</a>' }
      ]
    },
    {
      id: 'regrets', title: { en: 'Regrets and best decisions', zh: '最后悔的和最值得的' },
      items: [
        { t: 'c', h: { en: 'Not seeing guests or parents, and not eating', zh: '没顾上宾客和父母，自己也没吃上饭' }, p: { en: 'The top regret in both languages. American couples regret their own experience; Chinese couples regret making guests wait or vanishing mid-banquet.', zh: '中英文来源里排第一的遗憾。美国新人后悔的是自己没好好享受；中国新人后悔的是让宾客久等，或宴席中途不见人。' }, src: '<a href="https://www.theknot.com/content/reddit-wedding-regrets">The Knot</a> · <a href="https://www.163.com/dy/article/KTDTC6K10556D0SE.html">网易 2026</a>' },
        { t: 'c', h: { en: 'Photographer and videographer are the best spends', zh: '摄影和摄像最值得花钱' }, p: { en: 'Videographer was the top "wish we’d spent more" item at 25%, ahead of photographer at 22%. Couples who skipped a shot list missed photos with their parents.', zh: '「后悔没多花钱」的项目里，摄像以25%排第一，摄影22%排第二。没给摄影师拍摄清单的新人，漏拍了和父母的合影。' }, src: '<a href="https://overthemoon.com/blogs/planning/couples-wedding-spending-money-regrets">Zola survey</a> · <a href="https://jandan.net/p/97911">煎蛋</a>' },
        { t: 's', h: { en: 'Flowers and decor nobody remembered', zh: '花艺装饰没人记得' }, p: { en: '22% said they overspent on flowers. Linens, chargers and favors went unnoticed. Large floral installations torn down after four hours top the trend regrets.', zh: '22%的人说花艺花多了。桌布、装饰底盘、伴手礼没人注意。四小时后就拆掉的大型花艺装置，是最被后悔的潮流。' } },
        { t: 's', h: { en: 'Speeches with no time limit', zh: '致辞不限时' }, p: { en: 'One father spoke for 27 minutes. Set 3 minutes each, in writing.', zh: '有位父亲讲了27分钟。每人限3分钟，事先书面说好。' } },
        { t: 's', h: { en: 'Music mattered more than attire', zh: '音乐比礼服更重要' }, p: { en: 'In hindsight, couples ranked the band or DJ above clothing.', zh: '事后回想，新人普遍觉得乐队或DJ比礼服更重要。' } },
        { t: 'c', h: { en: 'Gaps and waiting are what guests hate most', zh: '宾客最讨厌的是空等' }, p: { en: 'Keep the time from cocktails to dancing short, feed people early, and add late-night food.', zh: '从鸡尾酒会到跳舞之间别拖，早点上菜，夜里再加点宵夜。' } }
      ]
    },
    {
      id: 'money', title: { en: 'Red envelopes in the US', zh: '在美国办婚礼的红包习惯' },
      items: [
        { t: 'c', h: { en: 'Chinese guests give cash and skip the registry', zh: '华人宾客给现金，不看礼物清单' }, p: { en: 'Reported US norms: about $200 per person in the Northeast and California, $300 to $400 per couple, more for close friends. Amounts ending in 8 are common. Cantonese norms reportedly run lower. Couples who asked for a set amount or Venmo were mocked; don’t state either.', zh: '网友反映的美国行情：东北部和加州大约每人 $200，一对夫妻 $300 到 $400，好朋友更多。带8的数字很常见。据说广东人的习惯偏低。指定金额或要求 Venmo 的新人被群嘲，这两样都别提。' }, src: '<a href="https://www.uscardforum.com/t/topic/73290">US Card Forum</a> · <a href="https://www.dealmoon.com/post/2083464">Dealmoon</a>' },
        { t: 'c', h: { en: 'Envelopes won’t cover a Western dinner', zh: '红包抵不了西式婚宴的成本' }, p: { en: 'In China, envelopes can repay the banquet. At a US plated wedding they usually don’t. Plan the budget without counting on them.', zh: '在国内红包可能够回本；在美国办西式婚宴通常不够。做预算时别指望它。' }, src: '<a href="https://www.douban.com/group/topic/75644009/">豆瓣</a>' },
        { t: 's', h: { en: 'Guard the box, and settle who keeps what', zh: '看好红包箱，说好礼金归谁' }, p: { en: 'Card boxes went missing at several weddings. Use a locked box with one person who never leaves it. The common rule: whoever paid for the event, or whose friends came, keeps that event’s gifts.', zh: '好几场婚礼都丢过礼金箱。用带锁的箱子，专人寸步不离。常见规矩：谁出钱办的、谁的亲友来的，那一场的礼金就归谁。' }, src: '<a href="https://boards.weddingbee.com/topic/how-to-collect-envelopes/">WeddingBee</a> · <a href="https://boards.weddingbee.com/topic/chinese-weddings-gift-culture/">WeddingBee</a>' }
      ]
    },
    {
      id: 'friday', title: { en: 'A Friday on Long Island', zh: '周五在长岛办婚礼' },
      items: [
        { t: 's', h: { en: 'Friday works; Friday plus friction doesn’t', zh: '周五没问题，难的是周五再加上路远' }, p: { en: 'Couples who had Friday weddings report full attendance and a party mood. Complaints come when guests also face long drives and no help getting there.', zh: '办过周五婚礼的新人说宾客都到齐了，气氛很好。抱怨多来自路远又没人帮忙安排交通。' }, src: 'Reddit r/weddingplanning, 2025 to 2026' },
        { t: 's', h: { en: 'Budget 1.5 to 2.5 hours from the city', zh: '从市区过来预留1.5到2.5小时' }, p: { en: 'Long Island couples say a Friday-evening drive out of Manhattan can take the full 2.5 hours. Coaches from Manhattan and Flushing around 3 PM, with the departure time printed on the invitation.', zh: '长岛的新人说，周五傍晚从曼哈顿开过来可能要整整2.5小时。曼哈顿和 Flushing 的大巴下午3点左右出发，出发时间印在请柬上。' }, src: '<a href="https://forums.theknot.com/discussion/comment/399830">The Knot forum</a>' }
      ]
    }
  ],
  limits: {
    title: { en: 'About the sources', zh: '关于资料来源' },
    p: { en: 'Reddit, Zhihu, Xiaohongshu, huaren.us and 1point3acres blocked automated reading, so those were covered through mirrors and search excerpts. About 40% of sources ended up in Chinese. Many forum threads are several years old, and no source was a full recap from an NYC couple with 200+ guests, so treat these as patterns, not proof.', zh: 'Reddit、知乎、小红书、华人网和一亩三分地都限制自动读取，只能通过镜像和搜索摘要参考。最终约40%的来源是中文。不少论坛帖子是几年前的，也没有找到纽约200人以上婚礼的完整复盘，所以这些只能当作规律参考，不是定论。' },
    searchTitle: { en: 'Worth searching on Xiaohongshu', zh: '值得在小红书上搜一搜' },
    searches: ['虎丘婚纱城 避坑 2026', 'Sands Point 婚礼', '纽约 华人婚礼 敬茶 流程', '父母 美签 参加婚礼 2026', '上海 南外滩 定制西装 踩雷']
  }
};
