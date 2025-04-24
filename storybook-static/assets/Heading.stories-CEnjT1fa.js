import{j as z}from"./jsx-runtime-D_zvdyIk.js";const E={1:"text-5xl",2:"text-4xl",3:"text-3xl",4:"text-2xl",5:"text-xl",6:"text-lg"},w=({level:i,children:_,className:j=""})=>{const q=`h${i}`,$=`font-bold ${E[i]} ${j}`;return z.jsx(q,{className:$,children:_})};w.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{level:{required:!0,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const I={title:"Typography/Heading",component:w,tags:["autodocs"],parameters:{docs:{description:{component:"Use `Heading` to render H1 to H6 elements with proper font sizes and weights."}}},argTypes:{level:{control:{type:"select"},options:[1,2,3,4,5,6],description:"Heading level (H1 - H6)"},children:{control:"text",description:"Heading content"}}},e={args:{level:1,children:"This is a Heading H1"}},a={args:{level:2,children:"This is a Heading H2"}},s={args:{level:3,children:"This is a Heading H3"}},r={args:{level:4,children:"This is a Heading H4"}},n={args:{level:5,children:"This is a Heading H5"}},t={args:{level:6,children:"This is a Heading H6"}};var o,l,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    level: 1,
    children: "This is a Heading H1"
  }
}`,...(c=(l=e.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    level: 2,
    children: "This is a Heading H2"
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var H,g,u;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    level: 3,
    children: "This is a Heading H3"
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var h,v,T;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    level: 4,
    children: "This is a Heading H4"
  }
}`,...(T=(v=r.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var x,f,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    level: 5,
    children: "This is a Heading H5"
  }
}`,...(y=(f=n.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var S,N,R;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    level: 6,
    children: "This is a Heading H6"
  }
}`,...(R=(N=t.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const M=["H1","H2","H3","H4","H5","H6"];export{e as H1,a as H2,s as H3,r as H4,n as H5,t as H6,M as __namedExportsOrder,I as default};
