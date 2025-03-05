"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3430],{4801:function(t,e){e.Z={name:"CheckoutAddressField",props:{maxChars:{type:Number,default:35}},data(){const{checkout:t}=window.cnvs.strings;return{addressField:null,addressFieldId:"checkout_shipping_address_address1",addressLength:0,translations:{...t}}},computed:{charsRemaining(){const t=this.maxChars-this.addressLength;return t<0?0:t},isContactInfoStep:()=>"contact_information"===Shopify.Checkout.step},watch:{addressField(t){t&&this.isContactInfoStep&&this.addressField.setAttribute("maxlength",this.maxChars)}},mounted(){this.isContactInfoStep&&(this.setAddressField(),this.limitFieldLength())},methods:{limitFieldLength(){this.addressField.value.length>this.maxChars&&(this.addressField.value=this.addressField.value.substr(0,this.maxChars)),this.addressLength=this.addressField.value.length},setAddressField(){this.addressField=document.getElementById(this.addressFieldId),this.addressField.setAttribute("maxlength",this.maxChars),this.addressField.addEventListener("keyup",this.limitFieldLength),this.addressField.addEventListener("change",this.limitFieldLength)}}}},9400:function(t,e,s){s.d(e,{s:function(){return l}});var d=s(1797);const n={key:0,class:"address-field__note"},i=["textContent"],a=(0,d.Uk)(" "),r=["textContent"],h={key:1};function l(t,e,s,l,o,u){return u.isContactInfoStep&&o.addressField?((0,d.wg)(),(0,d.iD)("div",n,[(0,d._)("span",{textContent:(0,d.zw)(u.charsRemaining)},null,8,i),a,(0,d._)("span",{textContent:(0,d.zw)(o.translations.addressMaxCharacterSuffix)},null,8,r)])):((0,d.wg)(),(0,d.iD)("span",h))}},5811:function(t,e,s){s.r(e);var d=s(4021),n=s(5386);const i=(0,s(4407).Z)(n.Z,[["render",d.s]]);e.default=i},5386:function(t,e,s){s.d(e,{Z:function(){return d.Z}});var d=s(4801)},4021:function(t,e,s){s.d(e,{s:function(){return d.s}});var d=s(9400)}}]);
//# sourceMappingURL=component.checkout-address-field.js.map?v=1733162424563