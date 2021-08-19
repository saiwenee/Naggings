<template>
  <!-- <div class="bg-gray-50"> -->
    <!-- <div
      class="
        max-w-screen-xl
        px-4
        py-12
        mx-auto
        sm:px-6
        lg:py-16
        lg:px-8
        lg:flex
        lg:items-center
        lg:justify-between
      "
    >
      <p class="tip">现在总共 b 了 {{ count }} 条</p>
      <section
        class="item"
        v-bind:class="'type-' + item.attributes.type"
        v-for="item in contents"
        v-cloak
      >
        <v-md-preview :text="item.attributes.nagging"></v-md-preview>
        <p v-html="item.attributes.nagging"></p>
        <time v-bind:datetime="item.attributes.time">{{
          item.attributes.time
        }}</time>
      </section>
      <div class="load-ctn">
        <button class="load-btn" v-on:click="loadMore" v-if="contents" v-cloak>
          再翻翻
        </button>
        <p class="tip" v-else>别急，加载呢</p>
      </div>
    </div> -->

    <div class="container my-12 mx-auto px-4 md:px-12">
      <p class="tip">现在总共 b 了 {{ count }} 条</p>
      <div class="flex flex-wrap flex-col items-center -mx-1 lg:-mx-4">
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
                class="
                  flex
                  items-center
                  no-underline
                  hover:underline
                  text-black
                "
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
      </div>
    </div>
  <!-- </div> -->
</template>
<script>
import AV from 'leancloud-storage';
const { Query } = AV;
const query = new AV.Query('naggings');

export default {
  data() {
    return {
      page: 0,
      count: 0,
      contents: []
    };
  },
  created() {
    AV.init({
      appId: 'SmmpeujdjngpjQzUxlKjesJq-MdYXbMMI',

      appKey: 'kksSDbuPjrTXj5o0Jwvqgafw'

      // serverURL: "bb.7ee.life"
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
    loadMore: function (event) {
      let that = this;
      that.getData(++that.page);
    },
    //识别 URL 链接
    urlToLink: function (str) {
      var re =
        /(http|ftp|https):\/\/[\w-]+(.[\w-]+)+([\w-.,@?^=%&:/~+#]*[\w-\@?^=%&/~+#])?/g;

      str = str.replace(re, function (website) {
        return (
          "<a href='" +
          website +
          "' target='_blank'> <i class='iconfont icon-lianjie-copy'></i>链接 </a>"
        );
      });
      return str;
    },

    //获取数据
    getData: function (page = 0) {
      let that = this;
      query
        .descending('createdAt')
        .skip(page * 20)
        .limit(20)
        .find()
        .then(
          function (results) {
            if (results.length == 0) {
              alert('之前没 b 过了');
            } else {
              let resC = results;
              console.log(resC);
              // le'treqData = false;
              resC.forEach((i) => {
                let dateTmp = new Date(i.createdAt);
                i.attributes.time = `${dateTmp.getFullYear()}-${
                  dateTmp.getMonth() + 1 < 10
                    ? '0' + (dateTmp.getMonth() + 1)
                    : dateTmp.getMonth() + 1
                }-${
                  dateTmp.getDate() + 1 < 10
                    ? '0' + dateTmp.getDate()
                    : dateTmp.getDate()
                } ${
                  dateTmp.getHours() + 1 <= 10
                    ? '0' + dateTmp.getHours()
                    : dateTmp.getHours()
                }:${
                  dateTmp.getMinutes() + 1 <= 10
                    ? '0' + dateTmp.getMinutes()
                    : dateTmp.getMinutes()
                }`;
                i.attributes.nagging =
                  '<span>' + that.urlToLink(i.attributes.nagging) + '</span>';
                that.contents.push(i);
              });
            }
          },
          function (error) {}
        );
    }

    // getData(0),
  }
};
</script>
