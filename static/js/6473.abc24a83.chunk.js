"use strict";(self.webpackChunkpiket=self.webpackChunkpiket||[]).push([[6473],{6473:function(e,i,s){s.r(i),s.d(i,{default:function(){return x}});var t=s(885),r=s(3504),a=s(2791),n=s(9562),l=s(7162),c=s(919),o=s(1945),d=s(4018),m=s(1523),u=s(184);function x(){var e=(0,d.Z)(),i=(0,r.lr)(),s=(0,t.Z)(i,1)[0],x=(0,a.useState)("Email verification link sent to your mailbox"),f=(0,t.Z)(x,2),h=f[0];f[1];var v={formUrl:"auth/resendverifyemail",formData:{token:s.get("token")},validationSchema:n.Ry().shape({token:n.Z_().required()}),afterSubmit:function(i){e.flashMsg("Success",i,"success")}},j=(0,m.Z)(v),k=(j.data,j.loading),b=j.errorMsg,g=j.formik;return(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"grid justify-content-center",children:(0,u.jsx)("div",{className:"col-12 md:col-6",children:(0,u.jsxs)("div",{className:"card text-center",children:[(0,u.jsx)(l.q,{className:"bg-green-700 text-green-100",size:"large",icon:"pi pi-check-circle"}),(0,u.jsx)("div",{className:"text-2xl mt-3  font-bold text-green-500",children:h}),(0,u.jsx)("div",{className:"text-500",children:"Please verify your email address by following the link in your mailbox"}),(0,u.jsx)("hr",{}),b&&(0,u.jsx)(o.v,{className:"my-3",severity:"error",text:b}),(0,u.jsx)("form",{onSubmit:g.handleSubmit,children:(0,u.jsx)("div",{className:"text-center",children:(0,u.jsx)(c.z,{label:"Resend Email",type:"submit",icon:"pi pi-envelope",loading:k})})})]})})})})}}}]);
//# sourceMappingURL=6473.abc24a83.chunk.js.map