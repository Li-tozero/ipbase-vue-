<template>
  <div>
    <div class="content">
      <div class="comWidth">
        <div class="newsContent">
          <div class="newsDetail">
            <h3>我的四个假想敌</h3>
            <span>2016-2-19</span>
            <span>阅读量11</span>
            <p>二女幼珊在港参加侨生联考，以第一志愿分发台大外文系。听到这消息，我松了一口气，从此不必担心四个女儿通通嫁给广东男孩了。</p>
            <p>我对广东男孩当然并无偏见，在港六年，我班上也有好些可爱的广东少年，颇讨老师的欢心，但是要我把四个女儿全都让那些“靓仔”、
              “叻仔”掳掠了去，却舍不得。不过，女儿要嫁谁，说得洒脱些，是她们的自由意志，说得玄妙些呢，是因缘，做父亲的又何必患
              得患失呢？何况在这件事上，做母亲的往往位居要冲，自然而然成了女儿的亲密顾问，甚至亲密战友，作战的对象不是男友，却是父亲。
              等到做父亲的惊醒过来，早已腹背受敌，难挽大势了。 </p>
            <p>在父亲的眼里，女儿最可爱的时候是在十岁以前，因为那时她完全属于自己。在男友的眼里，她最可爱的时候却在十七岁以后，因为这
              时她正像毕业班的学生，已经一心向外了。父亲和男友，先天上就有矛盾。对父亲来说，世界上没有东西比稚龄的女儿更完美的了，
              唯一的缺点就是会长大，除非你用急冻术把她久藏，不过这恐怕是违法的，而且她的男友迟早会骑了骏马或摩托车来，把她吻醒。 </p>
            <p>我未用太空舱的冻眠术，一任时光催迫，日月轮转，再揉眼时，怎么四个女儿都已依次长大，昔日的童话之门砰地一关，再也回不去
              了。四个女儿，依次是珊珊、幼珊、佩珊、季珊。简直可以排成一条珊瑚礁。珊珊十二岁的那年，有一次，未满九岁的佩珊忽然对
              来访的客人说：“喂，告诉你，我姐姐是一个少女了！”在座的大人全笑了起来。 </p>
            <p>曾几何时，惹笑的佩珊自己，甚至最幼稚的季珊，也都在时光的魔杖下，点化成“少女”了。冥冥之中，有四个“少男”正偷偷袭来，
              虽然蹑手蹑足，屏声止息，我却感到背后有四双眼睛，像所有的坏男孩那样，目光灼灼，心存不轨，只等时机一到，便会站到亮处，
              装出伪善的笑容，叫我岳父。我当然不会应他。哪有这么容易的事！我像一棵果树，天长地久在这里立了多年，风霜雨露，样样有份，
              换来果实累累，不胜负荷。而你，偶尔过路的小子，竟然一伸手就来摘果子，活该蟠地的树根绊你一交！</p>
            <p>而最可恼的，却是树上的果子，竟有自动落入行人手中的样子。树怪行人不该擅自来摘果子，行人却说是果子刚好掉下来，给他接着罢
              了。这种事，总是里应外合才成功的。当初我自己结婚，不也是有一位少女开门揖盗吗？“堡垒最容易从内部攻破”，说得真是不错。
              不过彼一时也，此一时也。同一个人，过街时讨厌汽车，开车时却讨厌行人。现在是轮到我来开车。 </p>
          </div>
          <a href="#">下一篇：我是标题，我是标题</a>
        </div>
        <div class="contact">
          <contact></contact>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import contact from '../../../common/contact.vue'
export default {
  name: 'newsDetail',
  components: {
    contact
  }
}
</script>

<style lang="css" scoped>
  .content {
    width:100%;
    background-color:#d4e7f8;
    overflow:hidden;
  }
  .content .newsContent {
    width:78%;
    float:left;
  }
  .content .newsDetail{
    background-color:#fff;
    border-radius:10px;
    padding:10px;
    margin:50px 0 40px;
  }
  .newsDetail span{
    display:inline-block;
    margin:10px 20px 20px 0;
    font-size:12px;
  }
  .newsDetail p{
    font-size:14px;
    line-height:26px;
  }
   .newsContent a{
    float:right;
    margin-bottom:50px;
    color:#5aabe0;
  }
  .newsContent a:hover{
    text-decoration:underline;
  }
  .contact{
    box-sizing:border-box;
    width:20%;
    height:100%;
    float:right;
    padding:0 10px;
    line-height:24px;
    margin-left:10px;
  }
  .wrap /deep/ .contactUs{
    margin:60px 0 10px;
  }
  .wrap /deep/ h3{
    color:#58abe1;
  }
  .wrap /deep/ p{
    color:#65737e;
  }
</style>
