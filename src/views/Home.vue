<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap flex-col items-center -mx-1 lg:-mx-4">
      <h1 class="topic" data-text="7ee">7ee</h1>
      
      <div class="table w-60 my-2" v-on:click="openbb">
        <div class="monitor-wrapper">
          <div class="monitor">
            <p>{{ date }} 7ee 目前一共 BB 了 {{ count }} 条</p>
          </div>
        </div>
      </div>
      <p
        class="
          text-xs
          Capitalize
          text-gray-400
          tracking-wider
          text-center
          leading-none
          antialiased
          italic
          font-light
          leading-relaxed
          w-full
          my-2
          md:w-1/2
          lg:my-3
          lg:px-4
          lg:w-1/2
        "
      >“好好生活，別的去他媽的。”</p>
      <div
        v-if="clickCount === 7"
        class="
          flex flex-wrap flex-col
          my-1
          px-1
          w-full
          md:w-1/2
          lg:my-4
          lg:px-4
          lg:w-1/2
          text-sm
        "
      >
        <v-md-editor v-model="newbb" height="400px"></v-md-editor>
        <div class="flex flex-nowrap flex-row justify-end items-center">
          <input
            type="username"
            class="
              appearance-none
              border-2 border-white
              rounded
              w-1/4
              py-1
              mx-2
              text-grey-darker
              leading-tight
              focus:outline-none
              focus:bg-white
              focus:shadow-lg
              text-center
            "
            placeholder="username"
            v-model="username"
          />
          <input
            type="password"
            class="
              appearance-none
              border-2 border-white
              rounded
              w-1/4
              py-1
              mx-2
              text-grey-darker
              leading-tight
              focus:outline-none
              focus:shadow-lg
              text-center
            "
            placeholder="password"
            v-model="password"
          />
          <button
            class="
              bg-blue-500
              hover:bg-blue-400
              text-white
              font-normal
              py-1
              px-4
              m-2
              border-b-4 border-blue-700
              hover:border-blue-500
              rounded
              inline-flex
              items-center
              disabled:opacity-50
            "
            :disabled="username && password && newbb == ''"
            v-on:click="saveNagging(username, password, newbb)"
          >
            BB
          </button>
          <button
            class="
              bg-red-500
              hover:bg-red-400
              text-white
              font-normal
              py-1
              px-3
              m-2
              border-b-4 border-red-700
              hover:border-red-500
              rounded
              inline-flex
              items-center
            "
            v-on:click="clickCount = 0"
          >
            关闭
          </button>
        </div>
      </div>

      <div
        class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2"
        v-for="item in contents"
        :key="item.id"
        v-cloak
      >
        <article class="overflow-hidden rounded-lg shadow-lg">
          <header
            class="flex items-center justify-end leading-tight p-2 md:p-4"
          >
            <time class="text-grey-darker text-sm">{{
              item.attributes.nowTime
            }}</time>
          </header>
          <v-md-preview :text="item.attributes.nagging"></v-md-preview>
        </article>
      </div>
      <div class="load-ctn mt-5">
        <button
          class="
            load-btntransition
            border-b-2 border-white
            duration-500
            ease-in-out
            hover:border-blue-200
            transform
            hover:-translate-y-2
          "
          v-on:click="loadMore"
          v-if="count > 20"
          v-cloak
        >
          再翻翻
        </button>
      </div>
      <span
        class="
          text-xs
          Capitalize
          text-gray-400
          tracking-wider
          text-center
          leading-none
          antialiased
          italic
          font-light
          leading-relaxed
          w-full
          my-2
          md:w-1/2
          lg:my-3
          lg:px-4
          lg:w-1/2
        "
      >
        Copyright © {{ createYear }}
        <span class="mr-1" v-if="(nowYear < createYear)">- {{ nowYear }} </span>
        <a
          href="https://7ee.life"
          class="no-underline hover:underline hover:text-gray-700"
          >7ee</a
        >. All rights reserved. <br />
        Power By
        <a
          href="https://vercel.com"
          class="no-underline hover:underline hover:text-gray-700"
          target="_blank"
          >Vercel</a
        >
        &
        <a
          href="https://leancloud.app"
          class="no-underline hover:underline hover:text-gray-700"
          target="_blank"
          >LeanCloud</a
        >
      </span>
      <div
        class="
          flex flex-nowrap flex-row
          justify-center
          items-center
          w-full
          md:w-1/2
          lg:px-4
          lg:w-1/2
        "
      >
        <a :href="githubPath" target="_blank">
          <button
            class="
              bg-gray-500
              hover:bg-gray-400
              text-white
              font-normal
              py-1
              px-2
              mx-0.5
              border-b-4 border-gray-700
              hover:border-gray-500
              rounded
              inline-flex
              items-center
            "
          >
            <svg
              class="fill-current w-4 h-4"
              t="1629476002012"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2984"
            >
              <path
                d="M960 512c0 97.76-28.704 185.216-85.664 263.264-56.96 78.016-130.496 131.84-220.64 161.856-10.304 1.824-18.368 0.448-22.848-4.032a22.4 22.4 0 0 1-7.2-17.504v-122.88c0-37.632-10.304-65.44-30.464-82.912a409.856 409.856 0 0 0 59.616-10.368 222.752 222.752 0 0 0 54.72-22.816c18.848-10.784 34.528-23.36 47.104-38.592 12.544-15.232 22.848-35.904 30.912-61.44 8.096-25.568 12.128-54.688 12.128-87.904 0-47.072-15.232-86.976-46.208-120.16 14.368-35.456 13.024-74.912-4.48-118.848-10.752-3.616-26.432-1.344-47.072 6.272s-38.56 16.16-53.824 25.568l-21.984 13.888c-36.32-10.304-73.536-15.232-112.096-15.232s-75.776 4.928-112.096 15.232a444.48 444.48 0 0 0-24.672-15.68c-10.336-6.272-26.464-13.888-48.896-22.432-21.952-8.96-39.008-11.232-50.24-8.064-17.024 43.936-18.368 83.424-4.032 118.848-30.496 33.632-46.176 73.536-46.176 120.608 0 33.216 4.032 62.336 12.128 87.456 8.032 25.12 18.368 45.76 30.496 61.44 12.544 15.68 28.224 28.704 47.072 39.04 18.848 10.304 37.216 17.92 54.72 22.816a409.6 409.6 0 0 0 59.648 10.368c-15.712 13.856-25.12 34.048-28.704 60.064a99.744 99.744 0 0 1-26.464 8.512 178.208 178.208 0 0 1-33.184 2.688c-13.024 0-25.568-4.032-38.144-12.544-12.544-8.512-23.296-20.64-32.256-36.32a97.472 97.472 0 0 0-28.256-30.496c-11.232-8.064-21.088-12.576-28.704-13.92l-11.648-1.792c-8.096 0-13.92 0.928-17.056 2.688-3.136 1.792-4.032 4.032-2.688 6.72s3.136 5.408 5.376 8.096 4.928 4.928 7.616 7.168l4.032 2.688c8.544 4.032 17.056 11.232 25.568 21.984 8.544 10.752 14.368 20.64 18.4 29.6l5.824 13.44c4.928 14.816 13.44 26.912 25.568 35.872 12.096 8.992 25.088 14.816 39.008 17.504 13.888 2.688 27.36 4.032 40.352 4.032s23.776-0.448 32.288-2.24l13.472-2.24c0 14.784 0 32.288 0.416 52.032 0 19.744 0.48 30.496 0.48 31.392a22.624 22.624 0 0 1-7.648 17.472c-4.928 4.48-12.992 5.824-23.296 4.032-90.144-30.048-163.68-83.84-220.64-161.888C92.256 697.216 64 609.312 64 512c0-81.152 20.192-156.064 60.096-224.672s94.176-122.88 163.232-163.232C355.936 84.192 430.816 64 512 64s156.064 20.192 224.672 60.096 122.88 94.176 163.232 163.232C939.808 355.488 960 430.848 960 512"
                p-id="2985"
              ></path>
            </svg>
          </button>
        </a>
        <a :href="tgPath" target="_blank">
          <button
            class="
              bg-blue-500
              hover:bg-blue-400
              text-white
              font-normal
              py-1
              px-2
              mx-0.5
              border-b-4 border-blue-700
              hover:border-blue-500
              rounded
              inline-flex
              items-center
            "
          >
            <svg
              class="fill-current w-4 h-4"
              t="1629479671977"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="6606"
            >
              <path
                d="M912.213333 154.026667A85.333333 85.333333 0 0 0 853.333333 128a85.333333 85.333333 0 0 0-33.28 6.826667l-708.266666 306.773333a42.666667 42.666667 0 0 0-26.453334 42.666667V512a42.666667 42.666667 0 0 0 29.44 42.666667L298.666667 616.106667l55.466666 187.306666a75.946667 75.946667 0 0 0 56.32 53.333334 62.72 62.72 0 0 0 15.36 0 73.813333 73.813333 0 0 0 50.773334-20.48l67.84-64 131.413333 103.68a85.333333 85.333333 0 0 0 90.026667 9.386666l14.08-7.253333a88.32 88.32 0 0 0 46.506666-62.72L938.666667 235.093333a90.026667 90.026667 0 0 0-26.453334-81.066666zM763.733333 805.12a25.173333 25.173333 0 0 1-12.8 17.493333l-14.08 7.253334a19.626667 19.626667 0 0 1-8.96 2.133333 19.626667 19.626667 0 0 1-12.373333-4.693333l-160.426667-128a20.906667 20.906667 0 0 0-27.733333 0l-94.72 89.173333a11.093333 11.093333 0 0 1-5.973333 2.133333V640a21.76 21.76 0 0 1 6.826666-15.786667c136.106667-128 217.6-199.68 266.24-240.64a15.786667 15.786667 0 0 0 5.12-11.093333 13.653333 13.653333 0 0 0-4.266666-11.093333 14.933333 14.933333 0 0 0-17.92-4.266667l-322.56 203.52a21.333333 21.333333 0 0 1-18.346667 0L149.333333 494.933333l694.186667-301.226666a16.64 16.64 0 0 1 7.68 0 22.186667 22.186667 0 0 1 16.213333 7.68 26.88 26.88 0 0 1 6.826667 23.466666z"
                p-id="6607"
              ></path>
            </svg>
          </button>
        </a>
        <a :href="insPath" target="_blank">
          <button
            class="
              bg-purple-500
              hover:bg-purple-400
              text-white
              font-normal
              py-1
              px-2
              mx-0.5
              border-b-4 border-purple-700
              hover:border-purple-500
              rounded
              inline-flex
              items-center
            "
          >
            <svg
              class="fill-current w-4 h-4"
              t="1629476800027"
              viewBox="0 0 1068 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4095"
            >
              <path
                d="M533.81632 81.5872c-116.7872 0-131.34336 0.52736-177.19808 2.62144a313.07776 313.07776 0 0 0-104.2432 20.06528 218.12224 218.12224 0 0 0-125.88032 125.88032 311.29088 311.29088 0 0 0-20.06016 104.21248c-2.05824 45.89056-2.62144 60.45184-2.62144 177.19808 0 116.78208 0.5632 131.6096 2.62144 177.46432a313.94816 313.94816 0 0 0 20.06016 104.2432 220.13952 220.13952 0 0 0 125.88032 125.88032 313.22112 313.22112 0 0 0 104.2432 19.80416c45.85472 2.09408 60.45184 2.62144 177.19808 2.62144 116.75136 0 131.6096-0.52736 177.4592-2.62144a314.44992 314.44992 0 0 0 104.24832-19.84 222.1056 222.1056 0 0 0 125.84448-125.84448 314.7008 314.7008 0 0 0 19.83488-104.2432c2.05312-45.85472 2.62144-60.70784 2.62144-177.42336 0-116.7872-0.5632-131.38432-2.62144-177.23392a311.82336 311.82336 0 0 0-19.83488-104.21248 220.1344 220.1344 0 0 0-125.84448-125.88032 313.856 313.856 0 0 0-104.28416-20.06528c-45.85472-2.09408-60.71296-2.62144-177.46432-2.62144h0.04096z m0 77.66528c114.91328 0 128.46592 0.26112 173.79328 2.32448a237.94688 237.94688 0 0 1 79.72352 14.85824 142.22848 142.22848 0 0 1 81.86368 81.60256 241.8944 241.8944 0 0 1 14.60224 79.95392c2.05312 45.3632 2.62144 58.91584 2.62144 173.568 0 114.69312-0.5632 128.4608-2.62144 173.83424a239.9232 239.9232 0 0 1-14.60224 79.72352 133.92896 133.92896 0 0 1-32.30208 49.52576 131.56352 131.56352 0 0 1-49.52576 32.3072 240.2304 240.2304 0 0 1-79.72864 14.59712c-45.3632 2.09408-58.91584 2.62144-173.82912 2.62144-114.91328 0-128.2048-0.52736-173.568-2.62144a242.048 242.048 0 0 1-79.98976-14.59712 130.73408 130.73408 0 0 1-49.25952-32.3072 133.81632 133.81632 0 0 1-32.3072-49.52576 245.11488 245.11488 0 0 1-14.85824-79.72352c-2.09408-45.36832-2.3552-58.91584-2.3552-173.83424 0-114.91328 0.26112-128.2048 2.3552-173.568a246.30784 246.30784 0 0 1 14.85824-79.98976 142.7968 142.7968 0 0 1 81.5616-81.5616 239.80032 239.80032 0 0 1 79.98976-14.85824c45.37344-2.06336 58.92608-2.3296 173.57824-2.3296z m0 131.57376c-121.96864 0.08192-220.77952 99.02592-220.6976 220.99456 0.08704 121.96864 99.02592 220.77952 220.99456 220.6976 121.95328-0.08704 220.75392-99.01056 220.69248-220.96384 0.04096-121.86624-98.71872-220.69248-220.58496-220.73344H533.77024h0.04608z m0 364.0576c-79.1552 0-143.32416-64.16896-143.32416-143.32928 0-79.1552 64.16896-143.32416 143.32416-143.32416s143.32416 64.16896 143.32416 143.32416c0 79.16032-64.16896 143.32928-143.32416 143.32928z m281.18016-372.62848c0 28.49792-23.10144 51.59936-51.59424 51.59936s-51.59424-23.10144-51.59424-51.59936 23.10144-51.59936 51.59424-51.59936 51.59424 23.10144 51.59424 51.59936z"
                p-id="4096"
              ></path>
            </svg>
          </button>
        </a>
        <a :href="neteastPath" target="_blank">
          <button
            class="
              bg-red-500
              hover:bg-red-400
              text-white
              font-normal
              py-1
              px-2
              mx-0.5
              border-b-4 border-red-700
              hover:border-red-500
              rounded
              inline-flex
              items-center
            "
            v-on:click="window.open(neteastPath, '_blank')"
          >
            <svg
              class="fill-current w-4 h-4"
              t="1629474714403"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2123"
            >
              <path
                d="M507.52 248.832c4.992-68.672 73.984-124.16 143.36-120.704a186.688 186.688 0 0 1 110.464 41.6c20.672 15.744 28.16 47.168 14.336 69.312-16 22.4-51.2 21.248-71.68 5.696-19.008-14.464-43.264-27.392-68.032-22.208-21.696 4.928-31.744 28.8-28.288 48.768 3.52 19.968 10.24 39.296 15.552 58.88 39.296 1.664 78.464 11.52 113.024 30.016 57.472 32.32 106.688 80.64 133.76 140.416 25.92 55.424 31.36 118.528 21.12 178.304-14.592 77.568-60.288 148.224-122.368 198.016-70.4 56.384-162.24 83.84-252.608 83.072a386.048 386.048 0 0 1-235.2-81.472c-88.704-68.416-145.728-174.592-152.064-284.992a377.088 377.088 0 0 1 55.168-221.888 401.344 401.344 0 0 1 206.016-167.936 58.176 58.176 0 0 1 45.568 3.008c21.376 10.944 30.336 40.704 17.024 60.8-7.168 12.736-20.352 20.928-34.112 25.536a303.36 303.36 0 0 0-162.752 145.92 288.192 288.192 0 0 0-28.224 173.12 301.184 301.184 0 0 0 117.696 196.672 287.36 287.36 0 0 0 178.176 57.728c73.28-0.192 148.096-25.28 200.96-75.968 38.08-36.8 66.496-85.12 72.704-137.728 8.896-56.768-6.656-117.44-45.696-161.024-27.136-29.568-60.992-55.68-101.312-64.832 9.472 28.352 18.176 56.96 26.432 85.76 11.392 42.496 11.84 89.984-10.24 129.408a163.52 163.52 0 0 1-120.32 83.712 158.656 158.656 0 0 1-133.952-41.472 173.824 173.824 0 0 1-54.208-120.32 203.072 203.072 0 0 1 28.608-122.816c30.336-50.112 83.072-84.736 139.84-100.352-7.168-30.4-20.992-60.16-18.752-92.032z m-48.96 263.488c-10.432 36.288-7.04 81.344 23.296 107.712 28.416 25.28 77.696 14.976 96.448-16.64 11.712-17.728 11.968-40.064 7.68-60.096a2437.312 2437.312 0 0 0-34.752-112.832c-40.704 12.48-80.448 40.064-92.672 81.92z"
                p-id="2124"
              ></path>
            </svg>
          </button>
        </a>
        <a :href="biliPath" target="_blank">
          <button
            class="
              bg-pink-500
              hover:bg-pink-400
              text-white
              font-normal
              py-1
              px-2
              mx-0.5
              border-b-4 border-pink-700
              hover:border-pink-500
              rounded
              inline-flex
              items-center
            "
            v-on:click="window.open(bilitPath, '_blank')"
          >
            <svg
              class="fill-current w-4 h-4"
              t="1629476914786"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5668"
            >
              <path
                d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 1 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.157333 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z"
                p-id="5669"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import AV from 'leancloud-storage';
import moment from 'moment-mini';
const query = new AV.Query('naggings');
const BB = AV.Object.extend('naggings');
const bb = new BB();
export default {
  data() {
    return {
      newbb: '',
      username: '',
      password: '',
      date: '',
      createYear: 2021,
      nowYear: '',
      createDate: '2021-8-19',
      page: 0,
      count: 0,
      contents: [],
      clickCount: 0,
      githubPath: 'https://github.com/saiwenee/Naggings',
      tgPath: 'https://t.me/saiwenee',
      insPath: 'https://www.instagram.com/7eezzz/',
      neteastPath: 'https://music.163.com/#/user/home?id=7235578',
      biliPath: 'https://space.bilibili.com/29105587'
    };
  },
  created() {
    this.nowYear = moment().format('YYYY');
    AV.init({
      appId: 'SmmpeujdjngpjQzUxlKjesJq-MdYXbMMI',
      appKey: 'kksSDbuPjrTXj5o0Jwvqgafw'
    });
  },
  mounted() {
    let that = this;
    that.timer = setInterval(() => {
      that.date = moment().format('YYYY年MM月DD日HH时mm分ss秒');
    }, 1000);
    that.getData(0);
    //计数
    that.getCount()
  },
  beforeDestroy() {
    let that = this;
    if (that.timer) {
      clearInterval(that.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  },
  methods: {
    loadMore() {
      this.getData(++this.page);
    },
    openbb() {
      if (this.clickCount < 7) {
        this.clickCount++;
      }
    },
    saveNagging(username, password, newbb) {
      bb.set('nagging', newbb);
      AV.User.logIn(username, password).then(
        () => {
          console.log('登录成功');
          bb.save().then((bb) => {
            this.clickCount = 0;
            console.log(`bb成功 objectId：${bb.id}`);
            this.getCount()
            this.getData(0)
          });
        },
        (error) => {
          console.log(`登录失败${error}`);
        }
      );
    },
    async getCount(){
      query.count().then((count)=>{
        this.count = count;
        console.log('bb总数获取成功');
      },
      (error) => {
        console.log(`bb总数获取失败${error}`);
      }
    );
    },

    //获取数据
    async getData(page = 0) {
      if(page == 0 ){
        this.contents = []
      }
      query
        .descending('createdAt')
        .skip(page * 20)
        .limit(20)
        .find()
        .then(
          (results) => {
            if (results.length == 0) {
              console.log('之前没 b 过了');
            } else {
              let resC = results;
              // console.log(resC);
              resC.forEach((i) => {
                i.attributes.time = moment(i.createdAt).format(
                  'dddd, MMMM Do YYYY, h:mm:ss a'
                );
                i.attributes.nowTime = moment(i.createdAt).fromNow();
                i.attributes.id = i.id
                // i.attributes.time = i.createdAt
                this.contents.push(i);
                // console.log(this.contents);
              });
              console.log('bb获取成功');
            }
          },
          (error) => {
            console.log(`bb获取失败${error}`);
          }
        );
    }
  }
};
</script>
<style lang="scss" scoped>
@use "sass:math";
@font-face {
  font-family: 'pix'; //重命名字体名
  src: url('https://lc-gluttony.s3.amazonaws.com/Smmpeujdjngp/uxUtV0oDWsMQs4yu5XrSSOoH7RmBMesA/ipix_12px.woff2') format('woff2');
   //引入字体
  font-weight: normal;
  font-style: normal;
}

$primaryColor: #fd5f00;
$secondaryColor: #f7f3e9;
$steps: 25;

.topic {
  position: relative;
  font-family: sans-serif;
  font-size: 7em;
  text-transform: uppercase;
  text-shadow: 6px -6px 0px $primaryColor;
  background: repeating-linear-gradient(
    45deg,
    #005792,
    #005792 1px,
    #fff 2px,
    #fff 3px
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: $secondaryColor;
    color: $primaryColor;
    clip: rect(0, 900px, 0, 0);
    overflow: hidden;
  }

  &::before {
    left: 7px;
    text-shadow: 1px 0 $primaryColor;
    animation: glitch-effect 3s infinite linear alternate-reverse;
  }

  &::after {
    left: 3px;
    text-shadow: -1px 0 $primaryColor;
    animation: topic-effect 2s infinite linear alternate-reverse;
  }
}

@keyframes topic-effect {
  @for $i from 0 through $steps {
    #{percentage($i * math.div(1, $steps))} {
      clip: rect(random(100) + px, 9999px, random(100) + px, 0);
    }
  }
}

.table {
  // width: 50vw;
  height: 30px;
  background-color: #d4e5ff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.table .monitor-wrapper {
  background: #050321;
  width: 98%;
  height: 25px;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.table .monitor-wrapper .monitor {
  width: 100%;
  height: 20px;
  background-color: #344151;
  overflow: hidden;
  white-space: nowrap;
  box-shadow: inset 0px 5px 10px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.table .monitor-wrapper .monitor p {
  font-family: pix;
  font-size: 12px;
  /* line-height: 24px; */
  position: relative;
  display: inline-block;
  animation: move 10s infinite linear;
  color: #fff;
}

@keyframes move {
  from {
    left: 300px;
  }
  to {
    left: -300px;
  }
}
</style>
