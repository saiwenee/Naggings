<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap flex-col items-center -mx-1 lg:-mx-4">
      <p class="tip" v-on:click="bb">7ee 现在一共 BB 了 {{ count }} 条</p>
      <div v-if="clickCount === 7" class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
        <v-md-editor v-model="nagging" height="400px"></v-md-editor>
      
      </div>
      
      <!-- Column -->
      <div
        class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2"
        v-bind:class="'type-' + item.attributes.type"
        v-for="item in contents"
        v-cloak
      >
        <!-- Article -->
        <article class="overflow-hidden rounded-lg shadow-lg">
          <header
            class="flex items-center justify-between leading-tight p-2 md:p-4"
          >
            <a
              class="flex items-center no-underline hover:underline text-black"
              href="#"
            >
              <img
                alt="Placeholder"
                class="block rounded-full"
                src="https://picsum.photos/32/32/?random"
              />
              <p class="ml-2 text-sm">7ee</p>
            </a>
            <time
              class="text-grey-darker text-sm"
              v-bind:datetime="item.attributes.time"
              >{{ item.attributes.time }}</time
            >
          </header>
          <v-md-preview :text="item.attributes.nagging"></v-md-preview>
        </article>
        <!-- END Article -->
      </div>
      <!-- END Column -->
      <div class="load-ctn">
        <button class="load-btn" v-on:click="loadMore" v-if="contents" v-cloak>
          再翻翻
        </button>
        <p class="tip" v-else>别急，加载呢</p>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
import AV from 'leancloud-storage';
import moment from 'moment-mini'

const query = new AV.Query('naggings');
// 声明 class
const Todo = AV.Object.extend('naggings');
// 构建对象
const todo = new Todo();
export default {
  data() {
    return {
      page: 0,
      count: 0,
      contents: [],
      clickCount:0
    };
  },
  created() {
    AV.init({
      appId: 'SmmpeujdjngpjQzUxlKjesJq-MdYXbMMI',

      appKey: 'kksSDbuPjrTXj5o0Jwvqgafw'
    });
  },
  mounted() {
    let that = this;
    that.getData(0);
    //计数
    query.count().then(
      function (count) {
        that.count = count;
      },
      function (error) {}
    );
  },
  methods: {
    loadMore(event){
      // let that = this;
      this.getData(++this.page);
    },
    bb(){
      if(this.clickCount < 7){
      this.clickCount++
      console.log(this.clickCount);

      }
    },
    saveNagging() {
      todo.set('nagging', 'test');

      // 将对象保存到云端
      todo.save().then(
        (todo) => {
          // 成功保存之后，执行其他逻辑
          console.log(`保存成功。objectId：${todo.id}`);
        },
        (error) => {
          // 异常处理
        }
      );
    },

    //获取数据
    getData: function (page = 0) {
      query
        .descending('createdAt')
        .skip(page * 20)
        .limit(20)
        .find()
        .then(
          (results) => {
            if (results.length == 0) {
              alert('之前没 b 过了');
            } else {
              let resC = results;
              console.log(resC);
              // le'treqData = false;
              resC.forEach((i) => {
                // i.attributes.time = moment(i.createdAt).format("dddd, MMMM Do YYYY, h:mm:ss a");
                i.attributes.time = moment(i.createdAt).fromNow();
                // i.attributes.time = i.createdAt
                this.contents.push(i);
              });
            }
          },
          function (error) {}
        );
    }
  }
};
</script>
