"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1506],{7010:function(e,s,l){l.r(s),l.d(s,{default:function(){return w}});var a=l(1797);const i={class:"gamer-gallery-modal"},r=["js-gamer-gallery-modal"],t=["js-gamer-gallery-modal"];var o=l(3482),n=l(3335),m=l(9122),g=l(2262),p=l(7251),u=l(8518),d={name:"GamerGalleryModal",components:{IconChevronRight:g.Z,IconChevronLeft:p.Z,ResponsiveImage:m.default,Swiper:o.tq,SwiperSlide:o.o5},props:{id:{type:String,default:"",required:!0},slides:{type:Array,default:()=>[]}},setup:()=>({modules:[n.W_,n.o3]}),data(){return{breakpoints:u.Z,swiperSettings:{autoHeight:!1,loop:!0,navigation:{nextEl:`[js-gamer-gallery-modal="next-${this.id}"]`,prevEl:`[js-gamer-gallery-modal="prev-${this.id}"]`},slidesPerView:"auto",threshold:10},thumbsSwiper:null}},mounted(){},methods:{setThumbsSwiper(e){this.thumbsSwiper=e}}},w=(0,l(4407).Z)(d,[["render",function(e,s,l,o,n,m){const g=(0,a.up)("icon-chevron-left"),p=(0,a.up)("responsive-image"),u=(0,a.up)("swiper-slide"),d=(0,a.up)("icon-chevron-right"),w=(0,a.up)("swiper");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(w,{loop:n.swiperSettings.loop,navigation:n.swiperSettings.navigation,modules:o.modules,thumbs:{swiper:n.thumbsSwiper},class:"swiper-container gamer-gallery__top"},{default:(0,a.w5)((()=>[(0,a._)("div",{"js-gamer-gallery-modal":`prev-${l.id}`,class:"swiper-button-prev swiper-button-custom"},[(0,a.Wm)(g)],8,r),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.slides,(e=>((0,a.wg)(),(0,a.j4)(u,{key:e.id,class:"gamer-gallery__cell--top"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{image:{src:e.settings.image},"min-max":"596-596","wrapper-class":"gamer-gallery__image gamer-gallery__image--top","block-class":"gamer-gallery-modal"},null,8,["image"])])),_:2},1024)))),128)),(0,a._)("div",{"js-gamer-gallery-modal":`next-${l.id}`,class:"swiper-button-next swiper-button-custom"},[(0,a.Wm)(d)],8,t)])),_:1},8,["loop","navigation","modules","thumbs"]),(0,a.Wm)(w,{"auto-height":!1,loop:!0,observer:!0,"observe-parents":!0,"space-between":16,"slides-per-view":"auto",threshold:10,"watch-slides-visibility":!0,"slide-to-clicked-slide":!0,breakpoints:{[n.breakpoints.m]:{slidesPerView:l.slides.length<5?l.slides.length:"auto",spaceBetween:16}},class:"swiper-container gamer-gallery__thumbs",onSwiper:m.setThumbsSwiper},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.slides,(e=>((0,a.wg)(),(0,a.j4)(u,{key:e.id,class:"gamer-gallery__cell--thumbnail"},{default:(0,a.w5)((()=>[(0,a.Wm)(p,{image:{src:e.settings.image},"min-max":"85-85","wrapper-class":"gamer-gallery__image gamer-gallery__image--thumbs"},null,8,["image"])])),_:2},1024)))),128))])),_:1},8,["breakpoints","onSwiper"])])}]])}}]);
//# sourceMappingURL=component.gamer-gallery-modal.js.map?v=1733162424563